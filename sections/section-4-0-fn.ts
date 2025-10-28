// EXAMPLE: Una función que suma dos valores.
function sum(a: number, b: number) {
  return a + b;
}

let total1 = sum(10, -8);
let total2 = sum(75, 25);
let minus = total2 - total1;
console.log(minus);

// EXAMPLE: Una función que saluda pasando como argumento un nombre
function greet(name: string) {
  return `Hola, ${name}`;
}

let greet1 = greet("Candy");

console.log(greet1);

let greet2 = greet("Terry");

console.log(greet2);

console.log("Y los dos se saludaron:", greet1, greet2);
