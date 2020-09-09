let Player = require("../models/player");

module.exports = {
  addComment,
};

function addComment(req, res, next) {
  req.user.comments.push(req.body);
  req.user.save(function (err) {
    res.redirect(`/players/${player._id}`);
  });
}
