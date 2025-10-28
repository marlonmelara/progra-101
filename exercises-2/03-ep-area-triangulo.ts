// Calcule el área de un triángulo rectángulo que:
// tiene una base de 10 cm y altura 5 cm

function areaCalculation(base: number, height: number) {
  let area: number = (base * height) / 2;
  if (base <= 0 || height <= 0) {
    console.log('Tienes que poner un número positivo');
  } else console.log(`El area del triángulo rectángulo es ${area}`);
}

areaCalculation(5, 10);
