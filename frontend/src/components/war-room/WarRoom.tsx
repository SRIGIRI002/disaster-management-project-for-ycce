import React, { useEffect, useState, useRef, useMemo } from 'react';
import { useReplayEngine } from '../../hooks/useReplayEngine';
import { AgentMessageComponent } from './AgentMessage';

const generateTimestamps = (baseTime: string, count: number) => {
  const timestamps = [];
  // baseTime is "HH:MM" format
  let currentSeconds = 11;
  for (let i = 0; i < count; i++) {
    const secs = currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds;
    timestamps.push(`${baseTime}:${secs}`);
    currentSeconds += Math.floor(Math.random() * 4) + 3; // Add 3 to 6 seconds
  }
  return timestamps;
};

const renderProgressBar = (percentage: number) => {
  const blocks = Math.round(percentage / 10);
  const fullBlocks = '█'.repeat(blocks);
  const emptyBlocks = '░'.repeat(10 - blocks);
  return `${fullBlocks}${emptyBlocks}`;
};

export const WarRoom: React.FC = () => {
  const { currentState, selectedTime } = useReplayEngine();
  const [visibleMessages, setVisibleMessages] = useState<number>(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const currentMessages = currentState.warRoomMessages || [];
  const currentConsensus = currentState.consensus;

  // Memoize timestamps so they don't change on every re-render
  const timestamps = useMemo(() => {
    return generateTimestamps(selectedTime, currentMessages.length);
  }, [selectedTime, currentMessages.length]);

  // Handle the cascading animation when time changes
  useEffect(() => {
    setVisibleMessages(0);
    
    if (currentMessages.length === 0) return;

    let currentIndex = 0;
    
    const revealNext = () => {
      currentIndex++;
      setVisibleMessages(currentIndex);
      
      if (scrollRef.current) {
        scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      
      if (currentIndex < currentMessages.length) {
        timeoutId = setTimeout(revealNext, 250);
      }
    };

    let timeoutId = setTimeout(revealNext, 100);

    return () => clearTimeout(timeoutId);
  }, [selectedTime, currentMessages.length]);

  const allVisible = visibleMessages >= currentMessages.length;
  const commanderMsg = currentMessages.find(m => m.isCommander);

  return (
    <div className="flex flex-col space-y-2">
      {/* HEADER */}
      <div className="flex justify-between items-end mb-1 pb-2 border-b border-slate-700 flex-shrink-0">
        <div>
          <h3 className="text-[11px] font-bold text-slate-200 uppercase tracking-widest">AI WAR ROOM</h3>
          <div className="text-[9px] text-slate-500 uppercase tracking-widest mt-0.5">Live Intelligence Feed</div>
        </div>
        <div className="text-right">
          <div className="flex items-center justify-end text-[9px] text-emerald-400 font-mono mb-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse"></span>
            5 AGENTS ONLINE
          </div>
          <div className="text-[9px] font-mono text-slate-500 uppercase">
            Last Update: {timestamps[visibleMessages - 1] || `${selectedTime}:00`}
          </div>
        </div>
      </div>
      
      {/* MESSAGE FEED */}
      <div className="flex flex-col">
        {currentMessages.map((msg, idx) => (
          <AgentMessageComponent 
            key={msg.id} 
            data={msg} 
            isVisible={idx < visibleMessages} 
            timestamp={timestamps[idx]}
          />
        ))}
      </div>

      {/* AI CONSENSUS SECTION */}
      {allVisible && currentConsensus && commanderMsg && (
        <div className="mt-3 bg-slate-900 border border-slate-700/50 p-2.5 rounded shadow-sm animate-in fade-in slide-in-from-bottom-2 duration-500">
          <h4 className="text-[9px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-800 pb-1 mb-2">AI CONSENSUS</h4>
          
          <div className="space-y-1.5 font-mono text-[9px]">
            <div className="flex justify-between items-center">
              <span className="text-blue-400 w-24">Satellite</span>
              <span className="text-slate-500 flex-1">{renderProgressBar(currentConsensus.satellite)}</span>
              <span className="text-slate-300 w-8 text-right">{currentConsensus.satellite}%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-cyan-400 w-24">Weather</span>
              <span className="text-slate-500 flex-1">{renderProgressBar(currentConsensus.weather)}</span>
              <span className="text-slate-300 w-8 text-right">{currentConsensus.weather}%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-orange-400 w-24">Infrastructure</span>
              <span className="text-slate-500 flex-1">{renderProgressBar(currentConsensus.infrastructure)}</span>
              <span className="text-slate-300 w-8 text-right">{currentConsensus.infrastructure}%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-green-400 w-24">Logistics</span>
              <span className="text-slate-500 flex-1">{renderProgressBar(currentConsensus.logistics)}</span>
              <span className="text-slate-300 w-8 text-right">{currentConsensus.logistics}%</span>
            </div>
          </div>

          <div className="mt-2 pt-2 border-t border-slate-800 flex justify-between items-center">
            <span className="text-[9px] text-slate-500 uppercase">Final Confidence</span>
            <span className="text-emerald-400 font-mono text-[10px] font-bold">{commanderMsg.confidence}%</span>
          </div>
          <div className="mt-1 flex justify-between items-center">
            <span className="text-[9px] text-slate-500 uppercase">Recommendation Status</span>
            <span className={`text-[9px] font-bold uppercase tracking-widest ${commanderMsg.approvalRequired ? 'text-amber-500' : 'text-slate-300'}`}>
              {commanderMsg.status}
            </span>
          </div>
        </div>
      )}

      {/* Invisible anchor for auto-scrolling */}
      <div ref={scrollRef} className="h-1" />
    </div>
  );
};
