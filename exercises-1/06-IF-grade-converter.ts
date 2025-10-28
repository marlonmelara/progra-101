// STATEMENT: Convierte nota numérica a letra (A-F)
/**
 * A >= 90, B >= 80, C >= 70, D >= 60, F < 60
 */

export let grade: number = 81;
let gradeLetter: string;

// Determina la letra según el rango de la nota
if (grade >= 90) {
  gradeLetter = "A";
} else if (grade >= 80) {
  gradeLetter = "B";
} else if (grade >= 70) {
  gradeLetter = "C";
} else if (grade >= 60) {
  gradeLetter = "D";
} else {
  gradeLetter = "F";
}

console.log("La nota del alumno es: " + gradeLetter);
