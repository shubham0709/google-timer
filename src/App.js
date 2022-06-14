import { Tabs, TabList, TabPanels, Tab, TabPanel, Heading } from "@chakra-ui/react";
import "./App.css";
import Stopwatch from "./Components/Stopwatch";
import Timer from "./Components/Timer";

function App() {
  return (
    <div className="App">
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab><Heading>Timer</Heading></Tab>
          <Tab><Heading>Stopwatch</Heading></Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
          <Timer></Timer>
          </TabPanel>
          <TabPanel>
            <Stopwatch></Stopwatch>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default App;
