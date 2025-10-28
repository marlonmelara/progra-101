// STATEMENT: Programa para determinar preferencia de bebida según el estado de cansancio

// Variable que indica si la persona está cansada
export let isTired: boolean = false;

// Evalúa si está cansada para elegir bebida
if (isTired) {
  console.log('Quiero un cafecito! =)');
} else {
  console.log('Solo quiero agua');
}

// Confirmación adicional para cuando no está cansada
if (!isTired) {
  console.log('Solo quiero un poco de agua');
}

/**
 * PSEUDOCÓDIGO: Determinación de Bebida por Cansancio
    ENTRADA:
      - isTired: Un valor booleano que indica si la persona está cansada (VERDADERO) o no (FALSO).

    SALIDA:
      - Mensaje de texto que indica la bebida elegida ("Quiero un cafecito! =)", "Solo quiero agua", "Solo quiero un poco de agua").

  LÓGICA:
    1. INICIO
    2. DEFINIR isTired como un valor booleano.
    3. EVALUAR SI isTired es VERDADERO:
        3.1. MOSTRAR el mensaje "Quiero un cafecito! =)".
    4. EVALUAR SI NO (isTired es FALSO):
        4.1. MOSTRAR el mensaje "Solo quiero agua".
    5. EVALUAR SI isTired es FALSO:
        5.1. MOSTRAR el mensaje "Solo quiero un poco de agua".
    6. FIN
 */
