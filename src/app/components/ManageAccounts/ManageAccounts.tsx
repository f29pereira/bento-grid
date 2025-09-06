import styles from "./ManageAccounts.module.css";
import Image from "next/image";

/**
 * Renders the Manage accounts card
 */
export default function ManageAccounts() {
  return (
    <div className={`whiteBg border-r-10 ${styles.card}`}>
      <div className={`flex-col-center ${styles.imgCont}`}>
        <Image
          src="/images/illustration-multiple-platforms.webp"
          alt="accounts with followers numbers"
          width={633}
          height={134}
          className={styles.img}
        />
      </div>
      <h1 className={styles.title}>Manage multiple accounts and platforms.</h1>
    </div>
  );
}
