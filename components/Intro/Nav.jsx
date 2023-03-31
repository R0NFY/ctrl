import styles from "@/styles/Nav.module.css"

function Nav(props) {
  return (
    <nav
      className={`${styles.container} ${
        props.theme == "light" ? "fade" : "darkFade"
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
    </nav>
  )
}

export default Nav
