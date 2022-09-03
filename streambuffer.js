const fs = require("fs");

const readStream = fs.createReadStream("./streamdata.txt");

readStream.on("data", (chunk) => {
  console.log("................");
  console.log(chunk);
});
readStream.on("open", () => {
  console.log("Stream on");
});
