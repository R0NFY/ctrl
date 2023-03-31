import styles from "@/styles/Features.module.css"

function Feature(props) {
  return (
    <div className={styles.feature}>
      {props.anim}
      <h3>{props.name}</h3>
      <p>{props.desc}</p>
      <div className={styles.overlay}></div>
      <div className={styles.glow}></div>
    </div>
  )
}

export default Feature
