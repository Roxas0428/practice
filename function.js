// function singSong() {
//   console.log("ど");
//   console.log("れ");
//   console.log("み");
// }

// function greet(firstName, lastName) {
//   console.log(`Hi, ${firstName}  ${firstName[0]}`);
// }
// greet("Ken","Fukuyama")

function repeat(str, numTimes) {
  let result = " ";
  for (let i = 0; i < numTimes; i++) {
    result += str;
  }

  console.log(result);
}

function add(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    return false;
  }
  const sum = x + y;
  return sum;
}
