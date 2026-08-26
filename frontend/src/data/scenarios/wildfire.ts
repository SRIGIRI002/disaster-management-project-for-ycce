import type { TimeState } from '../../types';

export const wildfireScenario: Record<string, TimeState> = {
  '08:00': {
    time: '08:00',
    incident: {
      id: 'WF-2024-CA-01',
      name: 'Wildfire Simulation',
      type: 'Wildfire',
      severity: 'Low',
      confidence: 40,
      affectedPopulation: 0,
      affectedArea: 0,
      roadsAffected: 0,
      criticalFacilitiesAffected: 0,
    },
    recommendation: {
      id: 'WF-REC-0800',
      title: 'COMMANDER RECOMMENDATION',
      description: 'Monitor dry conditions.',
      confidence: 40,
      estimatedPopulation: 0,
      resourcesRequired: { fireTrucks: 0, helicopters: 0, ambulances: 0 },
      status: 'HUMAN APPROVAL REQUIRED',
    },
    scenarios: [
      { id: 'WF-B-1', type: 'BEST CASE', conditions: ['Humidity increases.'], risk: 'Low', probability: 35, population: 0, roadsClosed: 0, hospitals: 0, sheltersNeeded: 0, recoveryTime: '1 Day', confidence: 80 },
      { id: 'WF-E-1', type: 'EXPECTED CASE', conditions: ['Conditions remain dry.'], risk: 'Moderate', probability: 50, population: 0, roadsClosed: 0, hospitals: 0, sheltersNeeded: 0, recoveryTime: '3 Days', confidence: 75 },
      { id: 'WF-W-1', type: 'WORST CASE', conditions: ['High winds develop.'], risk: 'High', probability: 15, population: 1500, roadsClosed: 2, hospitals: 0, sheltersNeeded: 1, recoveryTime: '1 Week', confidence: 60 }
    ],
    warRoomMessages: [
      { id: 'wf-08-1', agent: 'Weather Intelligence', message: ['Relative humidity at 12%.', 'Extremely dry conditions.'], status: 'VERIFIED' },
      { id: 'wf-08-2', agent: 'Satellite Intelligence', message: ['No thermal anomalies detected yet.'], status: 'ANALYZING' },
      { id: 'wf-08-5', agent: 'Commander AI', message: ['Consensus reached.'], status: 'UPDATED', isCommander: true, recommendation: 'Monitor dry conditions.', reason: 'High fire danger index.', confidence: 40, requiredResources: 'None', approvalRequired: false }
    ],
    consensus: { satellite: 90, weather: 95, infrastructure: 98, logistics: 95 },
    resources: {
      ambulances: { available: 15, total: 15 },
      buses: { available: 10, total: 10 },
      shelterCapacity: { available: 1500, total: 1500 },
      medicalTeams: { available: 5, total: 5 },
      fireCrews: { available: 20, total: 20 },
      helicopters: { available: 3, total: 3 }
    },
    mapState: {
      overlayType: 'Wildfire',
      fireScale: 0,
      roadColors: { routeA: 'rgba(148, 163, 184, 0.3)', routeB: 'rgba(148, 163, 184, 0.3)', routeC: 'rgba(148, 163, 184, 0.3)' },
      labels: { zoneA: 'VALLEY', hospital: 'MEDICAL CENTER', shelter: 'COMMUNITY HALL' }
    }
  },
  '08:30': {
    time: '08:30',
    incident: {
      id: 'WF-2024-CA-01',
      name: 'Wildfire Simulation',
      type: 'Wildfire',
      severity: 'Low',
      confidence: 60,
      affectedPopulation: 0,
      affectedArea: 0.5,
      roadsAffected: 0,
      criticalFacilitiesAffected: 0,
    },
    recommendation: {
      id: 'WF-REC-0830',
      title: 'COMMANDER RECOMMENDATION',
      description: 'Dispatch reconnaissance drone.',
      confidence: 60,
      estimatedPopulation: 0,
      resourcesRequired: { fireTrucks: 0, helicopters: 1, ambulances: 0 },
      status: 'HUMAN APPROVAL REQUIRED',
    },
    scenarios: [
      { id: 'WF-B-2', type: 'BEST CASE', conditions: ['False alarm or small brush fire.'], risk: 'Low', probability: 40, population: 0, roadsClosed: 0, hospitals: 0, sheltersNeeded: 0, recoveryTime: '1 Day', confidence: 75 },
      { id: 'WF-E-2', type: 'EXPECTED CASE', conditions: ['Small fire confirmed.'], risk: 'Moderate', probability: 45, population: 50, roadsClosed: 1, hospitals: 0, sheltersNeeded: 0, recoveryTime: '3 Days', confidence: 70 },
      { id: 'WF-W-2', type: 'WORST CASE', conditions: ['Fire spreads to tree canopy.'], risk: 'High', probability: 15, population: 2000, roadsClosed: 4, hospitals: 0, sheltersNeeded: 2, recoveryTime: '2 Weeks', confidence: 60 }
    ],
    warRoomMessages: [
      { id: 'wf-0830-1', agent: 'Satellite Intelligence', message: ['Smoke plume detected in Sector 4.'], status: 'VERIFIED' },
      { id: 'wf-0830-2', agent: 'Infrastructure Intelligence', message: ['No structures currently threatened.'], status: 'ANALYZING' },
      { id: 'wf-0830-5', agent: 'Commander AI', message: ['Consensus reached.'], status: 'UPDATED', isCommander: true, recommendation: 'Dispatch reconnaissance drone.', reason: 'Visual confirmation of smoke required.', confidence: 60, requiredResources: '1 Drone', approvalRequired: true }
    ],
    consensus: { satellite: 85, weather: 90, infrastructure: 95, logistics: 95 },
    resources: {
      ambulances: { available: 15, total: 15 },
      buses: { available: 10, total: 10 },
      shelterCapacity: { available: 1500, total: 1500 },
      medicalTeams: { available: 5, total: 5 },
      fireCrews: { available: 20, total: 20 },
      helicopters: { available: 3, total: 3 }
    },
    mapState: {
      overlayType: 'Wildfire',
      fireScale: 0.1,
      roadColors: { routeA: 'rgba(148, 163, 184, 0.3)', routeB: 'rgba(148, 163, 184, 0.3)', routeC: 'rgba(148, 163, 184, 0.3)' },
      labels: { zoneA: 'VALLEY (SMOKE)', hospital: 'MEDICAL CENTER', shelter: 'COMMUNITY HALL' }
    }
  },
  '09:00': {
    time: '09:00',
    incident: {
      id: 'WF-2024-CA-01',
      name: 'Wildfire Simulation',
      type: 'Wildfire',
      severity: 'Moderate',
      confidence: 75,
      affectedPopulation: 0,
      affectedArea: 1.5,
      roadsAffected: 1,
      criticalFacilitiesAffected: 0,
    },
    recommendation: {
      id: 'WF-REC-0900',
      title: 'COMMANDER RECOMMENDATION',
      description: 'Deploy Initial Attack Fire Crews.',
      confidence: 75,
      estimatedPopulation: 0,
      resourcesRequired: { fireTrucks: 4, helicopters: 1, ambulances: 1 },
      status: 'HUMAN APPROVAL REQUIRED',
    },
    scenarios: [
      { id: 'WF-B-3', type: 'BEST CASE', conditions: ['Fire contained quickly.'], risk: 'Moderate', probability: 35, population: 0, roadsClosed: 1, hospitals: 0, sheltersNeeded: 0, recoveryTime: '2 Days', confidence: 70 },
      { id: 'WF-E-3', type: 'EXPECTED CASE', conditions: ['Fire spreads slowly.'], risk: 'High', probability: 50, population: 300, roadsClosed: 2, hospitals: 0, sheltersNeeded: 1, recoveryTime: '1 Week', confidence: 65 },
      { id: 'WF-W-3', type: 'WORST CASE', conditions: ['Winds carry embers.'], risk: 'Critical', probability: 15, population: 3500, roadsClosed: 6, hospitals: 1, sheltersNeeded: 3, recoveryTime: '1 Month', confidence: 55 }
    ],
    warRoomMessages: [
      { id: 'wf-09-1', agent: 'Satellite Intelligence', message: ['Thermal signature confirmed.', 'Active fire line is 500m wide.'], status: 'VERIFIED' },
      { id: 'wf-09-2', agent: 'Infrastructure Intelligence', message: ['Rural Route 7 closed due to proximity.'], status: 'UPDATED' },
      { id: 'wf-09-5', agent: 'Commander AI', message: ['Consensus reached.'], status: 'Awaiting Human Approval', isCommander: true, recommendation: 'Deploy Initial Attack Fire Crews.', reason: 'Fire confirmed and growing.', confidence: 75, requiredResources: '4 Fire Trucks, 1 Helicopter', approvalRequired: true }
    ],
    consensus: { satellite: 95, weather: 85, infrastructure: 90, logistics: 80 },
    resources: {
      ambulances: { available: 14, total: 15 },
      buses: { available: 10, total: 10 },
      shelterCapacity: { available: 1500, total: 1500 },
      medicalTeams: { available: 5, total: 5 },
      fireCrews: { available: 16, total: 20 },
      helicopters: { available: 2, total: 3 }
    },
    mapState: {
      overlayType: 'Wildfire',
      fireScale: 0.3,
      roadColors: { routeA: 'rgba(239, 68, 68, 0.5)', routeB: 'rgba(148, 163, 184, 0.3)', routeC: 'rgba(148, 163, 184, 0.3)' },
      labels: { zoneA: 'VALLEY (FIRE)', hospital: 'MEDICAL CENTER', shelter: 'COMMUNITY HALL' }
    }
  },
  '09:30': {
    time: '09:30',
    incident: {
      id: 'WF-2024-CA-01',
      name: 'Wildfire Simulation',
      type: 'Wildfire',
      severity: 'High',
      confidence: 85,
      affectedPopulation: 450,
      affectedArea: 3.2,
      roadsAffected: 3,
      criticalFacilitiesAffected: 0,
    },
    recommendation: {
      id: 'WF-REC-0930',
      title: 'COMMANDER RECOMMENDATION',
      description: 'Issue evacuation warning. Wind intensifying.',
      confidence: 85,
      estimatedPopulation: 450,
      resourcesRequired: { fireTrucks: 8, helicopters: 2, ambulances: 2 },
      status: 'HUMAN APPROVAL REQUIRED',
    },
    scenarios: [
      { id: 'WF-B-4', type: 'BEST CASE', conditions: ['Wind dies down.'], risk: 'Moderate', probability: 20, population: 450, roadsClosed: 3, hospitals: 0, sheltersNeeded: 1, recoveryTime: '1 Week', confidence: 60 },
      { id: 'WF-E-4', type: 'EXPECTED CASE', conditions: ['Fire front moves north.'], risk: 'High', probability: 65, population: 1200, roadsClosed: 5, hospitals: 0, sheltersNeeded: 2, recoveryTime: '2 Weeks', confidence: 75 },
      { id: 'WF-W-4', type: 'WORST CASE', conditions: ['Fire jumps containment lines.'], risk: 'Critical', probability: 15, population: 5000, roadsClosed: 12, hospitals: 1, sheltersNeeded: 5, recoveryTime: '2 Months', confidence: 50 }
    ],
    warRoomMessages: [
      { id: 'wf-0930-1', agent: 'Weather Intelligence', message: ['Wind speeds increased to 45 km/h.', 'Gusts up to 60 km/h.'], status: 'VERIFIED' },
      { id: 'wf-0930-2', agent: 'Satellite Intelligence', message: ['Fire Front Moving North rapidly.', 'Spot fires detected.'], status: 'UPDATED' },
      { id: 'wf-0930-5', agent: 'Commander AI', message: ['Consensus reached.'], status: 'Awaiting Human Approval', isCommander: true, recommendation: 'Issue evacuation warning. Wind intensifying.', reason: 'Fire front spreading towards populated areas.', confidence: 85, requiredResources: '8 Fire Trucks, 2 Helicopters', approvalRequired: true }
    ],
    consensus: { satellite: 90, weather: 95, infrastructure: 85, logistics: 80 },
    resources: {
      ambulances: { available: 13, total: 15 },
      buses: { available: 10, total: 10 },
      shelterCapacity: { available: 1500, total: 1500 },
      medicalTeams: { available: 5, total: 5 },
      fireCrews: { available: 12, total: 20 },
      helicopters: { available: 1, total: 3 }
    },
    mapState: {
      overlayType: 'Wildfire',
      fireScale: 0.6,
      roadColors: { routeA: 'rgba(239, 68, 68, 0.8)', routeB: 'rgba(239, 68, 68, 0.5)', routeC: 'rgba(148, 163, 184, 0.3)' },
      labels: { zoneA: 'VALLEY (FIRE SPREADING)', hospital: 'MEDICAL CENTER', shelter: 'COMMUNITY HALL' }
    }
  },
  '10:00': {
    time: '10:00',
    incident: {
      id: 'WF-2024-CA-01',
      name: 'Wildfire Simulation',
      type: 'Wildfire',
      severity: 'Critical',
      confidence: 90,
      affectedPopulation: 1200,
      affectedArea: 5.8,
      roadsAffected: 5,
      criticalFacilitiesAffected: 1,
    },
    recommendation: {
      id: 'WF-REC-1000',
      title: 'COMMANDER RECOMMENDATION',
      description: 'Deploy Fire Containment Units.',
      confidence: 90,
      estimatedPopulation: 1200,
      resourcesRequired: { fireTrucks: 15, helicopters: 3, ambulances: 5, buses: 5 },
      status: 'HUMAN APPROVAL REQUIRED',
    },
    scenarios: [
      { id: 'WF-B-5', type: 'BEST CASE', conditions: ['Wind shifts away from town.'], risk: 'High', probability: 15, population: 1200, roadsClosed: 5, hospitals: 1, sheltersNeeded: 2, recoveryTime: '2 Weeks', confidence: 70 },
      { id: 'WF-E-5', type: 'EXPECTED CASE', conditions: ['Fire expands.'], risk: 'Critical', probability: 70, population: 3500, roadsClosed: 8, hospitals: 1, sheltersNeeded: 4, recoveryTime: '1 Month', confidence: 80 },
      { id: 'WF-W-5', type: 'WORST CASE', conditions: ['Town engulfed.'], risk: 'Critical', probability: 15, population: 8000, roadsClosed: 15, hospitals: 2, sheltersNeeded: 8, recoveryTime: '6 Months', confidence: 60 }
    ],
    warRoomMessages: [
      { id: 'wf-10-1', agent: 'Satellite Intelligence', message: ['Fire Expands significantly.', 'Area increased by 80%.'], status: 'VERIFIED' },
      { id: 'wf-10-2', agent: 'Infrastructure Intelligence', message: ['Substation 4 power lines compromised.', 'Local outages reported.'], status: 'UPDATED' },
      { id: 'wf-10-5', agent: 'Commander AI', message: ['Consensus reached.'], status: 'Awaiting Human Approval', isCommander: true, recommendation: 'Deploy Fire Containment Units.', reason: 'Fire threatening critical infrastructure and subdivisions.', confidence: 90, requiredResources: '15 Fire Trucks, 3 Helicopters', approvalRequired: true }
    ],
    consensus: { satellite: 95, weather: 90, infrastructure: 92, logistics: 85 },
    resources: {
      ambulances: { available: 10, total: 15 },
      buses: { available: 5, total: 10 },
      shelterCapacity: { available: 1000, total: 1500 },
      medicalTeams: { available: 4, total: 5 },
      fireCrews: { available: 5, total: 20 },
      helicopters: { available: 0, total: 3 }
    },
    mapState: {
      overlayType: 'Wildfire',
      fireScale: 1.0,
      roadColors: { routeA: 'rgba(239, 68, 68, 1)', routeB: 'rgba(239, 68, 68, 0.8)', routeC: 'rgba(239, 68, 68, 0.5)' },
      labels: { zoneA: 'VALLEY (CRITICAL)', hospital: 'MEDICAL CENTER (AT RISK)', shelter: 'COMMUNITY HALL' }
    }
  },
  '10:30': {
    time: '10:30',
    incident: {
      id: 'WF-2024-CA-01',
      name: 'Wildfire Simulation',
      type: 'Wildfire',
      severity: 'Critical',
      confidence: 92,
      affectedPopulation: 3500,
      affectedArea: 8.4,
      roadsAffected: 8,
      criticalFacilitiesAffected: 1,
    },
    recommendation: {
      id: 'WF-REC-1030',
      title: 'COMMANDER RECOMMENDATION',
      description: 'Prepare Community Evacuation.',
      confidence: 92,
      estimatedPopulation: 3500,
      resourcesRequired: { fireTrucks: 18, helicopters: 3, ambulances: 8, buses: 10 },
      status: 'HUMAN APPROVAL REQUIRED',
    },
    scenarios: [
      { id: 'WF-B-6', type: 'BEST CASE', conditions: ['Fire lines hold.'], risk: 'Critical', probability: 20, population: 3500, roadsClosed: 8, hospitals: 1, sheltersNeeded: 4, recoveryTime: '3 Weeks', confidence: 75 },
      { id: 'WF-E-6', type: 'EXPECTED CASE', conditions: ['Fire encroaches on suburbs.'], risk: 'Critical', probability: 60, population: 5000, roadsClosed: 10, hospitals: 1, sheltersNeeded: 6, recoveryTime: '2 Months', confidence: 80 },
      { id: 'WF-W-6', type: 'WORST CASE', conditions: ['Highway cut off.'], risk: 'Critical', probability: 20, population: 8500, roadsClosed: 18, hospitals: 2, sheltersNeeded: 10, recoveryTime: '6 Months', confidence: 65 }
    ],
    warRoomMessages: [
      { id: 'wf-1030-1', agent: 'Infrastructure Intelligence', message: ['Main Highway Road Blocked by flames.', 'Alternative routes required for evacuation.'], status: 'VERIFIED' },
      { id: 'wf-1030-2', agent: 'Logistics Intelligence', message: ['Routing buses to secondary access roads.'], status: 'PROCESSING' },
      { id: 'wf-1030-5', agent: 'Commander AI', message: ['Consensus reached.'], status: 'Awaiting Human Approval', isCommander: true, recommendation: 'Prepare Community Evacuation.', reason: 'Highway blocked. Immediate extraction needed.', confidence: 92, requiredResources: '10 Buses, 8 Ambulances', approvalRequired: true }
    ],
    consensus: { satellite: 92, weather: 88, infrastructure: 95, logistics: 90 },
    resources: {
      ambulances: { available: 7, total: 15 },
      buses: { available: 0, total: 10 },
      shelterCapacity: { available: 500, total: 1500 },
      medicalTeams: { available: 2, total: 5 },
      fireCrews: { available: 2, total: 20 },
      helicopters: { available: 0, total: 3 }
    },
    mapState: {
      overlayType: 'Wildfire',
      fireScale: 1.4,
      roadColors: { routeA: 'rgba(239, 68, 68, 1)', routeB: 'rgba(239, 68, 68, 1)', routeC: 'rgba(239, 68, 68, 0.8)' },
      labels: { zoneA: 'VALLEY (EVACUATING)', hospital: 'MEDICAL CENTER (AT RISK)', shelter: 'COMMUNITY HALL' }
    }
  },
  '11:00': {
    time: '11:00',
    incident: {
      id: 'WF-2024-CA-01',
      name: 'Wildfire Simulation',
      type: 'Wildfire',
      severity: 'Critical',
      confidence: 95,
      affectedPopulation: 5000,
      affectedArea: 12.0,
      roadsAffected: 12,
      criticalFacilitiesAffected: 2,
    },
    recommendation: {
      id: 'WF-REC-1100',
      title: 'COMMANDER RECOMMENDATION',
      description: 'Execute Community Evacuation immediately.',
      confidence: 95,
      estimatedPopulation: 5000,
      resourcesRequired: { fireTrucks: 20, helicopters: 3, ambulances: 12, buses: 10 },
      status: 'HUMAN APPROVAL REQUIRED',
    },
    scenarios: [
      { id: 'WF-B-7', type: 'BEST CASE', conditions: ['Evacuation succeeds smoothly.'], risk: 'Critical', probability: 10, population: 5000, roadsClosed: 12, hospitals: 2, sheltersNeeded: 6, recoveryTime: '1 Month', confidence: 85 },
      { id: 'WF-E-7', type: 'EXPECTED CASE', conditions: ['Some property loss.'], risk: 'Critical', probability: 65, population: 6500, roadsClosed: 15, hospitals: 2, sheltersNeeded: 8, recoveryTime: '3 Months', confidence: 80 },
      { id: 'WF-W-7', type: 'WORST CASE', conditions: ['Massive destruction.'], risk: 'Critical', probability: 25, population: 10000, roadsClosed: 25, hospitals: 3, sheltersNeeded: 12, recoveryTime: '1 Year+', confidence: 70 }
    ],
    warRoomMessages: [
      { id: 'wf-11-1', agent: 'Satellite Intelligence', message: ['Fire front reached community borders.'], status: 'VERIFIED' },
      { id: 'wf-11-2', agent: 'Logistics Intelligence', message: ['Buses loading at secondary rendezvous points.'], status: 'UPDATED' },
      { id: 'wf-11-5', agent: 'Commander AI', message: ['Consensus reached.'], status: 'Awaiting Human Approval', isCommander: true, recommendation: 'Deploy Fire Crews & Execute Community Evacuation.', reason: 'Immediate life safety threat.', confidence: 95, requiredResources: 'All available buses and ambulances.', approvalRequired: true }
    ],
    consensus: { satellite: 98, weather: 90, infrastructure: 95, logistics: 95 },
    resources: {
      ambulances: { available: 3, total: 15 },
      buses: { available: 0, total: 10 },
      shelterCapacity: { available: 0, total: 1500 },
      medicalTeams: { available: 1, total: 5 },
      fireCrews: { available: 0, total: 20 },
      helicopters: { available: 0, total: 3 }
    },
    mapState: {
      overlayType: 'Wildfire',
      fireScale: 1.8,
      roadColors: { routeA: 'rgba(239, 68, 68, 1)', routeB: 'rgba(239, 68, 68, 1)', routeC: 'rgba(239, 68, 68, 1)' },
      labels: { zoneA: 'VALLEY (ENGULFED)', hospital: 'MEDICAL CENTER (EVACUATED)', shelter: 'COMMUNITY HALL' }
    }
  },
};
