import styles from "@/styles/Intro.module.css"
import Nav from "./Nav"
import Key from "./Key"

import { useState, useLayoutEffect } from "react"
import Fallback from "./Fallback"
import Image from "next/image"

function Intro(props) {
  const [isMobile, setIsMobile] = useState(false)
  useLayoutEffect(() => {
    if (window.innerWidth < 800) {
      setIsMobile(true)
    }
  })
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
          {!isMobile && <Key />}
          <Image
            width={2114}
            height={1188}
            src="/intro/key.png"
            alt="ctrl key"
            className={styles.keyImage}
            sizes="(max-width: 800px) 300vw"
          />
          {/* {isMobile && <Fallback />} */}
          <p className={`${styles.floating} fade`}>{props.data.paragraph}</p>
        </div>
      </div>
    </>
  )
}

export default Intro
