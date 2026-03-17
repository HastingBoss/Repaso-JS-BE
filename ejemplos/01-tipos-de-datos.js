// ============================================
//  TIPOS DE DATOS EN JAVASCRIPT
// ============================================
// JavaScript tiene 8 tipos de datos.
// Se dividen en "primitivos" y "de referencia".

// --- PRIMITIVOS ---
// Son inmutables: cuando los asignás, copiás el valor.

const nombre = "Juan";        // String  → texto
const edad = 25;              // Number  → entero o decimal
const precio = 19.99;         // Number  → decimal (no hay float separado)
const esActivo = true;        // Boolean → true o false
let sinAsignar;               // Undefined → variable declarada pero sin valor
const vacio = null;           // Null → ausencia intencional de valor
const id = Symbol("id");      // Symbol → valor único e irrepetible
const grande = 9007199254740993n; // BigInt → números muy grandes

// --- DE REFERENCIA ---
// Guardan una "referencia" (dirección de memoria), no el valor directo.

const persona = { nombre: "Ana", edad: 30 }; // Object
const colores = ["rojo", "verde", "azul"];   // Array (es un objeto especial)
const saludar = function () { return "Hola"; }; // Function (también es un objeto)

// --- COMPROBANDO TIPOS ---
// typeof nos dice qué tipo tiene una variable

console.log(typeof nombre);       // "string"
console.log(typeof edad);         // "number"
console.log(typeof esActivo);     // "boolean"
console.log(typeof sinAsignar);   // "undefined"
console.log(typeof vacio);        // "object" ← quirk histórico de JS, null no es un objeto real
console.log(typeof persona);      // "object"
console.log(typeof colores);      // "object"
console.log(typeof saludar);      // "function"

// --- CONVERSIÓN DE TIPOS ---
const numeroTexto = "42";
const numeroReal = Number(numeroTexto); // "42" → 42
const textoNum = String(100);           // 100  → "100"
const booleano = Boolean(0);            // 0    → false (valores "falsy")

console.log(numeroReal, typeof numeroReal); // 42 "number"
console.log(textoNum, typeof textoNum);     // "100" "string"
console.log(booleano);                      // false

// VALORES FALSY en JS (se consideran false en una condición):
// false, 0, "", null, undefined, NaN
