import type { HazardType, TimeState } from '../types';
import { floodScenario } from './scenarios/flood';
import { wildfireScenario } from './scenarios/wildfire';
import { cycloneScenario } from './scenarios/cyclone';

export const getScenarioState = (hazard: HazardType, time: string): TimeState => {
  switch (hazard) {
    case 'Flood':
      return floodScenario[time] || floodScenario['08:00'];
    case 'Wildfire':
      return wildfireScenario[time] || wildfireScenario['08:00'];
    case 'Cyclone':
      return cycloneScenario[time] || cycloneScenario['08:00'];
    default:
      return floodScenario[time] || floodScenario['08:00'];
  }
};
