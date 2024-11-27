"use client";
import { useEffect, useState } from "react";
import { Filter } from "../Filter/Filter";
import { Playlist } from "../Playlist/Playlist";
import { Search } from "../Search/Search";
import styles from "./CenterBlock.module.css";
import { getTracks } from "@/api/api";
import { Track } from "@/types/types";
import { useDispatch, useSelector } from "react-redux";
import { trackActions, useAppSelector } from "@/store/store";

export const CenterBlock = () => {
  const [err, setErr] = useState<string | null>(null);
  const tracks = useAppSelector((state) => state.trackSlice.tracks);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getTracks();
        dispatch(trackActions.setTracks(data));
      } catch (error: unknown) {
        if (error instanceof Error) {
          setErr(error.message);
        }
      }
    };
    getData();
  }, []);

  const dispatch = useDispatch();

  return (
    <div className={styles.mainCenterblock}>
      <Search />
      <h2 className={styles.centerblockH2}>Треки</h2>
      <Filter tracks={tracks} />
      <Playlist
        tracks={tracks}
        setCurrentTrack={(track) => dispatch(trackActions.setTrack(track))}
      />
      <p>{err}</p>
    </div>
  );
};
