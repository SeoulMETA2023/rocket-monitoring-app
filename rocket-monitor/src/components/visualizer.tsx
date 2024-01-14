import React, {useRef, useState, Fragment} from "react";
import {Canvas, useFrame, useLoader, useThree} from '@react-three/fiber'
import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader";
import {Box3, Vector3, Group} from "three";

export default function Visualizer(props: {
    visible?: boolean
    path: string
}) {
    let visible = true
    if (props.visible === undefined || !props.visible) {
        visible = false
    }

    const [num, setNum] = useState(0)

    return (
        <Canvas className={`bg-gear-black ${visible? "" : "invisible"}`}>
            <RocketObject path={props.path} rotation={{x: 0, y: 0, z: 0}}/>
        </Canvas>
    )
}

function RocketObject(props: {
    path: string,
    rotation: {
        x: number,
        y: number,
        z: number
    }
}) {
    const obj = useLoader(OBJLoader, props.path)
    const rocketRef = useRef<Group>()

    useThree(({camera}) => {
        camera.position.set(0, 0, 1030)
    });

    useFrame((_) => {
        const currentRocket = rocketRef.current
        if (currentRocket === undefined) {
            return;
        }

        const box = new Box3().setFromObject(currentRocket)
        const size = new Vector3()
        box.getSize(size)

        currentRocket.position.set(0, - size.y / 2, 0)
        currentRocket.rotation.set(0, 0, 0)

        // const rotationX = props.rotation.x - Math.PI
        // const rotationY = props.rotation.y
        // const rotationZ = props.rotation.z
        //
        // currentRocket.rotation.x += rotationX
        // // currentRocket.position.z -= size.y * Math.cos(rotationX) / 2
        //
        // currentRocket.rotation.y += rotationY
        // currentRocket.position.x -= size.y * Math.cos(rotationY - Math.PI / 2) / 2
        //
        // currentRocket.rotation.z += rotationZ
    })

    return (
        <Fragment>
            <mesh>
                <primitive ref={rocketRef} object={obj}/>
            </mesh>
            <ambientLight intensity={0.6}/>
            <directionalLight position={[0, 0, 100]}/>
        </Fragment>
    );
}
