import styles from "@/styles/Nav.module.css"
import { useLayoutEffect, useState } from "react"

function Nav(props) {
  const [mobile, setMobile] = useState(false)

  useLayoutEffect(() => {
    if (window.innerWidth < 800) {
      setMobile(true)
    }
  }, [])
  return (
    <nav
      className={`${styles.container} ${
        props.theme == "light" ? "fade" : mobile ? "darkNav" : "darkFade"
      }`}
    >
      <img src={props.logo} alt="ctrl logo" />
      <a
        className={props.theme == "dark" ? styles.darkLink : ""}
        target="_blank"
        href={props.data.link.url}
      >
        {props.data.link.urlCaption}
      </a>
      <style jsx global>
        {`
          @media (max-width: 800px) {
            .darkNav {
              position: sticky;
              top: 0;
              z-index: 100;
            }
          }
        `}
      </style>
    </nav>
  )
}

export default Nav
