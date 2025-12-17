// Crear una función que reciba como argumento un arreglo,
// la función debe de retornar el nombre que tenga más letras del arreglo
// , y debe de trabajar así:
// let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier'];
// let hero = largestNameOfArray( heroes );
// console.log( hero ); // Profesor Charles Xavier Tip:
// let hero = 'Strider';
// hero.length; // 7

function largestNameOfArray(names: string[]) {
  let largestName: string = names[0];
  for (let i = 1; i < names.length; i++) {
    if (names[i].length > largestName.length) {
      largestName = names[i];
    }
  }
  return largestName;
}

let heroes: string[] = [
  'Deadpool',
  'Ciclope',
  'Magneto',
  'Profesor Charles Xavier',
];

let heroe: string = largestNameOfArray(heroes);

console.log(heroe); // Profesor Charles Xavier
