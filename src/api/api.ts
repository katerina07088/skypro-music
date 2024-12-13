import { User } from "@/store/user-slice";
import { Tokens } from "@/types/user";

const apiUrl = "https://webdev-music-003b5b991590.herokuapp.com";

const getTracks = async () => {
  const res = await fetch(`${apiUrl}/catalog/track/all`);
  if (!res.ok) {
    throw new Error("Ошибка при получении данных");
  }
  const tracksData = await res.json();
  return tracksData.data;
};

const login = async (email: string, password: string) => {
  const res = await fetch(`${apiUrl}/user/login`, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      "content-type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error("Ошибка при получении данных");
  }
  const user: User = await res.json();
  return user;
};

const getTokens = async (email: string, password: string) => {
  const res = await fetch(`${apiUrl}/user/token`, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error("Ошибка при получении данных");
  }
  const tokens: Tokens = await res.json();
  return tokens;
};

export const apiProvider = {
  getTracks: getTracks,
  login: login,
  getTokens: getTokens,
};

// const printHello = () => {
//   console.log("Hello");
// };

// const user = {
//   printHello: printHello,
// };

// user.printHello();
