import { Canvas } from "@react-three/fiber"
import { Model } from "./Model.jsx"

import styles from "styles/Key.module.css"
import { useHelper } from "@react-three/drei"

import * as THREE from "three"

import { useRef } from "react"

function Scene() {
  const light = useRef()
  useHelper(light, THREE.PointLightHelper)
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight
        ref={light}
        color="white"
        intensity={1}
        position={[0, 3, 3]}
      />
      <Model />
    </>
  )
}

function Key() {
  return (
    <div className={`${styles.container} key`}>
      <Canvas>
        <Scene />
      </Canvas>
    </div>
  )
}

export default Key
