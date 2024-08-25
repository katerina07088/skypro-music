import { Bar } from "@/components/Bar/Bar";
import { CenterBlock } from "@/components/CenterBlock/CenterBlock";
import { Nav } from "@/components/Nav/Nav";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import styles from "./page.module.css";

export default function Home() {
  return (
    <body>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <main className={styles.main}>
            <Nav />
            <CenterBlock />
            <Sidebar />
          </main>
          <Bar />
          <footer className={styles.footer}></footer>
        </div>
      </div>
    </body>
  );
}
