"use client";

import styles from "./signUpPage.module.css";
import Image from "next/image";
//import { useState } from "react";
//import { apiProvider } from "@/api/api";
import { useRouter } from "next/navigation";

// Компонент - функция, которая возвращает JSX-разметку
// JSX - javascript syntax extension (HTML + JS)
// function Test() {
//   const [count, setCount] = useState(0);

//   console.log("Компонент Test перерисовался");

//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>count = {count}</button>
//     </div>
//   );
// }

export default function SignUnPage() {
  const router = useRouter();

  return (
    <div className={styles.wrapper}>
      <div className={styles.containerSignup}>
        <div className={styles.modalBlock}>
          <form className={styles.modalFormLogin}>
            <a href="../">
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
            </a>
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
              <a href="../index.html">Зарегистрироваться</a>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
