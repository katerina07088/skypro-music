"use client";

import Image from "next/image";
import styles from "./Sidebar.module.css";
import { useAppSelector } from "@/store/store";
import { useDispatch } from "react-redux";
import { userSlice } from "@/store/user-slice";
import { useRouter } from "next/navigation";

export const Sidebar = () => {
  const user = useAppSelector((state) => state.userSlice.user);
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <div className={styles.mainSidebar}>
      <div className={styles.sidebarPersonal}>
        <p className={styles.sidebarPersonalName}>
          {user ? user.username : "Загрузка..."}
        </p>
        <div
          className={styles.sidebarIcon}
          onClick={() => {
            dispatch(userSlice.actions.resetUser());
            router.push("/signin");
          }}
        >
          <svg>
            <use xlinkHref="/img/icon/sprite.svg#logout"></use>
          </svg>
        </div>
      </div>
      <div className={styles.sidebarBlock}>
        <div className={styles.sidebarList}>
          <div className={styles.sidebarItem}>
            <a className={styles.sidebarLink} href="#">
              <Image
                className={styles.sidebarImg}
                src="/img/playlist01.png"
                alt="day's playlist"
                width={250}
                height={170}
              />
            </a>
          </div>
          <div className={styles.sidebarItem}>
            <a className={styles.sidebarLink} href="#">
              <Image
                className={styles.sidebarImg}
                src="/img/playlist02.png"
                alt="day's playlist"
                width={250}
                height={170}
              />
            </a>
          </div>
          <div className={styles.sidebarItem}>
            <a className={styles.sidebarLink} href="#">
              <Image
                className={styles.sidebarImg}
                src="/img/playlist03.png"
                alt="day's playlist"
                width={250}
                height={170}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
