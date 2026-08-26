import React, { useEffect, useState } from 'react';
import { useReplayEngine } from '../../hooks/useReplayEngine';
import { X, Activity, Cpu, Network } from 'lucide-react';

const getLoadingSteps = (hazard: string) => {
  if (hazard === 'Wildfire') {
    return [
      { agent: 'Satellite Intelligence', action: 'Thermal anomalies detected. [Verified]', delay: 600, time: '09:30:12' },
      { agent: 'Weather Intelligence', action: 'Wind speed exceeding 45km/h. [Verified]', delay: 600, time: '09:30:14' },
      { agent: 'Infrastructure Analyst', action: 'Power grid vulnerability identified.', delay: 600, time: '09:30:16' },
      { agent: 'Population Model', action: 'Evacuation corridors mapped.', delay: 600, time: '09:30:18' },
      { agent: 'Logistics Planner', action: 'Fire crew deployment optimized.', delay: 600, time: '09:30:20' },
      { agent: 'Monte Carlo Engine', action: 'Running 10,000 futures...', delay: 1000, time: '09:30:21' },
    ];
  } else if (hazard === 'Cyclone') {
    return [
      { agent: 'Satellite Intelligence', action: 'Storm Eye shifted west. [Verified]', delay: 600, time: '09:30:12' },
      { agent: 'Weather Intelligence', action: 'Category 4 intensification. [Verified]', delay: 600, time: '09:30:14' },
      { agent: 'Infrastructure Analyst', action: 'Coastal structures at risk.', delay: 600, time: '09:30:16' },
      { agent: 'Population Model', action: 'Storm surge zone populations mapped.', delay: 600, time: '09:30:18' },
      { agent: 'Logistics Planner', action: 'Shelter capacity evaluated.', delay: 600, time: '09:30:20' },
      { agent: 'Monte Carlo Engine', action: 'Running 10,000 futures...', delay: 1000, time: '09:30:21' },
    ];
  }
  return [
    { agent: 'Satellite Intelligence', action: 'Flood footprint expanding east. [Verified]', delay: 600, time: '09:30:12' },
    { agent: 'Weather Intelligence', action: 'Heavy rainfall expected for 40m. [Verified]', delay: 600, time: '09:30:14' },
    { agent: 'Infrastructure Analyst', action: 'Eastern bridge at risk threshold.', delay: 600, time: '09:30:16' },
    { agent: 'Population Model', action: 'Zone A evacuation paths verified.', delay: 600, time: '09:30:18' },
    { agent: 'Logistics Planner', action: 'Boat deployment optimized.', delay: 600, time: '09:30:20' },
    { agent: 'Monte Carlo Engine', action: 'Running 10,000 futures...', delay: 1000, time: '09:30:21' },
  ];
};

export const AIForecastOverlay: React.FC = () => {
  const { forecastStage, setForecastStage, closeForecast, currentState, selectFuture, selectedFutureId, selectedHazard, selectedTime } = useReplayEngine();
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const steps = getLoadingSteps(selectedHazard);

  useEffect(() => {
    if (forecastStage === 'loading') {
      setCurrentStepIndex(0);
      let totalDelay = 0;
      
      steps.forEach((step, index) => {
        setTimeout(() => {
          setCurrentStepIndex(index);
        }, totalDelay);
        totalDelay += step.delay;
      });

      setTimeout(() => {
        setForecastStage('chamber');
      }, totalDelay + 500);
    }
  }, [forecastStage, setForecastStage, selectedHazard]);

  if (forecastStage === 'inactive') return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-slate-950/60 backdrop-blur-sm pointer-events-auto transition-all duration-1000 animate-in fade-in">
      
      {/* Top Bar */}
      <div className="h-12 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between px-6 shadow-md flex-shrink-0 backdrop-blur-md">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Activity size={14} className="text-indigo-400" />
            <span className="text-[10px] font-bold text-slate-100 tracking-widest uppercase">AI Forecast Chamber</span>
          </div>
          <div className="w-px h-4 bg-slate-800"></div>
          <div className="flex items-center space-x-2">
            <span className="text-[10px] text-slate-500 uppercase tracking-widest">Hazard</span>
            <span className="text-[11px] font-bold text-slate-200 uppercase">{selectedHazard}</span>
          </div>
          <div className="w-px h-4 bg-slate-800"></div>
          <div className="flex items-center space-x-2">
            <span className="text-[10px] text-slate-500 uppercase tracking-widest">Time</span>
            <span className="text-[11px] font-bold font-mono text-indigo-400">{selectedTime} Z</span>
          </div>
          <div className="w-px h-4 bg-slate-800"></div>
          <div className="flex items-center space-x-2">
            <span className="text-[10px] text-slate-500 uppercase tracking-widest">Simulations</span>
            <span className="text-[11px] font-bold font-mono text-slate-300">10,000</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <span className="text-[10px] text-slate-500 uppercase tracking-widest">Model Confidence</span>
            <span className="text-[11px] font-bold font-mono text-emerald-400">94.2%</span>
          </div>
          <button onClick={closeForecast} className="text-slate-500 hover:text-slate-300 transition-colors bg-slate-900 p-1.5 rounded border border-slate-800 hover:border-slate-700">
            <X size={14} />
          </button>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-6 pointer-events-none">
        {forecastStage === 'loading' && (
          <div className="flex flex-col items-center justify-center max-w-lg w-full animate-in zoom-in-95 duration-500 pointer-events-auto">
            <Cpu size={32} className="text-indigo-500 mb-6 animate-pulse" />
            
            <div className="w-full bg-slate-900/90 border border-slate-800 p-6 rounded-md shadow-2xl backdrop-blur-md">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">Initializing Forecast</span>
                <span className="text-[10px] font-mono text-indigo-400">{selectedTime} Z</span>
              </div>
              <div className="space-y-3">
                {steps.map((step, index) => {
                  if (index > currentStepIndex) return null;
                  const isCurrent = index === currentStepIndex;
                  
                  return (
                    <div key={index} className={`flex items-start text-[11px] font-mono ${isCurrent ? 'text-indigo-300 animate-in slide-in-from-left-2' : 'text-slate-500'}`}>
                      <span className="mr-3 mt-0.5 opacity-50">{step.time}</span>
                      <div className="flex flex-col">
                        <span className="font-bold tracking-wider">{step.agent}</span>
                        <span className={isCurrent ? 'animate-pulse text-indigo-200 mt-0.5' : 'mt-0.5'}>{step.action}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {forecastStage === 'chamber' && (
          <div className="flex flex-col items-center justify-center w-full max-w-[75%] bg-slate-950/80 border border-slate-700/50 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-md p-8 animate-in fade-in zoom-in-95 duration-700 pointer-events-auto">
            
            {/* Forecast Cards */}
            <div className="flex justify-center items-stretch space-x-6 mb-8 w-full">
              {currentState.scenarios.map((scenario) => {
                const isBest = scenario.type.includes('BEST');
                const isWorst = scenario.type.includes('WORST');
                
                const colorTheme = isBest ? 'emerald' : isWorst ? 'red' : 'amber';
                const borderColor = `border-${colorTheme}-500/40`;
                const headerBg = `bg-${colorTheme}-500/10`;
                const textColor = `text-${colorTheme}-400`;
                
                const isSelected = selectedFutureId === scenario.id;
                
                return (
                  <div 
                    key={scenario.id} 
                    onMouseEnter={() => selectFuture(scenario.id)}
                    className={`flex-1 bg-slate-900 border ${borderColor} rounded-md flex flex-col transition-all duration-300 shadow-xl overflow-hidden cursor-crosshair ${isSelected ? `shadow-[0_0_20px_rgba(0,0,0,0.3)] scale-[1.02] bg-slate-800` : 'opacity-70 hover:opacity-100'}`}
                    style={isSelected ? { borderColor: `var(--tw-colors-${colorTheme}-500)` } : {}}
                  >
                    <div className={`${headerBg} p-3 border-b ${borderColor} flex justify-between items-center`}>
                      <span className={`text-[10px] font-bold tracking-widest uppercase ${textColor}`}>
                        {scenario.type}
                      </span>
                      <span className={`text-[10px] font-mono ${textColor}`}>
                        {scenario.probability}% PROB
                      </span>
                    </div>
                    
                    <div className="p-4 space-y-4 flex-1">
                      <div>
                        <span className="text-[9px] text-slate-500 uppercase tracking-widest block mb-1">Projected Risk</span>
                        <span className={`text-xs font-bold uppercase ${textColor}`}>{scenario.risk}</span>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-[11px] font-mono border-b border-slate-800 pb-1">
                          <span className="text-slate-400">Pop. Impact</span>
                          <span className="text-slate-200">{scenario.population.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center text-[11px] font-mono border-b border-slate-800 pb-1">
                          <span className="text-slate-400">Recovery Time</span>
                          <span className="text-slate-200">{scenario.recoveryTime}</span>
                        </div>
                        <div className="flex justify-between items-center text-[11px] font-mono pb-1">
                          <span className="text-slate-400">Model Conf.</span>
                          <span className="text-slate-200">{scenario.confidence}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Explainability Section */}
            <div className="w-full bg-slate-900/80 border border-slate-700/50 rounded-lg p-6 min-h-[160px] transition-all duration-300 flex flex-col justify-center">
              {!selectedFutureId ? (
                <div className="text-center text-slate-500 text-sm tracking-widest uppercase font-bold animate-pulse">
                  Hover over a projected future to view AI reasoning
                </div>
              ) : (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center space-x-2">
                    <Network size={14} className="text-indigo-400" />
                    <span>Why did AI choose this?</span>
                  </h3>
                  
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <span className="text-[9px] text-slate-500 uppercase tracking-widest block mb-2">Primary Evidence</span>
                      <ul className="space-y-2">
                        {currentState.scenarios.find(s => s.id === selectedFutureId)?.conditions.map((c, i) => (
                          <li key={i} className="flex items-center space-x-2 text-[11px] text-slate-300">
                            <span className="text-emerald-500 font-bold">✓</span>
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="w-px h-16 bg-slate-800 mx-8"></div>
                    
                    <div className="w-56 space-y-4">
                      <div>
                        <span className="text-[9px] text-slate-500 uppercase tracking-widest block mb-1">AI Confidence</span>
                        <span className="text-lg font-mono font-bold text-emerald-400">{currentState.scenarios.find(s => s.id === selectedFutureId)?.confidence}%</span>
                      </div>
                      <div>
                        <span className="text-[9px] font-bold text-amber-500 bg-amber-500/10 border border-amber-500/20 px-2 py-1 rounded uppercase tracking-widest flex items-center w-max">
                          Human Approval Required
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
