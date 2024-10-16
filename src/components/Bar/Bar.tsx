import { Track } from "@/types/types";
import { Player } from "../Player/Player";
import styles from "./Bar.module.css";
type props = { currentTrack: Track };
export const Bar = ({ currentTrack }: props) => {
  return (
    <div className={styles.bar}>
      <div className={styles.barContent}>
        <div className={styles.barPlayerProgress}></div>
        <div className={styles.barPlayerBlock}>
          <Player currentTrack={currentTrack} />
        </div>
      </div>
    </div>
  );
};
