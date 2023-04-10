// Write your code here!
const mainNode = document.getElementById('main');

// Eliminar el nodo 'main' si existe
if (mainNode) {
    mainNode.parentNode.removeChild(mainNode);
}

////

// Declarar la variable 'newHeader'
// Declarar la variable 'newHeader'
let newHeader;

// Asignarle un valor que apunte a un nodo 'h1' y establecer su contenido de texto
newHeader = document.createElement('h1');
newHeader.textContent = "Daniel is the champion";

// Establecer el atributo 'id' del nodo 'newHeader' en 'victory'
newHeader.setAttribute('id', 'victory');

// Obtener el nodo principal del documento y reemplazar el nodo 'main' con el nodo 'newHeader'
const main = document.querySelector('main');
main.replaceWith(newHeader);