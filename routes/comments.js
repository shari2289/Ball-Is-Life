const express = require("express");
const router = express.Router();
const commentsCtrl = require("../controllers/comments");

router.post("/players/:id/revcommentsiews", commentsCtrl.create);

module.exports = router;
