//Crear el array
let listaNombre = [];

//Funcion para que el usuario pueda introducir los nombres
function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;

//Validar la entrada
    if(nombreAmigo === '') {
        alert('Por favor, inserte un nombre'); //Alerta de campo vacío
    } else {
        listaNombre.push(nombreAmigo); //Agregar nombre al array
        limpiarCaja();// Limpiar el campo de entrada
        actLista(); //Actualiza y agrega el nombre a nuestra lista
    }
    return;
}

//Funcíon para recorrer el array y agregar cada nombre a una lista HTML
function actLista() {
   //Obtener el elemento de la lista
    let lista = document.getElementById('listaAmigos'); 
   //Limpiar la lista existente
   lista.innerHTML = '';
   //Iterar sobre el array y crear elementos de lista <li>
   listaNombre.forEach(amigo => {
    let li = document.createElement('li'); //Crear elemento <li>
    li.textContent = amigo; //Asignar nombre como texto
    lista.appendChild(li); //Agregar <li> a la lista
   });
}

//Función para sortear los amigos
function sortearAmigo() {
    let resultado = document.getElementById('resultado');
    let lista = document.getElementById('listaAmigos');
    
    //Validar que haya amigos disponibles
    if(listaNombre.length === 0) {
        resultado.innerHTML = 'No hay amigos para sortear';
        return;
    }

    //Generar un indice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * listaNombre.length);
    //Obtener el nombre soretado
    let nombreSeleccionado = listaNombre[indiceAleatorio];
    //Mostrar el resultado
    resultado.innerHTML = `El amigo secreto es ${nombreSeleccionado}`;
    lista.innerHTML = ''; //Limpia la lista en pantalla
}

//Funcion para limpiar el campo de entrada
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}