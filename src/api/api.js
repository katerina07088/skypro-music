//const apiUrl = "webdev-music-003b5b991590.herokuapp.com";

async function getTracks() {
  const res = await fetch("webdev-music-003b5b991590.herokuapp.com", {
    method: "GET",
  });

  if (!res.ok) {
    throw new Error("Ошибка при получении данных");
  }

  return res.json();
}

const URL = 'https://webdev-music-003b5b991590.herokuapp.com/catalog/track/all';

export const getTrack = async () => {
  const response = await fetch(URL);
  if (!response.ok) {
    throw new Error('Ошибка при получении данных');
  }
  const data = await response.json();
  return data.data;
};