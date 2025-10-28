// Cotrol de flujo: While

console.log("-- Con ciclo While");

let numLines: number = 1;
while (numLines <= 5) {
  console.log("Línea " + numLines);
  numLines++;
}

console.log("-- Con ciclo For");

for (let lines = 1; lines <= 5; lines++) {
  console.log("Línea " + lines);
}
