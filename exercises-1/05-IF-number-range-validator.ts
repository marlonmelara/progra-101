// STATEMENT: Programa para validar si un número está dentro del rango de 1 a 100

// Número a validar
export let number: number = 100;

// Verificación si el número está en el rango válido (1-100)
if (number > 0 && number <= 100) {
  console.log("El número esta en el rango de 1 a 100");
} else {
  console.log("El número no esta en el rango de 1 a 100.");
}
