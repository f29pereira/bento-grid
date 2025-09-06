import styles from "./page.module.css";
import Grid from "./components/Grid/Grid";

export default function Home() {
  return (
    <main className={styles.padding}>
      <Grid />
    </main>
  );
}
