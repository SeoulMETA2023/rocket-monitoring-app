import Terminal, {Message} from "./terminal"
import Visualizer from "./visualizer";

export default function RCSMonitor() {

    return(
        <section className={"m-5 grid grid-cols-12 grid-rows-10 gap-2 overflow-hidden"}>
            {/* title */}
            <div className={"col-span-full flex items-center"}>
                <h1 className={"text-6xl font-bold text-white font-open-sans"}>RCS Rocket</h1>
            </div>

            {/* rocket model */}
            <div className={"col-span-7 row-span-5 bg-dim-gray rounded-xl"}>
                <Visualizer visible={true} path={"/test-rocket.obj"}/>
            </div>

            {/* description */}
            <div className={"col-span-5 row-span-2 text-white font-noto-sans"}>
                설명을 넣어주세요.
            </div>

            {/* terminal */}
            <div className={"col-span-5 row-span-3"}>
                <Terminal>
                    <Message timestamp={1702512900} content={"hi"}/>
                </Terminal>
            </div>

            {/* gyro 1 */}
            <div className={"col-span-4 row-span-2 bg-dim-gray rounded-xl"}>

            </div>

            {/* gyro 2 */}
            <div className={"col-span-4 row-span-2 bg-dim-gray rounded-xl"}>

            </div>

            {/* gyro 3 */}
            <div className={"col-span-4 row-span-2 bg-dim-gray rounded-xl"}>

            </div>

            {/* rcs 1 */}
            <div className={"col-span-3 row-span-2 bg-dim-gray rounded-xl"}>

            </div>

            {/* rcs 2 */}
            <div className={"col-span-3 row-span-2 bg-dim-gray rounded-xl"}>

            </div>

            {/* rcs 3 */}
            <div className={"col-span-3 row-span-2 bg-dim-gray rounded-xl"}>

            </div>

            {/* rcs 4 */}
            <div className={"col-span-3 row-span-2 bg-dim-gray rounded-xl"}>

            </div>
        </section>
    )
}
