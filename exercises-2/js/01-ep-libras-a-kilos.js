// Convertir de Libras a Kilogramos (1 libra = 0.453592 kg)

const LB_TO_KG_RATIO = 0.453592;

function convertLbsToKg(pounds) {
  return pounds * LB_TO_KG_RATIO;
}

// Ejemplo: 150 libras = 68.0388 kilogramos
console.log(convertLbsToKg(150)); // 68.0388
