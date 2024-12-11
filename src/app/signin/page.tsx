"use client";

import styles from "../page.module.css";
import "../../template/css/signin.css";

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
      <div className={styles.container}>
        <div className="modal__block">
          {/* Todo: добавить form */}
          <div className="modal__form-login">
            <a href="../">
              <div className="modal__logo">
                <Image
                  width={200}
                  height={100}
                  src="/logo_modal.png"
                  alt="logo"
                />
              </div>
            </a>
            <input
              className="modal__input login"
              type="text"
              name="login"
              placeholder="Почта"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="modal__input password"
              type="password"
              name="password"
              value={password}
              placeholder="Пароль"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="modal__btn-enter"
              onClick={async (e) => {
                await apiProvider.login(email, password);
                router.push("/");
              }}
            >
              Войти
            </button>
          </div>
          <button className="modal__btn-signup">Зарегистрироваться</button>
        </div>
      </div>
    </div>
  );
}
