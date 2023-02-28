const fs = require("fs/promises");

const questions = "./data/questions.json";

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

module.exports = { allQs };
