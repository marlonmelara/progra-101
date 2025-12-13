// Crear una función que reciba 3 argumentos numéricos ( a, b, c), la función se debe de llamar max, la función debe de determinar cuál es el mayor de los 3 y retornarlo... la función debe de trabajar así:
// let maxValue = max( 5, 2, 6);
// console.log( maxValue ); // 6

// function max(a: number, b: number, c: number) recibe solo 3 argumentos
// let numbers: number[] = [a, b, c]; arreglo manual

function max(...numbers: number[]) {
  let maxNumber: number = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] >= maxNumber) {
      maxNumber = numbers[i];
    }
  }
  return maxNumber;
}

let maxValue = max(5, 2, 6);
console.log(maxValue);
