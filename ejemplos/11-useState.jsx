// ============================================
//  useState — HOOK DE REACT
// ============================================
// IMPORTANTE: useState NO es JavaScript puro.
// Es un hook de React. Solo funciona dentro de componentes de React.
// Este archivo tiene extensión .jsx (no .js) y no se puede correr con Node.
//
// ¿Qué es un "estado"?
// El estado es una variable especial que, al cambiar, hace que el componente
// se vuelva a renderizar (actualice lo que se ve en pantalla).
// Una variable común con "let" NO haría eso.

import { useState } from 'react';

// ============================================
// SINTAXIS BÁSICA
// ============================================
// const [valor, setValor] = useState(valorInicial);
//
//  · valor     → el estado actual (lo que "está guardado")
//  · setValor  → función para CAMBIAR el estado (nunca modifiques "valor" directamente)
//  · useState  → recibe el valor inicial


// ============================================
// EJEMPLO 1: Contador simple
// ============================================
function Contador() {
    const [cuenta, setCuenta] = useState(0); // empieza en 0

    return (
        <div>
            <p>Contador: {cuenta}</p>
            <button onClick={() => setCuenta(cuenta + 1)}>Sumar</button>
            <button onClick={() => setCuenta(cuenta - 1)}>Restar</button>
            <button onClick={() => setCuenta(0)}>Resetear</button>
        </div>
    );
}

// ============================================
// EJEMPLO 2: Input controlado (texto)
// ============================================
function FormularioNombre() {
    const [nombre, setNombre] = useState(""); // empieza vacío

    return (
        <div>
            {/* El valor del input siempre refleja el estado */}
            <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)} // actualiza con cada tecla
                placeholder="Escribí tu nombre"
            />
            <p>Hola, {nombre || "desconocido"}!</p>
        </div>
    );
}

// ============================================
// EJEMPLO 3: Estado booleano (toggle)
// ============================================
function MostrarOcultar() {
    const [visible, setVisible] = useState(true);

    return (
        <div>
            <button onClick={() => setVisible(!visible)}>
                {visible ? "Ocultar" : "Mostrar"}
            </button>
            {visible && <p>Este texto aparece y desaparece 👋</p>}
        </div>
    );
}

// ============================================
// EJEMPLO 4: Estado con objeto
// ============================================
function FormularioUsuario() {
    const [usuario, setUsuario] = useState({
        nombre: "",
        edad: "",
    });

    // Al actualizar un objeto, hay que copiar el estado anterior con spread (...)
    // para no perder las otras propiedades
    const actualizarCampo = (campo, valor) => {
        setUsuario({ ...usuario, [campo]: valor });
    };

    return (
        <div>
            <input
                value={usuario.nombre}
                onChange={(e) => actualizarCampo("nombre", e.target.value)}
                placeholder="Nombre"
            />
            <input
                value={usuario.edad}
                onChange={(e) => actualizarCampo("edad", e.target.value)}
                placeholder="Edad"
                type="number"
            />
            <p>Nombre: {usuario.nombre} | Edad: {usuario.edad}</p>
        </div>
    );
}

// ============================================
// EJEMPLO 5: Estado con array (lista de tareas)
// ============================================
function ListaTareas() {
    const [tareas, setTareas] = useState(["Estudiar JS", "Hacer ejercicios"]);
    const [nueva, setNueva] = useState("");

    const agregarTarea = () => {
        if (!nueva.trim()) return; // no agregar vacíos
        setTareas([...tareas, nueva]); // copia el array y agrega el nuevo item
        setNueva(""); // limpia el input
    };

    const eliminarTarea = (indice) => {
        setTareas(tareas.filter((_, i) => i !== indice)); // filtra el elemento por índice
    };

    return (
        <div>
            <input
                value={nueva}
                onChange={(e) => setNueva(e.target.value)}
                placeholder="Nueva tarea"
            />
            <button onClick={agregarTarea}>Agregar</button>

            <ul>
                {tareas.map((tarea, i) => (
                    <li key={i}>
                        {tarea}
                        <button onClick={() => eliminarTarea(i)}>❌</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

// ============================================
// REGLAS IMPORTANTES DE useState
// ============================================
// ✅ Siempre usá la función set para cambiar el estado (setCuenta, setNombre, etc.)
// ✅ Nunca mutés el estado directamente: NO hagas "cuenta = cuenta + 1"
// ✅ Para objetos y arrays: siempre copiá con spread (...) antes de modificar
// ✅ solo se puede llamar dentro de un componente de React (no en funciones comunes)
// ✅ El componente se re-renderiza cada vez que el estado cambia
