const express = require("express");

const app = express();

const members = require("./members");

app.use(express.json());

app.get("/api/members", (req, res) => {
  const { team } = req.query;
  if (team) {
    const teamMembers = members.filter((m) => m.team === team);
    res.send(teamMembers);
  } else {
    res.send(members);
  }
});

//:id 이부분은 route parameter 이라는 부분이래
app.get("/api/members/:id", (req, res) => {
  const { id } = req.params;
  const member = members.find((m) => m.id === Number(id));
  if (member) {
    res.send(member);
  } else {
    //웹브라우저 콘솔창 확인하기
    res.status(404).send({ message: "there is no such member!!" });
  }
});

app.post("/api/members", (req, res) => {
  const newMember = req.body;
  members.push(newMember);
  res.send(newMember);
});

app.listen(3000, () => {
  console.log("server is listening...");
});
