/**
 * STATEMENT: Crea un programa que reciba una nacionalidad y una edad, y muestre si la persona es mayor o menor de edad. Personaliza el mensaje según si es de El Salvador, Chile u otro país.
 *
 * NOTE: Usa switch y if
 *
 * TODO: Más adelante hacer una función para simplificar el script
 */

/** Output esperado:
 * "Es de nacionalidad _________ y es mayor/menor de edad"
 * "¡Bienvenido!"
 */

let country: string = "Chile";
let age: number = 18;

switch (country) {
  case "Chile":
    if (age >= 18) {
      console.log("Es de nacionalidad chilena y es mayor de edad");
    } else {
      console.log("Es de nacionalidad chilena y es menor de edad");
    }
    break;
  case "El Salvador":
    if (age >= 18) {
      console.log("Es de nacionalidad salvadoreña y es mayor de edad");
    } else {
      console.log("Es de nacionalidad salvadoreña y es menor de edad");
    }
    break;
  default:
    if (age >= 18) {
      console.log("Es de nacionalidad desconocida y es mayor de edad");
    } else {
      console.log("Es de nacionalidad desconocida y es menor de edad");
    }
    break;
}
console.log("¡Bienvenido!");
