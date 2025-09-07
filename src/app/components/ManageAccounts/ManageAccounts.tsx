import styles from "./ManageAccounts.module.css";
import Image from "next/image";

/**
 * Renders manage accounts and platforms card
 */
export default function ManageAccounts() {
  return (
    <div className={`whiteBg border-r-10 ${styles.card} ${styles.gridItem}`}>
      <div className={`flex-col-center ${styles.imgCont}`}>
        <Image
          src="/images/illustration-multiple-platforms.webp"
          alt="accounts with followers numbers"
          width={633}
          height={134}
          className={styles.img}
        />
      </div>
      <h1 className={styles.title}>
        Manage<span className={styles.breakDesktop}></span> multiple
        <span className={styles.breakDesktop}></span> accounts and
        <span className={styles.breakDesktop}></span> platforms.
      </h1>
    </div>
  );
}
