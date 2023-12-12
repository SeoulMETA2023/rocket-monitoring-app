import {useEffect, useState} from "react";
// import { createRoot } from 'react-dom/client'
import { Canvas, useLoader } from '@react-three/fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import {Box3, Object3D, Vector3} from "three";

interface Props {
    className?: string
}

export default function Visualizer(props: Props) {
    const rocketObject = useLoader(OBJLoader, '/test-rocket.obj')
    let [spin, setSpin] = useState<number>(0)
    const box = new Box3().setFromObject(rocketObject)
    const size = new Vector3()
    box.getSize(size)

    const pos = new Vector3(0, - size.y / 2, -130)

    useEffect(() => {
        setTimeout(() => {
            setSpin(spin + Math.PI / 180)
        }, 10)
    })

    return (
        <Canvas className={"bg-gear-black border-dim-gray border-2 rounded-xl" + ` ${props.className !== undefined? props.className : ""}`}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[0, 0, 10]}/>
            <primitive
                object={rocketObject}
                position={pos}
                rotation={[- Math.PI / 2, spin, 0]}/>
        </Canvas>
    )
}

/**
 * Rotate about point
 * @param obj your object (THREE.Object3D or derived)
 * @param point the point of rotation (THREE.Vector3)
 * @param axis the axis of rotation (normalized THREE.Vector3)
 * @param theta radian value of rotation
 * @param pointIsWorld boolean indicating the point is in world coordinates (default = false)
 */
function rotateAboutPoint(obj: Object3D, point: Vector3, axis: Vector3, theta: number, pointIsWorld: boolean = false){
    pointIsWorld = (pointIsWorld === undefined)? false : pointIsWorld

    if(pointIsWorld){
        obj.parent?.localToWorld(obj.position) // compensate for world coordinate
    }

    obj.position.sub(point) // remove the offset
    obj.position.applyAxisAngle(axis, theta) // rotate the POSITION
    obj.position.add(point) // re-add the offset

    if(pointIsWorld){
        obj.parent?.worldToLocal(obj.position) // undo world coordinates compensation
    }

    obj.rotateOnAxis(axis, theta) // rotate the OBJECT
}
