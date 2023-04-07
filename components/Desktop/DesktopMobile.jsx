import styles from "@/styles/Desktop.module.css"
import Image from "next/image"

import gsap from "gsap"
import { useLayoutEffect } from "react"

function DesktopMobile(props) {
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".mobileDesktop",
        start: "top bottom",
        end: "top+=50% bottom",
        refreshPriority: 98,
        scrub: true,
        // onLeave: () =>
        //   (document.querySelector(".desktop").style.display = "none"),
        // onEnterBack: () =>
        //   (document.querySelector(".desktop").style.display = "grid"),
      },
    })

    tl.fromTo(
      ".mobileDesktop",
      {
        opacity: 0,
        scale: 0.95,
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        ease: "power2.out",
      }
    )
  }, [])
  return (
    <div className={`${styles.container} mobileDesktop`}>
      <div className={styles.containerWrapper}>
        <div className={`${styles.parasContainer}`}>
          <p>{props.data.portfolioParaOne}</p>
          <p>{props.data.portfolioParaTwo}</p>
        </div>
        <div className={`${styles.imageWrapper}`}>
          <div className={styles.glow}>
            <img src="/blur.png" alt="" />
          </div>
          <Image
            src="/desktop/portfolio.jpg"
            width={840}
            height={557}
            alt="Portfolio Screen"
          />
        </div>
        <div className={styles.mobileDivider}></div>
        <div className={`${styles.parasContainer}`}>
          <p>{props.data.tradingParaOne}</p>
          <p>{props.data.tradingParaTwo}</p>
        </div>
        <div className={`${styles.imageWrapper}`}>
          <div className={styles.glow}>
            <img src="/blur.png" alt="" />
          </div>
          <Image
            src="/desktop/trading.jpg"
            width={840}
            height={557}
            alt="Trading Screen"
          />
        </div>
      </div>
    </div>
  )
}

export default DesktopMobile
