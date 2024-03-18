const express = require("express");

const { connect } = require("./connection");
const cookieParser = require("cookie-parser");
const{restricttouserlogin,checkAuth}=require("./middlewares/auth.js");

const URL = require("./models/url");
const app = express();
const PORT = 9001;
const path = require("path");



const urlroute = require("./routes/url");
const staticrouter = require("./routes/staticrouter");
const userRouter = require("./routes/user");


connect("mongodb://localhost:27017/URLShortner")
  .then(() => {
    console.log("Connected to  MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.set("view engine", "ejs"); // to use ejs template i.e use to render html pages or frontend pages

app.set("views", path.resolve("./views")); // to set the path of views folder

app.use(express.json());
app.use(express.urlencoded({ extended: false })); // to parse the data from the form
app.use(cookieParser());




app.use("/url",restricttouserlogin, urlroute);
app.use("/",checkAuth, staticrouter);
app.use("/user", userRouter);

app.get("/:shortId", async (req, res) => {
    const shortId = req.params.shortId;
    console.log(shortId);
    const entry = await URL.findOne({
      shortId,
    });
    if (entry) {
        res.redirect(entry.redirectURL);
    } else {
        res.status(404).send("URL not found");
    }
  });


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
