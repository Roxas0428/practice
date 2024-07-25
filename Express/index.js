const express = require("express");
const app = express();
// app.use((req,res)=>{

// })
app.get("/search",(req,res)=>{
    const {q}= res.query
    res.send(`<h1>${q}の検索結果</h1>`)
    
})

app.get("/cats", (req, res) => {
  res.send("にゃー");
});
app.get("dogs", (req, res) => {
  res.send("わんわん");
});
app.get("/", (req, res) => {
  res.send("ホーム");
});

app.listen(3000, () => {
  console.log("リクエスト");
});
