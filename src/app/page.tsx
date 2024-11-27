"use client";

import { Bar } from "@/components/Bar/Bar";
import styles from "./page.module.css";
import { Main } from "@/components/Main/Main";
import { useAppSelector } from "@/store/store";

export default function Home() {
  const currentTrack = useAppSelector((state) => state.trackSlice.track);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Main />

        {currentTrack && <Bar currentTrack={currentTrack} />}

        <footer className={styles.footer}></footer>
      </div>
    </div>
  );
}
