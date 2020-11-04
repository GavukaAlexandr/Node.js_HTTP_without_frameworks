require('dotenv').config()
const http = require('http');
const requestsHandler = require('./requestHandler');


const server = http.createServer(requestsHandler);
server.listen(Number(process.env.PORT));
