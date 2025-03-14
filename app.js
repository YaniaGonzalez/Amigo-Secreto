// Lista de amigos
let amigos = [];

// agregar un amigo a la lista
function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombre = inputAmigo.value.trim(); // Captura y limpia espacios

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar al array
    amigos.push(nombre);

    // Limpiar el campo de entrada
    inputAmigo.value = "";

    // Actualizar la lista en pantalla
    mostrarLista();
}
