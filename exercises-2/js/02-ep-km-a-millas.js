// Convertir de kilómetros a millas, sabiendo que: (1 kilómetro es igual a 0.62 millas )
// Ejemplo: 10 kilómetros = 6.21 millas

const KM_TO_MI_RATIO = 0.62;

function convertKmToMi(km) {
  return km * KM_TO_MI_RATIO;
}

convertKmToMi(10);
