import styles from "@/styles/Experience.module.css"

function Lines() {
  const NUMBER_OF_LINES = 24

  const lines = []

  for (let i = 0; i < NUMBER_OF_LINES; i++) {
    lines.push(<div key={i}></div>)
  }

  return (
    <div className={styles.lines}>
      {lines.map((line, i) => {
        return line
      })}
    </div>
  )
}

export default Lines
