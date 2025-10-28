export function printMultiplicationTable(base: number, limit: number = 10) {
  console.log(`Tabla del ${base}`);

  for (let i = 1; i <= limit; i++) {
    let result: number = base * i;
    console.log(`${base} x ${i} = ${result}`);
  }
}

// printMultiplicationTable(5)

let resultTimes = printMultiplicationTable(2);
console.log(resultTimes);

let array = ["2 x 1 = 2", "2 x 2 = 4"];

console.log(array);

for (let prod of array) {
  console.log(prod);
}
