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

router.route("/").get(usersController.allQs);

/*
 *Post a question
 */
router.post("/", (req, res) => {
  console.log(req.body);
  //   readQuestionData((err, questionData) => {
  //     if (err) {
  //       res.send("error while getting question data");
  //     } else {
  //       //get the info and parse
  //       const questionparsed = JSON.parse(questionData);
  //       //set up a new const
  //       let newQ = req.body.question;
  //       const newQuestion = {
  //         question: newQ,
  //       };
  //       //push it
  //       questionparsed.push(newQuestion);

  //       //save the new json
  //       writeQuestionData(JSON.stringify(questionparsed));

  //       //send status
  //       res.status(201).send("You have submitted info");
  //     }
  //   });
});

module.exports = router;
