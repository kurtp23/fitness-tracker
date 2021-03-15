const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
});

const apiHtml = require("./routes/api-routes.js");
const routesHtml = require("./routes/html-routes.js");

app.use(apiHtml);
app.use(routesHtml);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
