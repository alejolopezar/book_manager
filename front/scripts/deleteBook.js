const axios = require("axios");

const eliminate = () => {

    const resetForm = () => {
        const deleteBookForm = document.querySelector("#deleteBookForm");
        deleteBookForm.reset();
        console.log("formulario limpio");
    };

    const deleteBook = (evento) => {
        evento.preventDefault();
    
        const title = document.querySelector("#titleInput").value.trim();

        axios.delete("http://localhost:3000/books", {data: { title: title}
        })
        .then((res) => {
            alert("Se eliminó el libro con exito");
        })
        .catch(() => {
            alert("No se encontró el libro para eliminar.");
        })
    
    };

    const eliminateButton = document.querySelector("#eliminateButton");
    eliminateButton.addEventListener("click", deleteBook);

    const resetButton = document.querySelector("#resetButton");
    resetButton.addEventListener("click", resetForm);

}

module.exports = {
    eliminate
};