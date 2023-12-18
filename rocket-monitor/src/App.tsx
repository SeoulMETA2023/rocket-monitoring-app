import React, {Fragment, useEffect, useState} from "react";

import RCSMonitor from "./monitor/rcs";
import CandyMonitor from "./monitor/candy";
import {socket} from "./socket";

function App() {
    const [isConnected, setIsConnected] = useState<boolean>(socket.connected);

    useEffect(() => {
        function onConnect() {
            setIsConnected(true);
        }

        function onDisconnect() {
            setIsConnected(false);
        }

        socket.on("connect", onConnect)
        socket.on("disconnect", onDisconnect)

        return () => {
            socket.off("connect", onConnect)
            socket.off("disconnect", onDisconnect)
        }
    }, [])

    return (
        <Fragment>
            <div className={`w-full h-screen bg-gear-black grid place-items-center absolute duration-500 z-10 ${isConnected? "invisible" : "visible"}`}>
                <div className={"w-44 flex flex-col items-center gap-7"}>
                    <img src={"meta_icon(white).svg"} alt={"meta logo"} className={"w-full animate-loading"}/>
                    <div className={"text-white font-bold text-2xl font-noto-sans"}>
                        Connecting...
                    </div>
                </div>
            </div>
            <div className={"h-screen bg-gear-black grid grid-cols-2"}>
                <RCSMonitor/>
                <CandyMonitor/>
            </div>
        </Fragment>
    )
}

export default App;
