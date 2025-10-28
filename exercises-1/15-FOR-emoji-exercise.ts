// STATEMENT: Crear un patrón triangular incremental usando bucles anidados, donde cada línea tiene más elementos que la anterior

let emoji: string = "🌿";
let lineLimit: number = 6;

for (let i = 1; i <= lineLimit; i++) {
  let line: string = "";
  for (let j = 1; j <= i; j++) {
    line = line + emoji;
  }
  console.log(line);
}
