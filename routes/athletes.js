var router = require("express").Router();
let athletesCtrl = require("../controllers/athletes");

router.post("/comments", isLoggedIn, athletesCtrl.addComment);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

module.exports = router;
