// ============================================
//  MÉTODOS BÁSICOS DE ARRAYS
// ============================================
// Estos métodos MODIFICAN el array original (mutan).

// --- push() → agrega al FINAL ---
const lista = ["a", "b", "c"];
lista.push("d");
lista.push("e", "f"); // Puede agregar varios a la vez
console.log(lista);   // ["a", "b", "c", "d", "e", "f"]
// Devuelve la nueva longitud:
const nuevaLongitud = lista.push("g");
console.log(nuevaLongitud); // 7

// --- pop() → elimina el ÚLTIMO ---
const eliminado = lista.pop();
console.log(eliminado); // "g" → devuelve el elemento eliminado
console.log(lista);     // ["a", "b", "c", "d", "e", "f"]

// --- unshift() → agrega al INICIO ---
lista.unshift("z");
console.log(lista); // ["z", "a", "b", "c", "d", "e", "f"]

// --- shift() → elimina el PRIMERO ---
const primeroEliminado = lista.shift();
console.log(primeroEliminado); // "z"
console.log(lista);            // ["a", "b", "c", "d", "e", "f"]

// --- splice(inicio, cuántos, ...nuevos) → elimina y/o inserta en cualquier posición ---
const colores = ["rojo", "verde", "azul", "negro"];

// Eliminar 1 elemento desde el índice 1:
const [eliminadoSplice] = colores.splice(1, 1);
console.log(eliminadoSplice); // "verde"
console.log(colores);         // ["rojo", "azul", "negro"]

// Insertar sin eliminar (0 elementos a eliminar):
colores.splice(1, 0, "amarillo", "violeta");
console.log(colores); // ["rojo", "amarillo", "violeta", "azul", "negro"]

// Reemplazar: eliminar 2 e insertar 1:
colores.splice(2, 2, "blanco");
console.log(colores); // ["rojo", "amarillo", "blanco", "negro"]

// --- slice(inicio, fin) → copia una porción SIN modificar el original ---
// El índice de fin es EXCLUSIVO.
const numeros = [10, 20, 30, 40, 50];
const porcion = numeros.slice(1, 4); // del índice 1 al 3
console.log(porcion);  // [20, 30, 40]
console.log(numeros);  // [10, 20, 30, 40, 50] → intacto

const ultimosDos = numeros.slice(-2); // Los últimos 2
console.log(ultimosDos); // [40, 50]

const copiaCompleta = numeros.slice(); // Copia todo el array
console.log(copiaCompleta);

// --- indexOf() → devuelve el ÍNDICE de la primera ocurrencia ---
const frutas = ["pera", "manzana", "banana", "manzana"];
console.log(frutas.indexOf("manzana")); // 1  → primera ocurrencia
console.log(frutas.indexOf("uva"));     // -1 → no existe, devuelve -1

// --- includes() → devuelve true/false si el elemento existe ---
console.log(frutas.includes("banana")); // true
console.log(frutas.includes("uva"));    // false

// Uso típico:
if (!frutas.includes("naranja")) {
    frutas.push("naranja");
    console.log("Naranja agregada:", frutas);
}
