let maximum = parseInt(prompt("数字を入力してください"));
while (!maximum) {
  maximum = parseInt(
    prompt("エラーが起きました。有効な数字を入力してください")
  );
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let count = 1;
let guess = prompt("一つ数字を決めました。数字をあててみてください：");

while (parseInt(guess) !== targetNum) {
  if (guess === "q") break;
  count++;
  if (guess > targetNum) {
    guess = prompt("その数字より小さいです！もう一度当ててみてください：");
  } else {
    guess = prompt("その数字より大きいです！もう一度当ててみてください：");
  }
}
if (guess === "q") {
  console.log("終了します");
} else {
  console.log(`おめでとう！${count}回で当てました！`);
}
