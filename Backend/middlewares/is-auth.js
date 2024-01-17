const jwt=require('jsonwebtoken')
const SECRET_KEY = "MyNameIsKhan";
module.exports = (req, res, next) => {
  let ticket = req.headers["authorization"];
  const device = req.headers["user-agent"];
  if (ticket) {
    try {
      ticket = ticket.split(" ")[1];
      const isValid = jwt.verify(ticket, SECRET_KEY);
      if (isValid) {
        console.log("user is valid");
        next();
      }
    } catch (err) {
      return res.status(401).json({ message: err });
    }
  } else {
    return res.status(401).json({ message: "Unauthorized user" });
  }
};
