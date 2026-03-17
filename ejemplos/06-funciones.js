// ============================================
//  FUNCIONES EN JAVASCRIPT
// ============================================
// Las funciones son bloques de código reutilizables que podés invocar en cualquier momento.

// --- DECLARACIÓN DE FUNCIÓN (function declaration) ---
// Se puede invocar antes de declararla (hoisting).
function saludar(nombre) {
    return `Hola, ${nombre}!`;
}
console.log(saludar("Ana")); // "Hola, Ana!"

// --- EXPRESIÓN DE FUNCIÓN (function expression) ---
// No tiene hoisting. Se asigna a una variable.
const despedir = function (nombre) {
    return `Hasta luego, ${nombre}!`;
};
console.log(despedir("Juan")); // "Hasta luego, Juan!"

// --- ARROW FUNCTION (función flecha) ---
// Sintaxis más corta. Muy usada en el código moderno.
const sumar = (a, b) => a + b;         // Si hay una sola expresión, return implícito
const cuadrado = (n) => n ** 2;
const saludarSimple = nombre => `Hola ${nombre}`; // Si hay 1 param, paréntesis opcionales

console.log(sumar(3, 4));        // 7
console.log(cuadrado(5));        // 25
console.log(saludarSimple("Lu")); // "Hola Lu"

// Arrow function con cuerpo:
const dividir = (a, b) => {
    if (b === 0) return "Error: no se puede dividir por cero";
    return a / b;
};
console.log(dividir(10, 2)); // 5
console.log(dividir(10, 0)); // "Error: no se puede dividir por cero"

// --- PARÁMETROS POR DEFECTO ---
function crearUsuario(nombre, rol = "usuario") {
    return { nombre, rol };
}
console.log(crearUsuario("Pedro"));          // { nombre: "Pedro", rol: "usuario" }
console.log(crearUsuario("Admin", "admin")); // { nombre: "Admin", rol: "admin" }

// --- REST PARAMETERS (...args) ---
// Agrupa todos los argumentos extras en un array.
function sumarTodo(...numeros) {
    return numeros.reduce((total, n) => total + n, 0);
}
console.log(sumarTodo(1, 2, 3, 4, 5)); // 15

// --- FUNCIONES QUE RETORNAN FUNCIONES ---
function multiplicadorPor(factor) {
    return (numero) => numero * factor;
}
const doble = multiplicadorPor(2);
const triple = multiplicadorPor(3);
console.log(doble(5));  // 10
console.log(triple(5)); // 15

// --- CALLBACKS ---
// Una función que se pasa como argumento a otra función.
function ejecutarOperacion(a, b, operacion) {
    return operacion(a, b);
}
console.log(ejecutarOperacion(6, 3, sumar));         // 9
console.log(ejecutarOperacion(6, 3, (a, b) => a * b)); // 18
