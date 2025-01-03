"use client";
import { Track } from "@/types/types";
import styles from "./Player.module.css";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { trackActions, useAppSelector } from "@/store/store";

type Props = {
  currentTrack: Track;
  onTogglePlay: () => void;
  isPlay: boolean;
  handleLoop: () => void;
  isLoop: boolean;
};

export const Player = ({
  currentTrack,
  onTogglePlay,
  isPlay,
  handleLoop,
  isLoop,
}: Props) => {
  const dispatch = useDispatch();
  const shuffled = useAppSelector((state) => state.trackSlice.shuffled);

  return (
    <div>
      <div className={styles.barPlayer}>
        <div className={styles.playerControls}>
          <div className={styles.playerBtnPrev}>
            <svg
              className={styles.playerBtnPrevSvg}
              onClick={() => {
                dispatch(trackActions.setPrevTrack());
              }}
            >
              <use xlinkHref="/img/icon/sprite.svg#icon-prev"></use>
            </svg>
          </div>
          <div onClick={onTogglePlay} className={styles.playerBtnPlay}>
            <svg className={styles.playerBtnPlaySvg}>
              <use
                xlinkHref={
                  isPlay
                    ? "/img/icon/sprite.svg#icon-pause"
                    : "/img/icon/sprite.svg#icon-play"
                }
              ></use>
            </svg>
          </div>
          <div className={styles.playerBtnNext}>
            <svg
              className={styles.playerBtnNextSvg}
              onClick={() => {
                dispatch(trackActions.setNextTrack());
              }}
            >
              <use xlinkHref="/img/icon/sprite.svg#icon-next"></use>
            </svg>
          </div>
          <div
            onClick={handleLoop}
            className={classNames(styles.playerBtnRepeat, styles.btnIcon)}
          >
            <svg
              className={
                isLoop
                  ? styles.playerBtnRepeatSvgActive
                  : styles.playerBtnRepeatSvg
              }
            >
              <use xlinkHref={"/img/icon/sprite.svg#icon-repeat"}></use>
            </svg>
          </div>
          <div className={classNames(styles.playerBtnShuffle, styles.btnIcon)}>
            <svg
              className={styles.playerBtnShuffleSvg}
              data-selected={shuffled}
              onClick={() => {
                dispatch(trackActions.shuffle());
              }}
            >
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
    </div>
  );
};
