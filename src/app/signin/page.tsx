"use client";

import styles from "./signInPage.module.css";
import Image from "next/image";
import { useState } from "react";
import { apiProvider } from "@/api/api";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { userSlice } from "@/store/user-slice";

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
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  async function onSigninClick() {
    try {
      const user = await apiProvider.login(email, password);
      dispatch(userSlice.actions.setUser(user));
      const tokens = await apiProvider.getTokens(email, password);
      dispatch(userSlice.actions.setTokens(tokens));

      router.push("/");
    } catch (error) {
      setError((error as Error).message);
    }
  }

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
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button className={styles.modalBtnEnter} onClick={onSigninClick}>
              Войти
            </button>
            <button onClick={() => router.push("/signup")}>
              Зарегистрироваться
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
