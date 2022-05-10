//DISTINTOS TIPOS DE VARIABLES

//esta se podra modificar sobre todo el programa en si//
var nombre; /*declaracion de variable Scope (Ambito) Global sin asignar valor*/
console.log(nombre);
var nombre = "Pepe";/*Scope (ambito) Global (es Variable)*/
console.log(nombre);


//con let es una variable que usamos dentro de un bloque 
//let apellido;
//apellido="Ferreyra";
//console.log(apellido);

//una vez que asigno un dato no puedo seguir modificando
//const alias="Pochito";
//console.log(alias);
//alias="Betito";
//console.log(alias);


//algunas sentencias REVISAR ESTO CON LA CLASE 1 ver console y alert
//let nombreUsuario=prompt("Ingrese su nombre :");



//condicionales
let pronostico = prompt("Esta lloviendo ? Respuesta Si o No").toUpperCase();


if (pronostico == "SI") {
    alert("Te vas a mojar");
    
    //console.log("llevar equipo de lluvia");
}
else if (pronostico == "NO") {
    console.log("disfruta el dia de sol!");
}
else {
    console.log("DEbes responder SI o NO");
}
