import styles from "@/styles/Desktop.module.css"
import Image from "next/image"

function DesktopMobile(props) {
  return (
    <div className={`${styles.container}`}>
      <div className={styles.containerWrapper}>
        <div className={`${styles.parasContainer}`}>
          <p>{props.data.portfolioParaOne}</p>
          <p>{props.data.portfolioParaTwo}</p>
        </div>
        <div className={`${styles.imageWrapper}`}>
          <div className={styles.glow}></div>
          <Image
            src="/desktop/portfolio.jpg"
            width={840}
            height={557}
            alt="Portfolio Screen"
          />
        </div>
        <div className={styles.mobileDivider}></div>
        <div className={`${styles.parasContainer}`}>
          <p>{props.data.tradingParaOne}</p>
          <p>{props.data.tradingParaTwo}</p>
        </div>

        <div className={`${styles.imageWrapper}`}>
          <div className={styles.glow}></div>
          <Image
            src="/desktop/trading.jpg"
            width={840}
            height={557}
            alt="Trading Screen"
          />
        </div>
      </div>
    </div>
  )
}

export default DesktopMobile
