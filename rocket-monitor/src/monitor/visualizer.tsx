import React, {useRef} from "react";
// import { createRoot } from 'react-dom/client'
import {Canvas, useFrame, useLoader} from '@react-three/fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import {Box3, Group, Vector3} from "three";

interface VisualizerProps {
    visible?: boolean
    path: string
}

interface RocketObjectProps {
    path: string
}

export default function Visualizer(props: VisualizerProps) {
    let visible = true
    if (props.visible === undefined || !props.visible) {
        visible = false
    }

    return (
        <Canvas className={`bg-gear-black border-dim-gray border-2 rounded-xl ${visible? "" : "invisible"}`}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[0, 0, 10]}/>
            <RocketObject path={props.path}/>
        </Canvas>
    )
}

function RocketObject(props: RocketObjectProps) {
    const obj = useLoader(OBJLoader, props.path)

    const rocketRef = useRef<Group>()

    useFrame((_) => {
        const currentRocket = rocketRef.current
        if (currentRocket === undefined) {
            return
        }

        const box = new Box3().setFromObject(currentRocket)
        const size = new Vector3()
        box.getSize(size)

        currentRocket.position.set(0, - size.y / 2, -130)
    })

    return (
        <primitive ref={rocketRef}
                   object={obj}
                   rotation={[-Math.PI / 2, 0, 0]}/>
    )
}
