"use client";
import { useEffect, useState } from "react";
import { Filter } from "../Filter/Filter";
import { Playlist } from "../Playlist/Playlist";
import { Search } from "../Search/Search";
import styles from "./CenterBlock.module.css";
import { getTracks } from "@/api/api";
import { Track } from "@/types/types";
type props={
  setCurrentTrack: (track: Track) => void
}
export const CenterBlock = ({setCurrentTrack}: props) => {
  const [err, setErr] = useState<string | null>(null);
  const [tracks, setTracks] = useState<Track[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getTracks();
        setTracks(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setErr(error.message);
        }
      }
    };
    getData();
  }, [tracks]);

  return (
    <div className={styles.mainCenterblock}>
      <Search />
      <h2 className={styles.centerblockH2}>Треки</h2>
      <Filter tracks={tracks} />
      <Playlist setCurrentTrack = {setCurrentTrack} tracks={tracks} />
      <p>{err}</p>
    </div>
  );
};
