"use client";
import { Track } from "@/types/types";
import styles from "./Player.module.css";
import classNames from "classnames";
import { ChangeEvent, SyntheticEvent, useRef, useState } from "react";

type props = { currentTrack: Track };

export const Player = ({ currentTrack }: props) => {
  const [progress, setProgress] = useState({
    currentTime: 0,
    duration: 0,
  });
  const [isPlay, setIsPlay] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const onTogglePlay = () => {
    if (audioRef.current) {
      if (isPlay) {
        setIsPlay(false);
        audioRef.current.pause();
      } else {
        setIsPlay(true);
        audioRef.current.play();
      }
    }
  };

  const onChangeVolume = (e: ChangeEvent<HTMLInputElement>) => {
    const volume = Number(e.target.value) / 100;
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  };

  const onChangeTime = (e: SyntheticEvent<HTMLAudioElement>) => {
    setProgress({
      currentTime: e.currentTarget.currentTime,
      duration: e.currentTarget.duration,
    });
  };
  return (
    <div>
      <audio
        onTimeUpdate={onChangeTime}
        ref={audioRef}
        controls
        src={currentTrack.track_file}
      />
      <div className={styles.barPlayer}>
        <div className={styles.playerControls}>
          <div className={styles.playerBtnPrev}>
            <svg className={styles.playerBtnPrevSvg}>
              <use xlinkHref="/img/icon/sprite.svg#icon-prev"></use>
            </svg>
          </div>
          <div onClick={onTogglePlay} className={styles.playerBtnPlay}>
            <svg className={styles.playerBtnPlaySvg}>
              <use xlinkHref="/img/icon/sprite.svg#icon-play"></use>
            </svg>
          </div>
          <div className={styles.playerBtnNext}>
            <svg className={styles.playerBtnNextSvg}>
              <use xlinkHref="/img/icon/sprite.svg#icon-next"></use>
            </svg>
          </div>
          <div className={classNames(styles.playerBtnRepeat, styles.btnIcon)}>
            <svg className={styles.playerBtnRepeatSvg}>
              <use xlinkHref="/img/icon/sprite.svg#icon-repeat"></use>
            </svg>
          </div>
          <div className={classNames(styles.playerBtnShuffle, styles.btnIcon)}>
            <svg className={styles.playerBtnShuffleSvg}>
              <use xlinkHref="/img/icon/sprite.svg#icon-shuffle"></use>
            </svg>
          </div>
        </div>

        <div className={styles.playerTrackPlay}>
          <div className={styles.trackPlayContain}>
            <div className={styles.trackPlayImage}>
              <svg className={styles.trackPlaySvg}>
                <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
              </svg>
            </div>
            <div className={styles.trackPlayAuthor}>
              <a className={styles.trackPlayAuthorLink} href="http://">
                {currentTrack.name}
              </a>
            </div>
            <div className={styles.trackPlayAlbum}>
              <a className={styles.trackPlayAlbumLink} href="http://">
                {currentTrack.author}
              </a>
            </div>
          </div>

          <div className={styles.trackPlayLikeDis}>
            <div className={classNames(styles.trackPlayLike, styles.btnIcon)}>
              <svg className={styles.trackPlayLikeSvg}>
                <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
              </svg>
            </div>
            <div
              className={classNames(styles.trackPlayDislike, styles.btnIcon)}
            >
              <svg className={styles.trackPlayDislikeSvg}>
                <use xlinkHref="/img/icon/sprite.svg#icon-dislike"></use>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.barVolumeBlock}>
        <div className={styles.volumeContent}>
          <div className={styles.volumeImage}>
            <svg className={styles.volumeSvg}>
              <use xlinkHref="/img/icon/sprite.svg#icon-volume"></use>
            </svg>
          </div>
          <div className={classNames(styles.volumeProgress, styles.btn)}>
            <input
              onChange={onChangeVolume}
              className={classNames(styles.volumeProgressLine, styles.btn)}
              type="range"
              name="range"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
