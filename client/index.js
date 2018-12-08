const io = require('socket.io-client');


const ioClient = io.connect("http://localhost:8000");

ioClient.on("seq-num", (msg) => console.info(msg));