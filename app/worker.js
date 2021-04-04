console.log("worker started");
const queue = require("./fila");
queue.consume("fila1", message => {
    //process the message
    console.log("processing " + message.content.toString());
})