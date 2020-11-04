const http = require('http');
const requestsHandler = require('./requestsHandler');

const server = http.createServer(requestsHandler);
server.listen(3000, () => {
  console.log('server started');
});

// TODO Create the Server and handler
// TODO Method, URL and Headers | const { method, url } = request; | const userAgent = headers['user-agent'];
// TODO Request Body | chunk example
// TODO Errors Handler | request.on('error', (err) => { console.error(err.stack); });
// TODO
// TODO
// TODO

//https://stackoverflow.com/questions/8590042/parsing-query-string-in-node-js
// const http = require('http');
// const { URL } = require('url');
// const { parse: parseQuery } = require('querystring');

// // Provide the origin for relative URLs sent to Node.js requests.
// const serverOrigin = 'http://localhost:8000';

// // Configure our HTTP server to respond to all requests with a greeting.
// const server = http.createServer((request, response) => {
//   // Parse the request URL. Relative URLs require an origin explicitly.
//   const url = new URL(request.url, serverOrigin);
//   // Parse the URL query. The leading '?' has to be removed before this.
//   const query = parseQuery(url.search.substr(1));
//   response.writeHead(200, { 'Content-Type': 'text/plain' });
//   response.end(`Hello, ${query.name}!\n`);
// });

// // Listen on port 8000, IP defaults to 127.0.0.1.
// server.listen(8000);

// // Print a friendly message on the terminal.
// console.log(`Server running at ${serverOrigin}/`);
