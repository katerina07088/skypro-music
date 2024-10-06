
import { Track } from '@/types/types';
import styles from './Dropmenu.module.css';
import React from 'react';

type DropMenuProps = {
    tracks: Track[];
  };

const DropMenu: React.FC<DropMenuProps> = ({ tracks }) => {
  return (
    <div className={styles.dropMenu}>
      <div className={styles.dropMenuList}>
        {tracks.map(track => (
          <div key={track._id}>
            <a className={styles.dropMenuText} href='http://'>
              {track.author}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropMenu;