import styles from "@/styles/Hero.module.css"
import Nav from "../Intro/Nav"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

import { useLayoutEffect, useRef } from "react"
import Elevate from "./Elevate"

gsap.registerPlugin(ScrollTrigger)

function Hero(props) {
  const p = useRef()
  const hero = useRef()

  // breaking paragraph into html
  const cmsPara = props.data[1].paragraph

  const findSpan = /<\s*span[^>]*>(.*?)<\s*\/\s*span>/
  const highlight = cmsPara.match(findSpan)

  const paraBefore = cmsPara.substring(0, cmsPara.indexOf(highlight[0]))
  const paraAfter = cmsPara.substring(
    cmsPara.indexOf(highlight[0]) + highlight[0].length,
    cmsPara.length
  )

  // animating everything
  useLayoutEffect(() => {
    setTimeout(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero",
          pin: ".hero",
          scrub: true,
          refreshPriority: 99,
          start: "top top",
          end: () => `+=${document.querySelector(".intro").offsetHeight * 3}`,
          defaults: {
            ease: "none",
          },
        },
      })
      if (window.innerWidth < 800) {
        const anotherTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".hero",
            refreshPriority: 100,
            start: "top+=35% top",
            end: "top+=50% top",
            toggleActions: "play none reverse none",
            defaults: {
              ease: "none",
            },
          },
        })
        anotherTl.fromTo(
          ".darkNav",
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 0.33,
            ease: "power2.inOut",
          },
          "<"
        )
      }
      tl.fromTo(
        ".hero",
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
          ".elevate",
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 0.01,
            ease: "power4.inOut",
            delay: 0.5,
            stagger: {
              amount: 0.5,
              ease: "linear",
            },
          },
          "<"
        )
        .to(
          p.current,
          {
            scale: () => (window.innerWidth > 800 ? 0.42 : 0.75),
            duration: 0.5,
            ease: "linear",
          },
          "<"
        )

        .to(
          ".experienceText",
          {
            height: "10vw",
            duration: 0.5,
            ease: "linear",
          },
          "<"
        )

        .fromTo(
          ".overlay",
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
          },
          "<"
        )

        .to(".elevate:not(:last-child)", {
          autoAlpha: 0,
          duration: 0.2,
        })
        .to(
          ".darkFade:not(.darkNav)",
          {
            autoAlpha: 0,
            duration: 0.2,
          },
          "<"
        )
        .to(
          ".elevate:last-child",
          {
            zIndex: 10000,
            scale: 10,
            autoAlpha: 0,
            ease: "power4.in",
            duration: 0.5,
          },
          "<"
        )
    }, 100)
  }, [])

  return (
    <div className={`${styles.container} hero`} ref={hero}>
      <Nav logo="/logo/logo-dark.svg" theme="dark" data={props.data[0]}></Nav>
      <p ref={p} className="p darkFade">
        {paraBefore}
        <span>{highlight[1]}</span>
        {paraAfter}
      </p>
      <Elevate />
    </div>
  )
}

export default Hero
