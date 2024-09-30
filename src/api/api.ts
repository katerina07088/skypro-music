const apiUrl = 'https://webdev-music-003b5b991590.herokuapp.com/catalog/track/all';

export const getTracks = async () => {
  const res = await fetch(apiUrl);
  if (!res.ok) {
    throw new Error("Ошибка при получении данных");
  }
  const tracksData = await res.json();
  return tracksData.data;
};

// const URL = 'https://webdev-music-003b5b991590.herokuapp.com/catalog/track/all';

// export const getTrack = async () => {
//   const response = await fetch(URL);
//   if (!response.ok) {
//     throw new Error('Ошибка при получении данных');
//   }
//   const data = await response.json();
//   return data.data;
// };
