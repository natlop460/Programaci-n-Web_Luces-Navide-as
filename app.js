// -------------------------------
// 1. Crear los 5 patrones de colores
// -------------------------------

// Cada patrón es un arreglo con 10 colores
const patron1 = ['red','green','red','green','red','green','red','green','red','green'];
const patron2 = ['blue','yellow','blue','yellow','blue','yellow','blue','yellow','blue','yellow'];
const patron3 = ['green','green','red','red','green','green','red','red','green','green'];
const patron4 = ['yellow','blue','red','yellow','blue','red','yellow','blue','red','yellow'];
const patron5 = ['red','red','red','red','red','green','green','green','green','green'];

// Juntamos los patrones en un solo arreglo
const patrones = [patron1, patron2, patron3, patron4, patron5];


// -------------------------------
// 2. Obtener el div principal del HTML
// -------------------------------
const app = document.getElementById("app");   // Conecta con el div vacío del HTML


// -------------------------------
// 3. Crear y mostrar el título
// -------------------------------
const titulo = document.createElement("h1");   // Crear elemento <h1>
titulo.textContent = "Luces Navideñas Animadas..!!";  // Texto del título
app.appendChild(titulo);                       // Agregarlo al div principal


// -------------------------------
// 4. Crear contenedor de luces
// -------------------------------
const contenedorLuces = document.createElement("div"); // Crear div (un contenedor)
contenedorLuces.classList.add("contenedor-luces");     // Agregar clase para estilos de CSS
app.appendChild(contenedorLuces);                      // Ponerlo en la página


// -------------------------------
// 5. Crear 10 luces dinámicamente
// -------------------------------
let luces = [];   // Aquí guardaremos los 10 divs

function crearLuces() {
    for (let i = 0; i < 10; i++) {          // Repetir 10 veces
        const luz = document.createElement("div"); // Crear un div
        luz.classList.add("luz");           // Agregarle la clase
        contenedorLuces.appendChild(luz);   // Meterlo al contenedor
        luces.push(luz);                    // Guardarlo en el arreglo
    }
}

crearLuces(); // Llamar la función para crearlas


// -------------------------------
// 6. Cambiar los colores de las luces
// -------------------------------
function actualizarLuces(patron) {
    // Recorremos las 10 luces
    for (let i = 0; i < luces.length; i++) {
        luces[i].style.backgroundColor = patron[i]; // Cambia el color
    }
}


// -------------------------------
// 7. Animación con setTimeout
// -------------------------------
let indice = 0;  // Para saber en qué patrón vamos

function iniciarAnimacion() {

    // Cambiar al patrón actual
    actualizarLuces(patrones[indice]);

    // Pasar al siguiente patrón
    indice++;

    // Si ya llegamos al último patrón, volver al primero
    if (indice >= patrones.length) {
        indice = 0;
    }

    // Volver a llamar a esta función dentro de 1.5 segundos
    setTimeout(iniciarAnimacion, 1500);
}

// Iniciar la animación infinita
iniciarAnimacion();
