import styles from "@/styles/Desktop.module.css"
import Image from "next/image"

import { useLayoutEffect, useRef } from "react"

import gsap from "gsap"

function Desktop(props) {
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".desktop",
        pin: ".desktop",
        start: "top top",
        end: () => `+=${window.innerHeight * 2.5}`,
        refreshPriority: 98,
        scrub: true,
        // onLeave: () =>
        //   (document.querySelector(".desktop").style.display = "none"),
        // onEnterBack: () =>
        //   (document.querySelector(".desktop").style.display = "grid"),
      },
    })
    tl.fromTo(
      ".desktop > *:not(.desktopDivider)",
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
      }
    )
      .to(".firstScreen", {
        opacity: 0.3,
        scale: 0.95,
        delay: 0.4,
        y: "-5vh",
      })
      .to(
        ".desktopFadeOut",
        {
          opacity: 0,
          scale: 0.95,
          duration: 0.4,
          y: "-5vh",
        },
        "<"
      )
      .fromTo(
        ".desktopFadeIn",
        {
          y: "10vh",
          scale: 0.9,
          opacity: 0,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          y: "0vh",
        },
        "<"
      )
      .to(
        ".status p:first-child",
        {
          color: "#CACACE",
        },
        "<"
      )
      .to(
        ".status p:last-child",
        {
          color: "#B56CEF",
        },
        "<"
      )
      .to(".desktop > *:not(.desktopDivider)", {
        opacity: 0,
        scale: 0.95,
        y: 100,
        duration: 0.4,
        delay: 0.4,
        ease: "power4.in",
      })
  }, [])

  return (
    <div className={`${styles.container} desktop`}>
      <div className={styles.containerWrapper}>
        <div className={`${styles.parasContainer} desktopFadeOut`}>
          <p>{props.data.portfolioParaOne}</p>
          <p>{props.data.portfolioParaTwo}</p>
        </div>
        <div className={`${styles.parasContainer} containerOne desktopFadeIn`}>
          <p>{props.data.tradingParaOne}</p>
          <p>{props.data.tradingParaTwo}</p>
        </div>
      </div>
      <div className={`${styles.divider} desktopDivider`}></div>
      <div className={`${styles.status} status`}>
        <p>Portfolio</p>
        <div className={styles.line}></div>
        <p>Trading</p>
      </div>
      <div className={`${styles.imageWrapper} desktopImageWrapper`}>
        <div className={styles.glow}></div>
        <Image
          className="firstScreen"
          src="/desktop/portfolio.jpg"
          width={840}
          height={557}
          alt="Portfolio Screen"
        />
        <Image
          className="desktopFadeIn"
          src="/desktop/trading.jpg"
          width={840}
          height={557}
          alt="Trading Screen"
        />
      </div>
    </div>
  )
}

export default Desktop
