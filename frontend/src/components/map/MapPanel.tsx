import React, { useEffect, useRef, useState } from 'react';
import * as maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useReplayEngine } from '../../hooks/useReplayEngine';
import { Layers, Crosshair, Plus, Minus, Activity } from 'lucide-react';

const LOCATIONS = {
  Flood: { center: [76.2673, 9.9312] as [number, number], zoom: 11, baseRadius: 4 },
  Wildfire: { center: [76.6276, 11.6663] as [number, number], zoom: 11, baseRadius: 6 },
  Cyclone: { center: [80.2707, 13.0827] as [number, number], zoom: 10, baseRadius: 15 }
};

// Procedural Geometry Generators
const createGeoJSONCircle = (center: [number, number], radiusInKm: number, points = 64) => {
  const coords = { latitude: center[1], longitude: center[0] };
  const ret = [];
  const distanceX = radiusInKm / (111.320 * Math.cos(coords.latitude * Math.PI / 180));
  const distanceY = radiusInKm / 110.574;
  for (let i = 0; i < points; i++) {
    const theta = (i / points) * (2 * Math.PI);
    const x = distanceX * Math.cos(theta);
    const y = distanceY * Math.sin(theta);
    ret.push([coords.longitude + x, coords.latitude + y]);
  }
  ret.push(ret[0]);
  return {
    type: "FeatureCollection" as const,
    features: [{ type: "Feature" as const, geometry: { type: "Polygon" as const, coordinates: [ret] }, properties: {} }]
  };
};

const createSmokeGeoJSON = (center: [number, number], radiusInKm: number) => {
  // Drift smoke Northeast
  const smokeCenter: [number, number] = [center[0] + (radiusInKm * 0.005), center[1] + (radiusInKm * 0.005)];
  return createGeoJSONCircle(smokeCenter, radiusInKm * 1.8);
};

const createPathGeoJSON = (center: [number, number], offsetStart: [number, number], offsetEnd: [number, number]) => {
  return {
    type: "FeatureCollection" as const,
    features: [{
      type: "Feature" as const,
      geometry: { 
        type: "LineString" as const, 
        coordinates: [
          [center[0] + offsetStart[0], center[1] + offsetStart[1]],
          [center[0] + offsetEnd[0], center[1] + offsetEnd[1]]
        ] 
      },
      properties: {}
    }]
  };
};

export const MapPanel: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);
  const markersRef = useRef<maplibregl.Marker[]>([]);
  
  const { currentState, selectedHazard } = useReplayEngine();
  const mapState = currentState.mapState;
  
  const [showHeatmap, setShowHeatmap] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);

  // 1. Initialize Map & Layers
  useEffect(() => {
    if (map.current || !mapContainer.current) return;
    
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: {
        version: 8,
        sources: {
          osm: {
            type: 'raster',
            tiles: ['https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'],
            tileSize: 256,
            attribution: '&copy; OpenStreetMap Contributors',
          }
        },
        layers: [{ id: 'osm-layer', type: 'raster', source: 'osm' }]
      },
      center: LOCATIONS.Flood.center,
      zoom: LOCATIONS.Flood.zoom,
      dragRotate: false,
      pitchWithRotate: false
    });

    map.current.on('load', () => {
      if (!map.current) return;

      // Primary Hazard Layer (Flood water, Fire Core, Cyclone Radius)
      map.current.addSource('hazard-source', { type: 'geojson', data: createGeoJSONCircle(LOCATIONS.Flood.center, LOCATIONS.Flood.baseRadius) });
      map.current.addLayer({
        id: 'hazard-layer', type: 'fill', source: 'hazard-source',
        paint: { 'fill-color': '#3b82f6', 'fill-opacity': 0.4, 'fill-outline-color': '#2563eb' }
      });

      // Secondary Hazard Layer (Smoke Plume, Storm Surge)
      map.current.addSource('hazard-secondary-source', { type: 'geojson', data: createGeoJSONCircle(LOCATIONS.Flood.center, 0) });
      map.current.addLayer({
        id: 'hazard-secondary-layer', type: 'fill', source: 'hazard-secondary-source',
        paint: { 'fill-color': '#64748b', 'fill-opacity': 0, 'fill-outline-color': 'transparent' }
      });

      // Path/Line Layer (River Overflow, Storm Track, Flooded Roads)
      map.current.addSource('hazard-path-source', { type: 'geojson', data: createPathGeoJSON(LOCATIONS.Flood.center, [0,0], [0,0]) });
      map.current.addLayer({
        id: 'hazard-path-layer', type: 'line', source: 'hazard-path-source',
        paint: { 'line-color': '#06b6d4', 'line-width': 0, 'line-dasharray': [1, 0] }
      });

      // Population Heatmap Layer
      map.current.addSource('population-source', { type: 'geojson', data: { type: 'FeatureCollection', features: [] } });
      map.current.addLayer({
        id: 'population-heatmap', type: 'heatmap', source: 'population-source',
        paint: {
          'heatmap-weight': 1, 'heatmap-intensity': 1, 'heatmap-radius': 30, 'heatmap-opacity': 0,
          'heatmap-color': [
            'interpolate', ['linear'], ['heatmap-density'],
            0, 'rgba(0,0,0,0)', 0.2, 'rgba(255,255,0,0.4)', 1, 'rgba(255,0,0,0.6)'
          ]
        }
      });

      setMapLoaded(true);
    });

    return () => {
      map.current?.remove();
      map.current = null;
    };
  }, []);

  // 2. Handle Scenario Switch (FlyTo, Colors, Markers)
  useEffect(() => {
    if (!mapLoaded || !map.current) return;
    
    const loc = LOCATIONS[selectedHazard];
    map.current.flyTo({ center: loc.center, zoom: loc.zoom, duration: 1500, essential: true });

    // Update layer styles for specific hazards
    if (selectedHazard === 'Flood') {
      map.current.setPaintProperty('hazard-layer', 'fill-color', '#3b82f6');
      map.current.setPaintProperty('hazard-layer', 'fill-outline-color', '#2563eb');
      map.current.setPaintProperty('hazard-secondary-layer', 'fill-opacity', 0); // Hide secondary
      map.current.setPaintProperty('hazard-path-layer', 'line-color', '#06b6d4'); // Cyan river
      map.current.setPaintProperty('hazard-path-layer', 'line-dasharray', [1, 0]);
    } else if (selectedHazard === 'Wildfire') {
      map.current.setPaintProperty('hazard-layer', 'fill-color', '#ea580c');
      map.current.setPaintProperty('hazard-layer', 'fill-outline-color', '#c2410c');
      map.current.setPaintProperty('hazard-secondary-layer', 'fill-color', '#475569'); // Smoke gray
      map.current.setPaintProperty('hazard-secondary-layer', 'fill-opacity', 0.5);
      map.current.setPaintProperty('hazard-path-layer', 'line-width', 0); // Hide paths
    } else if (selectedHazard === 'Cyclone') {
      map.current.setPaintProperty('hazard-layer', 'fill-color', '#9333ea');
      map.current.setPaintProperty('hazard-layer', 'fill-outline-color', '#7e22ce');
      map.current.setPaintProperty('hazard-secondary-layer', 'fill-color', '#1e3a8a'); // Surge deep blue
      map.current.setPaintProperty('hazard-secondary-layer', 'fill-opacity', 0.4);
      map.current.setPaintProperty('hazard-path-layer', 'line-color', '#f87171'); // Storm path red dashed
      map.current.setPaintProperty('hazard-path-layer', 'line-dasharray', [4, 4]);
    }

    // Refresh Markers
    markersRef.current.forEach(m => m.remove());
    markersRef.current = [];

    const createMarker = (type: 'Hospital' | 'Shelter' | 'RoadClosed', offset: [number, number], data: any) => {
      const el = document.createElement('div');
      el.className = `flex items-center justify-center w-7 h-7 rounded-full shadow-[0_0_15px_rgba(0,0,0,0.8)] border-2 border-slate-900 transition-transform hover:scale-110 z-20 ${
        type === 'Hospital' ? 'bg-red-500 shadow-red-500/50' : 
        type === 'Shelter' ? 'bg-emerald-500 shadow-emerald-500/50' : 'bg-slate-800 shadow-slate-900/50'
      }`;
      
      el.innerHTML = type === 'RoadClosed' 
        ? '<div class="w-3 h-1 bg-white"></div>' 
        : type === 'Hospital' 
        ? '<span class="text-white text-xs font-black tracking-tighter">H</span>' 
        : '<span class="text-white text-xs font-black tracking-tighter">S</span>';
      
      const popupDiv = document.createElement('div');
      popupDiv.innerHTML = `
        <div class="p-3 bg-slate-900/95 text-slate-200 rounded min-w-[180px] border border-slate-700 font-sans shadow-2xl backdrop-blur-md">
          <h4 class="text-xs font-bold uppercase tracking-widest ${type === 'Hospital' ? 'text-red-400' : type === 'Shelter' ? 'text-emerald-400' : 'text-slate-400'} mb-2 border-b border-slate-700 pb-2">${data.title}</h4>
          ${data.stats.map((s: any) => `<div class="flex justify-between text-[11px] mb-1.5"><span class="text-slate-400 uppercase tracking-wider text-[9px] mt-0.5">${s.label}</span><span class="font-mono font-bold text-slate-100">${s.val}</span></div>`).join('')}
        </div>
      `;
      const popup = new maplibregl.Popup({ offset: 15, closeButton: false, className: 'dark-popup' }).setDOMContent(popupDiv);
      
      const m = new maplibregl.Marker({ element: el })
        .setLngLat([loc.center[0] + offset[0], loc.center[1] + offset[1]])
        .setPopup(popup)
        .addTo(map.current!);
      
      markersRef.current.push(m);
    };

    createMarker('Hospital', [0.015, 0.020], { title: 'General Hospital', stats: [{ label: 'Capacity', val: '85%' }, { label: 'Power', val: 'Generator' }] });
    createMarker('Hospital', [-0.025, 0.010], { title: 'Coastal Medical', stats: [{ label: 'Capacity', val: '100% (CRITICAL)' }, { label: 'Status', val: 'Evacuating' }] });
    createMarker('Shelter', [-0.020, -0.015], { title: 'Evac Shelter Alpha', stats: [{ label: 'Occupancy', val: '450/500' }, { label: 'Supplies', val: 'Moderate' }] });
    createMarker('RoadClosed', [0.008, -0.025], { title: 'Highway 7 Closure', stats: [{ label: 'Reason', val: selectedHazard }, { label: 'Clearance', val: 'TBD' }] });

    // Populate Heatmap
    const heatmapPoints: any[] = [];
    for(let i=0; i<400; i++) {
      heatmapPoints.push({
        type: 'Feature',
        geometry: { type: 'Point', coordinates: [loc.center[0] + (Math.random() - 0.5) * 0.15, loc.center[1] + (Math.random() - 0.5) * 0.15] },
        properties: {}
      });
    }
    const popSource = map.current.getSource('population-source') as maplibregl.GeoJSONSource;
    if (popSource) popSource.setData({ type: 'FeatureCollection', features: heatmapPoints });

  }, [selectedHazard, mapLoaded]);

  // 3. Update Geometry Scale (Animation via Replay/Forecast Hover)
  useEffect(() => {
    if (!mapLoaded || !map.current) return;
    
    let currentScale = 1;
    if (selectedHazard === 'Flood') currentScale = mapState.floodScale || 1;
    else if (selectedHazard === 'Wildfire') currentScale = mapState.fireScale || 1;
    else if (selectedHazard === 'Cyclone') currentScale = mapState.cycloneScale || 1;

    const loc = LOCATIONS[selectedHazard];
    const newRadius = loc.baseRadius * currentScale;

    // Primary
    const primarySource = map.current.getSource('hazard-source') as maplibregl.GeoJSONSource;
    if (primarySource) primarySource.setData(createGeoJSONCircle(loc.center, newRadius));

    // Secondary & Path
    const secSource = map.current.getSource('hazard-secondary-source') as maplibregl.GeoJSONSource;
    const pathSource = map.current.getSource('hazard-path-source') as maplibregl.GeoJSONSource;

    if (selectedHazard === 'Flood') {
      map.current.setPaintProperty('hazard-path-layer', 'line-width', Math.min(8, 3 * currentScale)); // Expand river
      if (pathSource) pathSource.setData(createPathGeoJSON(loc.center, [-0.08, 0.08], [0.08, -0.08]));
    } else if (selectedHazard === 'Wildfire') {
      if (secSource) secSource.setData(createSmokeGeoJSON(loc.center, newRadius));
    } else if (selectedHazard === 'Cyclone') {
      if (secSource) secSource.setData(createGeoJSONCircle([loc.center[0] + 0.04, loc.center[1] - 0.02], newRadius * 0.4)); // Coastal surge
      map.current.setPaintProperty('hazard-path-layer', 'line-width', 4);
      if (pathSource) pathSource.setData(createPathGeoJSON(loc.center, [0.3, -0.3], [0.02, -0.02])); // Storm track
    }

  }, [currentState.mapState, selectedHazard, mapLoaded]);

  // 4. Heatmap Toggle
  useEffect(() => {
    if (!mapLoaded || !map.current) return;
    map.current.setPaintProperty('population-heatmap', 'heatmap-opacity', showHeatmap ? 0.7 : 0);
  }, [showHeatmap, mapLoaded]);

  const zoomIn = () => map.current?.zoomIn();
  const zoomOut = () => map.current?.zoomOut();
  const resetCamera = () => map.current?.flyTo({ center: LOCATIONS[selectedHazard].center, zoom: LOCATIONS[selectedHazard].zoom });

  const LegendItem = ({ color, border, label, isLine, isDashed }: { color: string, border: string, label: string, isLine?: boolean, isDashed?: boolean }) => (
    <div className="flex items-center space-x-3">
      {isLine ? (
        <div className="w-4 h-0 border-t-2" style={{ borderColor: color, borderStyle: isDashed ? 'dashed' : 'solid' }}></div>
      ) : (
        <div className="w-3 h-3 rounded-sm border opacity-70" style={{ backgroundColor: color, borderColor: border }}></div>
      )}
      <span className="font-mono text-[11px] text-slate-300">{label}</span>
    </div>
  );

  return (
    <div className="relative flex-grow h-full bg-slate-950 overflow-hidden isolate">
      {/* Dark Tactical Filter on OSM Canvas */}
      <div 
        ref={mapContainer} 
        className="absolute inset-0 w-full h-full"
        style={{ filter: 'invert(100%) hue-rotate(180deg) brightness(85%) contrast(120%) grayscale(15%)' }}
      ></div>

      <style>{`
        .dark-popup .maplibregl-popup-content { background: transparent !important; padding: 0 !important; box-shadow: none !important; }
        .dark-popup .maplibregl-popup-tip { border-top-color: #0f172a !important; opacity: 0.95; }
      `}</style>

      {/* Map Controls */}
      <div className="absolute top-4 right-4 flex flex-col space-y-2 z-10">
        <button onClick={zoomIn} className="bg-slate-900/90 border border-slate-700/50 p-2.5 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors shadow-lg backdrop-blur-sm"><Plus size={16} /></button>
        <button onClick={zoomOut} className="bg-slate-900/90 border border-slate-700/50 p-2.5 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors shadow-lg backdrop-blur-sm"><Minus size={16} /></button>
        <button onClick={resetCamera} className="bg-slate-900/90 border border-slate-700/50 p-2.5 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors shadow-lg backdrop-blur-sm"><Crosshair size={16} /></button>
        <div className="w-full h-px bg-slate-700/50 my-1"></div>
        <button 
          onClick={() => setShowHeatmap(!showHeatmap)} 
          className={`border p-2.5 rounded transition-colors shadow-lg backdrop-blur-sm ${showHeatmap ? 'bg-indigo-600 border-indigo-500 text-white' : 'bg-slate-900/90 border-slate-700/50 text-slate-400 hover:bg-slate-800'}`}
          title="Toggle Population Heatmap"
        ><Layers size={16} /></button>
      </div>
      
      {/* Dynamic Tactical Legend */}
      <div className="absolute bottom-6 left-6 bg-slate-900/95 border border-slate-700/50 p-5 rounded-xl shadow-2xl backdrop-blur-md z-10 min-w-[220px]">
        <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center space-x-2 border-b border-slate-800 pb-2">
          <Activity size={14} className="text-indigo-400" />
          <span>Operational Legend</span>
        </h4>
        <div className="space-y-3">
          
          {selectedHazard === 'Flood' && (
            <>
              <LegendItem color="#3b82f6" border="#2563eb" label="Flood Water Extent" />
              <LegendItem isLine color="#06b6d4" border="transparent" label="River Overflow Path" />
            </>
          )}
          {selectedHazard === 'Wildfire' && (
            <>
              <LegendItem color="#ea580c" border="#c2410c" label="Active Fire Boundary" />
              <LegendItem color="#475569" border="transparent" label="Projected Smoke Plume" />
            </>
          )}
          {selectedHazard === 'Cyclone' && (
            <>
              <LegendItem color="#9333ea" border="#7e22ce" label="Wind Impact Radius" />
              <LegendItem color="#1e3a8a" border="transparent" label="Coastal Storm Surge" />
              <LegendItem isLine isDashed color="#f87171" border="transparent" label="Projected Storm Path" />
            </>
          )}

          <div className="w-full h-px bg-slate-800 my-2"></div>
          
          <div className="flex items-center space-x-3">
            <div className="w-3.5 h-3.5 rounded-full bg-red-500 border border-red-700 flex items-center justify-center"><span className="text-[7px] font-black text-white tracking-tighter">H</span></div>
            <span className="font-mono text-[11px] text-slate-300">Hospital Facility</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 border border-emerald-700 flex items-center justify-center"><span className="text-[7px] font-black text-white tracking-tighter">S</span></div>
            <span className="font-mono text-[11px] text-slate-300">Evac Shelter</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-3.5 h-3.5 rounded-full bg-slate-800 border border-slate-950 flex items-center justify-center"><div className="w-2 h-0.5 bg-white"></div></div>
            <span className="font-mono text-[11px] text-slate-300">Road Closure</span>
          </div>
        </div>
      </div>
    </div>
  );
};
