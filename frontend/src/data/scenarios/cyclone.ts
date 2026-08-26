import type { TimeState } from '../../types';

export const cycloneScenario: Record<string, TimeState> = {
  '08:00': {
    time: '08:00',
    incident: {
      id: 'CYC-2024-BOB-01',
      name: 'Cyclone Simulation',
      type: 'Cyclone',
      severity: 'Low',
      confidence: 45,
      affectedPopulation: 0,
      affectedArea: 50,
      roadsAffected: 0,
      criticalFacilitiesAffected: 0,
    },
    recommendation: {
      id: 'CYC-REC-0800',
      title: 'COMMANDER RECOMMENDATION',
      description: 'Monitor depression.',
      confidence: 45,
      estimatedPopulation: 0,
      resourcesRequired: { buses: 0, boats: 0, ambulances: 0 },
      status: 'HUMAN APPROVAL REQUIRED',
    },
    scenarios: [
      { id: 'CYC-B-1', type: 'BEST CASE', conditions: ['Depression weakens.'], risk: 'Low', probability: 40, population: 0, roadsClosed: 0, hospitals: 0, sheltersNeeded: 0, recoveryTime: '1 Day', confidence: 85 },
      { id: 'CYC-E-1', type: 'EXPECTED CASE', conditions: ['Develops into cyclonic storm.'], risk: 'Moderate', probability: 50, population: 5000, roadsClosed: 5, hospitals: 1, sheltersNeeded: 2, recoveryTime: '1 Week', confidence: 75 },
      { id: 'CYC-W-1', type: 'WORST CASE', conditions: ['Rapid intensification.'], risk: 'High', probability: 10, population: 25000, roadsClosed: 15, hospitals: 2, sheltersNeeded: 8, recoveryTime: '1 Month', confidence: 60 }
    ],
    warRoomMessages: [
      { id: 'cyc-08-1', agent: 'Weather Intelligence', message: ['Deep depression formed over bay.', 'Wind speeds at 55 km/h.'], status: 'VERIFIED' },
      { id: 'cyc-08-5', agent: 'Commander AI', message: ['Consensus reached.'], status: 'UPDATED', isCommander: true, recommendation: 'Monitor depression.', reason: 'System tracking towards coast.', confidence: 45, requiredResources: 'None', approvalRequired: false }
    ],
    consensus: { satellite: 90, weather: 95, infrastructure: 90, logistics: 95 },
    resources: {
      ambulances: { available: 20, total: 20 },
      boats: { available: 15, total: 15 },
      buses: { available: 30, total: 30 },
      shelterCapacity: { available: 5000, total: 5000 },
      medicalTeams: { available: 10, total: 10 },
      rescueTeams: { available: 12, total: 12 }
    },
    mapState: {
      overlayType: 'Cyclone',
      cycloneScale: 0.2,
      roadColors: { routeA: 'rgba(148, 163, 184, 0.3)', routeB: 'rgba(148, 163, 184, 0.3)', routeC: 'rgba(148, 163, 184, 0.3)' },
      labels: { zoneA: 'COASTAL ZONE', hospital: 'DISTRICT HOSPITAL', shelter: 'COASTAL SHELTER' }
    }
  },
  '08:30': {
    time: '08:30',
    incident: {
      id: 'CYC-2024-BOB-01',
      name: 'Cyclone Simulation',
      type: 'Cyclone',
      severity: 'Moderate',
      confidence: 65,
      affectedPopulation: 0,
      affectedArea: 100,
      roadsAffected: 0,
      criticalFacilitiesAffected: 0,
    },
    recommendation: {
      id: 'CYC-REC-0830',
      title: 'COMMANDER RECOMMENDATION',
      description: 'Issue Cyclone Alert.',
      confidence: 65,
      estimatedPopulation: 0,
      resourcesRequired: { buses: 0, boats: 0, ambulances: 0 },
      status: 'HUMAN APPROVAL REQUIRED',
    },
    scenarios: [
      { id: 'CYC-B-2', type: 'BEST CASE', conditions: ['Storm veers away.'], risk: 'Low', probability: 30, population: 0, roadsClosed: 0, hospitals: 0, sheltersNeeded: 0, recoveryTime: '3 Days', confidence: 75 },
      { id: 'CYC-E-2', type: 'EXPECTED CASE', conditions: ['Landfall in 24 hours.'], risk: 'High', probability: 55, population: 15000, roadsClosed: 8, hospitals: 1, sheltersNeeded: 5, recoveryTime: '2 Weeks', confidence: 70 },
      { id: 'CYC-W-2', type: 'WORST CASE', conditions: ['Severe Cyclonic Storm landfall.'], risk: 'Critical', probability: 15, population: 50000, roadsClosed: 30, hospitals: 3, sheltersNeeded: 15, recoveryTime: '2 Months', confidence: 60 }
    ],
    warRoomMessages: [
      { id: 'cyc-0830-1', agent: 'Satellite Intelligence', message: ['Eye formation detected.', 'System upgraded to Cyclonic Storm.'], status: 'VERIFIED' },
      { id: 'cyc-0830-2', agent: 'Logistics Intelligence', message: ['Preparing coastal shelters.'], status: 'PROCESSING' },
      { id: 'cyc-0830-5', agent: 'Commander AI', message: ['Consensus reached.'], status: 'UPDATED', isCommander: true, recommendation: 'Issue Cyclone Alert.', reason: 'Storm intensification confirmed.', confidence: 65, requiredResources: 'None', approvalRequired: true }
    ],
    consensus: { satellite: 95, weather: 92, infrastructure: 85, logistics: 90 },
    resources: {
      ambulances: { available: 20, total: 20 },
      boats: { available: 15, total: 15 },
      buses: { available: 30, total: 30 },
      shelterCapacity: { available: 5000, total: 5000 },
      medicalTeams: { available: 10, total: 10 },
      rescueTeams: { available: 12, total: 12 }
    },
    mapState: {
      overlayType: 'Cyclone',
      cycloneScale: 0.4,
      roadColors: { routeA: 'rgba(148, 163, 184, 0.3)', routeB: 'rgba(148, 163, 184, 0.3)', routeC: 'rgba(148, 163, 184, 0.3)' },
      labels: { zoneA: 'COASTAL ZONE (ALERT)', hospital: 'DISTRICT HOSPITAL', shelter: 'COASTAL SHELTER' }
    }
  },
  '09:00': {
    time: '09:00',
    incident: {
      id: 'CYC-2024-BOB-01',
      name: 'Cyclone Simulation',
      type: 'Cyclone',
      severity: 'Moderate',
      confidence: 75,
      affectedPopulation: 0,
      affectedArea: 150,
      roadsAffected: 0,
      criticalFacilitiesAffected: 0,
    },
    recommendation: {
      id: 'CYC-REC-0900',
      title: 'COMMANDER RECOMMENDATION',
      description: 'Secure Coastal Shelters. Wind Increasing.',
      confidence: 75,
      estimatedPopulation: 0,
      resourcesRequired: { buses: 5, boats: 0, ambulances: 2 },
      status: 'HUMAN APPROVAL REQUIRED',
    },
    scenarios: [
      { id: 'CYC-B-3', type: 'BEST CASE', conditions: ['Storm weakens before landfall.'], risk: 'Moderate', probability: 25, population: 5000, roadsClosed: 3, hospitals: 0, sheltersNeeded: 2, recoveryTime: '1 Week', confidence: 70 },
      { id: 'CYC-E-3', type: 'EXPECTED CASE', conditions: ['Landfall track confirmed.'], risk: 'High', probability: 60, population: 25000, roadsClosed: 12, hospitals: 1, sheltersNeeded: 8, recoveryTime: '3 Weeks', confidence: 75 },
      { id: 'CYC-W-3', type: 'WORST CASE', conditions: ['Super cyclonic storm.'], risk: 'Critical', probability: 15, population: 100000, roadsClosed: 40, hospitals: 4, sheltersNeeded: 30, recoveryTime: '3 Months', confidence: 60 }
    ],
    warRoomMessages: [
      { id: 'cyc-09-1', agent: 'Weather Intelligence', message: ['Wind Increasing to 90 km/h.', 'Gale winds reaching coast.'], status: 'VERIFIED' },
      { id: 'cyc-09-2', agent: 'Infrastructure Intelligence', message: ['Securing coastal power grids.'], status: 'PROCESSING' },
      { id: 'cyc-09-5', agent: 'Commander AI', message: ['Consensus reached.'], status: 'Awaiting Human Approval', isCommander: true, recommendation: 'Secure Coastal Shelters.', reason: 'Gale winds approaching.', confidence: 75, requiredResources: '5 Buses, 2 Ambulances', approvalRequired: true }
    ],
    consensus: { satellite: 95, weather: 98, infrastructure: 90, logistics: 85 },
    resources: {
      ambulances: { available: 18, total: 20 },
      boats: { available: 15, total: 15 },
      buses: { available: 25, total: 30 },
      shelterCapacity: { available: 5000, total: 5000 },
      medicalTeams: { available: 10, total: 10 },
      rescueTeams: { available: 12, total: 12 }
    },
    mapState: {
      overlayType: 'Cyclone',
      cycloneScale: 0.6,
      roadColors: { routeA: 'rgba(148, 163, 184, 0.3)', routeB: 'rgba(148, 163, 184, 0.3)', routeC: 'rgba(148, 163, 184, 0.3)' },
      labels: { zoneA: 'COASTAL ZONE (WINDS)', hospital: 'DISTRICT HOSPITAL', shelter: 'COASTAL SHELTER' }
    }
  },
  '09:30': {
    time: '09:30',
    incident: {
      id: 'CYC-2024-BOB-01',
      name: 'Cyclone Simulation',
      type: 'Cyclone',
      severity: 'High',
      confidence: 85,
      affectedPopulation: 10000,
      affectedArea: 250,
      roadsAffected: 4,
      criticalFacilitiesAffected: 1,
    },
    recommendation: {
      id: 'CYC-REC-0930',
      title: 'COMMANDER RECOMMENDATION',
      description: 'Initiate Coastal Evacuation. Landfall Expected.',
      confidence: 85,
      estimatedPopulation: 10000,
      resourcesRequired: { buses: 15, boats: 2, ambulances: 5 },
      status: 'HUMAN APPROVAL REQUIRED',
    },
    scenarios: [
      { id: 'CYC-B-4', type: 'BEST CASE', conditions: ['Landfall in low-population area.'], risk: 'High', probability: 20, population: 10000, roadsClosed: 5, hospitals: 1, sheltersNeeded: 3, recoveryTime: '2 Weeks', confidence: 75 },
      { id: 'CYC-E-4', type: 'EXPECTED CASE', conditions: ['Direct hit on Zone A.'], risk: 'Critical', probability: 65, population: 45000, roadsClosed: 20, hospitals: 2, sheltersNeeded: 12, recoveryTime: '1 Month', confidence: 80 },
      { id: 'CYC-W-4', type: 'WORST CASE', conditions: ['Extreme storm surge.'], risk: 'Critical', probability: 15, population: 150000, roadsClosed: 55, hospitals: 5, sheltersNeeded: 45, recoveryTime: '6 Months', confidence: 65 }
    ],
    warRoomMessages: [
      { id: 'cyc-0930-1', agent: 'Satellite Intelligence', message: ['Storm Eye Shifted slightly north.', 'Landfall Expected within 3 hours.'], status: 'UPDATED' },
      { id: 'cyc-0930-2', agent: 'Logistics Intelligence', message: ['Coastal shelters opened. Stocking supplies.'], status: 'VERIFIED' },
      { id: 'cyc-0930-5', agent: 'Commander AI', message: ['Consensus reached.'], status: 'Awaiting Human Approval', isCommander: true, recommendation: 'Initiate Coastal Evacuation.', reason: 'Landfall imminent. Storm tracking directly to coast.', confidence: 85, requiredResources: '15 Buses, 5 Ambulances', approvalRequired: true }
    ],
    consensus: { satellite: 95, weather: 92, infrastructure: 88, logistics: 95 },
    resources: {
      ambulances: { available: 15, total: 20 },
      boats: { available: 13, total: 15 },
      buses: { available: 15, total: 30 },
      shelterCapacity: { available: 4500, total: 5000 },
      medicalTeams: { available: 8, total: 10 },
      rescueTeams: { available: 10, total: 12 }
    },
    mapState: {
      overlayType: 'Cyclone',
      cycloneScale: 0.8,
      roadColors: { routeA: 'rgba(239, 68, 68, 0.5)', routeB: 'rgba(148, 163, 184, 0.3)', routeC: 'rgba(148, 163, 184, 0.3)' },
      labels: { zoneA: 'COASTAL ZONE (AT RISK)', hospital: 'DISTRICT HOSPITAL', shelter: 'COASTAL SHELTER (OPEN)' }
    }
  },
  '10:00': {
    time: '10:00',
    incident: {
      id: 'CYC-2024-BOB-01',
      name: 'Cyclone Simulation',
      type: 'Cyclone',
      severity: 'Critical',
      confidence: 90,
      affectedPopulation: 25000,
      affectedArea: 350,
      roadsAffected: 12,
      criticalFacilitiesAffected: 2,
    },
    recommendation: {
      id: 'CYC-REC-1000',
      title: 'COMMANDER RECOMMENDATION',
      description: 'Deploy Water Rescue Teams. Storm Surge detected.',
      confidence: 90,
      estimatedPopulation: 25000,
      resourcesRequired: { buses: 20, boats: 10, ambulances: 10 },
      status: 'HUMAN APPROVAL REQUIRED',
    },
    scenarios: [
      { id: 'CYC-B-5', type: 'BEST CASE', conditions: ['Surge lower than expected.'], risk: 'Critical', probability: 15, population: 25000, roadsClosed: 12, hospitals: 2, sheltersNeeded: 8, recoveryTime: '3 Weeks', confidence: 80 },
      { id: 'CYC-E-5', type: 'EXPECTED CASE', conditions: ['2-meter storm surge inundation.'], risk: 'Critical', probability: 70, population: 65000, roadsClosed: 35, hospitals: 3, sheltersNeeded: 20, recoveryTime: '2 Months', confidence: 85 },
      { id: 'CYC-W-5', type: 'WORST CASE', conditions: ['Sea wall breach.'], risk: 'Critical', probability: 15, population: 200000, roadsClosed: 80, hospitals: 6, sheltersNeeded: 60, recoveryTime: '1 Year', confidence: 70 }
    ],
    warRoomMessages: [
      { id: 'cyc-10-1', agent: 'Infrastructure Intelligence', message: ['Tide gauges show 1.5m Storm Surge.', 'Coastal roads inundated.'], status: 'VERIFIED' },
      { id: 'cyc-10-2', agent: 'Weather Intelligence', message: ['Wind speeds sustained at 130 km/h.'], status: 'UPDATED' },
      { id: 'cyc-10-5', agent: 'Commander AI', message: ['Consensus reached.'], status: 'Awaiting Human Approval', isCommander: true, recommendation: 'Deploy Water Rescue Teams.', reason: 'Storm surge inundating coastal areas.', confidence: 90, requiredResources: '10 Boats, 20 Buses', approvalRequired: true }
    ],
    consensus: { satellite: 92, weather: 98, infrastructure: 95, logistics: 90 },
    resources: {
      ambulances: { available: 10, total: 20 },
      boats: { available: 5, total: 15 },
      buses: { available: 10, total: 30 },
      shelterCapacity: { available: 3000, total: 5000 },
      medicalTeams: { available: 5, total: 10 },
      rescueTeams: { available: 4, total: 12 }
    },
    mapState: {
      overlayType: 'Cyclone',
      cycloneScale: 1.2,
      roadColors: { routeA: 'rgba(239, 68, 68, 0.8)', routeB: 'rgba(239, 68, 68, 0.5)', routeC: 'rgba(148, 163, 184, 0.3)' },
      labels: { zoneA: 'COASTAL ZONE (FLOODED)', hospital: 'DISTRICT HOSPITAL (AT RISK)', shelter: 'COASTAL SHELTER' }
    }
  },
  '10:30': {
    time: '10:30',
    incident: {
      id: 'CYC-2024-BOB-01',
      name: 'Cyclone Simulation',
      type: 'Cyclone',
      severity: 'Critical',
      confidence: 95,
      affectedPopulation: 50000,
      affectedArea: 500,
      roadsAffected: 25,
      criticalFacilitiesAffected: 4,
    },
    recommendation: {
      id: 'CYC-REC-1030',
      title: 'COMMANDER RECOMMENDATION',
      description: 'Activate Satellite Comms. Communication Failure reported.',
      confidence: 95,
      estimatedPopulation: 50000,
      resourcesRequired: { buses: 25, boats: 12, ambulances: 15 },
      status: 'HUMAN APPROVAL REQUIRED',
    },
    scenarios: [
      { id: 'CYC-B-6', type: 'BEST CASE', conditions: ['Comms restored quickly.'], risk: 'Critical', probability: 10, population: 50000, roadsClosed: 25, hospitals: 3, sheltersNeeded: 15, recoveryTime: '1 Month', confidence: 85 },
      { id: 'CYC-E-6', type: 'EXPECTED CASE', conditions: ['Widespread damage.'], risk: 'Critical', probability: 75, population: 85000, roadsClosed: 45, hospitals: 4, sheltersNeeded: 25, recoveryTime: '3 Months', confidence: 90 },
      { id: 'CYC-W-6', type: 'WORST CASE', conditions: ['Total infrastructure collapse.'], risk: 'Critical', probability: 15, population: 250000, roadsClosed: 100, hospitals: 8, sheltersNeeded: 80, recoveryTime: '1 Year+', confidence: 75 }
    ],
    warRoomMessages: [
      { id: 'cyc-1030-1', agent: 'Infrastructure Intelligence', message: ['Cell towers down in Zone A.', 'Communication Failure across coastal belt.'], status: 'VERIFIED' },
      { id: 'cyc-1030-2', agent: 'Logistics Intelligence', message: ['Distributing satellite phones to rescue teams.'], status: 'PROCESSING' },
      { id: 'cyc-1030-5', agent: 'Commander AI', message: ['Consensus reached.'], status: 'Awaiting Human Approval', isCommander: true, recommendation: 'Activate Satellite Comms.', reason: 'Terrestrial networks down.', confidence: 95, requiredResources: 'Sat-Comms Kit', approvalRequired: true }
    ],
    consensus: { satellite: 95, weather: 95, infrastructure: 98, logistics: 95 },
    resources: {
      ambulances: { available: 5, total: 20 },
      boats: { available: 3, total: 15 },
      buses: { available: 5, total: 30 },
      shelterCapacity: { available: 1500, total: 5000 },
      medicalTeams: { available: 2, total: 10 },
      rescueTeams: { available: 2, total: 12 }
    },
    mapState: {
      overlayType: 'Cyclone',
      cycloneScale: 1.6,
      roadColors: { routeA: 'rgba(239, 68, 68, 1)', routeB: 'rgba(239, 68, 68, 0.8)', routeC: 'rgba(239, 68, 68, 0.5)' },
      labels: { zoneA: 'COASTAL ZONE (NO SIGNAL)', hospital: 'DISTRICT HOSPITAL (DAMAGED)', shelter: 'COASTAL SHELTER (FULL)' }
    }
  },
  '11:00': {
    time: '11:00',
    incident: {
      id: 'CYC-2024-BOB-01',
      name: 'Cyclone Simulation',
      type: 'Cyclone',
      severity: 'Critical',
      confidence: 98,
      affectedPopulation: 85000,
      affectedArea: 800,
      roadsAffected: 45,
      criticalFacilitiesAffected: 6,
    },
    recommendation: {
      id: 'CYC-REC-1100',
      title: 'COMMANDER RECOMMENDATION',
      description: 'Execute Mass Evacuation and request Federal Assistance.',
      confidence: 98,
      estimatedPopulation: 85000,
      resourcesRequired: { buses: 30, boats: 15, ambulances: 20 },
      status: 'HUMAN APPROVAL REQUIRED',
    },
    scenarios: [
      { id: 'CYC-B-7', type: 'BEST CASE', conditions: ['Federal aid arrives immediately.'], risk: 'Critical', probability: 5, population: 85000, roadsClosed: 45, hospitals: 4, sheltersNeeded: 25, recoveryTime: '2 Months', confidence: 90 },
      { id: 'CYC-E-7', type: 'EXPECTED CASE', conditions: ['Severe destruction.'], risk: 'Critical', probability: 80, population: 120000, roadsClosed: 60, hospitals: 6, sheltersNeeded: 40, recoveryTime: '6 Months', confidence: 95 },
      { id: 'CYC-W-7', type: 'WORST CASE', conditions: ['Secondary hazards (disease, starvation).'], risk: 'Critical', probability: 15, population: 300000, roadsClosed: 120, hospitals: 10, sheltersNeeded: 100, recoveryTime: 'Years', confidence: 80 }
    ],
    warRoomMessages: [
      { id: 'cyc-11-1', agent: 'Satellite Intelligence', message: ['Eye over coast.', 'Massive destruction visible.'], status: 'VERIFIED' },
      { id: 'cyc-11-2', agent: 'Infrastructure Intelligence', message: ['District Hospital roof compromised.'], status: 'UPDATED' },
      { id: 'cyc-11-5', agent: 'Commander AI', message: ['Consensus reached.'], status: 'Awaiting Human Approval', isCommander: true, recommendation: 'Execute Mass Evacuation and request Federal Assistance.', reason: 'Local resources completely exhausted. Mass destruction.', confidence: 98, requiredResources: 'Federal Support', approvalRequired: true }
    ],
    consensus: { satellite: 99, weather: 99, infrastructure: 99, logistics: 98 },
    resources: {
      ambulances: { available: 0, total: 20 },
      boats: { available: 0, total: 15 },
      buses: { available: 0, total: 30 },
      shelterCapacity: { available: 0, total: 5000 },
      medicalTeams: { available: 0, total: 10 },
      rescueTeams: { available: 0, total: 12 }
    },
    mapState: {
      overlayType: 'Cyclone',
      cycloneScale: 2.5,
      roadColors: { routeA: 'rgba(239, 68, 68, 1)', routeB: 'rgba(239, 68, 68, 1)', routeC: 'rgba(239, 68, 68, 1)' },
      labels: { zoneA: 'COASTAL ZONE (DESTROYED)', hospital: 'DISTRICT HOSPITAL (EVACUATING)', shelter: 'COASTAL SHELTER (OVERFLOW)' }
    }
  },
};
