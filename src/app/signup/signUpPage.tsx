"use client";

import styles from "./signUpPage.module.css";
import Image from "next/image";
//import { useState } from "react";
//import { apiProvider } from "@/api/api";
import { useRouter } from "next/navigation";

export default function SignUnPage() {
  const router = useRouter();

  return (
    <div className={styles.wrapper}>
      <div className={styles.containerSignup}>
        <div className={styles.modalBlock}>
          <form className={styles.modalFormLogin}>
            <div className={styles.modalLogo}>
              <Image
                width={200}
                height={100}
                src="/logo_modal.png"
                alt="logo"
                className={styles.modalLogo}
                /* проверить видит ли img */
              />
            </div>
            <input
              className={styles.modalInput} //login
              type="text"
              name="login"
              placeholder="Почта"
            />
            <input
              className={styles.modalInput} //password-first
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <input
              className={styles.modalInput} //password-double
              type="password"
              name="password"
              placeholder="Повторите пароль"
            />
            <button className={styles.modalBtnSignupEnt}>
              Зарегистрироваться
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
