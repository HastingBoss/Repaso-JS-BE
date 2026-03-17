// ============================================
//  MÉTODOS AVANZADOS DE ARRAYS
// ============================================
// Estos métodos NO modifican el array original, devuelven uno nuevo.
// Son funcionales, reciben un callback como argumento.

const productos = [
    { id: 1, nombre: "Teclado", precio: 5000, categoria: "tech", stock: 10 },
    { id: 2, nombre: "Monitor", precio: 80000, categoria: "tech", stock: 3 },
    { id: 3, nombre: "Silla", precio: 30000, categoria: "hogar", stock: 7 },
    { id: 4, nombre: "Escritorio", precio: 45000, categoria: "hogar", stock: 0 },
    { id: 5, nombre: "Mouse", precio: 2000, categoria: "tech", stock: 15 },
];

// --- map() → TRANSFORMA cada elemento, devuelve un nuevo array del mismo tamaño ---
// "Convertí cada elemento en otra cosa"

const nombres = productos.map(p => p.nombre);
console.log(nombres); // ["Teclado", "Monitor", "Silla", "Escritorio", "Mouse"]

const conDescuento = productos.map(p => ({
    ...p,
    precioFinal: p.precio * 0.9, // 10% de descuento
}));
console.log(conDescuento[0]); // { id: 1, nombre: "Teclado", precio: 5000, precioFinal: 4500, ... }

// --- filter() → FILTRA elementos que cumplen una condición, devuelve un nuevo array ---
// "Dame solo los que cumplan esto"

const soloTech = productos.filter(p => p.categoria === "tech");
console.log(soloTech.map(p => p.nombre)); // ["Teclado", "Monitor", "Mouse"]

const enStock = productos.filter(p => p.stock > 0);
console.log(enStock.map(p => p.nombre)); // ["Teclado", "Monitor", "Silla", "Mouse"]

const economicos = productos.filter(p => p.precio < 10000);
console.log(economicos.map(p => p.nombre)); // ["Teclado", "Mouse"]

// --- find() → Devuelve el PRIMER elemento que cumpla la condición (o undefined) ---
// "Encontrá uno"

const productoId3 = productos.find(p => p.id === 3);
console.log(productoId3); // { id: 3, nombre: "Silla", ... }

const noExiste = productos.find(p => p.id === 99);
console.log(noExiste); // undefined

// --- findIndex() → Como find(), pero devuelve el ÍNDICE (o -1) ---
const indice = productos.findIndex(p => p.id === 3);
console.log(indice); // 2

// --- reduce() → ACUMULA todos los valores en uno solo ---
// "Convertí todo el array en un único resultado"
// Recibe: (acumulador, elementoActual) => nuevoAcumulador
// Segundo argumento: valor inicial del acumulador

const totalStock = productos.reduce((total, p) => total + p.stock, 0);
console.log(totalStock); // 35

const valorInventario = productos.reduce((total, p) => total + (p.precio * p.stock), 0);
console.log(`Valor total del inventario: $${valorInventario}`); // $1,290,000

// --- some() → ¿AL MENOS UNO cumple la condición? → true/false ---
const hayAgotados = productos.some(p => p.stock === 0);
console.log(hayAgotados); // true

// --- every() → ¿TODOS cumplen la condición? → true/false ---
const todosConStock = productos.every(p => p.stock > 0);
console.log(todosConStock); // false

// --- ENCADENAMIENTO DE MÉTODOS ---
// Muy poderoso: se pueden combinar todos estos métodos.

// "Dame el precio total de los productos tech que están en stock"
const totalTechEnStock = productos
    .filter(p => p.categoria === "tech" && p.stock > 0)
    .reduce((total, p) => total + p.precio, 0);

console.log(`Total tech en stock: $${totalTechEnStock}`); // $87,000

// "Dame los nombres de los productos de hogar ordenados por precio"
const hogarOrdenado = productos
    .filter(p => p.categoria === "hogar")
    .sort((a, b) => a.precio - b.precio)
    .map(p => `${p.nombre} ($${p.precio})`);

console.log(hogarOrdenado); // ["Silla ($30000)", "Escritorio ($45000)"]
