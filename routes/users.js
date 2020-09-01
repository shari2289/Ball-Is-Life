var router = require("express").Router();

//GET /users
router.get("/", function (req, res) {
  res.render("index", { user: req.user });
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

module.exports = router;
