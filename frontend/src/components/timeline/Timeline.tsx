import React, { useState, useEffect } from 'react';
import { timelineEvents } from '../../data/mockData';
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';
import { useReplayEngine } from '../../hooks/useReplayEngine';

export const Timeline: React.FC = () => {
  const { selectedTime, updateTime } = useReplayEngine();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isPlaying) {
      interval = setInterval(() => {
        const currentIndex = timelineEvents.findIndex(e => e.time === selectedTime);
        if (currentIndex < timelineEvents.length - 1) {
          updateTime(timelineEvents[currentIndex + 1].time);
        } else {
          setIsPlaying(false);
        }
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, selectedTime, updateTime]);

  return (
    <div className="bg-slate-900 border-t border-slate-700 px-4 py-2 flex flex-col justify-center h-full">
      <div className="flex items-center space-x-6 mb-2">
        <div className="flex items-center space-x-2 text-slate-400">
          <button 
            className="hover:text-slate-200 transition-colors"
            onClick={() => {
              const currentIndex = timelineEvents.findIndex(e => e.time === selectedTime);
              if (currentIndex > 0) updateTime(timelineEvents[currentIndex - 1].time);
            }}
          >
            <SkipBack size={16} />
          </button>
          <button 
            className="hover:text-slate-200 transition-colors w-6 flex justify-center"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <Pause size={18} /> : <Play size={18} />}
          </button>
          <button 
            className="hover:text-slate-200 transition-colors"
            onClick={() => {
              const currentIndex = timelineEvents.findIndex(e => e.time === selectedTime);
              if (currentIndex < timelineEvents.length - 1) updateTime(timelineEvents[currentIndex + 1].time);
            }}
          >
            <SkipForward size={16} />
          </button>
        </div>
        
        <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">
          Simulation Replay Timeline
        </div>
      </div>
      
      <div className="relative w-full h-8 flex items-center">
        {/* Timeline Line */}
        <div className="absolute left-0 right-0 h-1 bg-slate-800 rounded-full"></div>
        <div 
          className="absolute left-0 h-1 bg-blue-500 rounded-full transition-all duration-1000"
          style={{ width: `${(timelineEvents.findIndex(e => e.time === selectedTime) / (timelineEvents.length - 1)) * 100}%` }}
        ></div>

        {/* Timeline Points */}
        <div className="absolute left-0 right-0 flex justify-between">
          {timelineEvents.map((event) => {
            const isSelected = event.time === selectedTime;
            const isPast = timelineEvents.findIndex(e => e.time === event.time) <= timelineEvents.findIndex(e => e.time === selectedTime);
            
            return (
              <div 
                key={event.id} 
                className="flex flex-col items-center justify-center cursor-pointer group"
                onClick={() => updateTime(event.time)}
              >
                <div 
                  className={`w-3 h-3 rounded-full border-2 transition-all duration-500 z-10 ${
                    isSelected ? 'bg-blue-500 border-blue-400 scale-150' : 
                    isPast ? 'bg-blue-600 border-slate-900' : 'bg-slate-700 border-slate-900 group-hover:bg-slate-500'
                  }`}
                ></div>
                <span className={`text-[10px] mt-1 font-mono transition-colors duration-500 ${
                  isSelected ? 'text-blue-400 font-bold' : 
                  isPast ? 'text-slate-400' : 'text-slate-600 group-hover:text-slate-400'
                }`}>
                  {event.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
