// EXAMPLE: Bucle do-while que se ejecuta al menos una vez, incluso cuando la condición inicial es falsa

export let gasTank = -10;

do {
  console.log("Gasolina restante", gasTank);

  gasTank--;
} while (gasTank > 0);

console.log("Ya no tiene gasolina");
