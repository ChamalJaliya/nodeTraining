// core module which resolve the relative path error
const path = require("path");
const express = require("express");
// helper path
const rootDir = require("../util/path");
// Router is like mini express app tied to other express app
// Plug into other express app
const router = express.Router();

// use allows to add new middleware functions to the incoming request
// accept array of request handlers and the function applied to every
// incoming requests and receive i) Request ii) Response iii) Next
router.get("/", (req, res, next) => {
  // sending response
  // __dirname -> global variable holds the absolute path on OS
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
