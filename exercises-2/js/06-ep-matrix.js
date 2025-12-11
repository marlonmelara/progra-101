// Realice un algoritmo, que permita en consolo de la siguiente tabla:
/**
 * 1 2 3 4 5
 * 2 4 6 8 10
 * 3 6 9 12 15
 * 4 8 12 16 20
 * 5 10 15 20 25
 */

let array = [1, 2, 3, 4, 5];

for (let i = 1; i <= array.length; i++) {
  let line = '';
  for (let j = 1; j <= array.length; j++) {
    line += ` ${j * i}`;
  }
  console.log(line);
}
