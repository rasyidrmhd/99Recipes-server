const errHandler = (err, req, res, next) => {
  switch (err.name) {
    default:
      res.status(500).json({ message: "Internal server error" });
      break;
  }
};

module.exports = { errHandler };
