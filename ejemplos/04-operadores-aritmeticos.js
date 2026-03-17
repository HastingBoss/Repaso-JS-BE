// ============================================
//  OPERADORES ARITMÉTICOS EN JAVASCRIPT
// ============================================

// --- BÁSICOS ---
console.log(10 + 3);  // 13 → suma
console.log(10 - 3);  // 7  → resta
console.log(10 * 3);  // 30 → multiplicación
console.log(10 / 3);  // 3.333... → división (siempre devuelve decimal si aplica)
console.log(10 % 3);  // 1  → módulo (resto de la división entera)
console.log(2 ** 8);  // 256 → potencia (2 elevado a la 8)

// --- OPERADORES DE ASIGNACIÓN COMBINADA ---
let x = 10;
x += 5;   // x = x + 5  → 15
x -= 3;   // x = x - 3  → 12
x *= 2;   // x = x * 2  → 24
x /= 4;   // x = x / 4  → 6
x **= 2;  // x = x ** 2 → 36
x %= 10;  // x = x % 10 → 6
console.log(x); // 6

// --- INCREMENTO Y DECREMENTO ---
let contador = 0;
contador++;   // post-incremento: usa el valor, luego suma 1
++contador;   // pre-incremento: suma 1, luego usa el valor
contador--;   // post-decremento
console.log(contador); // 1

// --- MÓDULO: MUY ÚTIL EN BACKEND ---
// Saber si un número es par o impar:
const numero = 7;
if (numero % 2 === 0) {
    console.log("Es par");
} else {
    console.log("Es impar"); // → "Es impar"
}

// Saber si es divisible por N:
console.log(100 % 5 === 0); // true → 100 es divisible por 5

// --- MATH: LIBRERÍA DE UTILIDADES MATEMÁTICAS ---
console.log(Math.round(4.6));   // 5   → redondeo al más cercano
console.log(Math.floor(4.9));   // 4   → redondeo hacia abajo
console.log(Math.ceil(4.1));    // 5   → redondeo hacia arriba
console.log(Math.abs(-15));     // 15  → valor absoluto
console.log(Math.max(3, 7, 2)); // 7   → máximo
console.log(Math.min(3, 7, 2)); // 2   → mínimo
console.log(Math.sqrt(81));     // 9   → raíz cuadrada
console.log(Math.random());     // número aleatorio entre 0 y 1

// Número aleatorio entre 1 y 100:
const aleatorio = Math.floor(Math.random() * 100) + 1;
console.log(aleatorio);
