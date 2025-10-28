// EXAMPLE: Uso de continue para saltar una iteración específica en un bucle (el segundo break nunca se ejecuta)

for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);

  if (i === 5) {
    break;
  }
}
