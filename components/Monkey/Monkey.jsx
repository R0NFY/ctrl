import styles from "@/styles/Monkey.module.css"
import { useLayoutEffect } from "react"

import gsap from "gsap"
import Image from "next/image"

function Monkey(props) {
  useLayoutEffect(() => {
    if (window.innerWidth > 800) {
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
        ".monkey > *:not(.monkeyDivider):not(.monkeyBlur)",
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
        .fromTo(
          ".monkeyBlur",
          {
            opacity: 0,
            scale: 1,
          },
          {
            scale: 2.75,
            opacity: 1,
            duration: 0.4,
            ease: "power4.out",
          },
          "<"
        )
        .fromTo(
          ".monkeyImages img:last-child",
          {
            opacity: 0,
            scale: 0.95,
            y: 100,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.2,
            ease: "power4.out",
          },
          "<"
        )
        .fromTo(
          ".monkeyImages img:first-child",
          {
            opacity: 0,
            scale: 0.93,
            y: 150,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: "power3.out",
          },
          "<"
        )
        .to(".monkey > *:not(.monkeyDivider)", {
          opacity: 0,
          scale: 0.95,
          y: -100,
          duration: 0.4,
          delay: 0.1,
          ease: "power4.in",
        })
    } else {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".monkey",
          start: "top+=45% bottom",
          end: "top+=150% bottom",
          scrub: 0.2,
          refreshPriority: 93,
        },
      })
      tl.fromTo(
        ".monkey > *:not(.monkeyDivider):not(.monkeyBlur)",
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
        .fromTo(
          ".monkeyBlur",
          {
            opacity: 0,
            scale: 1,
          },
          {
            scale: 1.5,
            opacity: 1,
            duration: 0.4,
            ease: "power4.out",
          },
          "<"
        )
        .fromTo(
          ".monkeyImages img:last-child",
          {
            opacity: 0,
            scale: 0.95,
            y: 100,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.2,
            ease: "power4.out",
          },
          "<"
        )
        .fromTo(
          ".monkeyImages img:first-child",
          {
            opacity: 0,
            scale: 0.93,
            y: 150,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: "power3.out",
          },
          "<"
        )
        .to(".monkey > *:not(.monkeyDivider)", {
          opacity: 0,
          scale: 0.95,
          y: -100,
          duration: 0.4,
          delay: 0.3,
          ease: "power4.in",
        })
    }
  }, [])
  return (
    <div className={`${styles.container} monkey`}>
      <div className={styles.containerWrapper}>
        <div className={`${styles.parasContainer} monkeyFadeOut`}>
          <h3>{props.data.monkeyTitle}</h3>
          <p>{props.data.monkeyDescOne}</p>
        </div>
      </div>
      <div className={styles.mobileDivider}></div>
      <div className={`${styles.divider} monkeyDivider`}></div>
      <div className={`${styles.monkeys} monkeyImages`}>
        <Image
          sizes="(max-width: 800px) 100vw, 100vw"
          src="/monkey/one.png"
          width={1188}
          height={742}
          alt="card one"
        />
        <Image
          sizes="(max-width: 800px) 100vw, 100vw"
          src="/monkey/two.png"
          width={1188}
          height={742}
          alt="card two"
        />
      </div>
      <div className={`${styles.glow} monkeyBlur`}>
        <img src="/blur.png" alt="" />
      </div>
    </div>
  )
}

export default Monkey
