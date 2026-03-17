// ============================================
//  ARRAYS EN JAVASCRIPT
// ============================================
// Un array es una lista ordenada de elementos.
// Los índices empiezan desde 0.

// --- CREACIÓN ---
const vacio = [];
const numeros = [1, 2, 3, 4, 5];
const mixto = ["texto", 42, true, null]; // Un array puede mezclar tipos

// --- ACCESO POR ÍNDICE ---
console.log(numeros[0]);  // 1 → primer elemento
console.log(numeros[4]);  // 5 → último
console.log(numeros[10]); // undefined → no existe ese índice

// Acceder al último elemento dinámicamente:
console.log(numeros[numeros.length - 1]); // 5
console.log(numeros.at(-1));              // 5 (forma moderna)

// --- LONGITUD ---
console.log(numeros.length); // 5

// --- MODIFICAR ELEMENTOS ---
const colores = ["rojo", "verde", "azul"];
colores[1] = "amarillo"; // Cambia "verde" por "amarillo"
console.log(colores);    // ["rojo", "amarillo", "azul"]

// --- RECORRER UN ARRAY ---
for (const color of colores) {
    console.log(color);
}

// Con forEach (método de array):
colores.forEach((color, indice) => {
    console.log(`[${indice}] ${color}`);
});

// --- ARRAYS DE OBJETOS (muy común en backend) ---
const usuarios = [
    { id: 1, nombre: "Ana", activo: true },
    { id: 2, nombre: "Luis", activo: false },
    { id: 3, nombre: "Marta", activo: true },
];

// Acceder a propiedades:
console.log(usuarios[0].nombre); // "Ana"

// Iterar sobre objetos:
for (const usuario of usuarios) {
    console.log(`${usuario.nombre} → ${usuario.activo ? "activo" : "inactivo"}`);
}

// --- DESESTRUCTURACIÓN DE ARRAYS ---
const [primero, segundo, ...resto] = numeros;
console.log(primero); // 1
console.log(segundo); // 2
console.log(resto);   // [3, 4, 5]

// --- SPREAD OPERATOR ---
// Copia o une arrays sin modificar el original:
const a = [1, 2, 3];
const b = [4, 5, 6];
const unidos = [...a, ...b];
console.log(unidos); // [1, 2, 3, 4, 5, 6]

// Copia de array (no referencia):
const copia = [...a];
copia.push(99);
console.log(a);     // [1, 2, 3] → no se modificó
console.log(copia); // [1, 2, 3, 99]
