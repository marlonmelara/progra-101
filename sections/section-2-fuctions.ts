// EXAMPLE: Función que mantiene un contador global para numerar líneas automáticamente en cada llamada

let numberOfLines = 0;

function printLineNumber() {
  numberOfLines++;
  console.log("Línea", numberOfLines);
}

printLineNumber();
printLineNumber();
printLineNumber();
printLineNumber();

/** Output:
  Línea 1
  Línea 2
  Línea 3
  Línea 4
*/
