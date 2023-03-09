const express = require("express");
const router = express.Router();
const questionController = require("../controllers/questionController");

/*
 *get info from controller
 */
router.route("/").get(questionController.allQs);
router.route("/add").post(questionController.addQs);
module.exports = router;
