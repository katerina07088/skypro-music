"use client";

import { Track } from "@/types/types";
import styles from "./Playlist.module.css";
import classNames from "classnames";
import { OneTrack } from "../Track/Track";

type PlayListProps = {
  tracks: Track[];
};
export const Playlist: React.FC<PlayListProps> = ({ tracks }) => {
  return (
    <div className={styles.centerblockContent}>
      <div className={styles.contentTitle}>
        <div className={classNames(styles.playlistTitle__col, styles.col01)}>
          Трек
        </div>
        <div className={classNames(styles.playlistTitle__col, styles.col02)}>
          Исполнитель
        </div>
        <div className={classNames(styles.playlistTitle__col, styles.col03)}>
          Альбом
        </div>
        <div className={classNames(styles.playlistTitle__col, styles.col04)}>
          <svg className={styles.playlistTitle__svg}>
            <use xlinkHref="/img/icon/sprite.svg#icon-watch"></use>
          </svg>
        </div>
      </div>
      <div className={styles.contentPlaylist}>
        {tracks.map((track) => (
          <OneTrack key={track._id} track={track} />
        ))}
      </div>
    </div>
  );
};
