import styles from "@/styles/Privacy.module.css"
import BackgroundPrivacy from "./BackgroundPrivacy"

import gsap from "gsap"
import { useLayoutEffect, useState } from "react"

function Privacy() {
  let animObj = { start: 1 }
  const imagesCount = 10
  const [fingerSrc, setFingerSrc] = useState(animObj.start)

  useLayoutEffect(() => {
    if (window.innerWidth > 800) {
      for (let i = 1; i < imagesCount; i++) {
        new Image().src = `/privacy/${i}.png`
      }
      const fullTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".privacy",
          pin: ".privacy",
          scrub: true,
          start: "top top",
          end: () => `+=${window.innerHeight * 3}`,
          refreshPriority: 94,
          defaults: {
            ease: "none",
          },
        },
      })
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".privacy",
          scrub: true,
          start: "top top",
          end: () => `+=${window.innerHeight * 3}`,
          refreshPriority: 94,
          defaults: {
            ease: "none",
          },
        },
      })
      fullTl
        .fromTo(
          ".bgPrivacyText > div:nth-child(2n)",
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
          ".bgPrivacyText > div:nth-child(2n + 1)",
          {
            x: "0vw",
            opacity: 0,
          },
          {
            x: "-3vw",
            opacity: 1,
            ease: "linear",
          },
          "<"
        )
        .fromTo(
          ".privacyFadeIn",
          {
            opacity: 0,
            scale: 0.95,
            y: 100,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.4,
            ease: "power4.out",
          },
          "<"
        )
        .to(
          animObj,
          {
            start: imagesCount,
            onUpdate: () => {
              if (Math.round(animObj.start) != fingerSrc) {
                setFingerSrc(Math.round(animObj.start))
              }
            },
            opacity: 1,
            ease: "linear",
          },
          "<"
        )

      tl.to(
        ".privacy > div > p:nth-child(1) > span",
        {
          color: "#B56CEF",
          duration: "none",
          delay: 0.1,
          stagger: 0.2,
        },
        "<"
      )
        .to(".privacy > div > p:nth-child(2) > span", {
          color: "#B56CEF",
          duration: "none",
          stagger: 0.2,
        })
        .to(".bgPrivacyText", {
          opacity: 0,
          ease: "power2.in",
          duration: 0.6,
        })
        .to(
          ".privacy > div",
          {
            opacity: 0,
            y: 100,
            scale: 0.95,
            duration: 1,
            ease: "power2.in",
          },
          "<"
        )
        .to(
          ".privacy img",
          {
            scale: 5,
            opacity: 0,
            ease: "power3.in",
            duration: 1.5,
          },
          "<"
        )
    }
  }, [])

  return (
    <div className={`${styles.container} privacy`}>
      <div className={`${styles.heading} privacyFadeIn`}>
        <p>
          <span>1</span>
          <span>0</span>
          <span>0</span>
          <span>% </span>
          <span>P</span>
          <span>r</span>
          <span>i</span>
          <span>v</span>
          <span>a</span>
          <span>c</span>
          <span>y</span>
        </p>
        <p>
          <span>1</span>
          <span>0</span>
          <span>0</span>
          <span>% </span>
          <span>C</span>
          <span>o</span>
          <span>n</span>
          <span>t</span>
          <span>r</span>
          <span>o</span>
          <span>l</span>
        </p>
      </div>
      <img
        className="privacyFadeIn"
        src={"/privacy/" + fingerSrc + ".png"}
        alt=""
      />
      <img className={styles.last} src="/privacy/10Mobile.png" alt="" />
      <div className={styles.overlay}></div>
      <BackgroundPrivacy />
    </div>
  )
}

export default Privacy
