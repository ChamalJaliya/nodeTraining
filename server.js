// VANILLA NODE_JS

// require is a keyword here
//    i) takes a path to another file (own js file -> relative path)
//   ii) Core Module
//  iii) Package Third party module (node_module)
const http = require("http");

// Method 1
// // req listener
// function rqListener(req, res) {}
// // request listener is a function that will execute for every incoming requests
// http.createServer(rqListener);

// // Method 2
// // Anonymous event driven architecture
// // if "x"(req) happen do "y"(function)
// http.createServer(function (req, rse) {});

// Method 3
// Arrow Functions -> callback function
// incoming req listener is a event listener
const server = http.createServer((req, res) => {
  // Request
  console.log(req);
  console.log(req.url, req.method, req.headers);
  // Response
  // setting the headers
  res.setHeader("Content-Type", "text/html");
  //   don't want to quit from the server wont able to reach the webpage anymore
  //   hard exit from the event loop program shutdown
  //   process.exit()
});

// Keep this running to listen ongoing looping req
server.listen(3000);

// Note after running node server.js
// open web browser @ localhost:3000 to get the req body
