import styles from "@/styles/Mobile.module.css"
import Image from "next/image"

import { useLayoutEffect } from "react"

import gsap from "gsap"

function Mobile(props) {
  useLayoutEffect(() => {
    if (window.innerWidth > 800) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".mobile",
          pin: ".mobile",
          start: "top top",
          end: () => `+=${window.innerHeight * 4.5}`,
          scrub: 0.2,
          refreshPriority: 95,
        },
      })
      tl.fromTo(
        ".mobile > *:not(.mobileDivider)",
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
        .to(".lock p", {
          opacity: 0,
          ease: "power2.in",
        })
        .to(
          ".bars",
          {
            opacity: 0,
            ease: "power2.in",
          },
          "<"
        )
        .to(
          ".lock img",
          {
            scale: 3,
            opacity: 0,
            ease: "power2.in",
            duration: 0.6,
          },
          "<50%"
        )
        .fromTo(
          ".app",
          {
            opacity: 0,
            scale: 0.98,
          },
          {
            scale: 1,
            opacity: 1,
            ease: "power2.out",
            duration: 0.6,
          },
          "<50%"
        )
        .to(".mobileFadeOut", {
          opacity: 0,
          scale: 0.95,
          delay: 0.3,
          duration: 0.25,
          y: "-5vh",
        })
        .fromTo(
          ".notifications img",
          {
            y: "10vh",
            opacity: 0,
            scale: 0.95,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.65,
            y: "0vh",
            stagger: {
              each: 0.75,
              ease: "linear",
            },
          },
          "50%"
        )
        .to(
          ".mobile > *:not(.mobileDivider)",
          {
            opacity: 0,
            scale: 0.95,
            y: -100,
            duration: 0.6,
            delay: 0.1,
            ease: "power4.in",
          },
          "<75%"
        )
    } else {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".mobile",
          start: "top+=30% bottom",
          end: "top+=150% bottom",
          scrub: 0.2,
          refreshPriority: 95,
        },
      })
      tl.fromTo(
        ".mobile > *",
        {
          opacity: 0,
          scale: 0.95,
          y: 50,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          ease: "power2.out",
        }
      ).fromTo(
        ".notifications img",
        {
          y: "5vh",
          opacity: 0,
          scale: 0.95,
        },
        {
          opacity: 1,
          scale: 1,
          y: "0vh",
          stagger: {
            each: 0.2,
            ease: "linear",
          },
        },
        "50%"
      )
    }
  }, [])

  return (
    <div className={`${styles.container} mobile`}>
      <div className={styles.containerWrapper}>
        <div className={`${styles.parasContainer} mobileFadeOut`}>
          <h3>{props.data.mobileTitle}</h3>
          <p>{props.data.mobileDescOne}</p>
          <p>{props.data.mobileDescTwo}</p>
        </div>
        <div className={`${styles.notifications} notifications`}>
          <img
            src="/mobile/notifications/first.png"
            alt=""
            className="notification"
          />
          <img
            src="/mobile/notifications/second.png"
            alt=""
            className="notification"
          />
          <img
            src="/mobile/notifications/third.png"
            alt=""
            className="notification"
          />
          <img
            src="/mobile/notifications/fourth.png"
            alt=""
            className="notification"
          />
        </div>
      </div>
      <div className={`${styles.divider} mobileDivider`}></div>
      <div className={`${styles.mobileDivider}`}></div>
      <div className={styles.phone}>
        <div className={styles.glow}>
          <img src="/blur.png" alt="" />
        </div>
        <img className={`${styles.bars} bars`} src="/mobile/phone.svg" alt="" />
        <div className={`${styles.lock} lock`}>
          <p>TAKE</p>
          <img src="/logo/logo-dark.svg" alt="" />
          <p>
            CONTROL<span>CONTROL</span>
          </p>
        </div>
        <img className={`${styles.app} app`} src="/mobile/mobile.png" alt="" />
      </div>
      <div className={`${styles.mobileNotifications} notifications`}>
        <img
          src="/mobile/notifications/first.png"
          alt=""
          className="notification"
        />
        <img
          src="/mobile/notifications/second.png"
          alt=""
          className="notification"
        />
        <img
          src="/mobile/notifications/third.png"
          alt=""
          className="notification"
        />
        <img
          src="/mobile/notifications/fourth.png"
          alt=""
          className="notification"
        />
      </div>
    </div>
  )
}

export default Mobile
