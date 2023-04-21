import styles from "@/styles/Intro.module.css"
import Nav from "./Nav"
import Key from "./Key"

import { useLayoutEffect } from "react"
import { gsap } from "gsap"

function Intro(props) {
  useLayoutEffect(() => {
    const onPageLoad = () => {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
          clearTimeout(showScroll)
        }
      })
      const showScroll = setTimeout(() => {
        gsap.fromTo(
          ".scroll",
          {
            y: 100,
            opacity: 0,
            scale: 0.95,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            ease: "power3.out",
            duration: 0.25,
          }
        )
        let run = false
        window.addEventListener("scroll", () => {
          if (!run) {
            gsap.to(".scroll", {
              y: 100,
              opacity: 0,
              ease: "power3.in",
              scale: 0.95,
              duration: 0.25,
            })
          }
          run = true
        })
      }, 3000)
    }

    if (document.readyState === "complete") {
      onPageLoad()
    } else {
      window.addEventListener("load", onPageLoad, false)
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad)
    }
  }, [])
  return (
    <>
      <div className={`${styles.container} intro`}>
        <div className={styles.wrapper}>
          <Nav
            logo="/logo/logo-light.svg"
            theme="light"
            data={props.data}
          ></Nav>
          <h1 className="fade">
            Take <span>Control</span>
          </h1>
          <Key />
          <p className={`${styles.floating} fade`}>{props.data.paragraph}</p>
          <img
            className={`${styles.scroll} fade scroll`}
            src="/intro/scroll.png"
            alt=""
          />
        </div>
      </div>
    </>
  )
}

export default Intro
