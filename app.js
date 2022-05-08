/*const http = require("http");

const server = http.createServer((req, res) => { //funcion de flecha o tambien conocido como arrow fuction / callback es una llamada y regreso. Una aplicacion se define por peticiones y respuestas./http en este caso es una libreria y el resto, o sea el createServer es un metodo
  console.log("respuesta del servidor..."); //este mensaje se vera en la consola de abajo del codigo
  res.end("Te envío un saludo desde el servidor con node.js v3");//este mensaje se vera en el localhost que en este caso estamos usando el 3000
});

const puerto = 3000;

server.listen(puerto, () => {
  console.log("Escuchando...");
});
*/

const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");           //agregamos estas dos lineas para el Motor de plantilla
app.set("views", __dirname + "/views"); 

app.use(express.static(__dirname + "/public"));//una pagina estatica que no tiene manejo de datos en ese momento, una pagina que no se mueve, que solo tiene informacion y para eso es el .use para crear unicamente una pagina informativa/ dirname es la raiz de tu proyecto segun donde este

app.get("/servicios", (req, res) => {
  res.render("servicios", { tituloServicios: "Estas en Servicios" });
});


app.get("/", (req, res) => {
  res.render("index", { titulo: "Inicio EJS en home" });
});

app.get("/contacto", (req, res) => {
  res.render("contacto", { tituloContacto: "Estas en Contacto" });
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

/*

<%-include('templates/cabecera');%>
<body>
    <h1>hola ejs <%= tituloServicios%> </h1>
</body>
</html>

*/