class Animal {
  // Propiedades (atributos)
  name;
  age;

  // Constructor (función)
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Métodos
  makeSound() {
    console.log('El animal hace un sonido');
  }
}

// Instancia de Animal
class Dog extends Animal {
  // Propiedades
  breed;
  #numberChip;

  // Constructor
  constructor(name, age, breed, numberChip) {
    super(name, age);
    this.breed = breed;
    this.#numberChip = numberChip;
  }

  // Métodos
  // Método exclusivo de Dog
  moveTail() {
    console.log(`${this.name} mueve la cola`);
  }
  getBreed() {
    console.log(`${this.name} es de raza ${this.breed}`);
  }

  getChip() {
    return this.#numberChip;
  }

  // Método sobrescrito
  makeSound() {
    console.log(`${this.name} ladra`);
  }
}

let dog = new Dog('Snoopy', 5, 'Beagle', 'A52000');

console.log(dog.breed);
dog.moveTail();
dog.getBreed();
dog.makeSound();
dog.getChip();

dog.numberChip = 'B52000';
dog.getChip();

console.log(dog.getChip());
