const express = require("express");

// 가져온 express를 함수로 사용하기 위해서 app에 변수로 담았다.
const app = express();

// react 서버와 겹치지 않게 3010번 포트 사용
const port = 3010;

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.post("/abc", (req, res) => {
  res.json("ABC request");
});

app.delete("/", (req, res) => {
  res.json("This is delete Request");
});

app.put("/", (req, res) => {
  res.json("This is put Request");
});

// 서버 시작하는 기능, 포트와 화살표함수
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
