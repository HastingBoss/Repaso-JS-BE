// ============================================
//  ASYNC / AWAIT EN JAVASCRIPT
// ============================================
// En JavaScript, muchas operaciones son ASINCRÓNICAS:
// llamadas a APIs, lectura de archivos, consultas a bases de datos, etc.
// Es decir: el código no espera que terminen, sigue ejecutando lo que sigue.
//
// async/await es la forma moderna y legible de manejar ese comportamiento.

// ============================================
// PARTE 1: PROMESAS (la base)
// ============================================
// Una Promesa es un objeto que representa un valor que puede estar:
//   · pendiente (pending)   → todavía procesando
//   · resuelto  (fulfilled) → terminó con éxito
//   · rechazado (rejected)  → terminó con un error

const promesaExitosa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("✅ Operación completada"); // simula éxito después de 1 segundo
    }, 1000);
});

const promesaFallida = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("❌ Algo salió mal")); // simula un error
    }, 1000);
});

// Consumir una promesa con .then() / .catch() (forma antigua):
promesaExitosa
    .then((resultado) => console.log(resultado))  // "✅ Operación completada"
    .catch((error) => console.error(error.message));


// ============================================
// PARTE 2: ASYNC / AWAIT
// ============================================
// Es azúcar sintáctica sobre las promesas → mismo resultado, más legible.
//
// · "async" antes de una función hace que siempre devuelva una Promesa.
// · "await" pausa la ejecución de esa función hasta que la promesa se resuelva.
// · "await" solo se puede usar DENTRO de una función "async".

// Función que simula una llamada a una base de datos:
function obtenerUsuario(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === 1) {
                resolve({ id: 1, nombre: "Ana", email: "ana@email.com" });
            } else {
                reject(new Error(`Usuario con id ${id} no encontrado`));
            }
        }, 800);
    });
}

// Sin async/await (con .then):
obtenerUsuario(1)
    .then(usuario => console.log("Usuario:", usuario))
    .catch(err => console.error(err.message));

// CON async/await (mucho más legible):
async function mostrarUsuario(id) {
    const usuario = await obtenerUsuario(id); // espera el resultado
    console.log("Usuario:", usuario);
}

mostrarUsuario(1); // { id: 1, nombre: "Ana", email: "ana@email.com" }


// ============================================
// PARTE 3: TRY / CATCH — manejo de errores
// ============================================
// Cuando usás await, los errores se capturan con try/catch.
// Siempre envolvé tus llamadas async en try/catch para no crashear la app.

async function buscarUsuario(id) {
    try {
        const usuario = await obtenerUsuario(id);
        console.log("Encontrado:", usuario.nombre);
    } catch (error) {
        console.error("Error:", error.message); // captura el reject
    } finally {
        console.log("Búsqueda finalizada"); // se ejecuta SIEMPRE (éxito o error)
    }
}

buscarUsuario(1);  // "Encontrado: Ana" → "Búsqueda finalizada"
buscarUsuario(99); // "Error: Usuario con id 99 no encontrado" → "Búsqueda finalizada"


// ============================================
// PARTE 4: FETCH — llamadas a APIs reales
// ============================================
// fetch() hace peticiones HTTP. Devuelve una Promesa.
// Se usa tanto en el frontend como en el backend (Node 18+).

async function obtenerPost(id) {
    try {
        // fetch devuelve la respuesta HTTP (headers, status, etc.)
        const respuesta = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

        // Verificar que la respuesta fue exitosa (status 200-299)
        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }

        // .json() también es async → necesita await
        const datos = await respuesta.json();
        console.log("Post:", datos);
        return datos;

    } catch (error) {
        console.error("Fallo en la petición:", error.message);
    }
}

obtenerPost(1);
// { userId: 1, id: 1, title: "...", body: "..." }


// ============================================
// PARTE 5: MÚLTIPLES LLAMADAS
// ============================================

// ❌ MAL: ejecutar en serie cuando no dependen una de la otra (lento)
async function enSerie() {
    const post1 = await obtenerPost(1); // espera que termine...
    const post2 = await obtenerPost(2); // ...antes de empezar este
    console.log(post1, post2);
    // Tiempo total: 800ms + 800ms = ~1600ms
}

// ✅ BIEN: Promise.all() ejecuta en paralelo (rápido)
async function enParalelo() {
    const [post1, post2, post3] = await Promise.all([
        obtenerPost(1),
        obtenerPost(2),
        obtenerPost(3),
    ]);
    console.log(post1, post2, post3);
    // Tiempo total: ~800ms (el más lento), no 3 × 800ms
}

enParalelo();

// Promise.allSettled() → como Promise.all pero NO falla si alguna rechaza
async function tolerarErrores() {
    const resultados = await Promise.allSettled([
        obtenerPost(1),
        obtenerPost(999), // este puede fallar
        obtenerPost(3),
    ]);

    resultados.forEach((resultado, i) => {
        if (resultado.status === "fulfilled") {
            console.log(`Post ${i + 1}: OK →`, resultado.value?.title);
        } else {
            console.log(`Post ${i + 1}: FALLÓ →`, resultado.reason?.message);
        }
    });
}

tolerarErrores();


// ============================================
// RESUMEN VISUAL
// ============================================
//
//  async function ejemplo() {
//      try {
//          const resultado = await algunaPromesa();  ← espera aquí
//          console.log(resultado);                   ← continúa cuando termina
//      } catch (error) {
//          console.error(error.message);             ← si hubo error
//      }
//  }
//
//  Para varias cosas en paralelo:
//  const [a, b] = await Promise.all([promesaA(), promesaB()]);
