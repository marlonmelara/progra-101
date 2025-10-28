// STATEMENT: Simulador de semáforo: determina la acción del conductor según el color actual
/**
 * Entrada: Colores del semáforo (🔴, 🟡, 🟢)
 * NOTE: Crear una variable para cada color
 * Salida: Acción correspondiente o error si el color es inválido
 *
 * TODO: Más adelante hacer una función para simplificar el script
 *
 */

// Definición de colores del semáforo
let red: string = "🔴";
let yellow: string = "🟡";
let green: string = "🟢";
let purple: string = "🟣";

// Color actual del semáforo
let color: string = red;

// Evaluación del color y acción correspondiente
if (color === red) {
  console.log("🛑 ALTO - Detente completamente");
} else if (color === yellow) {
  console.log("⚠️ PRECAUCIÓN - Prepárate para detenerte");
} else if (color === green) {
  console.log("✅ AVANZA - Puedes continuar");
} else {
  console.log("❌ ERROR - Color de semáforo no válido");
}
