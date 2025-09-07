import styles from "./Post.module.css";
import Image from "next/image";

/**
 * Renders create post card
 */
export default function Post() {
  return (
    <div
      className={`softYellowBg border-r-10 ${styles.card} ${styles.gridItem}`}
    >
      <h1 className={styles.title}>
        Create and schedule content
        <span className="purpleText italic"> quicker.</span>
      </h1>
      <Image
        src="images/illustration-create-post.webp"
        alt="Post button with arrow"
        width={382}
        height={182}
        className={styles.img}
      />
    </div>
  );
}
