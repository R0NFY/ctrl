import styles from "@/styles/Email.module.css"
import gsap from "gsap"
import { useLayoutEffect } from "react"

function Email() {
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".email",
        start: () => `top top`,
        end: "bottom bottom",
        toggleActions: "play none reverse none",
        refreshPriority: 91,
        defaults: {
          ease: "none",
        },
      },
    })

    tl.fromTo(
      ".email > *",
      {
        opacity: 0,
        scale: 0.95,
        y: 50,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        ease: "power2.inOut",
        duration: 0.15,
      }
    )
  }, [])
  return (
    <div className={`${styles.container} email`}>
      <div className={styles.wrapper}>
        <h2>Join the waitlist</h2>
        <p>get updates on launch and more...</p>
        <div className={styles.email}>
          <div className={styles.glow}></div>
          <div className={styles.inputWrapper}>
            <input type="email" placeholder="Your Email" />
            <div className={`${styles.line} line`}></div>
          </div>
          <button type="submit">subscribe</button>
        </div>
        <div className={`${styles.glow} emailGlow`}></div>
      </div>
    </div>
  )
}

export default Email
