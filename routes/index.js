var express = require("express");
var router = express.Router();
const passport = require("passport");
const userCtrl = require("../controllers/following");

// The root route renders our only view
router.get("/index", function (req, res) {
  res.render("index");
});

router.get("/", function (req, res) {
  res.redirect("/index");
});

// Google OAuth login route
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google OAuth callback route
router.get(
  "/oauth2callback",
  passport.authenticate("google", {
    successRedirect: "/index",
    failureRedirect: "/users",
  })
);

// OAuth logout route
router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/index");
});

module.exports = router;
