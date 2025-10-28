// Convertir de kilómetros a millas, sabiendo que: (1 kilómetro es igual a 0.62 millas )
// Ejemplo: 10 kilómetros = 6.21371 millas

const KM_TO_MILE_FACTOR: number = 0.621371;

function convertMItoKM(km: number) {
  let miles = km * KM_TO_MILE_FACTOR;
  if (km <= 0) {
    console.log('Tienes que poner un número positivo');
  } else console.log(`${km} kilómetros es igual a ${miles} millas`);
}

convertMItoKM(10);
