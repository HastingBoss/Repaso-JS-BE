// ============================================
//  OPERADORES LÓGICOS EN JAVASCRIPT
// ============================================
// Sirven para combinar o invertir condiciones booleanas.

// --- && (AND) → "y" ---
// Devuelve true SOLO si AMBAS condiciones son verdaderas.
console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && true);  // false

const edad = 22;
const tieneDNI = true;

if (edad >= 18 && tieneDNI) {
    console.log("Puede votar ✅");
}

// --- || (OR) → "o" ---
// Devuelve true si AL MENOS UNA condición es verdadera.
console.log(true || false);  // true
console.log(false || false); // false

const esAdmin = false;
const esSupervisor = true;

if (esAdmin || esSupervisor) {
    console.log("Tiene acceso al panel ✅");
}

// --- ! (NOT) → "no" / negación ---
// Invierte el valor booleano.
console.log(!true);   // false
console.log(!false);  // true

const usuarioBloqueado = false;
if (!usuarioBloqueado) {
    console.log("Usuario activo ✅");
}

// --- CORTOCIRCUITO (Short-circuit evaluation) ---
// && devuelve el primer valor falsy, o el último si todos son truthy.
// || devuelve el primer valor truthy, o el último si todos son falsy.

const nombreUsuario = null;
const nombrePorDefecto = nombreUsuario || "Anónimo"; // Si null, usa "Anónimo"
console.log(nombrePorDefecto); // "Anónimo"

const configuracion = { tema: "oscuro" };
const tema = configuracion && configuracion.tema; // Solo accede si configuracion existe
console.log(tema); // "oscuro"

// --- ?? (Nullish Coalescing) → solo null o undefined ---
// Similar a ||, pero solo activa el lado derecho si el valor es null o undefined.
const puntaje = 0;
console.log(puntaje || 10);  // 10 ← el || trata 0 como falsy
console.log(puntaje ?? 10);  // 0  ← el ?? solo se activa con null/undefined
