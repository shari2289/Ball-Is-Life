var router = require("express").Router();
const followingCtrl = require("../controllers/following");

router.get("/", followingCtrl.index);

router.post("/", isLoggedIn, followingCtrl.create);

router.delete("/:id", isLoggedIn, followingCtrl.delete);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

module.exports = router;
