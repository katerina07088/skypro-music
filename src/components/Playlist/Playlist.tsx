"use client";

import { Track } from "@/types/types";
import styles from "./Playlist.module.css";
import classNames from "classnames";
import { OneTrack } from "../Track/Track";

type PlayListProps = {
  tracks: Track[];
  setCurrentTrack: (track: Track) => void;
};
export const Playlist: React.FC<PlayListProps> = ({
  tracks,
  setCurrentTrack,
}) => {
  return (
    <div className={styles.centerblockContent}>
      <div className={styles.contentTitle}>
        <div className={classNames(styles.playlistTitleCol, styles.col01)}>
          Трек
        </div>
        <div className={classNames(styles.playlistTitleCol, styles.col02)}>
          Исполнитель
        </div>
        <div className={classNames(styles.playlistTitleCol, styles.col03)}>
          Альбом
        </div>
        <div className={classNames(styles.playlistTitleCol, styles.col04)}>
          <svg className={styles.playlistTitleSvg}>
            <use xlinkHref="/img/icon/sprite.svg#icon-watch"></use>
          </svg>
        </div>
      </div>
      <div className={styles.contentPlaylist}>
        {tracks.map((track) => (
          <OneTrack setCurrentTrack = {setCurrentTrack} key={track._id} track={track} />
        ))}
      </div>
    </div>
  );
};
