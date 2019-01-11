var express = require("express");
var router = express.Router();
const axios = require("axios");

const clientId = "472988b387f54d295169";
const clientSecret = "34962f4b01e8a2112b82f33b51c191a35ad8e052";

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
