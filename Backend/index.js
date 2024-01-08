const express = require("express");
const cors = require("cors");
const authRoute = require("./routes/auth");
const feedRoute = require("./routes/feed");
const app = express();
const { store } = require("./utils/database");
const cookieParser = require("cookie-parser");
const session = require("express-session");

app.use(
  session({
    store: store,
    secret: "my secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(express.json());
app.use(cors({ origin: true }));
app.use(cookieParser());

app.use(authRoute);
app.use(feedRoute);
app.listen(3000, (req, res) => {
  console.log("Listening on port:3000 ............");

});
