import React from 'react';
import { useReplayEngine } from '../../hooks/useReplayEngine';
import { Truck, Ship, Bus, Home, Stethoscope, Users } from 'lucide-react';

export const ResourceStatusPanel: React.FC = () => {
  const { currentState } = useReplayEngine();
  const resources = currentState.resources;

  return (
    <div className="bg-slate-900 border-t border-slate-700 p-1.5 flex items-center justify-between overflow-x-auto transition-colors duration-500 h-full">
      <div className="flex space-x-2">
        {resources.medicalTeams && (
          <ResourceBadge 
            icon={<Stethoscope size={14} className="text-emerald-400" />} 
            label="Medical Teams" 
            available={resources.medicalTeams.available} 
            total={resources.medicalTeams.total} 
          />
        )}
        {resources.ambulances && (
          <ResourceBadge 
            icon={<Truck size={14} className="text-slate-400" />} 
            label="Ambulances" 
            available={resources.ambulances.available} 
            total={resources.ambulances.total} 
          />
        )}
        {resources.fireCrews && (
          <ResourceBadge 
            icon={<Truck size={14} className="text-red-400" />} 
            label="Fire Crews" 
            available={resources.fireCrews.available} 
            total={resources.fireCrews.total} 
          />
        )}
        {resources.rescueTeams && (
          <ResourceBadge 
            icon={<Users size={14} className="text-orange-400" />} 
            label="Rescue Teams" 
            available={resources.rescueTeams.available} 
            total={resources.rescueTeams.total} 
          />
        )}
        {resources.boats && (
          <ResourceBadge 
            icon={<Ship size={14} className="text-blue-400" />} 
            label="Boats" 
            available={resources.boats.available} 
            total={resources.boats.total} 
          />
        )}
        {resources.helicopters && (
          <ResourceBadge 
            icon={<Truck size={14} className="text-slate-300" />} 
            label="Helicopters" 
            available={resources.helicopters.available} 
            total={resources.helicopters.total} 
          />
        )}
        {resources.buses && (
          <ResourceBadge 
            icon={<Bus size={14} className="text-yellow-400" />} 
            label="Buses" 
            available={resources.buses.available} 
            total={resources.buses.total} 
          />
        )}
        {resources.shelterCapacity && (
          <ResourceBadge 
            icon={<Home size={14} className="text-purple-400" />} 
            label="Shelter Capacity" 
            available={resources.shelterCapacity.available} 
            total={resources.shelterCapacity.total} 
            isCapacity={true}
          />
        )}
      </div>
      
      <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest bg-slate-950 px-3 py-1.5 rounded border border-slate-800">
        SIMULATION MODE — Decision support only. Critical actions require authorized human approval.
      </div>
    </div>
  );
};

const ResourceBadge = ({ icon, label, available, total, isCapacity = false }: { icon: React.ReactNode, label: string, available: number, total: number, isCapacity?: boolean }) => {
  const percentage = (available / total) * 100;
  const isLow = percentage < 30;
  
  return (
    <div className={`flex items-center space-x-2 bg-slate-800 px-3 py-1.5 rounded border transition-colors duration-500 ${isLow ? 'border-red-500/50' : 'border-slate-700'} min-w-[140px]`}>
      <div className="bg-slate-900 p-1 rounded">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-[9px] text-slate-400 uppercase tracking-wider">{label}</span>
        <div className="flex items-baseline space-x-1">
          <span className={`text-xs font-bold font-mono transition-colors duration-500 ${isLow ? 'text-red-400' : 'text-slate-200'}`}>
            {isCapacity ? available.toLocaleString() : available}
          </span>
          {!isCapacity && <span className="text-[9px] text-slate-500 font-mono">/ {total} avail</span>}
        </div>
      </div>
    </div>
  );
};
