const express = require("express");
const app = express();
const ErrorHandler = require("./middleware/error");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const product = require('./controller/product')

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/",express.static("products"));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// Configuration for environment variables
if (process.env.NODE_ENV !== "PRODUCTION") {
  // Load environment variables from the env file if the environment is not production
  require("dotenv").config({
    path: "backend/config/.env",
  });
}

//import Routes
const user = require("./controller/user");
app.use("/api/v2/user", user);
app.use("/api/v2/product", product);
app.use(ErrorHandler);

module.exports = app;
