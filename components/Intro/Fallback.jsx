import Image from "next/image"
import styles from "styles/Key.module.css"

function Fallback() {
  return (
    <div className={styles.fallback}>
      <Image
        width={2114}
        height={1188}
        src="/intro/key.png"
        alt="ctrl key"
        sizes="(max-width: 800px) 300vw"
      />
    </div>
  )
}

export default Fallback
