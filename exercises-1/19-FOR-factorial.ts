// Crea un programa que calcule el factorial de un número dado usando un ciclo for.

// El factorial de un número entero no negativo (n) denotado como (n!) es el producto de todos los enteros positivos desde 1 hasta n.
// Por ejemplo, el factorial de 5 (escrito como 5!) es 5 * 4 * 3 * 2 * 1 = 120

// const maxLimit = 10;
// let accSum: number = 0;
// for (let i = 1; i <= maxLimit; i++) {
//   accSum +=i;
//   console.log(accSum);
// }

let numToFactor: number = 5;
let factorial = 1;
for (let i = 1; i <= numToFactor; i++) {
  factorial *= i;
}
console.log(`Factorial de ${numToFactor} es: ${factorial}`);
