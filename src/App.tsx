// import {Fragment} from "react";

// import io from "socket.io-client"

import RCSMonitor from "./monitor/rcs";
import CandyMonitor from "./monitor/candy";
import {Fragment} from "react";

function App() {
    return (
        <Fragment>
            <div className={"w-full h-screen bg-dim-gray-a70 grid place-items-center absolute"}>
                <img src={"meta_icon(black).svg"} alt={"meta logo"} className={"w-52 h-52 animate-loading"}/>
            </div>
            <div className={"h-screen bg-gear-black grid grid-cols-2"}>
                <RCSMonitor/>
                <CandyMonitor/>
            </div>
        </Fragment>
    )
}

export default App;
