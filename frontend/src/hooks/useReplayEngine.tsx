import React, { createContext, useContext, useState, useMemo } from 'react';
import type { TimeState, HazardType } from '../types';
import { getScenarioState } from '../data/ScenarioManager';

export type ForecastStage = 'inactive' | 'loading' | 'chamber';

interface ReplayContextType {
  selectedHazard: HazardType;
  setHazard: (hazard: HazardType) => void;
  selectedTime: string;
  updateTime: (time: string) => void;
  
  // Forecast Mode
  isForecastMode: boolean;
  forecastStage: ForecastStage;
  selectedFutureId: string | null;
  startForecast: () => void;
  closeForecast: () => void;
  selectFuture: (scenarioId: string | null) => void;
  setForecastStage: (stage: ForecastStage) => void;

  currentState: TimeState;
}

const ReplayContext = createContext<ReplayContextType | undefined>(undefined);

export const ReplayProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedHazard, setSelectedHazard] = useState<HazardType>('Flood');
  const [selectedTime, setSelectedTime] = useState<string>('08:00');

  // Forecast Mode State
  const [isForecastMode, setIsForecastMode] = useState<boolean>(false);
  const [forecastStage, setForecastStage] = useState<ForecastStage>('inactive');
  const [selectedFutureId, setSelectedFutureId] = useState<string | null>(null);

  const setHazard = (hazard: HazardType) => {
    setSelectedHazard(hazard);
    setSelectedTime('08:00'); // Reset time when hazard changes
    closeForecast();
  };

  const updateTime = (time: string) => {
    setSelectedTime(time);
    closeForecast();
  };

  const startForecast = () => {
    setIsForecastMode(true);
    setForecastStage('loading');
    setSelectedFutureId(null);
  };

  const closeForecast = () => {
    setIsForecastMode(false);
    setForecastStage('inactive');
    setSelectedFutureId(null);
  };

  const selectFuture = (scenarioId: string | null) => {
    setSelectedFutureId(scenarioId);
  };

  const baseState = getScenarioState(selectedHazard, selectedTime);

  const currentState = useMemo(() => {
    if (isForecastMode && selectedFutureId) {
      const future = baseState.scenarios.find(s => s.id === selectedFutureId);
      if (future) {
        return {
          ...baseState,
          incident: {
            ...baseState.incident,
            affectedPopulation: future.population,
            roadsAffected: future.roadsClosed,
            criticalFacilitiesAffected: future.hospitals,
            confidence: future.confidence,
            severity: (future.risk === 'Critical' ? 'Critical' : future.risk === 'High' ? 'High' : 'Moderate') as 'Low' | 'Moderate' | 'High' | 'Critical',
          },
          recommendation: {
            ...baseState.recommendation,
            title: `FORECAST: ${future.type}`,
            description: `Hypothetical state based on ${future.conditions.join(', ')}`,
            confidence: future.confidence,
            estimatedPopulation: future.population,
            status: 'ANALYZING' as const,
            reasoning: `AI Prediction for ${future.type}`,
            primaryFactors: [
              ...future.conditions,
              `Population at risk: ${future.population.toLocaleString()}`,
              `Road closures projected: ${future.roadsClosed}`
            ]
          },
          mapState: {
            ...baseState.mapState,
            floodScale: future.risk === 'Critical' ? (baseState.mapState.floodScale || 1) * 1.5 : future.risk === 'High' ? (baseState.mapState.floodScale || 1) * 1.2 : baseState.mapState.floodScale,
            fireScale: future.risk === 'Critical' ? (baseState.mapState.fireScale || 1) * 1.5 : future.risk === 'High' ? (baseState.mapState.fireScale || 1) * 1.2 : baseState.mapState.fireScale,
            cycloneScale: future.risk === 'Critical' ? (baseState.mapState.cycloneScale || 1) * 1.5 : future.risk === 'High' ? (baseState.mapState.cycloneScale || 1) * 1.2 : baseState.mapState.cycloneScale,
          }
        };
      }
    }
    return baseState;
  }, [baseState, isForecastMode, selectedFutureId]);

  return (
    <ReplayContext.Provider value={{ 
      selectedHazard, setHazard, 
      selectedTime, updateTime, 
      isForecastMode, forecastStage, selectedFutureId,
      startForecast, closeForecast, selectFuture, setForecastStage,
      currentState 
    }}>
      {children}
    </ReplayContext.Provider>
  );
};

export const useReplayEngine = () => {
  const context = useContext(ReplayContext);
  if (!context) {
    throw new Error('useReplayEngine must be used within a ReplayProvider');
  }
  return context;
};
