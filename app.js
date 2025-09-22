// Array para guardar los nombres
let amigos = [];
console.log(amigos);

/* --- Agregar amigo --- */
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  // Validación: no vacío
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  // Añadir al array
  amigos.push(nombre);

  // Actualizar la lista en el DOM
  mostrarLista();

  // Limpiar y enfocar el campo
  input.value = "";
  input.focus();
}

/* --- Mostrar lista (usa innerHTML para limpiar, luego crea <li> con createElement) --- */
function mostrarLista() {
  const lista = document.getElementById("listaAmigos");

  // Limpiar la lista existente para evitar duplicados
  lista.innerHTML = "";

  // Recorrer el arreglo usando for y crear <li> por cada amigo
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = amigos[i]; // textContent por seguridad
    lista.appendChild(li);
  }
}

/* --- Sortear un amigo aleatorio --- */
function sortearAmigo() {
  const resultado = document.getElementById("resultado");

  // Validar que haya al menos un amigo
  if (amigos.length === 0) {
    alert("No hay amigos para sortear. Por favor, añade al menos uno.");
    resultado.innerHTML = ""; // limpiar resultado previo si existe
    return;
  }

  // Generar índice aleatorio
  const indice = Math.floor(Math.random() * amigos.length);

  // Obtener nombre sorteado
  const nombreSorteado = amigos[indice];

  // Mostrar el resultado usando innerHTML (escapando el texto para seguridad)
  resultado.innerHTML = `<li>Amigo sorteado: <strong>${escapeHtml(nombreSorteado)}</strong></li>`;
}

/* --- Helper: versión corta para escapar HTML usando textContent --- */
function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = String(str);
  return div.innerHTML;
}
/*Reiniciar el juego completamente */
function reiniciarJuego() {
  // Vaciar el array de amigos
  amigos = [];

  // Limpiar lista de amigos
  document.getElementById("listaAmigos").innerHTML = "";

  // Limpiar resultado
  document.getElementById("resultado").innerHTML = "";

  // Limpiar campo de entrada
  document.getElementById("amigo").value = "";

  // Confirmación opcional
  alert("El juego ha sido reiniciado.");
}
