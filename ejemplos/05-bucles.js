// ============================================
//  BUCLES EN JAVASCRIPT
// ============================================
// Los bucles repiten un bloque de código mientras se cumpla una condición.

// --- FOR CLÁSICO ---
// Estructura: for (inicio; condición; actualización)
// Ideal cuando sabés exactamente cuántas veces querés iterar.

for (let i = 0; i < 5; i++) {
    console.log(`Vuelta número ${i}`);
}
// Vuelta número 0, 1, 2, 3, 4

// Recorrer un array con índice:
const frutas = ["manzana", "banana", "naranja"];
for (let i = 0; i < frutas.length; i++) {
    console.log(`[${i}] ${frutas[i]}`);
}

// --- FOR...OF ---
// Itera directamente sobre los VALORES de un iterable (arrays, strings, etc.).
// Más limpio cuando no necesitás el índice.

for (const fruta of frutas) {
    console.log(fruta);
}
// "manzana", "banana", "naranja"

// También funciona con strings:
for (const letra of "Hola") {
    console.log(letra); // H, o, l, a
}

// --- FOR...IN ---
// Itera sobre las CLAVES (propiedades) de un objeto.
const persona = { nombre: "Carlos", edad: 28, ciudad: "BsAs" };

for (const clave in persona) {
    console.log(`${clave}: ${persona[clave]}`);
}
// nombre: Carlos
// edad: 28
// ciudad: BsAs

// --- WHILE ---
// Repite mientras la condición sea true.
// Útil cuando no sabés de antemano cuántas veces vas a iterar.

let intentos = 0;
while (intentos < 3) {
    console.log(`Intento ${intentos + 1}`);
    intentos++;
}

// --- DO...WHILE ---
// Como while, pero siempre ejecuta el bloque AL MENOS UNA VEZ.

let numero = 10;
do {
    console.log(`El número es ${numero}`);
    numero++;
} while (numero < 5); // La condición es falsa desde el inicio, pero se ejecutó una vez

// --- BREAK Y CONTINUE ---
// break  → sale del bucle completamente
// continue → salta a la siguiente vuelta

for (let i = 0; i < 10; i++) {
    if (i === 3) continue; // salta el 3
    if (i === 7) break;    // para en el 7
    console.log(i);        // 0, 1, 2, 4, 5, 6
}
