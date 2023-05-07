const express = require("express");
const fs = require("fs");

const members = require("../data/members.json");
const router = express.Router();

router.get("/get", (req, res) => {
  res.status(200).json({
    data: members,
  });
});

router.get("/getById/:id", (req, res) => {
  const memberId = parseInt(req.params.id);
  const foundMember = members.find((member) => member.id === memberId);
  if (foundMember) {
    res.status(200).json({
    data: foundMember,
  });
  } else {
    res.status(400).json({ msg: `No member with id ${memberId} was found.` });
  }
});

router.post("/post", (req, res) => {
  const newMember = req.body;
  const newMemberId = parseInt(req.body.id);
  const foundMember = members.find((member) => member.id === newMemberId);
  if (!newMember.email) {
    res.status(400).json({ msg: `We need an email` });
  } else if (foundMember) {
    res.status(400).json({ msg: "User already exists!" });
  } else {
    members.push(newMember);
    fs.writeFile("src/data/members.json", JSON.stringify(members), (err) => {
      if (err) {
        res.status(400).json({ msg: "Error! Member cant be created" });
      } else {
        res.status(200).json({ msg: "Member created!" });
      }
    });
  }
});

router.delete("/delete/:id", (req, res) => {
  const memberId = parseInt(req.params.id);
  const filteredMembers = members.filter((member) => member.id !== memberId);
  if(filteredMembers.length === members.length) {
    res.status(400).json({ msg: `Error! No member with id: ${memberId}` });
  } else {
  fs.writeFile("src/data/members.json", JSON.stringify(filteredMembers), (err) => {
      if (err) {
        res.status(400).json({ msg: "Error! User cant be deleted" });
      } else {
        res.status(200).json({ msg: "User deleted!" });
      }
    });
  }
});

router.put("/put/:id", (req, res) => {
  const updMember = req.body;
  const memberId = parseInt(req.params.id);
  const foundMember = members.some((member) => member.id === memberId);
  if(!foundMember) {
    res.status(400).json({ msg: `Error! No member with id: ${memberId}` });
  } else {
    members.forEach(member => {
      if(member.id === memberId) {
        member.firstName = updMember.firstName ? updMember.firstName : member.firstName;
        member.lastName = updMember.lastName ? updMember.lastName : member.lastName;
        member.email = updMember.email ? updMember.email : member.email;
        res.status(200).json({ msg: `Member with id ${memberId} was updated`, member});
      }
    })
  }
});

module.exports = router;
