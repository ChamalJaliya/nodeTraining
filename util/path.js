// helper function to get the parent directory to match the path

// core module which resolve the relative path error
const path = require("path");

module.exports = path.dirname(require.main.filename);
