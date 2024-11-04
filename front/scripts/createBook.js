const axios = require("axios");

const create = () => {

    const resetForm = () => {
        const creatBookForm = document.querySelector("#creatBookForm");
        creatBookForm.reset();
        console.log("formulario limpio");
    };

    const creatBook = (evento) => {
        evento.preventDefault();
    
        const newBook = {
            title: document.querySelector("#titleInput").value.trim(),
            author: document.querySelector("#authorInput").value.trim(),
            year: document.querySelector("#yearInput").value.trim(),
            state: document.querySelector("#stateInput").value.trim(),
        };
    console.log(newBook);
        axios.post("http://localhost:3000/books", newBook)
        .then((res) => {
            alert("Se creó el libro con exito");
        })
        .catch(() => {
            alert("No se pudó crear el libro");
        })
    };

    const createButton = document.querySelector("#createButton");
    createButton.addEventListener("click", creatBook);

    const resetButton = document.querySelector("#resetButton");
    resetButton.addEventListener("click", resetForm);

}

module.exports = {
    create
};