const express = require("express");
const path = require("path");
const app = express();
app.get("/", function (req, res) {
  res.send('말좀해라... <a href="/login">로그인</a>');
});
app.get("/login", function (req, res) {
  res.sendFile(path.join(__dirname, "login.html"));

  //res.send(
  //  `<form method="get" action="/loginOK">
  //  <input type="text" name="userID">
  //  <input type="password" name="userPW"><button>로그인</button></form>`
  //  );
});
app.get("/loginOK", function (req, res) {
  const id = req.query.userID;
  const pw = req.query.userPW;
  const gender = req.query.gender;
  let _gender = "";
  if (gender === "male") {
    _gender = "남자";
  } else {
    _gender = "여자";
  }
  if (id === "aaa" && pw === "111") {
    res.send(`<h1>${_gender}고객님</h1>반갑습니다.`);
  } else {
    res.send("<h1>다시 확인해 주세요</h1>");
  }
});

app.listen(3000, function () {
  console.log("3000번에서 서버 대기중");
});
