import React, { useEffect, useLayoutEffect, useRef } from "react"
import { useGLTF, PerspectiveCamera, useAnimations } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export function Model(props) {
  const group = useRef()
  const cube = useRef()
  const curve = useRef()

  const { nodes, materials, animations } = useGLTF("/key.glb")
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    actions.CameraAction.play().paused = true
    actions.CubeAction.play().paused = true

    cube.current.material.transparent = true
    curve.current.material.transparent = true
  }, [actions])
  let animObj = { time: 0, scale: 1, positionZ: 0 }

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".intro",
        pin: ".intro",
        scrub: 0.2,
        refreshPriority: 101,
        start: "top top",
        end: () => `+=${document.querySelector(".intro").offsetHeight * 4}`,
        defaults: {
          ease: "none",
        },
        onLeave: () =>
          (document.querySelector(".intro").style.display = "none"),
        onEnterBack: () =>
          (document.querySelector(".intro").style.display = "block"),
      },
    })

    tl.to(animObj, {
      time: actions.CameraAction.getClip().duration,
      duration: 0.5,
    })
      .to(
        ".fade",
        {
          opacity: 0,
          duration: 0.1,
        },
        "<50%"
      )
      .to(
        animObj,
        {
          scale: 3,
          positionZ: 0.2,
          ease: "power4.in",
          duration: 0.3,
        },
        "<65%"
      )
      .to(
        ".intro",
        {
          backgroundColor: "#262626",
          ease: "power2.in",
          opacity: 0,
          duration: 0.2,
        },
        "<25%"
      )
      .to(
        "body",
        {
          backgroundColor: "#262626",
          color: "#EFEFF1",
          ease: "power2.in",
          duration: 0.2,
        },
        "<"
      )
  }, [])

  useFrame(() => {
    actions.CameraAction.time = animObj.time
    actions.CubeAction.time = animObj.time

    group.current.scale.set(0.5, 0.5, 0.5)

    cube.current.scale.set(animObj.scale, animObj.scale, animObj.scale)
    cube.current.position.set(
      cube.current.position.x,
      cube.current.position.y,
      animObj.positionZ
    )
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <PerspectiveCamera
          name="Camera"
          makeDefault={true}
          far={100}
          near={0.1}
          fov={window.innerWidth > 800 ? 22.9 : 35}
          position={[1.93, 1.85, 2.83]}
          rotation={[-0.43, 0.56, 0.24]}
        />
        <mesh
          ref={cube}
          name="Cube"
          geometry={nodes.Cube.geometry}
          material={materials["Key Material"]}
        >
          <mesh
            ref={curve}
            name="Curve"
            geometry={nodes.Curve.geometry}
            material={materials["SVGMat.002"]}
            position={[0.01, 1.28, -0.01]}
          />
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload("/key-transformed.glb")
