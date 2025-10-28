// STATEMENT: Determinar y mostrar el nombre del día de la semana basado en un número del 1 al 7. (Sin validación de rango de días)

export let weekDay: number = -20;

if (weekDay >= 1 && weekDay <= 7) {
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
} else {
  console.log("Día de la semana no válido.");
}
