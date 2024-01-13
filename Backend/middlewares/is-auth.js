module.exports = (req, res, next) => {
  const ticket = req.headers["authorization"].split(" ")[1];
  try {
    const isValid = jwt.verify(ticket, SECRET_KEY);
    if (isValid) {
      next();
    }
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};
