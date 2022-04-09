const http = require("http");

const server = http.createServer((req, res) => { //funcion de flecha / callback es una llamada y regreso. Una aplicacion se define por peticiones y respuestas.
  console.log("respuesta del servidor...");
  res.end("Te envío un saludo desde el servidor con node.js");
});

const puerto = 3000;

server.listen(puerto, () => {
  console.log("Escuchando...");
});