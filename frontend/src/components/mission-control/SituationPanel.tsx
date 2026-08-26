import React from 'react';
import { AlertTriangle, Users, Map as MapIcon, Route, Building2 } from 'lucide-react';
import { useReplayEngine } from '../../hooks/useReplayEngine';

export const SituationPanel: React.FC = () => {
  const { currentState } = useReplayEngine();
  const currentIncident = currentState.incident;

  return (
    <div className="bg-slate-900 border-r border-slate-700 h-full flex flex-col w-full flex-shrink-0 transition-colors duration-500 min-h-0">
      <div className="p-3 border-b border-slate-700 bg-slate-800/50 flex-shrink-0">
        <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Situation Overview</h2>
        
        <div className="space-y-2">
          <div>
            <div className="text-[10px] text-slate-500 uppercase mb-1">Hazard Type</div>
            <div className="flex items-center space-x-2">
              <AlertTriangle className="text-blue-400" size={16} />
              <span className="text-slate-200 font-semibold">{currentIncident.type}</span>
            </div>
          </div>
          
          <div>
            <div className="text-[10px] text-slate-500 uppercase mb-1">Severity</div>
            <div className="flex items-center space-x-2">
              <span className={`w-2 h-2 rounded-full ${
                currentIncident.severity.toUpperCase() === 'LOW' ? 'bg-green-500' :
                currentIncident.severity.toUpperCase() === 'MODERATE' || currentIncident.severity.toUpperCase() === 'MEDIUM' ? 'bg-yellow-500' :
                'bg-red-500'
              } transition-colors duration-500`}></span>
              <span className={`font-bold uppercase transition-colors duration-500 ${
                currentIncident.severity.toUpperCase() === 'LOW' ? 'text-green-400' :
                currentIncident.severity.toUpperCase() === 'MODERATE' || currentIncident.severity.toUpperCase() === 'MEDIUM' ? 'text-yellow-400' :
                'text-red-400'
              }`}>{currentIncident.severity}</span>
            </div>
          </div>
          
          <div>
            <div className="text-[10px] text-slate-500 uppercase mb-1">Model Confidence</div>
            <div className="w-full bg-slate-700 h-1.5 rounded-full mt-2 mb-1 overflow-hidden">
              <div 
                className="bg-blue-500 h-1.5 rounded-full transition-all duration-1000 ease-in-out" 
                style={{ width: `${currentIncident.confidence}%` }}
              ></div>
            </div>
            <div className="text-right text-xs text-blue-400 font-mono transition-all duration-500">{currentIncident.confidence}%</div>
          </div>
        </div>
      </div>

      <div className="p-3 flex-grow overflow-y-auto min-h-0 scrollbar-thin">
        <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Impact Assessment</h3>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between bg-slate-800 p-2.5 rounded border border-slate-700 transition-colors duration-500">
            <div className="flex items-center space-x-3 text-slate-300">
              <Users size={14} className="text-orange-400" />
              <span className="text-xs">Affected Population</span>
            </div>
            <span className="font-mono text-sm text-slate-100 transition-all duration-500">{currentIncident.affectedPopulation.toLocaleString()}</span>
          </div>

          <div className="flex items-center justify-between bg-slate-800 p-2.5 rounded border border-slate-700 transition-colors duration-500">
            <div className="flex items-center space-x-3 text-slate-300">
              <MapIcon size={14} className="text-emerald-400" />
              <span className="text-xs">Affected Area</span>
            </div>
            <span className="font-mono text-sm text-slate-100 transition-all duration-500">{currentIncident.affectedArea.toFixed(1)} km²</span>
          </div>

          <div className="flex items-center justify-between bg-slate-800 p-2.5 rounded border border-slate-700 transition-colors duration-500">
            <div className="flex items-center space-x-3 text-slate-300">
              <Route size={14} className="text-slate-400" />
              <span className="text-xs">Roads Affected</span>
            </div>
            <span className="font-mono text-sm text-slate-100 transition-all duration-500">{currentIncident.roadsAffected}</span>
          </div>

          <div className="flex items-center justify-between bg-slate-800 p-2.5 rounded border border-slate-700 transition-colors duration-500">
            <div className="flex items-center space-x-3 text-slate-300">
              <Building2 size={14} className="text-red-400" />
              <span className="text-xs">Critical Facilities</span>
            </div>
            <span className="font-mono text-sm text-slate-100 transition-all duration-500">{currentIncident.criticalFacilitiesAffected}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
