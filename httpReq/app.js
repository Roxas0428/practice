// const req = new XMLHttpRequest();

// req.onload = function () {
//   console.log("成功");
//   const data = JSON.parse(this.responseText);
//   console.log(data.name, data, height);
// };
// req.onerror = function () {
//   console.log("エラー");
//   console.log(this);
// };

// req.open("GET", "https://swapi.dev/api/people/1/");
// req.send();

// fetch("https://swapi.dev/api/people/1/")
//   .then((res) => {
//     console.log("RESOLVE", res);
//     res.json().then((data) => {
//       console.log("Jsonゲット", data);
//     });
//   })
//   .catch((err) => {
//     console.log("error", err);
//   });
fetch("https://swapi.dev/api/people/1/")
  .then((res) => {
    console.log("RESOLVE", res);
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("error", err);
  });
