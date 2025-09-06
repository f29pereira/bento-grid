import styles from "./Schedule.module.css";
import Image from "next/image";

export default function Schedule() {
  return (
    <div className={`yellowBg border-r-10  ${styles.card}`}>
      <h1 className={styles.title}>Maintain a consistent posting schedule.</h1>
      <Image
        src="/images/illustration-consistent-schedule.webp"
        alt="Calendar showing consistent weekly schedule"
        width={256}
        height={193}
        className={styles.img}
      />
    </div>
  );
}
