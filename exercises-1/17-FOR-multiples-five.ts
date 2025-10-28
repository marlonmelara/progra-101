// Imprime los múltiplos de 5 del 1 al 50 usando for.

let base: number = 5;
let limit: number = 10;

// Por tabla de multiplicación
for (let i = 1; i <= limit; i++) {
  let result = base * i;
  console.log(`${result}`);
}

// Usando el operador modulo (%)
limit = 50;
for (let i = 1; i <= limit; i++) {
  if (i % 5 == 0) console.log(i);
}
