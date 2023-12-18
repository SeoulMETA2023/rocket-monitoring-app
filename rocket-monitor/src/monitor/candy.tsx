import React from "react";

import Visualizer from "../module/visualizer";
import Terminal, {Message} from "../module/terminal";
import {StatusLine} from "../module/statusGraph";

export default function CandyMonitor() {

    return(
        <section className={"m-5 grid grid-cols-12 grid-rows-10 gap-2 overflow-hidden"}>
            {/* title */}
            <div className={"col-span-full flex items-center"}>
                <h1 className={"text-6xl font-bold text-white font-open-sans"}>Rocket</h1>
            </div>

            {/* rocket model */}
            <div className={"col-span-7 row-span-5 bg-dim-gray rounded-xl"}>
                <Visualizer visible={true} path={"/test-rocket2.obj"}/>
            </div>

            {/* description */}
            <div className={"col-span-5 row-span-2 text-white font-noto-sans"}>
                설명을 넣어주세요.
            </div>

            {/* terminal */}
            <div className={"col-span-5 row-span-3 bg-dim-gray rounded-xl"}>
                <Terminal>
                    <Message timestamp={1702512900} content={"hi"}/>
                </Terminal>
            </div>

            {/* gyro 1 */}
            <div className={"col-span-4 row-span-2 bg-dim-gray rounded-xl"}>
                <StatusLine title={"GYRO X"} dataSets={[-800, 0, 600, 400, 300, -300, 100]} y={{max: 1000, min: -1000, step: 500}} color={"#FF6384"}/>
            </div>

            {/* gyro 2 */}
            <div className={"col-span-4 row-span-2 bg-dim-gray rounded-xl"}>
                <StatusLine title={"GYRO Y"} dataSets={[-800, 0, 600, 400, 300, -300, 100]} y={{max: 1000, min: -1000, step: 500}} color={"#FF6384"}/>

            </div>

            {/* gyro 3 */}
            <div className={"col-span-4 row-span-2 bg-dim-gray rounded-xl"}>
                <StatusLine title={"GYRO Z"} dataSets={[-800, 0, 600, 400, 300, -300, 100]} y={{max: 1000, min: -1000, step: 500}} color={"#FF6384"}/>

            </div>
        </section>
    )
}