const fs = require("fs/promises");

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
 *Get all the questions
 */
const allQs = (req, res) => {
  fs.readFile(questions, "utf-8")
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send("error reading file");
    });
};

/*
 *Post a question
 */
const addQs = (req, res) => {
  readQuestionData((err, questionData) => {
    if (err) {
      res.send("error while getting question data");
    } else {
      //get the info and parse
      const questionparsed = JSON.parse(questionData);
      //set up a new const
      console.log(req.body.question);
      const newQuestion = {
        question: "Will be answered soon...",
      };
      //push it
      questionparsed.push(newQuestion);

      //save the new json
      writeQuestionData(JSON.stringify(questionparsed));

      //send status
      res.status(201).send("You have submitted info");
    }
  });
};

module.exports = { allQs, addQs };
