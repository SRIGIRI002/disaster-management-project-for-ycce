import React, { useState } from 'react';
import { useReplayEngine } from '../../hooks/useReplayEngine';
import { TrendingDown, TrendingUp, AlertTriangle, ChevronDown, ChevronRight } from 'lucide-react';

export const DecisionTwin: React.FC = () => {
  const { currentState } = useReplayEngine();
  const scenarios = currentState.scenarios;
  
  // Track which scenario is expanded (by ID)
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="flex flex-col space-y-2 h-full">
      <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1 flex-shrink-0">
        Future Simulation
      </h3>
      
      {/* SCENARIOS LIST */}
      <div className="flex-shrink-0 space-y-1.5 overflow-y-auto pr-1 scrollbar-thin">
        {scenarios.map((scenario) => {
          let riskColor = 'text-slate-400';
          let borderColor = 'border-slate-700';
          let bgIcon = 'bg-slate-800';
          let Icon = TrendingUp;

          if (scenario.risk === 'Moderate') {
            riskColor = 'text-yellow-400';
            borderColor = 'border-yellow-500/30';
            bgIcon = 'bg-yellow-500/10';
            Icon = TrendingDown;
          } else if (scenario.risk === 'High') {
            riskColor = 'text-orange-400';
            borderColor = 'border-orange-500/40';
            bgIcon = 'bg-orange-500/10';
            Icon = TrendingUp;
          } else if (scenario.risk === 'Critical') {
            riskColor = 'text-red-500';
            borderColor = 'border-red-500/50';
            bgIcon = 'bg-red-500/10';
            Icon = AlertTriangle;
          }

          const isExpanded = expandedId === scenario.id;

          return (
            <div key={scenario.id} className={`bg-slate-800/80 border ${borderColor} rounded transition-all duration-300`}>
              {/* HEADER (Clickable) */}
              <div 
                className="p-2 flex justify-between items-center cursor-pointer hover:bg-slate-800"
                onClick={() => toggleExpand(scenario.id)}
              >
                <div className="flex items-center">
                  {isExpanded ? (
                    <ChevronDown size={14} className="text-slate-400 mr-1" />
                  ) : (
                    <ChevronRight size={14} className="text-slate-400 mr-1" />
                  )}
                  <span className={`text-[10px] font-bold ${riskColor} uppercase tracking-wider flex items-center`}>
                    <div className={`p-0.5 rounded mr-1.5 ${bgIcon}`}>
                      <Icon size={10} />
                    </div>
                    {scenario.type}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-300">{scenario.probability}% Prob</span>
              </div>
              
              {/* EXPANDED CONTENT */}
              {isExpanded && (
                <div className="px-2 pb-2 border-t border-slate-700/50 pt-2 animate-in fade-in slide-in-from-top-1 duration-200">
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-[9px]">
                    <div className="flex justify-between">
                      <span className="text-slate-500 uppercase">Population</span>
                      <span className="text-slate-200 font-mono">{scenario.population.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 uppercase">Roads Closed</span>
                      <span className="text-slate-200 font-mono">{scenario.roadsClosed}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 uppercase">Hospitals</span>
                      <span className="text-slate-200 font-mono">{scenario.hospitals}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 uppercase">Shelters Req</span>
                      <span className="text-slate-200 font-mono">{scenario.sheltersNeeded}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 uppercase">Recovery</span>
                      <span className="text-slate-200 font-mono">{scenario.recoveryTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 uppercase">Confidence</span>
                      <span className="text-emerald-400 font-mono font-bold">{scenario.confidence}%</span>
                    </div>
                  </div>
                  
                  <div className="mt-2 text-[9px] text-slate-400">
                    <span className="text-slate-500 uppercase mr-1">Conditions:</span>
                    {scenario.conditions.join(', ')}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* COMPARE FUTURES TABLE */}
      <div className="flex-1 min-h-0 flex flex-col pt-2 border-t border-slate-700/50">
        <h4 className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Compare Futures</h4>
        <div className="flex-1 overflow-x-auto overflow-y-auto scrollbar-thin">
          <table className="w-full text-left border-collapse text-[9px]">
            <thead>
              <tr className="border-b border-slate-700 text-slate-500 uppercase tracking-wider">
                <th className="pb-1 font-medium w-1/4">Metric</th>
                <th className="pb-1 font-medium text-blue-400">Curr</th>
                {scenarios.map(s => (
                  <th key={s.id} className={`pb-1 font-medium ${s.risk === 'Moderate' ? 'text-yellow-400' : s.risk === 'High' ? 'text-orange-400' : s.risk === 'Critical' ? 'text-red-500' : 'text-slate-300'}`}>
                    {s.type.split(' ')[0]}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-slate-300 font-mono">
              <tr className="border-b border-slate-800/50">
                <td className="py-1 text-slate-500 font-sans uppercase">Pop</td>
                <td className="py-1 text-blue-300">{currentState.incident.affectedPopulation > 999 ? (currentState.incident.affectedPopulation/1000).toFixed(1)+'k' : currentState.incident.affectedPopulation}</td>
                {scenarios.map(s => <td key={s.id} className="py-1">{s.population > 999 ? (s.population/1000).toFixed(1)+'k' : s.population}</td>)}
              </tr>
              <tr className="border-b border-slate-800/50">
                <td className="py-1 text-slate-500 font-sans uppercase">Roads</td>
                <td className="py-1 text-blue-300">{currentState.incident.roadsAffected}</td>
                {scenarios.map(s => <td key={s.id} className="py-1">{s.roadsClosed}</td>)}
              </tr>
              <tr className="border-b border-slate-800/50">
                <td className="py-1 text-slate-500 font-sans uppercase">Hosp</td>
                <td className="py-1 text-blue-300">{currentState.incident.criticalFacilitiesAffected}</td>
                {scenarios.map(s => <td key={s.id} className="py-1">{s.hospitals}</td>)}
              </tr>
              <tr className="border-b border-slate-800/50">
                <td className="py-1 text-slate-500 font-sans uppercase">Shelters</td>
                <td className="py-1 text-blue-300">-</td>
                {scenarios.map(s => <td key={s.id} className="py-1">{s.sheltersNeeded}</td>)}
              </tr>
              <tr className="border-b border-slate-800/50">
                <td className="py-1 text-slate-500 font-sans uppercase">Recov</td>
                <td className="py-1 text-blue-300">-</td>
                {scenarios.map(s => <td key={s.id} className="py-1">{s.recoveryTime}</td>)}
              </tr>
              <tr>
                <td className="py-1 text-slate-500 font-sans uppercase">Conf</td>
                <td className="py-1 text-blue-400 font-bold">{currentState.incident.confidence}%</td>
                {scenarios.map(s => <td key={s.id} className="py-1 text-emerald-400">{s.confidence}%</td>)}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
