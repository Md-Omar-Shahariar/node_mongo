const events = require("events");

const eventEmitter = new events.EventEmitter();

//creating an Event handler

const chitkardibo = () => {
  console.log("oi beta koi tui");
};

//assign handler in an event

eventEmitter.on("scream", chitkardibo);

//firing event

eventEmitter.emit("scream");
