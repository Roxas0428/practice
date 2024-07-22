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
// fetch("https://swapi.dev/api/people/1/")
//   .then((res) => {
//     console.log("RESOLVE", res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("error", err);
//   });

// const loadStarWarsPeople = async () => {
//   try {
//     const res = await fetch("https://swapi.dev/api/people/1/");
//     const data = await res.json();
//     console.log(data);
//     const res2 = await fetch("https://swapi.dev/api/people/2/");
//     const data2 = await res2.json();
//     console.log(data2);
//   } catch (e) {
//     console.log("エラー", e);
//   }
// };
// loadStarWarsPeople();

// const getStarWarsPerson = async(id)=>{
//     const res = await axios.get(`https://swapi.dev/api/people/1/${id}`)
//     console.log(res.data)
// }

const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");

const getDadJoke = async () => {
  try {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke;
  } catch (e) {
    return "No Jokes Sorry";
  }
};
const addNewJoke = async () => {
  const jokeText = await getDadJoke();
  const newLi = document.createElement("Li");
  newLi.append(jokeText);
  jokes.append(newLi);
};
button, addEventListener("click", addNewJoke);
