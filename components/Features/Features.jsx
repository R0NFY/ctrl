import Feature from "./Feature"
import styles from "@/styles/Features.module.css"
import Image from "next/image"

import gsap from "gsap"
import { useLayoutEffect } from "react"
import Background from "./Background"

function Features(props) {
  useLayoutEffect(() => {
    const fullTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".features",
        scrub: 0.2,
        start: "top bottom-=10%",
        end: "bottom+=40% bottom",
        refreshPriority: 97,
        defaults: {
          ease: "none",
        },
      },
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".features",
        scrub: true,
        start: "top bottom-=10%",
        end: "bottom+=40% bottom",
        refreshPriority: 97,
        defaults: {
          ease: "none",
        },
      },
    })

    fullTl
      .fromTo(
        ".bgText > div:nth-child(2n)",
        {
          x: "-3vw",
          opacity: 0,
        },
        {
          x: "0vw",
          opacity: 1,
          ease: "linear",
        },
        "<50%"
      )
      .fromTo(
        ".bgText > div:nth-child(2n + 1)",
        {
          x: "3vw",
          opacity: 0,
        },
        {
          x: "0vw",
          opacity: 1,
          ease: "linear",
        },
        "<"
      )
      .to(
        ".crypto",
        {
          transform: "translateX(-50%) rotate(10deg)",
          ease: "linear",
        },
        "<"
      )
      .to(
        ".wallet",
        {
          transform: "translateX(-50%) rotate(-10deg)",
          ease: "linear",
        },
        "<"
      )

    tl.fromTo(
      ".features",
      {
        opacity: 0,
        scale: 0.95,
        y: 100,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        ease: "power2.out",
      }
    ).to(".features", {
      opacity: 0,
      scale: 0.95,
      ease: "power2.in",
    })
  }, [])

  props = props.data

  return (
    <div className={`${styles.container} features`}>
      <Background />
      <Feature
        name={props.wallet}
        desc={props.walletDesc}
        anim={
          <div>
            <Image
              src="/features/Wallet.png"
              width={1200}
              height={503}
              alt="blockchain chains"
              className={`${styles.wallet} wallet`}
            />
            <Image
              src="/features/Crypto.png"
              width={1200}
              height={503}
              alt="blockchain chains"
              className={`${styles.crypto} crypto`}
            />
          </div>
        }
      ></Feature>
      <Feature
        name={props.innovative}
        desc={props.innovativeDesc}
        anim={
          <video className={styles.brain} autoPlay loop muted preload="auto">
            <source src="/features/brain.mp4" />
          </video>
        }
      ></Feature>
      <Feature
        name={props.radar}
        desc={props.radarDesc}
        anim={
          <video className={styles.radar} autoPlay loop muted preload="auto">
            <source src="/features/radar.mp4" />
          </video>
        }
      ></Feature>
      <Feature
        name={props.platform}
        desc={props.platformDesc}
        anim={
          <video className={styles.platform} autoPlay loop muted preload="auto">
            <source src="/features/platform.mp4" />
          </video>
        }
      ></Feature>
    </div>
  )
}

export default Features
