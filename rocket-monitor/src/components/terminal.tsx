import React, {ReactElement, useRef, useEffect, useState} from "react"

export default function Terminal(props: {
    children?: ReactElement[] | ReactElement
}) {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const [latestScroll, setLatestScroll] = useState<number>(0)

    useEffect(() => {
        const container = containerRef.current
        if (container === null) {
            return;
        }

        if (latestScroll <= container.scrollTop + container.offsetHeight) {
            setLatestScroll(container.scrollTop + container.offsetHeight)
            container.scrollTo(0, container.scrollHeight);
        }
    }, [props.children])

    return (
        <div className={"w-full h-full bg-black rounded-lg border-2 border-dim-gray overflow-hidden grid grid-rows-11"}>
            <div className={"row-span-1 bg-gear-black flex flex-row items-center gap-1.5 p-1.5"}>
                <div className={"bg-pastel-red w-2.5 h-2.5 rounded-full"}/>
                <div className={"bg-pastel-yellow w-2.5 h-2.5 rounded-full"}/>
                <div className={"bg-pastel-green w-2.5 h-2.5 rounded-full"}/>
            </div>
            <div
                ref={containerRef}
                className={"row-span-10 m-1.5 overflow-y-auto flex flex-col text-sm"}>
                {props.children}
            </div>
        </div>
    )
}

export function Message(props: {
    timestamp: number
    content: string
}) {
    const date = new Date(props.timestamp)

    return (
        <div>
            <span className={"text-dim-gray"}>
                {date.getFullYear()}-
                {String(date.getDate()).padStart(2, "0")}-
                {String(date.getDay()).padStart(2, "0")}
                &nbsp;
                {String(date.getHours()).padStart(2, "0")}:
                {String(date.getMinutes()).padStart(2, "0")}:
                {String(date.getSeconds()).padStart(2, "0")}
            </span>
            &nbsp;
            <span className={"text-white"}>{props.content}</span>
        </div>
    )
}
