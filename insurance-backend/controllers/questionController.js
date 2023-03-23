const { read } = require("fs");
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
  router.post("/", (req, res) => {
    // GUARD CLAUSE : FIELDS CANNOT BE EMPTY
    if (!req.body.question) {
      res.status(400).send("Fields cannot be left empty");
      next();
    }
    // fs.readFile((err, questions) => {
    //   console.log("it arrived");
    //   if (err) {
    //     res.send("error while getting question data");
    //   } else {
    //     //get the info and parse
    //     const questionparsed = JSON.parse(questions);
    //     //set up a new const
    //     let newQ = req.body.question;
    //     const newQuestion = {
    //       question: newQ,
    //     };
    //     //push it
    //     questionparsed.push(newQuestion);

    //     //save the new json
    //     fs.writeFile(JSON.stringify(questionparsed));

    //     //send status
    //     res.status(201).send("You have submitted info");
    //   }
  });
};

/*
 *Post new upload
 */
// const addQs = (req, res) => {
//   console.log(req.body.question);
//   readQuestionData((err, questionData) => {
//     if (err) {
//       res.send("error posting questions");
//     } else {
//       const parsedQuestionData = JSON.parse(questionData);

//       //create a new video and push to array
//       const newQ = {
//         question: req.body.question,
//         answerOptions: [],

//         id: uuidv4(),
//       };
//       //push the new upload video to the json
//       parsedQuestionData.push(newQ);

//       //save the stringified data to the json file
//       writeQuestionData(JSON.stringify(parsedQuestionData));

//       res.status(201).send("upload question created");
//     }
//   });
// };

module.exports = { allQs, addQs };
