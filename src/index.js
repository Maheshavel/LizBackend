const express = require("express");
const http = require('http');
app = express();

var server = http.createServer(app);

const PORT = process.env.PORT || 8080;

server.listen(PORT,() => {
	console.log("Server is running");
});