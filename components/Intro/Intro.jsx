import styles from "@/styles/Intro.module.css"
import Nav from "./Nav"
import Key from "./Key"

function Intro(props) {
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
        </div>
      </div>
    </>
  )
}

export default Intro
