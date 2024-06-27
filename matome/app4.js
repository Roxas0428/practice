// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }
// for (let i = 0; i <= 20; i += 2) {
//   console.log(i);
// }
// for (let i = 100; i >= 0; i -= 10) {
//   console.log(i);
// }

// for (let i = 10; i <= 1000; i *= 10) {
//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(`iは${i}`);
//   for (let j = 1; j < 4; j++) {
//     console.log(`  jは${j}`);
//   }
// }

// let i = 0;
// while (i < 10) {
//   i++;
//   console.log(i);
// }

// const SECRET = "supersecret";

// let guess = " ";

// while (guess !== SECRET) {
//   guess = prompt("秘密のコードを入力してください");
// }
// console.log("正解！！おめでとう");

let input = prompt("何か入力してください");
while (true) {
  input = prompt(input);
  if (input === "quit") break;
}
