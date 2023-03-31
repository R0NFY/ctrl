import styles from "@/styles/Copy.module.css"

import gsap from "gsap"
import { useLayoutEffect } from "react"

function Copy(props) {
  useLayoutEffect(() => {
    let gradient = {
      value:
        "linear-gradient(to bottom, #E4C8F9 11.98%, #9E3EEA 27.08%, #460D72 88.54%);",
    }
    let target = document.querySelector(".copy p")
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".copy",
        scrub: true,
        start: "top top+=50%",
        end: "bottom bottom-=20%",
        refreshPriority: 92,
        defaults: {
          ease: "none",
        },
      },
    })
    tl.to(gradient, {
      value:
        "linear-gradient(to bottom, #460D72 2.08%, #9E3EEA 14.58%, #E4C8F9 67.71%)",
      ease: "linear",
      onUpdate: () => (target.style.backgroundImage = gradient.value),
    })
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
