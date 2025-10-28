// --- CONCEPT:
// 'import' permite traer funciones, objetos o variables de otros archivos.
// 'export' se usa para hacer disponibles esos elementos fuera del archivo donde se definen.

// Importamos funciones matemáticas desde el archivo helpers/math-helpers.js
import {
  divideTwoNumbers,
  moduleTwoNumbers,
  subtractTwoNumbers,
  sumTwoNumbers,
  timesTwoNumbers,
} from "../helpers/math-helpers";

// Usamos la función para sumar dos números
let total = sumTwoNumbers(2, 5);
console.log(total); // 7

// Restamos 2 al resultado anterior
let minus = subtractTwoNumbers(total, 2);
console.log(minus); // 5

// Multiplicamos el total por 2
let times = timesTwoNumbers(total, 2);
console.log(times); // 14

// Dividimos el resultado anterior entre 7
let divide = divideTwoNumbers(times, 7);
console.log(divide); // 2

// Obtenemos el módulo del total entre 2
let module = moduleTwoNumbers(total, 2);
console.log(module); // 1
