import Image from "next/image";
import styles from "./SocialMedia.module.css";

/**
 * Renders the social media card
 */
export default function SocialMedia() {
  return (
    <div className={`flex-col-center purpleBg border-r-10 ${styles.card}`}>
      <h1 className={`whiteText ${styles.title}`}>
        Social Media <span className="yellowText">10x</span>{" "}
        <span className="italic">Faster</span> with AI
      </h1>
      <Image
        className={styles.img}
        src="/images/illustration-five-stars.webp"
        alt="Five start reviews"
        width={384}
        height={64}
      />
      <h2 className={`whiteText ${styles.text}`}>Over 4,000 5-start reviews</h2>
    </div>
  );
}
