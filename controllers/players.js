const mongoose = require("mongoose");
const Player = require("../models/player");

module.exports = {
  index,
  create,
  show,
  new: newPlayer,
  delete: delPlayer,
  edit,
  update,
  search,
};

function search(req, res, next) {
  if (req.query.player) {
    Player.find({
      $or: [
        { name: { $regex: req.query.player, $options: "i" } },
        { team: { $regex: req.query.player, $options: "i" } },
      ],
    })
      .sort()
      .exec(function (err, players) {
        if (err) return next(err);
        res.render("players/index", { players });
      });
  } else {
    Player.find({ position: req.query.position })
      .sort()
      .exec(function (err, players) {
        res.render("players/index", { players });
      });
  }
}

function update(req, res) {
  Player.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      team: req.body.team,
      position: req.body.position,
      age: req.body.age,
      height: req.body.height,
    },
    function (err) {
      res.redirect(`/players/${req.params.id}`);
    }
  );
}

function edit(req, res) {
  Player.findById(req.params.id, function (err, player) {
    res.render("players/edit", { player });
  });
}

function delPlayer(req, res) {
  Player.findByIdAndDelete(req.params.id, function (err) {
    res.redirect("/players/index");
  });
}

function newPlayer(req, res) {
  res.render("players/new");
}

function show(req, res) {
  Player.findById(req.params.id, function (err, player) {
    res.render("players/show", { player });
  });
}

function create(req, res) {
  Player.count({ name: req.body.name }, function (err, count) {
    if (count > 0) {
      Player.find({ name: req.body.name }, function (err, players) {
        res.render(`players/index`, { players });
      });
    } else {
      const player = new Player(req.body);
      player.save(function (err) {
        if (err) return res.render("players/new");
        req.user.created.push(player._id);
        req.user.save(function (err) {
          res.redirect("/players/index");
        });
      });
    }
  });
}

function index(req, res) {
  Player.find({}, function (err, players) {
    res.render("players/index", { players, user: req.user });
  });
}
