const express = require("express");
const router = express.Router();
const playersCtrl = require("../controllers/players.js");

// GEt request to /players
router.get("/", playersCtrl.index);
// GET request to /players/new
router.get("/new", playersCtrl.new);
// POST to /players
router.post("/", playersCtrl.create);
//POST a comment
router.get("/:id", playersCtrl.show);

router.delete("/:id", playersCtrl.delete);

//EDIT & UPDATE
router.get("/:id/edit", playersCtrl.edit);
router.put("/:id", playersCtrl.update);

module.exports = router;
