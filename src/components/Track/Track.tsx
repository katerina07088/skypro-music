import { Track } from "@/types/types";
import styles from "./Track.module.css";
import { formatTime } from "@/utils/formatTime";

type TrackProps = {
  track: Track;
  setCurrentTrack: (track: Track) => void;
  active: boolean;
  pause: boolean;
};

export const OneTrack: React.FC<TrackProps> = ({
  track,
  setCurrentTrack,
  active,
  pause,
}) => {
  const onClickTrack = () => {
    setCurrentTrack(track);
  };

  return (
    <div onClick={onClickTrack} key={track._id}>
      <div className={styles.playlistItem}>
        <div className={styles.playlistTrack}>
          <div className={styles.trackTitle}>
            <div className={styles.trackTitleImage}>
              {active ? (
                <div
                  className={styles.indicator}
                  data-pause={pause ? "false" : "true"}
                ></div>
              ) : (
                <svg className={styles.trackTitleSvg}>
                  <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
                </svg>
              )}
            </div>
            <div className={styles.trackTitleText}>
              <a className={styles.trackTitleLink}>
                {track.author}
                <span className={styles.trackTitleSpan}></span>
              </a>
            </div>
          </div>
          <div className={styles.trackAuthor}>
            <a className={styles.trackAuthorLink}>{track.album}</a>
          </div>
          <div className={styles.trackAlbum}>
            <a className={styles.trackAlbumLink}>{track.name}</a>
          </div>
          <div className={styles.trackTime}>
            <svg className={styles.trackTimeSvg}>
              <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
            </svg>
            <span className={styles.trackTimeText}>
              {formatTime(track.duration_in_seconds)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
