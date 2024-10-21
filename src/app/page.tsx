"use client";
import { Bar } from "@/components/Bar/Bar";
import styles from "./page.module.css";
import { useState } from "react";
import { Track } from "@/types/types";
import { Main } from "@/components/Main/Main";

export default function Home() {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Main setCurrentTrack={setCurrentTrack} />
        {currentTrack && <Bar currentTrack={currentTrack} />}
        <footer className={styles.footer}></footer>
      </div>
    </div>
  );
}
