// STATEMENT: Generar y mostrar todas las tablas de multiplicar del 1 al 10 usando bucles anidados (for dentro de for)

// console.log(`Tabla del ${base}`);

// for (let i = 1; i <= limit; i++) {
//   let result: number = base * i;
//   console.log(`${base} x ${i} = ${result}`);
// }

let limitMultiplicand: number = 10;
let limitMultiplier: number = 10;

for (let base = 1; base <= limitMultiplier; base++) {
  console.log(`Tabla del ${base}`);
  for (let i = 1; i <= limitMultiplicand; i++) {
    let result = base * i;
    console.log(`${base} x ${i} = ${result}`);
  }
}
