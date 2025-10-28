export function printMultiplicationTable(base: number, limit: number = 10) {
  console.log(`Tabla del ${base}`);

  for (let i = 1; i <= limit; i++) {
    let result: number = base * i;
    console.log(`${base} x ${i} = ${result}`);
  }
}
