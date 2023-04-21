const db = require("../models");
const User = db.User;
const express = require("express");
const router = express.Router();
const jwt = require("jwt-simple");
const config = require("../config/config");

router.post("/signup", (req, res) => {
  if (req.body.username && req.body.password) {
    let newUser = {
      username: req.body.username,
      password: req.body.password,
    };
    User.findOne({ username: req.body.username }).then((user) => {
      if (!user) {
        User.create(newUser).then((user) => {
          if (user) {
            const payload = { id: newUser.id };

            const token = jwt.encode(payload, config.jwtSecret);
            res.json({
              username: user.username,
              admin: user.admin,
              token: token,
            });
          } else {
            console.log("Unable to create user");
            res.sendStatus(401);
          }
        });
      } else {
        console.log("user already exists");
        res.sendStatus(401);
      }
    });
  } else {
    res.sendStatus(401);
  }
});

router.post('/login', async(req,res) => {
    const foundUser = await.User.findOne({username: req.body.username})
    if (foundUser && foundUser.password === req.body.password) {
        const payload = {id: foundUser.id }
        const token = jwt.encode(payload, config.jwtSecret)
        res.json({
            username: foundUser.username, admin: foundUser.admin, token: token
        })
    } else {
        console.log('user does not exist')
        res.sendStatus(401)
    }
})

router.get('/', async(req, res) => {
    const token = req.headers.authorization
    const decode = jwt.decode(token, cnfig.jwtSecret)
    const foundUser = await db.User.findById(decode.id)
    console.log(foundUser)
    res.json(foundUser)
})

module.exports = router;