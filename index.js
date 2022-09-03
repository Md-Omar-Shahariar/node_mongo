const _ = require("underscore");
const arr = [
  { name: "afridi", roll: "1" },
  { name: "afridi1", roll: "1" },
  { name: "afridi2", roll: "1" },
];
const add = require("./other");
const res = add(4, 5);
console.log(res);
var http = require("http");

var server = http.createServer(function (req, res) {
  //write code here
  console.log(`Server is running`);
  //   console.log(req.body);
});
const name = _.pluck(arr, "name");
console.log(name);

server.listen(5000);

// server.listen(5000);
