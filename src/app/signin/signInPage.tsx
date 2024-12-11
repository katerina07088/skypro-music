"use client";

import styles from "./signInPage.module.css";
import Image from "next/image";
import { useState } from "react";
import { apiProvider } from "@/api/api";
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

export default function SignInPage() {
  const router = useRouter();

  const [email, setEmail] = useState("test@test.ru");
  const [password, setPassword] = useState("test@test.ru");
  console.log("Компонент SignInPage перерисовался");

  return (
    <div className={styles.wrapper}>
      <div className={styles.containerEnter}>
        <div className={styles.modalBlock}>
          {/* Todo: добавить form */}
          <div className={styles.modalFormLogin}>
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
              className={styles.modalInput}
              type="text"
              name="login"
              placeholder="Почта"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className={styles.modalInput}
              type="password"
              name="password"
              value={password}
              placeholder="Пароль"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className={styles.modalBtnEnter}
              onClick={async (e) => {
                await apiProvider.login(email, password);
                router.push("/");
              }}
            >
              Войти
            </button>
          </div>
          <button className={styles.modalBtnSignup}>Зарегистрироваться</button>
        </div>
      </div>
    </div>
  );
}
