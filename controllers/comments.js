const Player = require("../models/player");
const Athlete = require("../models/athlete");

module.exports = {
  create,
};

function create(req, res) {
  Player.findById(req.params.id, function (err, player) {
    req.body.athlete = req.user._id;
    player.comments.push(req.body);
    player.save(function (err) {
      console.log(err);
      res.redirect(`/players/${player._id}`);
    });
  });
}
