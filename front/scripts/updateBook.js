const axios = require("axios");

const update = () => {

    const resetForm = () => {
        const updateBookForm = document.querySelector("#updateBookForm");
        updateBookForm.reset();
        console.log("formulario limpio");
    };

    const updateBook = (evento) => {
        evento.preventDefault();
    
        const updatedBook = {
            id: document.querySelector("#titleInputId").value.trim(),
            title: document.querySelector("#titleInput").value.trim(),
            author: document.querySelector("#authorInput").value.trim(),
            year: document.querySelector("#yearInput").value.trim(),
            state: document.querySelector("#stateInput").value.trim(),
        };
        console.log("se creo el formulario de actualizacion");
        axios.put("http://localhost:3000/books", updatedBook)
        .then((res) => {
            alert("Se actualizó con exito el libro");
        })
        .catch(() => {
            alert("No se pudó actualizar el libro");
        })
    };

    const updateButton = document.querySelector("#updateButton");
    updateButton.addEventListener("click", updateBook);

    const resetButton = document.querySelector("#resetButton");
    resetButton.addEventListener("click", resetForm);

}

module.exports = {
    update
};