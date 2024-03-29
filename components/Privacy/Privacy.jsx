import styles from "@/styles/Privacy.module.css"
import BackgroundPrivacy from "./BackgroundPrivacy"

import gsap from "gsap"
import { useLayoutEffect, useState } from "react"

import imgOne from "../../public/privacy/imgOne.png"
import imgTwo from "../../public/privacy/imgTwo.png"
import imgThree from "../../public/privacy/imgThree.png"
import imgFour from "../../public/privacy/imgFour.png"
import imgFive from "../../public/privacy/imgFive.png"
import imgSix from "../../public/privacy/imgSix.png"
import imgSeven from "../../public/privacy/imgSeven.png"
import imgEight from "../../public/privacy/imgEight.png"
import imgNine from "../../public/privacy/imgNine.png"
import imgTen from "../../public/privacy/imgTen.png"

function Privacy() {
  let animObj = { start: 1 }
  const imagesCount = 10
  const imagesPreload = [
    imgOne,
    imgTwo,
    imgThree,
    imgFour,
    imgFive,
    imgSix,
    imgSeven,
    imgEight,
    imgNine,
    imgTen,
  ]
  const [fingerSrc, setFingerSrc] = useState(animObj.start)

  useLayoutEffect(() => {
    imagesPreload.forEach((imgFile) => {
      const img = new Image()
      img.src = imgFile.src
    })
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
        src={imagesPreload[fingerSrc - 1].src}
        alt=""
      />
      {/* <img className={styles.last} src="/privacy/10Mobile.png" alt="" /> */}
      <div className={styles.overlay}></div>
      <BackgroundPrivacy />
    </div>
  )
}

export default Privacy
