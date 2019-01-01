var express = require("express");
var router = express.Router();
const axios = require("axios");

/* GET users listing. */
router.get("/", function(req, res, next) {
  axios
    .get(
      "https://api.github.com/users/jarmahent?client_id=472988b387f54d295169&client_secret=34962f4b01e8a2112b82f33b51c191a35ad8e052"
    )
    .then(response => {
      return res.json(response.data);
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
