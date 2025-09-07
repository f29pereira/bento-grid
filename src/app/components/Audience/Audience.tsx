import styles from "./Audience.module.css";
import Image from "next/image";

/**
 * Renders audience percentage grow card
 */
export default function Audience() {
  return (
    <div className={`whiteBg border-r-10 ${styles.card} ${styles.gridItem}`}>
      <div>
        <h1 className={styles.title}>&#62;56&#37;</h1>
        <p className={styles.text}>faster audience growth</p>
      </div>
      <Image
        src="images/illustration-audience-growth.webp"
        alt="sequence of Apple Human Emojis"
        width={358}
        height={334}
        className={styles.img}
      />
    </div>
  );
}
