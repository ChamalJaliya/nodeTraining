// core module which resolve the relative path error
const path = require("path");
const express = require("express");
// helper path
const rootDir = require("../util/path");
// Router is like mini express app tied to other express app
// Plug into other express app
const router = express.Router();

// Using router to register things like use get post etc...
router.get("/add-product", (req, res, next) => {
  // sending response
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});
// app.use app.get app.post simply same but we can specify use with get ,post.. to limit
// route restrictions use -> work with all http methods
router.post("/add-product", (req, res, next) => {
  // getting the body giving js object with key value pair with aid with body-parser
  console.log(req.body);
  // redirect after
  res.redirect("/");
});
module.exports = router;
