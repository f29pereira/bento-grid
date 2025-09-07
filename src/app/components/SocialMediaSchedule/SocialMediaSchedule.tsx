import styles from "./SocialMediaSchedule.module.css";
import Image from "next/image";

/**
 * Renders social media post schedule card
 */
export default function SocialMediaSchedule() {
  return (
    <div
      className={`flex-col-center border-r-10 softPurpleBg ${styles.card} ${styles.gridItem}`}
    >
      <h1 className={`${styles.centerText} ${styles.title}`}>
        Schedule to social media.
      </h1>
      <Image
        src="/images/illustration-schedule-posts.webp"
        alt="Schedule post graph showing the best day to post"
        width={715}
        height={638}
        className={styles.img}
      />
      <p className={`${styles.centerText} ${styles.text}`}>
        Optimize post timings to publish content at the perfect time for your
        audience.
      </p>
    </div>
  );
}
