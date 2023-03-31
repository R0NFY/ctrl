import styles from "@/styles/Monkey.module.css"
import { useLayoutEffect } from "react"

import gsap from "gsap"

function Monkey(props) {
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".monkey",
        pin: ".monkey",
        start: "top top",
        end: () => `+=${window.innerHeight * 2}`,
        scrub: 0.2,
        refreshPriority: 93,
        // onLeave: () =>
        //   (document.querySelector(".desktop").style.display = "none"),
        // onEnterBack: () =>
        //   (document.querySelector(".desktop").style.display = "grid"),
      },
    })
    tl.fromTo(
      ".monkey > *:not(.monkeyDivider)",
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
    ).to(".monkey > *:not(.monkeyDivider)", {
      opacity: 0,
      scale: 0.95,
      y: 100,
      duration: 0.4,
      delay: 0.3,
      ease: "power4.in",
    })
  }, [])
  return (
    <div className={`${styles.container} monkey`}>
      <div className={styles.containerWrapper}>
        <div className={`${styles.parasContainer} monkeyFadeOut`}>
          <h3>{props.data.monkeyTitle}</h3>
          <p>{props.data.monkeyDescOne}</p>
        </div>
      </div>
      <div className={`${styles.divider} monkeyDivider`}></div>
      <div className={styles.monkeys}>
        <img src="/monkey/one.png" alt="card one" />
        <img src="/monkey/two.png" alt="card two" />
      </div>
      <div className={styles.glow}></div>
    </div>
  )
}

export default Monkey
