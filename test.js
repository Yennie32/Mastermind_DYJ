

// POKER
// function shuffleArray(array) {
//   for (let i = array.length - 1; i >= 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array.slice(0, 1);
// }
// console.log(shuffleArray(couleursAutorisees));

export default function shuffleColor(obj) {
  let array = [];
  for (let i = 0; i < 4; i++) {
    let random = Math.floor(Math.random() * 8) + 1;
    array.push(obj[random]);
  }
  return array;
}

// let randomNumber = Math.floor(Math.random() * 8) + 1;
// console.log(randomNumber);
