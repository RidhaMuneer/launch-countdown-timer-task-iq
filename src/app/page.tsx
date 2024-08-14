import Footer from "@/components/Footer";
import styles from "./page.module.css";
export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.container}>
        <div className={styles.sub_container}>
          <h1 className={styles.header}>WE&apos;RE LAUNCHING SOON</h1>
        </div>
        <Footer/>
      </section>
    </main>
  );
}
