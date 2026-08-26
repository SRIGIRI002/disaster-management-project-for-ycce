import React from 'react';
import { Satellite, CloudRain, Building2, Truck, ShieldCheck, Bot } from 'lucide-react';
import type { WarRoomMessage } from '../../types';

const getAgentIcon = (agent: string) => {
  switch (agent) {
    case 'Satellite Intelligence': return <Satellite size={14} />;
    case 'Weather Intelligence': return <CloudRain size={14} />;
    case 'Infrastructure Intelligence': return <Building2 size={14} />;
    case 'Logistics Intelligence': return <Truck size={14} />;
    case 'Commander AI': return <ShieldCheck size={14} />;
    default: return <Bot size={14} />;
  }
};

const getAgentColorStyles = (agent: string) => {
  switch (agent) {
    case 'Satellite Intelligence': 
      return { iconColor: 'text-blue-500', badgeColor: 'bg-blue-500/10 text-blue-400 border border-blue-500/20' };
    case 'Weather Intelligence': 
      return { iconColor: 'text-cyan-500', badgeColor: 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' };
    case 'Infrastructure Intelligence': 
      return { iconColor: 'text-orange-500', badgeColor: 'bg-orange-500/10 text-orange-400 border border-orange-500/20' };
    case 'Logistics Intelligence': 
      return { iconColor: 'text-green-500', badgeColor: 'bg-green-500/10 text-green-400 border border-green-500/20' };
    case 'Commander AI': 
      return { iconColor: 'text-purple-500', badgeColor: 'bg-purple-500/20 text-purple-400 border border-purple-500/40 shadow-[0_0_10px_rgba(168,85,247,0.2)]' };
    default: 
      return { iconColor: 'text-slate-500', badgeColor: 'bg-slate-500/10 text-slate-400 border border-slate-500/20' };
  }
};

export const AgentMessageComponent: React.FC<{ data: WarRoomMessage, isVisible: boolean, timestamp: string }> = ({ data, isVisible, timestamp }) => {
  const styles = getAgentColorStyles(data.agent);
  
  if (!isVisible) return null;

  return (
    <div className={`flex items-start py-2 border-b border-slate-800/60 animate-in fade-in slide-in-from-left-2 duration-300`}>
      
      {/* LEFT: Icon */}
      <div className={`mr-2 mt-0.5 ${styles.iconColor}`}>
        {getAgentIcon(data.agent)}
      </div>

      {/* CENTER: Name, Time, Message */}
      <div className="flex-1 flex flex-col min-w-0 pr-2">
        <div className="flex items-baseline space-x-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-200">
            {data.agent.replace(' Intelligence', '')}
          </span>
          <span className="text-[9px] font-mono text-slate-500">{timestamp}</span>
        </div>
        <div className="text-[10px] text-slate-400 leading-tight mt-0.5 break-words">
          {data.message.join(' ')}
        </div>
      </div>

      {/* RIGHT: Status Badge */}
      <div className="flex-shrink-0 ml-1">
        <span className={`text-[8px] uppercase tracking-widest font-bold px-1.5 py-0.5 rounded ${styles.badgeColor}`}>
          {data.status}
        </span>
      </div>

    </div>
  );
};
