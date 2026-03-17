// ============================================
//  OBJETOS EN JAVASCRIPT
// ============================================
// Un objeto es una colección de pares clave-valor.
// Sirven para representar entidades del mundo real.

// --- CREACIÓN ---
const persona = {
    nombre: "Carlos",
    edad: 30,
    ciudad: "Buenos Aires",
    activo: true,
};

// --- ACCESO A PROPIEDADES ---
console.log(persona.nombre);       // "Carlos" → notación de punto (más común)
console.log(persona["ciudad"]);    // "Buenos Aires" → notación de corchetes (útil con variables)

const clave = "edad";
console.log(persona[clave]);       // 30 → acceso dinámico con variable

// --- MODIFICAR Y AGREGAR PROPIEDADES ---
persona.edad = 31;                 // Modifica una propiedad existente
persona.profesion = "Desarrollador"; // Agrega una nueva propiedad
console.log(persona);

// --- ELIMINAR PROPIEDADES ---
delete persona.activo;
console.log(persona.activo);       // undefined

// --- MÉTODOS EN OBJETOS ---
// Un método es una función que vive dentro de un objeto.
const calculadora = {
    valor: 0,
    sumar(n) {
        this.valor += n;  // "this" hace referencia al propio objeto
        return this;      // permite encadenar métodos
    },
    restar(n) {
        this.valor -= n;
        return this;
    },
    resultado() {
        return this.valor;
    },
};

console.log(calculadora.sumar(10).sumar(5).restar(3).resultado()); // 12

// --- DESESTRUCTURACIÓN DE OBJETOS ---
const { nombre, edad, ciudad = "Desconocida" } = persona;
console.log(nombre); // "Carlos"
console.log(edad);   // 31
console.log(ciudad); // "Buenos Aires" (o "Desconocida" si no existiera)

// Renombrar al desestructurar:
const { nombre: nombreCompleto } = persona;
console.log(nombreCompleto); // "Carlos"

// --- SPREAD EN OBJETOS ---
const base = { rol: "usuario", activo: true };
const nuevo = { ...base, nombre: "Sofía", rol: "admin" }; // rol sobreescribe el de base
console.log(nuevo); // { rol: "admin", activo: true, nombre: "Sofía" }

// --- MÉTODOS ÚTILES DE Object ---
const usuario = { id: 1, nombre: "Diego", edad: 25 };

console.log(Object.keys(usuario));   // ["id", "nombre", "edad"]
console.log(Object.values(usuario)); // [1, "Diego", 25]
console.log(Object.entries(usuario));// [["id",1], ["nombre","Diego"], ["edad",25]]

// Iterar con entries:
for (const [clave, valor] of Object.entries(usuario)) {
    console.log(`${clave}: ${valor}`);
}

// --- OBJETOS ANIDADOS ---
const empresa = {
    nombre: "TechCorp",
    direccion: {
        calle: "Av. Corrientes",
        numero: 1234,
        ciudad: "CABA",
    },
    empleados: ["Ana", "Luis", "Marta"],
};

console.log(empresa.direccion.ciudad);   // "CABA"
console.log(empresa.empleados[0]);       // "Ana"
