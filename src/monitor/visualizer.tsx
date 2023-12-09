import {useEffect, useState} from "react";
// import { createRoot } from 'react-dom/client'
import { Canvas, useLoader } from '@react-three/fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'

interface Props {
    className?: string
}

export default function Visualizer(props: Props) {
    const obj = useLoader(OBJLoader, '/test-rocket.obj')
    let [spin, setSpin] = useState<number>(0)

    useEffect(() => {
        setTimeout(() => {
            setSpin(spin + Math.PI / 180)
        }, 5)
    });

    return (
        <Canvas className={"bg-gear-black border-dim-gray border-2 rounded-xl" + ` ${props.className !== undefined? props.className : ""}`}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[0, 0, 10]}/>
            <primitive
                object={obj}
                position={[0, -3, 0]}
                rotation={[- Math.PI / 2, 0, spin]}
                scale={0.035}/>
        </Canvas>
    )
}
