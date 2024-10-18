"use client";

import { Track } from "@/types/types";
//import { Player } from "../Player/Player";
import styles from "./Bar.module.css";
import classNames from "classnames";
import {
  ChangeEvent,
  RefObject,
  SyntheticEvent,
  useRef,
  useState,
} from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import { formatTime } from "@/utils/formatTime";
import { Player } from "../Player/Player";

type props = { currentTrack: Track };
export const Bar = ({ currentTrack }: props) => {
  const [progress, setProgress] = useState({
    currentTime: 0,
    duration: 0,
  });
  const [isLoop, setIsLoop] = useState<boolean>(false);
  const [isPlay, setIsPlay] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
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
    if (audioRef.current) {
      setProgress({
        currentTime: e.currentTarget.currentTime,
        duration: e.currentTarget.duration,
      });
    }
  };

  function seekAudio(event: ChangeEvent<HTMLInputElement>) {
    if (audioRef.current) {
      audioRef.current.currentTime = Number(event.target.value);
    }
  }
  function handleLoop() {
    if (audioRef.current) {
      audioRef.current.loop = !isLoop;
      setIsLoop((prevState) => !prevState);
    }
  }

  return (
    <div className={styles.bar}>
      <div className={styles.barContent}>
        <div className={styles.barTimer}>
          {formatTime(progress.currentTime)} /{" "}
          {formatTime(currentTrack.duration_in_seconds)}
        </div>

        <div>
          <ProgressBar
            max={progress.duration}
            value={progress.currentTime}
            step={0.01}
            onChange={seekAudio}
          />
        </div>
        <div className={styles.barPlayerBlock}>
          <audio className={styles.audioHtml}
            onTimeUpdate={onChangeTime}
            ref={audioRef}
            controls
            src={currentTrack.track_file}
          />
          <Player
            currentTrack={currentTrack}
            onTogglePlay={onTogglePlay}
            isPlay={isPlay}
            handleLoop={handleLoop}
            isLoop={isLoop}
          />
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
      </div>
    </div>
  );
};
