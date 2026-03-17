// ============================================
//  COMPARADORES EN JAVASCRIPT
// ============================================
// Los comparadores evalúan dos valores y devuelven true o false.

// --- IGUALDAD ---

// == (igualdad débil): compara valores, CONVIERTE el tipo si hace falta
console.log(5 == "5");   // true  ← convierte "5" a número antes de comparar
console.log(0 == false); // true  ← convierte false a 0

// === (igualdad estricta): compara valor Y tipo. SIEMPRE usá este.
console.log(5 === "5");  // false ← distinto tipo: number vs string
console.log(5 === 5);    // true

// != (desigualdad débil)
console.log(5 != "5");   // false ← los considera iguales tras la conversión

// !== (desigualdad estricta) ← el que debés usar
console.log(5 !== "5");  // true  ← son distintos (número vs string)
console.log(5 !== 5);    // false

// --- COMPARACIÓN DE MAGNITUD ---
console.log(10 > 5);    // true  → mayor que
console.log(10 < 5);    // false → menor que
console.log(10 >= 10);  // true  → mayor o igual que
console.log(10 <= 9);   // false → menor o igual que

// --- COMPARAR STRINGS ---
// Los strings se comparan por orden alfabético (código Unicode)
console.log("banana" > "apple");  // true  → 'b' tiene mayor código que 'a'
console.log("Ana" < "ana");       // true  → mayúsculas tienen menor código

// --- CUIDADO CON null Y undefined ---
console.log(null == undefined);   // true  ← caso especial de JS
console.log(null === undefined);  // false ← distinto tipo

// --- EJEMPLO PRÁCTICO ---
const edadUsuario = 20;
const edadMinima = 18;

if (edadUsuario >= edadMinima) {
    console.log("Puede ingresar ✅");
} else {
    console.log("Acceso denegado ❌");
}
