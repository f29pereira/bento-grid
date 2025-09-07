import styles from "./Followers.module.css";
import Image from "next/image";

/**
 * Renders followers growth card
 */
export default function Followers() {
  return (
    <div className={`purpleBg border-r-10 ${styles.card} ${styles.gridItem}`}>
      <Image
        src="images/illustration-grow-followers.webp"
        alt="Followers growth"
        width={256}
        height={226}
        className={styles.img}
      />
      <h1 className={`whiteText centerText ${styles.title}`}>
        Grow followers <span className="break-sm"></span> with non-stop
        <span className="break-sm"></span> content.
      </h1>
    </div>
  );
}
