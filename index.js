var http = require("http");
const _ = require("underscore");
const url = require("url");
// const arr = [
//   { name: "afridi", roll: "1" },
//   { name: "afridi1", roll: "1" },
//   { name: "afridi2", roll: "1" },
// ];
const add = require("./other");
// const resu = add(4, 5);
// console.log(resu);

// console.log(http);

var server = http.createServer((req, res) => {
  const address_url = `http://localhost:4000/contact?name=afridi&&roll=1`;
  const parse_url = url.parse(address_url);

  console.log(parse_url.query);

  //write code here
  //   console.log(`Server is running`);
  //   res.end("local host");
  //   console.log(req.body);
  //   console.log(req.url);
  //   res.end();

  //   if (req.url === "/") {
  //     res.writeHead(200, { "content-type": "text/html" });
  //     res.write("<p>This is Home Page</p>");
  //     res.end();
  //   } else if (req.url === "/contact") {
  //     res.writeHead(200, { "content-type": "text/html" });
  //     res.write("<p>This is Contact Page</p>");
  //     res.end();
  //   }
});
// const name = _.pluck(arr, "name");
// console.log(name);

server.listen(4000);
// console.log(url);
// server.listen(5000);
