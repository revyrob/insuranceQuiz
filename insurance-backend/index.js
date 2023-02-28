const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const cors = require("cors");
const logger = require("./middleware/logger");

//getting info from my route
const questionsRoute = require("./routes/api.questions");

//us middlewares
app.use(logger);
app.use(cors());
app.use(express.json());
app.use("/questions", questionsRoute);
app.use("/", questionsRoute);

// app.get("/", (req, res) => {
//   res.status(200).send("Welcome to The BJJ LogApp");
// });

//listen on port
app.listen(PORT, function () {
  console.log("Server is up🚀");
  console.log(PORT);
});
