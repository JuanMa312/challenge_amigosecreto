// Obtener referencias a los elementos HTML
const inputAmigo = document.getElementById("amigo");
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

// Array para almacenar los nombres de los amigos
const listaAmigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const nombreAmigo = inputAmigo.value.trim(); // Eliminar espacios en blanco

    // Validar que el campo no esté vacío
    if (nombreAmigo === "") {
        alert("Por favor, ingrese un nombre.");
        return;
    }

    // Validar que el nombre no esté duplicado
    if (listaAmigos.includes(nombreAmigo)) {
        alert(`El nombre "${nombreAmigo}" ya está en la lista.`);
        return;
    }

    // Agregar el nombre a la lista
    listaAmigos.push(nombreAmigo);

    // Actualizar la lista en el HTML
    ulListaAmigos.innerHTML += `<li>${nombreAmigo}</li>`;

    // Limpiar el input
    inputAmigo.value = "";
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    // Validar que haya al menos un amigo en la lista
    if (listaAmigos.length === 0) {
        alert("Agrega al menos un amigo para hacer el sorteo.");
        return;
    }

    // Obtener un número aleatorio dentro del rango de la lista
    const random = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[random];

    // Mostrar el resultado en la interfaz
    ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
}
