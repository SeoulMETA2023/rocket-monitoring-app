import React, {Fragment, useEffect, useState} from "react";

import {socket} from "./socket";
import Terminal, {Message} from "./components/terminal"
import Visualizer from "./components/visualizer";
import {StatusLine} from "./components/statusGraph";

interface LogData {
    timestamp: number
    content: string
}

interface RocketStatus {
    gyro: {
        x: number,
        y: number,
        z: number
    }
    rcs: {
        top: boolean,
        right: boolean,
        left: boolean,
        bottom: boolean
    }
}

function App() {
    const [isConnected, setIsConnected] = useState<boolean>(socket.connected);
    const [terminalLog, setTerminalLog] = useState<LogData[]>([]);
    const [isRCSConnected, setIsRCSConnected] = useState<boolean>(false);
    const [statusData, setStatusData] = useState<RocketStatus[]>([]);

    function addLog(timestamp: number, content: string) {
        setTerminalLog((prevState) => {
            return [...prevState, {timestamp: timestamp, content: content}]
        });
    }

    useEffect(() => {
        setTerminalLog([]);
        if (isConnected) {
            addLog(Date.now(), "SERVER CONNECTED");
            addLog(Date.now(), "Connecting Rocket...");
        } else {
            setIsRCSConnected(false);
        }

        if (isRCSConnected) {
            addLog(Date.now(), "Rocket Connected");
        }
    }, [isConnected]);
    
    useEffect(() => {
        function onConnect() {
            setIsConnected(true);
        }
        
        function onDisconnect() {
            setIsConnected(false);
        }
        
        function onRCSConnected() {
            setIsRCSConnected(true)
            addLog(Date.now(), "Rocket Connected");
        }
    
        function onRCSDisconnected() {
            setIsRCSConnected(false)
            setIsRCSConnected(true)
            addLog(Date.now(), "Connecting Rocket...");
        }
    
        function onUpdateStatus(value: RocketStatus) {
            addLog(Date.now(), `Status Updated: ${JSON.stringify(value)}`)
        }
    
        socket.on("RCSConnect", onRCSConnected);
        socket.on("RCSDisconnect", onRCSDisconnected);
        socket.on("updateStatus", onUpdateStatus);
        socket.on("connect", onConnect)
        socket.on("disconnect", onDisconnect)
        
        return () => {
            socket.off("connect", onConnect)
            socket.off("disconnect", onDisconnect)
            socket.off("RCSConnect", onRCSConnected);
            socket.off("RCSDisconnect", onRCSDisconnected);
            socket.off("updateStatus", onUpdateStatus);
        }
    }, [])
    
    return (
        <div className={"relative"}>
            {/* <div className={`w-full h-screen bg-gear-black grid place-items-center absolute duration-500 z-10 ${isConnected? "invisible" : "visible"}`}>
                <div className={"w-44 flex flex-col items-center gap-7"}>
                    <img src={"meta_icon(white).svg"} alt={"meta logo"} className={"w-full animate-loading"}/>
                    <div className={"text-white font-bold text-2xl font-noto-sans"}>
                        Connecting...
                    </div>
                </div>
            </div> */}
            <div className={"relative h-screen bg-gear-black overflow-hidden"}>
                <div className={"w-full h-full"}>
                    {/* {isRCSConnected && <Visualizer visible={true} path={"/agm114.obj"}/>} */}
                    <Visualizer visible={true} path={"/agm114.obj"}/>
                </div>
                <div className={"absolute top-0 w-full h-full grid grid-cols-12 grid-rows-12 p-8 gap-2 text-white"}>
                    <div className={"col-start-1 col-end-6 flex flex-col justify-end"}>
                        <h1 className={"font-noto-sans font-bold text-7xl overflow-visible"}>
                            Reaction Control System
                        </h1>
                    </div>
                    <div className={"col-start-10 col-end-13 row-start-9 row-end-13"}>
                        <Terminal>
                            {Array.from(terminalLog, (v) => <Message timestamp={v.timestamp} content={v.content}/>)}
                        </Terminal>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;
