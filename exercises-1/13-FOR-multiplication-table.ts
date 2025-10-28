// STATEMENT: Generar y mostrar por consola la tabla de multiplicar de un número usando un bucle for

export let base: number = 10;
export let limit: number = 10;

console.log(`Tabla del ${base}`);

for (let i = 1; i <= limit; i++) {
  let result: number = base * i;
  console.log(`${base} x ${i} = ${result}`);
}
