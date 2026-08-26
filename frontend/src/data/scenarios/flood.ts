import type { TimeState } from '../../types';

export const floodScenario: Record<string, TimeState> = {
  '08:00': {
    time: '08:00',
    incident: {
      id: 'INC-2024-KRL-01',
      name: 'Kerala Flood Simulation',
      type: 'Flood',
      severity: 'Low',
      confidence: 35,
      affectedPopulation: 0,
      affectedArea: 0,
      roadsAffected: 0,
      criticalFacilitiesAffected: 0,
    },
    recommendation: {
      id: 'REC-0800',
      title: 'COMMANDER RECOMMENDATION',
      description: 'Monitor rainfall.',
      confidence: 35,
      estimatedPopulation: 0,
      resourcesRequired: { buses: 0, boats: 0, ambulances: 0 },
      status: 'HUMAN APPROVAL REQUIRED',
    },
    scenarios: [
      { id: 'SCN-B-1', type: 'BEST CASE', conditions: ['Rain stops.'], risk: 'Low', probability: 40, population: 0, roadsClosed: 0, hospitals: 0, sheltersNeeded: 0, recoveryTime: '2 Days', confidence: 85 },
      { id: 'SCN-E-1', type: 'EXPECTED CASE', conditions: ['Rainfall continues.'], risk: 'Moderate', probability: 45, population: 1500, roadsClosed: 2, hospitals: 0, sheltersNeeded: 1, recoveryTime: '4 Days', confidence: 75 },
      { id: 'SCN-W-1', type: 'WORST CASE', conditions: ['Heavy rainfall accelerates.'], risk: 'High', probability: 15, population: 5200, roadsClosed: 8, hospitals: 1, sheltersNeeded: 3, recoveryTime: '1 Week', confidence: 60 }
    ],
    warRoomMessages: [
      { id: '08-1', agent: 'Satellite Intelligence', message: ['No flooding detected.', 'Surface imaging nominal.'], status: 'VERIFIED' },
      { id: '08-2', agent: 'Weather Intelligence', message: ['Normal weather patterns observed.', 'Slight chance of rain in the next hour.'], status: 'ANALYZING' },
      { id: '08-3', agent: 'Infrastructure Intelligence', message: ['All bridges and critical facilities operating normally.'], status: 'VERIFIED' },
      { id: '08-4', agent: 'Logistics Intelligence', message: ['All resources at standard readiness.'], status: 'VERIFIED' },
      { id: '08-5', agent: 'Commander AI', message: ['Consensus reached.'], status: 'UPDATED', isCommander: true, recommendation: 'Monitor rainfall.', reason: 'Standard procedure for current season.', confidence: 35, requiredResources: 'None', approvalRequired: false }
    ],
    consensus: { satellite: 95, weather: 88, infrastructure: 98, logistics: 95 },
    resources: {
      ambulances: { available: 18, total: 18 },
      boats: { available: 8, total: 8 },
      buses: { available: 20, total: 20 },
      shelterCapacity: { available: 2800, total: 2800 },
      medicalTeams: { available: 10, total: 10 },
    },
    mapState: {
      overlayType: 'Flood',
      floodScale: 0.1,
      roadColors: { routeA: 'rgba(148, 163, 184, 0.3)', routeB: 'rgba(148, 163, 184, 0.3)', routeC: 'rgba(148, 163, 184, 0.3)' },
      labels: { zoneA: 'ZONE A', hospital: 'HOSPITAL', shelter: 'SHELTER A' }
    }
  },
  '08:30': {
    time: '08:30',
    incident: {
      id: 'INC-2024-KRL-01',
      name: 'Kerala Flood Simulation',
      type: 'Flood',
      severity: 'Low',
      confidence: 45,
      affectedPopulation: 0,
      affectedArea: 2.1,
      roadsAffected: 0,
      criticalFacilitiesAffected: 0,
    },
    recommendation: {
      id: 'REC-0830',
      title: 'COMMANDER RECOMMENDATION',
      description: 'Monitor rainfall. Heavy rainfall begins.',
      confidence: 45,
      estimatedPopulation: 0,
      resourcesRequired: { buses: 0, boats: 0, ambulances: 0 },
      status: 'HUMAN APPROVAL REQUIRED',
    },
    scenarios: [
      { id: 'SCN-B-2', type: 'BEST CASE', conditions: ['Rain stops.'], risk: 'Low', probability: 30, population: 0, roadsClosed: 0, hospitals: 0, sheltersNeeded: 0, recoveryTime: '3 Days', confidence: 80 },
      { id: 'SCN-E-2', type: 'EXPECTED CASE', conditions: ['Heavy rainfall continues.'], risk: 'Moderate', probability: 50, population: 2100, roadsClosed: 3, hospitals: 0, sheltersNeeded: 1, recoveryTime: '5 Days', confidence: 70 },
      { id: 'SCN-W-2', type: 'WORST CASE', conditions: ['River level increasing rapidly.'], risk: 'High', probability: 20, population: 7500, roadsClosed: 12, hospitals: 1, sheltersNeeded: 4, recoveryTime: '2 Weeks', confidence: 65 }
    ],
    warRoomMessages: [
      { id: '0830-1', agent: 'Weather Intelligence', message: ['Heavy rainfall has begun.', 'Intensity models suggest prolonged precipitation.'], status: 'VERIFIED' },
      { id: '0830-2', agent: 'Satellite Intelligence', message: ['Minor accumulation detected in lower basin.', 'No severe threat identified.'], status: 'PROCESSING' },
      { id: '0830-3', agent: 'Infrastructure Intelligence', message: ['Initial drain systems operating at 40% capacity.'], status: 'ANALYZING' },
      { id: '0830-4', agent: 'Logistics Intelligence', message: ['Inventory levels checked. Ready for potential dispatch.'], status: 'VERIFIED' },
      { id: '0830-5', agent: 'Commander AI', message: ['Consensus reached.'], status: 'UPDATED', isCommander: true, recommendation: 'Monitor rainfall. Heavy rainfall begins.', reason: 'Rainfall intensity increasing.', confidence: 45, requiredResources: 'None', approvalRequired: false }
    ],
    consensus: { satellite: 85, weather: 75, infrastructure: 90, logistics: 92 },
    resources: {
      ambulances: { available: 18, total: 18 },
      boats: { available: 8, total: 8 },
      buses: { available: 20, total: 20 },
      shelterCapacity: { available: 2800, total: 2800 },
      medicalTeams: { available: 10, total: 10 },
    },
    mapState: {
      overlayType: 'Flood',
      floodScale: 0.3,
      roadColors: { routeA: 'rgba(148, 163, 184, 0.3)', routeB: 'rgba(148, 163, 184, 0.3)', routeC: 'rgba(148, 163, 184, 0.3)' },
      labels: { zoneA: 'ZONE A', hospital: 'HOSPITAL', shelter: 'SHELTER A' }
    }
  },
  '09:00': {
    time: '09:00',
    incident: {
      id: 'INC-2024-KRL-01',
      name: 'Kerala Flood Simulation',
      type: 'Flood',
      severity: 'Moderate',
      confidence: 55,
      affectedPopulation: 1200,
      affectedArea: 5.4,
      roadsAffected: 1,
      criticalFacilitiesAffected: 0,
    },
    recommendation: {
      id: 'REC-0900',
      title: 'COMMANDER RECOMMENDATION',
      description: 'Prepare evacuation teams.',
      confidence: 55,
      estimatedPopulation: 1200,
      resourcesRequired: { buses: 2, boats: 1, ambulances: 0 },
      status: 'HUMAN APPROVAL REQUIRED',
    },
    scenarios: [
      { id: 'SCN-B-3', type: 'BEST CASE', conditions: ['Rain slows down.'], risk: 'Moderate', probability: 25, population: 1500, roadsClosed: 1, hospitals: 0, sheltersNeeded: 1, recoveryTime: '3 Days', confidence: 75 },
      { id: 'SCN-E-3', type: 'EXPECTED CASE', conditions: ['River floods nearby zones.'], risk: 'High', probability: 55, population: 4200, roadsClosed: 5, hospitals: 1, sheltersNeeded: 2, recoveryTime: '1 Week', confidence: 68 },
      { id: 'SCN-W-3', type: 'WORST CASE', conditions: ['Bridge at risk.'], risk: 'Critical', probability: 20, population: 12500, roadsClosed: 18, hospitals: 2, sheltersNeeded: 6, recoveryTime: '3 Weeks', confidence: 60 }
    ],
    warRoomMessages: [
      { id: '09-1', agent: 'Weather Intelligence', message: ['Heavy rainfall expected for another 40 minutes.', 'Rainfall intensity increasing by approximately 18%.'], status: 'VERIFIED' },
      { id: '09-2', agent: 'Satellite Intelligence', message: ['Minor flooding observed in the eastern sector.', 'Water levels rising rapidly.'], status: 'UPDATED' },
      { id: '09-3', agent: 'Infrastructure Intelligence', message: ['River level increasing past standard markers.', 'Storm drains nearing capacity.'], status: 'PROCESSING' },
      { id: '09-4', agent: 'Logistics Intelligence', message: ['Reviewing evacuation team rosters.'], status: 'ANALYZING' },
      { id: '09-5', agent: 'Commander AI', message: ['Consensus reached.'], status: 'Awaiting Human Approval', isCommander: true, recommendation: 'Prepare evacuation teams.', reason: 'Flood models predict imminent hazard for Zone A.', confidence: 55, requiredResources: '2 Buses, 1 Boat', approvalRequired: true }
    ],
    consensus: { satellite: 70, weather: 65, infrastructure: 80, logistics: 85 },
    resources: {
      ambulances: { available: 17, total: 18 },
      boats: { available: 8, total: 8 },
      buses: { available: 20, total: 20 },
      shelterCapacity: { available: 2800, total: 2800 },
      medicalTeams: { available: 9, total: 10 },
    },
    mapState: {
      overlayType: 'Flood',
      floodScale: 0.6,
      roadColors: { routeA: 'rgba(239, 68, 68, 0.5)', routeB: 'rgba(148, 163, 184, 0.3)', routeC: 'rgba(148, 163, 184, 0.3)' },
      labels: { zoneA: 'ZONE A (AT RISK)', hospital: 'HOSPITAL', shelter: 'SHELTER A' }
    }
  },
  '09:30': {
    time: '09:30',
    incident: {
      id: 'INC-2024-KRL-01',
      name: 'Kerala Flood Simulation',
      type: 'Flood',
      severity: 'Moderate',
      confidence: 62,
      affectedPopulation: 4200,
      affectedArea: 8.2,
      roadsAffected: 4,
      criticalFacilitiesAffected: 1,
    },
    recommendation: {
      id: 'REC-0930',
      title: 'COMMANDER RECOMMENDATION',
      description: 'Prepare evacuation teams. Localized flooding reported.',
      confidence: 62,
      estimatedPopulation: 4200,
      resourcesRequired: { buses: 4, boats: 2, ambulances: 1 },
      status: 'HUMAN APPROVAL REQUIRED',
    },
    scenarios: [
      { id: 'SCN-B-4', type: 'BEST CASE', conditions: ['Rain stops.'], risk: 'Moderate', probability: 20, population: 4200, roadsClosed: 4, hospitals: 1, sheltersNeeded: 2, recoveryTime: '4 Days', confidence: 78 },
      { id: 'SCN-E-4', type: 'EXPECTED CASE', conditions: ['Flood expands.'], risk: 'High', probability: 60, population: 8500, roadsClosed: 9, hospitals: 2, sheltersNeeded: 4, recoveryTime: '10 Days', confidence: 71 },
      { id: 'SCN-W-4', type: 'WORST CASE', conditions: ['Road access cut.'], risk: 'Critical', probability: 20, population: 18000, roadsClosed: 25, hospitals: 3, sheltersNeeded: 8, recoveryTime: '4 Weeks', confidence: 55 }
    ],
    warRoomMessages: [
      { id: '0930-1', agent: 'Satellite Intelligence', message: ['Localized flooding detected.', 'Zone A perimeter breached.'], status: 'VERIFIED' },
      { id: '0930-2', agent: 'Infrastructure Intelligence', message: ['4 minor roads currently submerged.', 'Critical facility power grids stable.'], status: 'UPDATED' },
      { id: '0930-3', agent: 'Weather Intelligence', message: ['Precipitation bands stalling over the basin.'], status: 'VERIFIED' },
      { id: '0930-4', agent: 'Logistics Intelligence', message: ['Evacuation teams on standby.', 'Resources staged at high ground.'], status: 'PROCESSING' },
      { id: '0930-5', agent: 'Commander AI', message: ['Consensus reached.'], status: 'Awaiting Human Approval', isCommander: true, recommendation: 'Prepare evacuation teams. Localized flooding reported.', reason: 'Zone A perimeter breach confirmed.', confidence: 62, requiredResources: '4 Buses, 2 Boats, 1 Ambulance', approvalRequired: true }
    ],
    consensus: { satellite: 60, weather: 55, infrastructure: 70, logistics: 75 },
    resources: {
      ambulances: { available: 15, total: 18 },
      boats: { available: 7, total: 8 },
      buses: { available: 16, total: 20 },
      shelterCapacity: { available: 2200, total: 2800 },
      medicalTeams: { available: 7, total: 10 },
    },
    mapState: {
      overlayType: 'Flood',
      floodScale: 1.0,
      roadColors: { routeA: 'rgba(239, 68, 68, 0.5)', routeB: 'rgba(239, 68, 68, 0.5)', routeC: 'rgba(148, 163, 184, 0.3)' },
      labels: { zoneA: 'ZONE A (AT RISK)', hospital: 'HOSPITAL', shelter: 'SHELTER A' }
    }
  },
  '10:00': {
    time: '10:00',
    incident: {
      id: 'INC-2024-KRL-01',
      name: 'Kerala Flood Simulation',
      type: 'Flood',
      severity: 'High',
      confidence: 75,
      affectedPopulation: 8500,
      affectedArea: 10.5,
      roadsAffected: 8,
      criticalFacilitiesAffected: 2,
    },
    recommendation: {
      id: 'REC-1000',
      title: 'COMMANDER RECOMMENDATION',
      description: 'Prepare evacuation teams. Flood expanding east.',
      confidence: 75,
      estimatedPopulation: 8500,
      resourcesRequired: { buses: 8, boats: 4, ambulances: 3 },
      status: 'HUMAN APPROVAL REQUIRED',
    },
    scenarios: [
      { id: 'SCN-B-5', type: 'BEST CASE', conditions: ['Rain stops.'], risk: 'High', probability: 15, population: 8500, roadsClosed: 8, hospitals: 2, sheltersNeeded: 4, recoveryTime: '6 Days', confidence: 80 },
      { id: 'SCN-E-5', type: 'EXPECTED CASE', conditions: ['Flood expands east.'], risk: 'Critical', probability: 65, population: 14200, roadsClosed: 14, hospitals: 3, sheltersNeeded: 7, recoveryTime: '2 Weeks', confidence: 75 },
      { id: 'SCN-W-5', type: 'WORST CASE', conditions: ['Bridge failure + hospital isolated.'], risk: 'Critical', probability: 20, population: 25000, roadsClosed: 35, hospitals: 4, sheltersNeeded: 12, recoveryTime: '1 Month', confidence: 50 }
    ],
    warRoomMessages: [
      { id: '10-1', agent: 'Satellite Intelligence', message: ['Flood expanding east.', 'Hazard area covers approximately 10.5 km².'], status: 'VERIFIED' },
      { id: '10-2', agent: 'Infrastructure Intelligence', message: ['8 roads now closed.', 'Water encroaching on Hospital access routes.'], status: 'UPDATED' },
      { id: '10-3', agent: 'Logistics Intelligence', message: ['Current resources are sufficient for Zone A evacuation.', 'Staging locations secure.'], status: 'VERIFIED' },
      { id: '10-4', agent: 'Weather Intelligence', message: ['Models predict peak flooding within 1 hour.'], status: 'ANALYZING' },
      { id: '10-5', agent: 'Commander AI', message: ['Consensus reached.'], status: 'Awaiting Human Approval', isCommander: true, recommendation: 'Prepare evacuation teams. Flood expanding east.', reason: 'Hospital access routes threatened.', confidence: 75, requiredResources: '8 Buses, 4 Boats, 3 Ambulances', approvalRequired: true }
    ],
    consensus: { satellite: 50, weather: 45, infrastructure: 60, logistics: 65 },
    resources: {
      ambulances: { available: 12, total: 18 },
      boats: { available: 6, total: 8 },
      buses: { available: 12, total: 20 },
      shelterCapacity: { available: 1800, total: 2800 },
      medicalTeams: { available: 5, total: 10 },
    },
    mapState: {
      overlayType: 'Flood',
      floodScale: 1.4,
      roadColors: { routeA: 'rgba(239, 68, 68, 0.8)', routeB: 'rgba(239, 68, 68, 0.5)', routeC: 'rgba(239, 68, 68, 0.5)' },
      labels: { zoneA: 'ZONE A (FLOODING)', hospital: 'HOSPITAL (AT RISK)', shelter: 'SHELTER A' }
    }
  },
  '10:30': {
    time: '10:30',
    incident: {
      id: 'INC-2024-KRL-01',
      name: 'Kerala Flood Simulation',
      type: 'Flood',
      severity: 'High',
      confidence: 82,
      affectedPopulation: 14200,
      affectedArea: 11.8,
      roadsAffected: 11,
      criticalFacilitiesAffected: 2,
    },
    recommendation: {
      id: 'REC-1030',
      title: 'COMMANDER RECOMMENDATION',
      description: 'Deploy rescue boats.',
      confidence: 82,
      estimatedPopulation: 14200,
      resourcesRequired: { buses: 12, boats: 6, ambulances: 5 },
      status: 'HUMAN APPROVAL REQUIRED',
    },
    scenarios: [
      { id: 'SCN-B-6', type: 'BEST CASE', conditions: ['Rain stops.'], risk: 'High', probability: 10, population: 14200, roadsClosed: 11, hospitals: 2, sheltersNeeded: 6, recoveryTime: '1 Week', confidence: 82 },
      { id: 'SCN-E-6', type: 'EXPECTED CASE', conditions: ['Road closures escalate.'], risk: 'Critical', probability: 70, population: 18000, roadsClosed: 18, hospitals: 3, sheltersNeeded: 9, recoveryTime: '3 Weeks', confidence: 78 },
      { id: 'SCN-W-6', type: 'WORST CASE', conditions: ['Bridge collapse.', 'Hospital isolated.'], risk: 'Critical', probability: 20, population: 32000, roadsClosed: 42, hospitals: 5, sheltersNeeded: 15, recoveryTime: '2 Months', confidence: 60 }
    ],
    warRoomMessages: [
      { id: '1030-1', agent: 'Infrastructure Intelligence', message: ['Bridge B remains operational.', 'Road R14 expected to become inaccessible within 25 minutes.'], status: 'VERIFIED' },
      { id: '1030-2', agent: 'Satellite Intelligence', message: ['Major road closure confirmed on route B.'], status: 'UPDATED' },
      { id: '1030-3', agent: 'Logistics Intelligence', message: ['Recommending immediate deployment of aquatic assets.', 'Shelter capacity dropping.'], status: 'PROCESSING' },
      { id: '1030-4', agent: 'Weather Intelligence', message: ['Rainfall easing slightly, but watershed remains overloaded.'], status: 'VERIFIED' },
      { id: '1030-5', agent: 'Commander AI', message: ['Consensus reached.'], status: 'Awaiting Human Approval', isCommander: true, recommendation: 'Deploy rescue boats.', reason: 'Road R14 impending failure requires aquatic evacuation.', confidence: 82, requiredResources: '12 Buses, 6 Boats, 5 Ambulances', approvalRequired: true }
    ],
    consensus: { satellite: 40, weather: 40, infrastructure: 50, logistics: 55 },
    resources: {
      ambulances: { available: 8, total: 18 },
      boats: { available: 4, total: 8 },
      buses: { available: 8, total: 20 },
      shelterCapacity: { available: 1200, total: 2800 },
      medicalTeams: { available: 3, total: 10 },
    },
    mapState: {
      overlayType: 'Flood',
      floodScale: 1.8,
      roadColors: { routeA: 'rgba(239, 68, 68, 0.8)', routeB: 'rgba(239, 68, 68, 0.8)', routeC: 'rgba(239, 68, 68, 0.5)' },
      labels: { zoneA: 'ZONE A (FLOODING)', hospital: 'HOSPITAL (AT RISK)', shelter: 'SHELTER A' }
    }
  },
  '11:00': {
    time: '11:00',
    incident: {
      id: 'INC-2024-KRL-01',
      name: 'Kerala Flood Simulation',
      type: 'Flood',
      severity: 'Critical',
      confidence: 89,
      affectedPopulation: 18324,
      affectedArea: 12.4,
      roadsAffected: 14,
      criticalFacilitiesAffected: 3,
    },
    recommendation: {
      id: 'REC-1100',
      title: 'COMMANDER RECOMMENDATION',
      description: 'Evacuate Zone A immediately.',
      confidence: 89,
      estimatedPopulation: 18324,
      resourcesRequired: { buses: 16, boats: 8, ambulances: 8 },
      status: 'HUMAN APPROVAL REQUIRED',
    },
    scenarios: [
      { id: 'SCN-B-7', type: 'BEST CASE', conditions: ['Rain stops.'], risk: 'High', probability: 10, population: 18324, roadsClosed: 14, hospitals: 3, sheltersNeeded: 8, recoveryTime: '2 Weeks', confidence: 85 },
      { id: 'SCN-E-7', type: 'EXPECTED CASE', conditions: ['Evacuation proceeds.'], risk: 'Critical', probability: 60, population: 22000, roadsClosed: 22, hospitals: 4, sheltersNeeded: 10, recoveryTime: '1 Month', confidence: 88 },
      { id: 'SCN-W-7', type: 'WORST CASE', conditions: ['Bridge collapse.', 'Hospital isolated.'], risk: 'Critical', probability: 30, population: 45000, roadsClosed: 55, hospitals: 6, sheltersNeeded: 20, recoveryTime: '3 Months', confidence: 65 }
    ],
    warRoomMessages: [
      { id: '11-1', agent: 'Satellite Intelligence', message: ['Critical expansion detected.', 'Flood footprint expanded approximately 2.1 km toward the eastern corridor.'], status: 'VERIFIED' },
      { id: '11-2', agent: 'Infrastructure Intelligence', message: ['14 roads closed.', 'Hospital completely isolated from land traffic.'], status: 'UPDATED' },
      { id: '11-3', agent: 'Logistics Intelligence', message: ['Current resources are sufficient for Zone A evacuation.', 'Recommend deployment of 16 buses and 8 boats.'], status: 'VERIFIED' },
      { id: '11-4', agent: 'Weather Intelligence', message: ['Peak flooding confirmed.'], status: 'ANALYZING' },
      { id: '11-5', agent: 'Commander AI', message: ['Consensus reached.', 'Recommendation generated.'], status: 'Awaiting Human Approval', isCommander: true, recommendation: 'Evacuate Zone A immediately.', reason: 'Critical facility isolation and maximum hazard spread.', confidence: 89, requiredResources: '16 Buses, 8 Boats, 8 Ambulances', approvalRequired: true }
    ],
    consensus: { satellite: 30, weather: 35, infrastructure: 40, logistics: 45 },
    resources: {
      ambulances: { available: 5, total: 18 },
      boats: { available: 2, total: 8 },
      buses: { available: 2, total: 20 },
      shelterCapacity: { available: 950, total: 2800 },
      medicalTeams: { available: 1, total: 10 },
    },
    mapState: {
      overlayType: 'Flood',
      floodScale: 2.2,
      roadColors: { routeA: 'rgba(239, 68, 68, 1)', routeB: 'rgba(239, 68, 68, 1)', routeC: 'rgba(239, 68, 68, 0.8)' },
      labels: { zoneA: 'ZONE A (EVACUATING)', hospital: 'HOSPITAL (ISOLATED)', shelter: 'SHELTER A' }
    }
  },
};
