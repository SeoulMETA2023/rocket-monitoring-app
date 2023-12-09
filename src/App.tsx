// import {Fragment} from "react";

// import io from "socket.io-client"

import RCSMonitor from "./monitor/rcs";
import CandyMonitor from "./monitor/candy";
import {Fragment} from "react";

function App() {
    return (
        <Fragment>
            {/*<div className={"w-full h-screen bg-gear-black grid place-items-center absolute duration-500"}>*/}
            {/*    <div className={"w-52 flex flex-col items-center gap-7"}>*/}
            {/*        <img src={"meta_icon(white).svg"} alt={"meta logo"} className={"w-full animate-loading"}/>*/}
            {/*        <div className={"text-white font-bold text-2xl font-noto-sans"}>*/}
            {/*            Connecting...*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className={"h-screen bg-gear-black grid grid-cols-2"}>
                <RCSMonitor/>
                <CandyMonitor/>
            </div>
        </Fragment>
    )
}

export default App;
