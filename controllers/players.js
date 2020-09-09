let Player = require("../models/player");

module.exports = {
  index,
  new: newPlayer,
  create,
  show,
  edit,
  update,
  delete: delPlayer,
};

function index(req, res) {
  Player.find({}, function (err, players) {
    res.render("players/index", {
      title: "All Hoopers",
      players,
    });
  });
}

function newPlayer(req, res) {
  res.render("players/new");
}

function create(req, res) {
  const player = new Player(req.body);
  player.athlete = req.user._id;
  player.save(function (err) {
    if (err) return res.render("players/new");
    res.redirect("/players");
  });
}

function show(req, res) {
  Player.findById(req.params.id, function (err, player) {
    res.render("players/show", { title: "Hooper Info", player });
  });
}

function edit(req, res) {
  Player.findById(req.params.id, function (err, player) {
    if (err) {
      res.redirect(`/players`);
    }
    res.render("players/edit", { player, title: "Edit Hooper" });
  });
}

function update(req, res) {
  Player.findByIdAndUpdate(req.params.id, req.body, function (err, player) {
    if (err) {
      res.render("players/edit", { player, title: "Edit Hooper" });
    }
    res.redirect(`/players`);
  });
}

function delPlayer(req, res) {
  Player.findByIdAndDelete(req.params.id, req.body, function (err, player) {
    if (err) {
      res.render("/players", { title: "Delete Hooper", player });
    }
    res.redirect("/players");
  });
}
