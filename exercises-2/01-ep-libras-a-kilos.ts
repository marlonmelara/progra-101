// Convertir de Libras a Kilogramos. ( 1 libra = 0.453592 Kilogramos )
// Ejemplo: 150 libras = 68.0388 kilogramos

const POUND_TO_KG_FACTOR: number = 0.453592;

function convertLBStoKG(pounds: number) {
  let kilograms = pounds * POUND_TO_KG_FACTOR;
  if (pounds <= 0) {
    console.log('Tienes que poner un número positivo');
  } else console.log(`${pounds} libras es igual a ${kilograms} kilos`);
}

convertLBStoKG(-150);
