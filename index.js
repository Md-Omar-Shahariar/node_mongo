var http = require("http");
const _ = require("underscore");
const arr = [
  { name: "afridi", roll: "1" },
  { name: "afridi1", roll: "1" },
  { name: "afridi2", roll: "1" },
];
const add = require("./other");
// const resu = add(4, 5);
// console.log(resu);

console.log(http);

var server = http.createServer((req, res) => {
  //write code here
  console.log(`Server is running`);
  res.end("local host");
  //   console.log(req.body);
});
const name = _.pluck(arr, "name");
console.log(name);

server.listen(4000);

// server.listen(5000);
