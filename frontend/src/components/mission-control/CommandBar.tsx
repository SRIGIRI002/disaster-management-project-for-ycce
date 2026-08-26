import React from 'react';
import { Activity, ShieldAlert, Wifi } from 'lucide-react';
import { useReplayEngine } from '../../hooks/useReplayEngine';

export const CommandBar: React.FC = () => {
  const { currentState, selectedTime, selectedHazard, setHazard } = useReplayEngine();
  const currentIncident = currentState.incident;

  return (
    <header className="bg-slate-900 border-b border-slate-700 px-6 h-full flex items-center justify-between text-slate-200 shadow-md z-10">
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <ShieldAlert className="text-blue-500" size={24} />
          <div>
            <h1 className="text-lg font-bold tracking-wider uppercase leading-tight">AEGIS AI</h1>
            <p className="text-[10px] text-slate-400 uppercase tracking-widest">Multi-Hazard Emergency Operations Center</p>
          </div>
        </div>
        
        <div className="h-8 w-px bg-slate-700"></div>
        
        <div className="flex items-center space-x-2">
          <span className="text-xs text-slate-400 uppercase">Current Hazard:</span>
          <select 
            value={selectedHazard}
            onChange={(e) => setHazard(e.target.value as any)}
            className="text-sm font-semibold text-slate-100 bg-slate-800 px-2 py-1 rounded border border-slate-700 transition-colors duration-500 focus:outline-none focus:border-slate-500 cursor-pointer"
          >
            <option value="Flood">Flood</option>
            <option value="Wildfire">Wildfire</option>
            <option value="Cyclone">Cyclone</option>
          </select>
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2 text-xs">
          <span className="text-slate-400">Simulation Status:</span>
          <span className="flex items-center text-green-400 font-mono">
            <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
            ACTIVE
          </span>
        </div>
        
        <div className="flex items-center space-x-2 text-xs">
          <span className="text-slate-400">Time:</span>
          <span className="font-mono bg-slate-950 px-2 py-1 rounded text-slate-300 transition-colors duration-500">
            {selectedTime}:00 Z
          </span>
        </div>

        <div className="flex items-center space-x-2 text-xs">
          <span className="text-slate-400">Severity:</span>
          <span className={`font-bold uppercase flex items-center transition-colors duration-500 ${
            currentIncident.severity.toUpperCase() === 'LOW' ? 'text-green-400' :
            currentIncident.severity.toUpperCase() === 'MODERATE' || currentIncident.severity.toUpperCase() === 'MEDIUM' ? 'text-yellow-400' :
            'text-red-500'
          }`}>
            <Activity size={14} className="mr-1" />
            {currentIncident.severity}
          </span>
        </div>

        <div className="h-6 w-px bg-slate-700"></div>
        
        <Wifi size={18} className="text-slate-500" />
      </div>
    </header>
  );
};
