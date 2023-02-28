const express = require("express");
const router = express.Router();
const questionController = require("../controllers/questionController");

/*
 *get info from controller
 */
router.route("/").get(questionController.allQs);

module.exports = router;
