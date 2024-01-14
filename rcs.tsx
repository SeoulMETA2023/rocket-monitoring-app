/* eslint-disable */

import React, {useEffect, useState} from 'react';

import {socket} from "../socket";

interface Props {
    isConnected: boolean
}

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

export default function RCSMonitor({isConnected}: Props) {

    return(
        <section className={"m-5 grid grid-cols-12 grid-rows-10 gap-2 overflow-hidden"}>
            {/* title */}
            <div className={"col-span-full flex items-center"}>
                <h1 className={"text-6xl font-bold text-white font-open-sans"}>RCS Rocket</h1>
            </div>

            {/* rocket model */}
            <div className={`col-span-7 row-span-5 bg-dim-gray rounded-xl ${!isRCSConnected ? "animate-pulse" : ""}`}>
                {isRCSConnected && <Visualizer visible={true} path={"/agm114.obj"}/>}
            </div>

            {/* description */}
            <div className={`col-span-5 row-span-2 text-white font-noto-sans`}>
                설명을 넣어주세요.
            </div>

            {/* terminal */}
            <div className={`col-span-5 row-span-3 bg-dim-gray rounded-xl`}>
                <Terminal>
                    {Array.from(terminalLog, (v) => <Message timestamp={v.timestamp} content={v.content}/>)}
                </Terminal>
            </div>

            {/* gyro 1 */}
            <div className={`col-span-4 row-span-2 bg-dim-gray rounded-xl ${!isRCSConnected ? "animate-pulse" : ""}`}>
                {isRCSConnected && <StatusLine
                    title={"GYRO X"}
                    dataSets={Array.from(statusData, (v) => v.gyro.x)}
                    y={{max: 300, min: -300, step: 50}}
                    color={"#EE504A"}/>}
            </div>

            {/* gyro 2 */}
            <div className={`col-span-4 row-span-2 bg-dim-gray rounded-xl ${!isRCSConnected ? "animate-pulse" : ""}`}>
                {isRCSConnected && <StatusLine
                    title={"GYRO Y"}
                    dataSets={Array.from(statusData, (v) => v.gyro.y)}
                    y={{max: 300, min: -300, step: 50}}
                    color={"#EE504A"}/>}
            </div>

            {/* gyro 3 */}
            <div className={`col-span-4 row-span-2 bg-dim-gray rounded-xl ${!isRCSConnected ? "animate-pulse" : ""}`}>
                {isRCSConnected && <StatusLine
                    title={"GYRO Y"}
                    dataSets={Array.from(statusData, (v) => v.gyro.z)}
                    y={{max: 300, min: -300, step: 50}}
                    color={"#EE504A"}/>}
            </div>

            {/* rcs 1 */}
            <div className={`col-span-3 row-span-2 bg-dim-gray rounded-xl ${!isRCSConnected ? "animate-pulse" : ""}`}>
                {isRCSConnected && <StatusLine
                    title={"RCS Top"}
                    dataSets={Array.from(statusData, (v) => {
                        return v.rcs.top ? 1 : 0
                    })}
                    y={{max: 1, min: 0, step: 1}}
                    color={"#EE504A"}/>}
            </div>

            {/* rcs 2 */}
            <div className={`col-span-3 row-span-2 bg-dim-gray rounded-xl ${!isRCSConnected ? "animate-pulse" : ""}`}>
                {isRCSConnected && <StatusLine
                    title={"RCS Right"}
                    dataSets={Array.from(statusData, (v) => {
                        return v.rcs.right ? 1 : 0
                    })}
                    y={{max: 1, min: 0, step: 1}}
                    color={"#EE504A"}/>}
            </div>

            {/* rcs 3 */}
            <div className={`col-span-3 row-span-2 bg-dim-gray rounded-xl ${!isRCSConnected ? "animate-pulse" : ""}`}>
                {isRCSConnected && <StatusLine
                    title={"RCS Bottom"}
                    dataSets={Array.from(statusData, (v) => {
                        return v.rcs.bottom ? 1 : 0
                    })}
                    y={{max: 1, min: 0, step: 1}}
                    color={"#EE504A"}/>}
            </div>

            {/* rcs 4 */}
            <div className={`col-span-3 row-span-2 bg-dim-gray rounded-xl ${!isRCSConnected ? "animate-pulse" : ""}`}>
                {isRCSConnected && <StatusLine
                    title={"RCS Left"}
                    dataSets={Array.from(statusData, (v) => {
                        return v.rcs.left ? 1 : 0
                    })}
                    y={{max: 1, min: 0, step: 1}}
                    color={"#EE504A"}/>}
            </div>
        </section>
    )
}
