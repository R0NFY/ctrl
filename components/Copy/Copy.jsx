import styles from "@/styles/Copy.module.css"

import gsap from "gsap"
import { useLayoutEffect } from "react"

function Copy(props) {
  useLayoutEffect(() => {
    if (window.innerWidth > 800) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".copy",
          scrub: true,
          pin: ".copy",
          start: "top top",
          end: () => `+=${window.innerHeight * 2}`,
          onLeave: () =>
            (document.querySelector(".copy").style.display = "none"),
          onEnterBack: () =>
            (document.querySelector(".copy").style.display = "grid"),
          refreshPriority: 92,
          defaults: {
            ease: "none",
          },
        },
      })
      tl.fromTo(
        ".copy p",
        {
          backgroundImage:
            "linear-gradient(to bottom, #E4C8F9 8.85%, #9E3EEA 26.04%, #460D72 90.1%)",
        },
        {
          backgroundImage:
            "linear-gradient(to bottom, #460D72 1.56%, #E4C8F9 40.1%, #9E3EEA 85.94%)",
          ease: "linear",
        }
      )
        .to(".copy p", {
          backgroundImage:
            "linear-gradient(to bottom, #460D72 1.04%, #9E3EEA 9.9%, #E4C8F9 67.19%)",
          ease: "linear",
        })
        .to(".copy", {
          scale: 5,
          opacity: 0,
          ease: "power2.in",
        })
    }
  }, [])
  return (
    <div className={`${styles.container} copy`}>
      <div className={styles.textContainer}>
        <p>{props.data.copy}</p>
        <div className={styles.overlay}></div>
      </div>
    </div>
  )
}

export default Copy
