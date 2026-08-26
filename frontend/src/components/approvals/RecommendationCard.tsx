import React, { useState, useEffect } from 'react';
import { AlertOctagon, CheckCircle2, XCircle, Edit } from 'lucide-react';
import { useReplayEngine } from '../../hooks/useReplayEngine';

export const RecommendationCard: React.FC = () => {
  const { currentState } = useReplayEngine();
  const currentRecommendation = currentState.recommendation;
  
  const [status, setStatus] = useState<string>(currentRecommendation.status);

  // Reset local status if recommendation changes from replay
  useEffect(() => {
    setStatus(currentRecommendation.status);
  }, [currentRecommendation.id]);

  return (
    <div className="bg-slate-800 border border-amber-500/30 rounded-md p-3 shadow-lg relative overflow-hidden transition-all duration-500">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-amber-500"></div>
      
      <div className="flex items-center space-x-2 mb-2">
        <AlertOctagon className="text-amber-500" size={16} />
        <h3 className="text-xs font-bold text-amber-500 uppercase tracking-widest">{currentRecommendation.title}</h3>
      </div>
      
      <div className="mb-3">
        <span className="text-[9px] text-slate-500 uppercase tracking-widest block mb-1">Recommendation</span>
        <p className="text-slate-200 text-xs font-medium transition-colors duration-500 bg-slate-900/50 p-2 rounded border border-slate-700/50">
          {currentRecommendation.description}
        </p>
      </div>
      
      {currentRecommendation.reasoning && (
        <div className="mb-3 space-y-2">
          <div>
            <span className="text-[9px] text-slate-500 uppercase tracking-widest block mb-1">Reasoning</span>
            <p className="text-slate-300 text-[10px] bg-slate-900/50 p-2 rounded border border-slate-700/50">
              {currentRecommendation.reasoning}
            </p>
          </div>
          
          {currentRecommendation.primaryFactors && currentRecommendation.primaryFactors.length > 0 && (
            <div>
              <span className="text-[9px] text-slate-500 uppercase tracking-widest block mb-1">Primary Evidence</span>
              <ul className="text-slate-300 text-[10px] bg-slate-900/50 p-2 rounded border border-slate-700/50 list-disc list-inside space-y-0.5">
                {currentRecommendation.primaryFactors.map((factor, idx) => (
                  <li key={idx}>{factor}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
      
      <div className="grid grid-cols-2 gap-2 mb-3">
        <div>
          <span className="text-[9px] text-slate-500 uppercase tracking-widest block mb-1">Confidence</span>
          <div className="bg-slate-900/50 p-1.5 rounded border border-slate-700/50 transition-colors duration-500 flex items-center h-7">
            <span className="text-emerald-400 font-mono text-[10px] font-bold transition-all duration-500">{currentRecommendation.confidence}%</span>
          </div>
        </div>
        <div>
          <span className="text-[9px] text-slate-500 uppercase tracking-widest block mb-1">Est. Population</span>
          <div className="bg-slate-900/50 p-1.5 rounded border border-slate-700/50 transition-colors duration-500 flex items-center h-7">
            <span className="text-slate-300 font-mono text-[10px] transition-all duration-500">{currentRecommendation.estimatedPopulation.toLocaleString()}</span>
          </div>
        </div>
      </div>
      
      <div className="mb-3">
        <span className="text-[9px] text-slate-500 uppercase tracking-widest block mb-1">Resources Required</span>
        <div className="flex flex-wrap gap-1.5 text-[9px] font-mono text-slate-300 bg-slate-900/50 p-2 rounded border border-slate-700/50 min-h-[36px]">
          {Object.entries(currentRecommendation.resourcesRequired).map(([key, value]) => {
            if (value === 0 || value === undefined) return null;
            const label = key === 'ambulances' ? 'Amb' : 
                          key === 'fireTrucks' ? 'Fire Trucks' : 
                          key === 'helicopters' ? 'Helicopters' : 
                          key === 'rescueTeams' ? 'Rescue Teams' : 
                          key.charAt(0).toUpperCase() + key.slice(1);
            return (
              <span key={key} className="bg-slate-800 px-1.5 py-0.5 rounded border border-slate-600 transition-all duration-500">
                {value} {label}
              </span>
            );
          })}
        </div>
      </div>
      
      <div className="border-t border-slate-700/80 pt-2 mt-1">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[9px] text-slate-400 uppercase tracking-widest font-bold">Human Approval:</span>
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded transition-colors duration-500 ${
            status === 'APPROVED' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
            status === 'REJECTED' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
            'bg-amber-500/20 text-amber-400 border border-amber-500/30'
          }`}>
            {status}
          </span>
        </div>
        
        {status === 'HUMAN APPROVAL REQUIRED' && (
          <div className="grid grid-cols-3 gap-2">
            <button 
              onClick={() => setStatus('APPROVED')}
              className="flex items-center justify-center space-x-1 bg-slate-700 hover:bg-emerald-600/80 border border-slate-600 hover:border-emerald-500 text-slate-200 text-xs py-1.5 rounded transition-colors"
            >
              <CheckCircle2 size={14} />
              <span>Approve</span>
            </button>
            <button 
              className="flex items-center justify-center space-x-1 bg-slate-700 hover:bg-slate-600 border border-slate-600 text-slate-200 text-xs py-1.5 rounded transition-colors"
            >
              <Edit size={14} />
              <span>Modify</span>
            </button>
            <button 
              onClick={() => setStatus('REJECTED')}
              className="flex items-center justify-center space-x-1 bg-slate-700 hover:bg-red-600/80 border border-slate-600 hover:border-red-500 text-slate-200 text-xs py-1.5 rounded transition-colors"
            >
              <XCircle size={14} />
              <span>Reject</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
