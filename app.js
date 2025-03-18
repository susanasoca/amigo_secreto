// Arreglo global para almacenar los nombres de los amigos
var amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    var amigoInput = document.querySelector('#amigo');
    var amigo = amigoInput.value.trim();
    var amigoMinuscula = amigo.toLowerCase();

    if (amigo === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Valida que el nombre solo contenga letras (incluyendo tildes y ñ) y espacios
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(amigo)) {
        alert("Nombre Incorrecto");
        amigoInput.value = "";
        amigoInput.focus();
        return;
    }

    // Crea un arreglo con nombres en minúsculas para comparar duplicados
    var nombresNormalizados = amigos.map(function(a) {
        return a.toLowerCase();
    });
    if (nombresNormalizados.indexOf(amigoMinuscula) !== -1) {
        alert("Este amigo ya fue agregado.");
        return;
    }

    amigos.push(amigo);
    amigoInput.value = "";
    amigoInput.focus();
    asignarTextoAElemento('#resultado', '');
    mostrarAmigos();
}

// Función para mostrar la lista de amigos en el HTML
function mostrarAmigos() {
    limpiarListaAmigos();
    var amigosDiv = document.querySelector('#listaAmigos');
    amigos.forEach(function(amigo) {
        amigosDiv.innerHTML += '<li>' + amigo + '</li>';
    });
}

// Función para sortear un amigo aleatorio de la lista
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    var indexAleatorio = Math.floor(Math.random() * amigos.length);
    var amigoAleatorio = amigos[indexAleatorio];
    asignarTextoAElemento('#resultado', 'El amigo secreto sorteado es: ' + amigoAleatorio);
    amigos = [];
    limpiarListaAmigos();
}

// Función para limpiar la lista de amigos mostrada en el HTML
function limpiarListaAmigos() {
    var amigosDiv = document.querySelector('#listaAmigos');
    amigosDiv.innerHTML = "";
}

// Función para asignar un texto a un elemento HTML específico
function asignarTextoAElemento(elemento, contenido) {
    document.querySelector(elemento).innerHTML = contenido;
}

// Función para limpiar la lista de amigos y el resultado mostrado en pantalla
function limpiarAmigos() {
    amigos = [];
    limpiarListaAmigos();
    asignarTextoAElemento('#resultado', '');
}

// Evento que se ejecuta cuando el DOM se ha cargado
document.addEventListener("DOMContentLoaded", function() {
    limpiarAmigos();
});
