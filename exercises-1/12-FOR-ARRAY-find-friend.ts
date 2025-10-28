// STATEMENT: Recorrer un array para buscar un elemento específico y detener la búsqueda cuando se encuentre usando break

const fila = ["Ana", "Juan", "Sofia", "Carlos", "Marta", "Pedro"];

for (let i = 0; i < fila.length; i++) {
  const persona = fila[i];
  console.log(`Revisando a: ${persona}`);

  if (persona === "Carlos") {
    console.log(`¡Encontré a ${persona}! 🎉`);
    break; // <- Salimos del bucle aquí
  }
}

console.log("Ya no estoy en la fila.");

// Formas de escribir Strings

let language = "JavaScript";

// 1. Usando comillas dobles
console.log("¡Hola, Mundo! (2+2)");

// 2. Usando comillas simples
console.log("¡Hola, Mundo!");

// 3. Usando backticks
console.log(`¡Hola, ${language}! ${28}`);
