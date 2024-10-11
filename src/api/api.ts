const apiUrl = "https://webdev-music-003b5b991590.herokuapp.com";

export const getTracks = async () => {
  const res = await fetch(apiUrl + "/catalog/track/all");
  if (!res.ok) {
    throw new Error("Ошибка при получении данных");
  }
  const tracksData = await res.json();
  return tracksData.data;
};
