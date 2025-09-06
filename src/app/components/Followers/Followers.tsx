import styles from "./Followers.module.css";
import Image from "next/image";

/**
 * Renders followers growth card
 */
export default function Followers() {
  return (
    <div className={`flex-col-center purpleBg border-r-10 ${styles.card}`}>
      <Image
        src="/images/illustration-grow-followers.webp"
        alt="Followers growth"
        width={256}
        height={226}
        className={styles.img}
      />
      <h1 className={`whiteText centerText ${styles.text}`}>
        Grow followers with non-stop content.
      </h1>
    </div>
  );
}
