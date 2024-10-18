export const formatTime = (digit: number): string => {
//   let minutes = Math.floor(digit / 60);

//   let seconds = (digit % 60).toString().padStart(2, "0");

//   return `${minutes}:${seconds}`;
// };
let minutes = Math.floor(digit / 60);
    let seconds = digit % 60;
    return `${minutes < 10 ? "0" + Math.round(minutes) : Math.round(minutes)}:${
      seconds < 10 ? "0" + Math.round(seconds) : Math.round(seconds)
    }`

};
