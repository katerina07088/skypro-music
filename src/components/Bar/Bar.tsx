"use client";

import { Track } from "@/types/types";
import styles from "./Bar.module.css";
import classNames from "classnames";
import {
  ChangeEvent,
  SyntheticEvent,
  useEffect,
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

  useEffect(() => {
    if (audioRef.current) {
      setIsPlay(true);
      audioRef.current.play();
    }
  }, [currentTrack]);
  const onChangeVolume = (e: ChangeEvent<HTMLInputElement>) => {
    const volume = Number(e.target.value) / 100;
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  };

  const onChangeTime = (e: SyntheticEvent<HTMLAudioElement, Event>) => {
    if (audioRef.current) {
      setProgress({
        currentTime: e.currentTarget.currentTime,
        duration: e.currentTarget.duration || 0,
      });
    }
  };

  const seekAudio = (e: ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.currentTime = Number(e.target.value);
    }
  };

  function handleLoop() {
    if (audioRef.current) {
      if (isLoop) {
        audioRef.current.loop = false;
      } else {
        audioRef.current.loop = true;
      }
      setIsLoop(!isLoop);
    }
  }

  // const handleRepeat = () => {
  //   setRepeat(!repeat);
  // };

  //     const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  //     const handleEnded = () => {
  //         // Проверяем, не является ли текущий трек последним в плейлисте
  //         if (currentTrackIndex < playlist.length - 1) {
  //             // Переход к следующему треку
  //             setCurrentTrackIndex(currentTrackIndex + 1);
  //         } else {
  //             // Или начинаем плейлист с начала
  //             setCurrentTrackIndex(0);
  //         }
  //     };

  //     // Устанавливаем источник аудио и обработчик события `ended` при изменении трека
  //     useEffect(() => {
  //         const audio = audioRef.current;
  //         audio.src = playlist[currentTrackIndex].url;
  //         audio.addEventListener('ended', handleEnded);

  //         // Воспроизводим новый трек
  //         audio.play();

  //         return () => {
  //             audio.removeEventListener('ended', handleEnded);
  //         };
  //     }, [currentTrackIndex, playlist]);

  //     return (
  //         <div>
  //             <audio ref={audioRef} controls />
  //             <div>Now playing: {playlist[currentTrackIndex].title}</div>
  //         </div>
  //     );
  // };

  return (
    <div className={styles.bar}>
      <div className={styles.barContent}>
        <div className={styles.barTimer}>
          {formatTime(progress.currentTime)} /{formatTime(progress.duration)}
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
          <audio
            className={styles.audioHtml}
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
