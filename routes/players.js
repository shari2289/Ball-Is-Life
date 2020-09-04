var router = require("express").Router();
const playersCtrl = require("../controllers/players");

router.get("/", playersCtrl.search);

router.put("/:id", playersCtrl.update);

router.get("/:id/edit", playersCtrl.edit);

router.delete("/:id", playersCtrl.delete);

router.get("/new", playersCtrl.new);

router.get("/:id", playersCtrl.show);

router.post("/", playersCtrl.create);

router.get("/index", playersCtrl.index);

module.exports = router;
