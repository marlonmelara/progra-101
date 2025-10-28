// STATEMENT: Determinar y mostrar el nombre del día de la semana basado en un número del 1 al 7.

// NOTE: Con validación de rango de días

let weekDay: number = 7;

// Evaluar si el número corresponde
if (weekDay < 1 || weekDay > 7) {
  throw new Error("Día de la semana no válido.");
}

switch (weekDay) {
  case 1:
    console.log("Es lunes");
    break;
  case 2:
    console.log("Es martes");
    break;
  case 3:
    console.log("Es miércoles");
    break;
  case 4:
    console.log("Es jueves");
    break;
  case 5:
    console.log("Es viernes");
    break;
  case 6:
    console.log("Es sábado");
    break;
  default:
    console.log("Es domingo");
}
