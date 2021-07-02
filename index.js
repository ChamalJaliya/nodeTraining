// // core module when using express we wont need this module
// to create the server
// const http = require("http");

// @Deprecated
// // body-parser helps to capture the req body which isn't provided by default
// const bodyParser = require("body-parser");

// core module which resolve the relative path error
const path = require("path");
// import admin routes
const adminRoutes = require("./routes/admin");
// import shop routes
const shopRoutes = require("./routes/shop");
// framework -> which is a third party lib
const express = require("express");
// create a express application and store it in the constant "app"
// express package contain a function called express
const app = express();

// request give the body but by default it doesn't try to parse
// therefore we need to register a parser
// @Deprecated
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded());

// admin routes middleware
app.use("/admin", adminRoutes);
// shop routes middleware
app.use(shopRoutes);
// 404 page wasn't found
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

// Method 1 -> Listening
// app is a valid request handler
// const server = http.createServer(app);

// Method 2 -> Express only
// server.listen(3000);
app.listen(3000);
