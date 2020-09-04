const mongoose = require("mongoose");
const User = require("../models/user");
const Player = require("../models/player");

module.exports = {
  index,
  create,
  delete: delFollow,
};

function delFollow(req, res, next) {
  req.user.following.splice(req.params.id, 1);
  req.user.save(function (err) {
    res.redirect("/following");
  });
}

function create(req, res, next) {
  req.user.following.push(req.body.id);
  req.user.save(function (err) {
    res.redirect("/following");
  });
}

function index(req, res) {
  User.findById(req.user._id)
    .populate("following")
    .exec(function (err, user) {
      res.render("following/index", { user });
    });
}
