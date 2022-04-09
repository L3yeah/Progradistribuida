//Nota. programar con moduos (importación)
let frutas = require("./frutas");
console.log(frutas);

//Nota. Estructuras de control: condiciones (switch) y ciclos (Do While, while, foreach)     
//for (let index = 0; index < frutas.length; index++) {
   // console.log(frutas[index]);
    
//}
//Nota. node index.js (correr el programa desde la terminal de node)
//Nota. npm (node package manager)  sirve para inicializar o gestionar un paquete en node
//Nota. npm init -y (crea un paquete .json)
//Nota. npm install cowsay (Instala una paqueteria para desarrollador)

let cowsay = require("cowsay");

console.log(cowsay.say({
    text : "Hola 4to A, soy un mooooodulo",
    e : "oO",
    T : "U "
}));