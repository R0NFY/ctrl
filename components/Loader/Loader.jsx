import styles from "@/styles/Loader.module.css"
import { useRef, useLayoutEffect } from "react"

import gsap from "gsap"

function Loader() {
  const container = useRef()

  useLayoutEffect(() => {
    // callback function to call when event triggers
    const onPageLoad = () => {
      setTimeout(() => {
        gsap.to(".loader img", {
          scale: 5,
          opacity: 0,
          ease: "power2.in",
          duration: 0.35,
          delay: 0.35,
          onComplete: () =>
            setTimeout(() => {
              document.querySelector(".loader").style.display = "none"
            }, 150),
        })
        gsap.to(".loader", {
          backgroundColor: "rgba(239, 239, 241, 0)",
          ease: "power2.inOut",
          delay: 0.5,
          duration: 0.05,
        })
        if (window.innerWidth > 800) {
          gsap.fromTo(
            ".intro > div",
            {
              opacity: 0,
              scale: 0.95,
              y: 100,
            },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              ease: "power2.out",
              duration: 0.5,
              delay: 0.5,
            }
          )
        }
      }, 250)
    }

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad()
    } else {
      window.addEventListener("load", onPageLoad, false)
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad)
    }
  }, [])
  return (
    <div ref={container} className={`${styles.container} loader`}>
      <img src="/logo/logo-light.svg" alt="CTRL logo" />
    </div>
  )
}

export default Loader
