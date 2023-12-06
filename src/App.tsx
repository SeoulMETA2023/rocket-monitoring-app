// import {Fragment} from "react";

// import io from "socket.io-client"

import RCSMonitor from "./monitor/rcs";
import CandyMonitor from "./monitor/candy";

function App() {
  return (
      <div className={"h-screen bg-black grid grid-cols-2"}>
        <RCSMonitor/>
        <CandyMonitor/>
      </div>
  );
}

export default App;
