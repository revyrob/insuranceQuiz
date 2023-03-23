const express = require("express");
const router = express.Router();
const questionController = require("../controllers/questionController");

const questions = "./data/questions.json";

/*
 *read ewaste questions file
 */
function readQuestionData(callback) {
  fs.readFile("./data/questions.json", "utf8", callback);
}

/*
 *write the questions to file
 */
function writeQuestionData(data) {
  fs.writeFile("./data/questions.json", data, (err) => {
    if (err) {
      console.error(err);
    }
    //file written successfully, if no error
  });
}

/*
 *get info from controller
 */
router.route("/").get(questionController.allQs);

/*
 *Post a question
 */

router.route("/").post(questionController.addQs);

module.exports = router;
