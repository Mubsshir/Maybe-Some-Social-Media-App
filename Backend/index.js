const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path=require('path')
const authRoute = require("./routes/auth");
const feedRoute = require("./routes/feed");
const profileRoute=require("./routes/profile")

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(cors({ origin: true }));

app.use(authRoute);
app.use(feedRoute);
app.use(profileRoute);

app.listen(3001, (req, res) => {
  console.log("Listening on port:3001 ............");
});

