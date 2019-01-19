var express = require("express");
var router = express.Router();
const axios = require("axios");

const clientId = "";
const clientSecret = "";

/* GET users listing. */
router.get("/", function(req, res, next) {
  let searchedUser = req.query.user;
  axios
    .get(
      `https://api.github.com/users/${searchedUser}?client_id=${clientId}&client_secret=${clientSecret}`
    )
    .then(response => {
      return res.json(response.data);
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
