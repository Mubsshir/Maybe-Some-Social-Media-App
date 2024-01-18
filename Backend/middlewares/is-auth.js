const jwt=require('jsonwebtoken')
const SECRET_KEY = "MyNameIsKhan";


module.exports = (req, res, next) => {
  let ticket = req.headers["authorization"];
  if (ticket) {
    try {
      ticket = ticket.split(" ")[1];
      const isValid = jwt.verify(ticket, SECRET_KEY);
      if (isValid) {
        const decodedTicket=jwt.decode(ticket,SECRET_KEY);
        req.userInfo={uid:decodedTicket.uid,username:decodedTicket.username};
        next();
      }
    } catch (err) {
      return res.status(401).json({ message: err });
    }
  } else {
    return res.status(401).json({ message: "Unauthorized user" });
  }
};
