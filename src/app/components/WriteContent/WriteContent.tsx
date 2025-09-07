import styles from "./WriteContent.module.css";
import Image from "next/image";

/**
 * Renders write content with AI card
 */
export default function WriteContent() {
  return (
    <div className={`yellowBg border-r-10 ${styles.card} ${styles.gridItem}`}>
      <h1 className={styles.title}>Write your content using AI.</h1>
      <Image
        src="/images/illustration-ai-content.webp"
        alt="Post button with arrow"
        width={440}
        height={446}
        className={styles.img}
      />
    </div>
  );
}
