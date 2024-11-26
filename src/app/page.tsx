"use client";
import { Bar } from "@/components/Bar/Bar";
import styles from "./page.module.css";
import { useState } from "react";
import { Track } from "@/types/types";
import { Main } from "@/components/Main/Main";
import TrackProvider from "@/context/TrackContext";

export default function Home() {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
      <TrackProvider>
        <Main setCurrentTrack={setCurrentTrack} />
        {currentTrack && <Bar currentTrack={currentTrack} />}
      </TrackProvider>
        <footer className={styles.footer}></footer>
      </div>
    </div>
  );
}
