const express = require("express");
const cors = require("cors");
const authRoute = require("./routes/auth");
const feedRoute = require("./routes/feed");
const app = express();
const cookieParser = require("cookie-parser");



app.use(express.json());
app.use(cors({ origin: true }));
app.use(cookieParser());

app.use(authRoute);
app.use(feedRoute);

app.listen(3000, (req, res) => {
  console.log("Listening on port:3000 ............");
});
