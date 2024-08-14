// styles
import styles from "./page.module.css";

// components
import Footer from "@/components/Footer";
import Countdown from "@/components/Countdown";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.container}>
        <div className={styles.sub_container}>
          <h1 className={styles.header}>WE&apos;RE LAUNCHING SOON</h1>
          <Countdown/>
        </div>
        <Footer/>
      </section>
    </main>
  );
}
