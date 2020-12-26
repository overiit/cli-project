
const App = require("./app");
let package = require("./package.json");

console.log("Starting", package.name, package.version, "developed by", package.author);

App.start();
