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
  if (!newMember.email || !newMember.firstName) {
    res.status(400).json({ msg: `We need a name and email` });
  } else {
    const ids = members.map(user => user.id);
    const generateId = (ids) => {
      let newMemberId;
      do {
        newMemberId = Math.floor(Math.random() * 20) + 1;
      } while (ids.includes(newMemberId));
      return newMemberId;
    };
    console.log(generateId());
    newMember.push(newMemberId);
    console.log(newMember);
    members.push(newMemberId);
    fs.writeFile("src/data/members.json", JSON.stringify(members,null, 2), (err) => {
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
        fs.writeFile("src/data/members.json", JSON.stringify(members, null, 2), (err) => {
          if (err) {
            res.status(400).json({ msg: "Error! User cant be updated" });
          } else {
            res.status(200).json({ msg: "User updated!" });
          }
        });
      }
    });
  }
});

router.get("/filter/:status", (req, res) => {
  const memberStatus = req.params.status;
  const filteredMembers = members.filter((member) => member.status === memberStatus);
  if(filteredMembers.length === 0) {
    res.status(400).json({ msg: `Error! No match with member status: ${memberStatus}` });
  } else {
      res.status(200).json({ data: filteredMembers });
    }
});

module.exports = router;
