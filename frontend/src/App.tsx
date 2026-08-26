import { CommandBar } from './components/mission-control/CommandBar';
import { SituationPanel } from './components/mission-control/SituationPanel';
import { MapPanel } from './components/map/MapPanel';
import { RightIntelligencePanel } from './components/mission-control/RightIntelligencePanel';
import { Timeline } from './components/timeline/Timeline';
import { ResourceStatusPanel } from './components/resources/ResourceStatusPanel';
import { ReplayProvider } from './hooks/useReplayEngine';
import { AIForecastOverlay } from './components/forecast/AIForecastOverlay';

const AppContent = () => {
  
  return (
    <>
      <div className={`flex flex-col h-screen w-screen overflow-hidden bg-slate-950 text-slate-300 font-sans selection:bg-blue-500/30 transition-all duration-1000`}>
        <div className="h-[60px] flex-shrink-0">
          <CommandBar />
        </div>
        
        <div className="flex flex-1 overflow-hidden min-h-0">
          <div className="w-[22%] flex-shrink-0 flex flex-col h-full overflow-hidden">
            <SituationPanel />
          </div>
          <div className="w-[56%] flex-grow min-w-0 h-full">
            <MapPanel />
          </div>
          <div className="w-[22%] flex-shrink-0 flex flex-col h-full overflow-hidden">
            <RightIntelligencePanel />
          </div>
        </div>

        <div className="flex flex-col flex-shrink-0 h-[120px]">
          <div className="h-[65px] flex-shrink-0">
            <Timeline />
          </div>
          <div className="h-[55px] flex-shrink-0">
            <ResourceStatusPanel />
          </div>
        </div>
      </div>
      <AIForecastOverlay />
    </>
  );
};

function App() {
  return (
    <ReplayProvider>
      <AppContent />
    </ReplayProvider>
  );
}

export default App;
