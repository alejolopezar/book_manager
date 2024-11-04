//crear una funcion que reciva como parametro un  objeto de tempData
function createBook (book){

    //extraer sus propiedades en variables utilizando destructuring
    const {title, author, year, state} = book;
  
    //crear los elementos HTML que formaran parte de la tarjeta

    const h3Title = document.createElement("h3");
    const pAuthor = document.createElement("p");
    const pYear = document.createElement("p");
    const pState = document.createElement("p");
  
    //asignar los valores a las propiedades correspondientes a cada uno de los elementos
    h3Title.textContent = title;
    pAuthor.textContent = "Autor: "+author;
    pYear.textContent = "Año: "+year;
    pState.textContent = "Duration: "+state;
  
    //agregar los elementos a las clases CSS correspondientes que hayas implementado para darles estilos
    
    //crear un <div> que sera la tarjeta donde incluiremos todo los demas elementos
    const divBook = document.createElement("div");
  
    //"Appendear" al nuevo <div> los elementos creados
    divBook.appendChild(h3Title);
    divBook.appendChild(pAuthor);
    divBook.appendChild(pYear);
    divBook.appendChild(pState);
    
    //asignar al <div> la clase css que tengas implementada para dale estilos
    divBook.classList.add("bookCard");

    //Retorna <div> finalizado con todos los elementos correspondientes dentro
    return divBook;
}

const bookContainer = document.getElementById ("bookContainer");

if(bookContainer){
    bookContainer.innerHTML = "";
}

module.exports = {
    createBook, 
    bookContainer,
};