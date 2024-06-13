import { TimelineProvider } from "./context";
import { Timeline } from "./components/Timeline";

function App() {
  return (
    <TimelineProvider>
      <Timeline />
    </TimelineProvider>
  );
}

export default App;
