import styles from "@/styles/Experience.module.css"

import gsap from "gsap"
import { useLayoutEffect } from "react"
import Lines from "./Lines"

function Experience() {
  useLayoutEffect(() => {
    if (window.innerWidth > 800) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".experience",
          scrub: 0.2,
          start: "top bottom",
          end: "bottom+=10% top",
          refreshPriority: 96,
          defaults: {
            ease: "none",
          },
        },
      })

      tl.fromTo(
        ".wordsEven",
        {
          x: "-20vw",
        },
        {
          x: "-18vw",
          ease: "linear",
        }
      )
        .fromTo(
          ".wordsOdd",
          {
            x: "-15vw",
          },
          {
            x: "-20vw",
            ease: "linear",
          },
          "<"
        )
        .fromTo(
          ".wordsThree",
          {
            x: "-18vw",
          },
          {
            x: "-21vw",
            ease: "linear",
          },
          "<"
        )
    }
  }, [])

  return (
    <div className={`${styles.container} experience`}>
      <h2>
        <span>
          CTRL <span>CTRL</span>{" "}
        </span>
        <span>
          Your <span>Your</span>{" "}
        </span>
      </h2>
      <div className={styles.line}>
        <Lines />
        <div className={`${styles.words} wordsOdd`}>
          <p>Experience</p>
          <span>
            <p>Experience</p>
          </span>
          <p>Experience</p>
          <span>
            <p>Experience</p>
          </span>
          <p>Experience</p>
          <p>Experience</p>
          <span>
            <p>Experience</p>
          </span>
          <p>Experience</p>
        </div>
      </div>
      <div className={styles.line}>
        <Lines />
        <div className={`${styles.words} wordsEven`}>
          <span>
            <p>Future</p>
          </span>
          <p>Future</p>
          <span>
            <p>Future</p>
          </span>
          <p>Future</p>
          <span>
            <p>Future</p>
          </span>
          <span>
            <p>Future</p>
          </span>
          <p>Future</p>
          <span>
            <p>Future</p>
          </span>
        </div>
      </div>
      <div className={styles.line}>
        <Lines />
        <div className={`${styles.words} wordsThree`}>
          <p>Crypto</p>
          <p>Crypto</p>
          <span>
            <p>Crypto</p>
          </span>
          <span>
            <p>Crypto</p>
          </span>
          <p>Crypto</p>
          <p>Crypto</p>
          <span>
            <p>Crypto</p>
          </span>
          <p>Crypto</p>
        </div>
      </div>
      <p>Control your experience, future and crypto</p>
    </div>
  )
}

export default Experience
