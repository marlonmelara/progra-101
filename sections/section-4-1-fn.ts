// EXAMPLE: Una función que saluda pasando como argumento dos nombres

export function greet(name1: string = "Mundo", name2: string = "World") {
  console.log(`Hola ${name1}`);
  console.log(`Hola ${name2}`);
}

let myPet = "Jiji";
let myName = "Sofi";

greet(undefined, myName);
