import styles from "@/styles/Nav.module.css"

function Nav(props) {
  return (
    <nav
      className={`${styles.container} ${
        props.theme == "light" ? "fade" : "darkFade darkNav"
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
          .darkNav {
            position: sticky;
            top: 0;
            z-index: 100;
          }
        `}
      </style>
    </nav>
  )
}

export default Nav
