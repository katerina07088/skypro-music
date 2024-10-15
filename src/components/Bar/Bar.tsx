import { Player } from "../Player/Player";
import styles from "./Bar.module.css";

export const Bar = () => {
  return (
    <div className={styles.bar}>
      <div className={styles.barContent}>
        <div className={styles.barPlayerProgress}></div>
        <div className={styles.barPlayerBlock}>
          <Player />
        </div>
      </div>
    </div>
  );
};
