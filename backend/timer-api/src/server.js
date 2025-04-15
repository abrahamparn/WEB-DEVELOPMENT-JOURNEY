const http = require("http");

const app = require("./app");

const server = http.createServer(app);

const PORT = 8000 || process.env.PORTS;

function startServer() {
  server.listen(PORT, () => {
    console.log(`Listening on ports: ${PORT}`);
  });
}
startServer();
