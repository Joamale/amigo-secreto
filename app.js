// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.7

// Array para almacenar los nombres de amigos
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;

    if (nombre.trim() === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    amigos.push(nombre);
    actualizarListaAmigos();

    document.getElementById('amigo').value = '';
}

// Función para actualizar la lista de amigos en el HTML
function actualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

// Función que realiza el sorteo del amigo secreto
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert('No hay amigos para sortear.');
        return;
    }

    // Seleccionar índice aleatorio del array
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Elegir el amigo en el índice seleccionado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado
    document.getElementById('resultado').innerHTML = `🎉 El amigo secreto es: ${amigoSorteado} 🎉`;
}
