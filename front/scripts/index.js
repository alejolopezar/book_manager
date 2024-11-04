//se importa el modulo de renderCards y tempData
const axios = require("axios");
const { update } = require("./updateBook");
const { create } = require("./createBook");
const { search } = require("./searchBook");
const { eliminate } = require("./deleteBook");
const { bookContainer } = require("./renderBooks");

// // Se hace la solicitud GET. Esta solicitud es asincrona
// $.get("https://students-api.up.railway.app/movies")
// .done((data) => {
//     //"Mapear" el listado de peliculas para convertirlos en elementos HTML
//     const arrayTarjetas = data.map(crearTarjeta);  
    
//     //"Appendear" todos los elementos HTML del nuevo array dentro del contenedor
//     arrayTarjetas.forEach(tarjeta => contenedor_tarjetas.appendChild(tarjeta));
// })

// .fail(() => {
//     alert("La información del servidor no se cargo, se utilizara información de tempData");
//     //"Mapear" el listado de peliculas para convertirlos en elementos HTML
//     const arrayTarjetas = tempData.map(crearTarjeta);
    
//     //"Appendear" todos los elementos HTML del nuevo array dentro del contenedor
//     arrayTarjetas.forEach(tarjeta => contenedor_tarjetas.appendChild(tarjeta));
// });

// seleccionar el contenedor donde queremos agregar las peliculas
const createBookForm = document.getElementById ("createBookForm");
const updateBookForm = document.getElementById ("updateBookForm");
const deleteBookForm = document.getElementById ("deleteBookForm");
    


if(bookContainer){
    search();
}

if (createBookForm){
    create();
}

if (updateBookForm){
    update();
}

if (deleteBookForm){
    eliminate();
}

