// STATEMENT: Calcular la suma de números del 1 al 10 usando while y for loops

// Suma usando while loop
export let i: number = 1;
export let totalSum: number = 0;
export const maxLimit = 10;

while (i <= maxLimit) {
  totalSum = totalSum + i;
  i++;
  console.log(i); // Muestra siguiente número
  console.log(totalSum); // Muestra suma acumulada
}

// Suma usando for loop
let accSum: number = 0;
for (let i = 1; i <= maxLimit; i++) {
  accSum = accSum + i;
  console.log(accSum); // Muestra suma acumulada
}
