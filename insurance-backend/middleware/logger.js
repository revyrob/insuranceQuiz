const dayjs = require("dayjs");

const logger = (req, _res, next) => {
  console.log(
    `${req.protocol}://${req.get("host")}${
      req.originalUrl
    } : ${dayjs().format()}`
  );
  // pass it on to the next middleware in the chain
  next();
};

module.exports = logger;
