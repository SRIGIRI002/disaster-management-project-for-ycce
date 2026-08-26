import React from 'react';
import { RecommendationCard } from '../approvals/RecommendationCard';
import { DecisionTwin } from '../decision-twin/DecisionTwin';
import { WarRoom } from '../war-room/WarRoom';
import { useReplayEngine } from '../../hooks/useReplayEngine';
import { Cpu } from 'lucide-react';

export const RightIntelligencePanel: React.FC = () => {
  const { startForecast } = useReplayEngine();

  return (
    <div className="bg-slate-900 border-l border-slate-700 h-full w-full flex-shrink-0 flex flex-col overflow-hidden">
      <div className="p-3 border-b border-slate-700 bg-slate-800/30 flex-shrink-0 z-10 shadow-sm">
        <RecommendationCard />
      </div>
      
      <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-thin">
        <div className="p-3 border-b border-slate-700 bg-slate-900 space-y-3">
          <button 
            onClick={startForecast}
            className="w-full relative overflow-hidden group bg-slate-800 hover:bg-indigo-900/50 border border-indigo-500/30 hover:border-indigo-400 p-2 rounded flex items-center justify-center space-x-2 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            <Cpu size={16} className="text-indigo-400 group-hover:text-indigo-300" />
            <span className="text-xs font-bold text-indigo-400 group-hover:text-indigo-300 tracking-widest uppercase">
              Run AI Forecast
            </span>
          </button>
          
          <DecisionTwin />
        </div>
        
        <div className="p-3">
          <WarRoom />
        </div>
      </div>
    </div>
  );
};
