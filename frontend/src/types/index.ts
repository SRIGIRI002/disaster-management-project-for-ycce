export interface Incident {
  id: string;
  name: string;
  type: string;
  severity: 'Low' | 'Moderate' | 'High' | 'Critical';
  confidence: number;
  affectedPopulation: number;
  affectedArea: number; // in km^2
  roadsAffected: number;
  criticalFacilitiesAffected: number;
}

export interface Recommendation {
  id: string;
  title: string;
  description: string;
  confidence: number;
  estimatedPopulation: number;
  resourcesRequired: {
    buses?: number;
    boats?: number;
    ambulances?: number;
    fireTrucks?: number;
    helicopters?: number;
    rescueTeams?: number;
  };
  reasoning?: string;
  primaryFactors?: string[];
  status: 'HUMAN APPROVAL REQUIRED' | 'APPROVED' | 'REJECTED' | 'ANALYZING';
}

export interface Scenario {
  id: string;
  type: 'BEST CASE' | 'EXPECTED CASE' | 'WORST CASE';
  conditions: string[];
  risk: 'Low' | 'Moderate' | 'High' | 'Critical';
  probability: number;
  population: number;
  roadsClosed: number;
  hospitals: number;
  sheltersNeeded: number;
  recoveryTime: string;
  confidence: number;
}

export type AgentType = 
  | 'Satellite Intelligence' 
  | 'Weather Intelligence' 
  | 'Infrastructure Intelligence' 
  | 'Logistics Intelligence' 
  | 'Commander AI';

export type AgentStatus = 'ANALYZING' | 'PROCESSING' | 'VERIFIED' | 'UPDATED' | 'Awaiting Human Approval';

export interface WarRoomMessage {
  id: string;
  agent: AgentType;
  message: string[];
  status: AgentStatus;
  isCommander?: boolean;
  confidence?: number;
  recommendation?: string;
  reason?: string;
  requiredResources?: string;
  approvalRequired?: boolean;
}

export type AgentConsensus = {
  satellite: number;
  weather: number;
  infrastructure: number;
  logistics: number;
};

export interface TimelineEvent {
  id: string;
  time: string;
  label: string;
}

export interface ResourceStatus {
  ambulances: { available: number; total: number };
  boats?: { available: number; total: number };
  buses: { available: number; total: number };
  shelterCapacity: { available: number; total: number };
  medicalTeams: { available: number; total: number };
  fireCrews?: { available: number; total: number };
  rescueTeams?: { available: number; total: number };
  helicopters?: { available: number; total: number };
}

export interface MapState {
  floodScale?: number;
  fireScale?: number;
  cycloneScale?: number;
  overlayType: 'Flood' | 'Wildfire' | 'Cyclone';
  roadColors: {
    routeA: string;
    routeB: string;
    routeC: string;
  };
  labels: Record<string, string>;
}

export interface TimeState {
  time: string;
  incident: Incident;
  recommendation: Recommendation;
  scenarios: Scenario[];
  warRoomMessages: WarRoomMessage[];
  consensus: AgentConsensus;
  resources: ResourceStatus;
  mapState: MapState;
}

export type HazardType = 'Flood' | 'Wildfire' | 'Cyclone';
