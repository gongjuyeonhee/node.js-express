const express = require("express");

const app = express();

const db = require("./models/index");
const { Member } = db;

app.use(express.json());

app.get("/api/members", async (req, res) => {
  const { team } = req.query;
  if (team) {
    const teamMembers = await Member.findAll({ where: { team } });
    res.send(teamMembers);
  } else {
    const members = await Member.findAll();
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

app.put("/api/members/:id", (req, res) => {
  const { id } = req.params;
  const newInfo = req.body;
  const member = members.find((m) => m.id === Number(id));
  if (member) {
    Object.keys(newInfo).forEach((prop) => {
      member[prop] = newInfo[prop];
    });
    res.send(member);
  } else {
    res.status(404).send({ message: "there is no member" });
  }
});

app.delete("/api/members/:id", (req, res) => {
  const { id } = req.params;
  const membersCount = members.length;
  members = members.filter((member) => member.id !== Number(id));
  if (members.length < membersCount) {
    res.send({ message: "Deleted" });
  } else {
    res.status(400).send({ message: "there is no member" });
  }
});

app.listen(3000, () => {
  console.log("server is listening...");
});
