const http = require("node:http");
const fs = require("fs/promises");

const PORT = process.env.PORT || 3000;

// create a local server to receive data from
const server = http.createServer((_, response) => {
    // send the index file
    (async(response) => {
        const data = await fs.readFile(__dirname + '/index.html', { encoding: 'utf8' });
        response.writeHead(200, {
            'Content-Length': Buffer.byteLength(data),
            'Content-Type': 'text/html'
        }).end(data);
    })(response);
});

server.listen(PORT, () => {
    console.log(`Server listening on port : ${PORT}`);
});
