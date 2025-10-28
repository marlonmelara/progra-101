class Animal {
  public name: string;
  public age: number;
  public static animalCount: number = 0;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    Animal.animalCount++;
  }

  public makeSound(): void {
    console.log('El animal hace un sonido');
  }

  public static getAnimalDescription(): string {
    return 'Esta es una clase para representar animales.';
  }
}

class Dog extends Animal {
  public breed: string;
  private readonly numberChip: string;
  public static dogCount: number = 0; // NUEVO: Contador estático solo para perros.

  constructor(name: string, age: number, breed: string, numberChip: string) {
    super(name, age);
    this.breed = breed;
    this.numberChip = numberChip;
    Dog.dogCount++; // NUEVO: Incrementa el contador específico de Dog.
  }

  public moveTail(): void {
    console.log(`${this.name} mueve la cola`);
  }

  public getBreed(): void {
    console.log(`${this.name} es de raza ${this.breed}`);
  }

  public get chipNumber(): string {
    return this.numberChip;
  }

  public makeSound(): void {
    console.log(`${this.name} ladra`);
  }
}

// Creando instancias
const dog1 = new Dog('Snoopy', 5, 'Beagle', 'A52000');
const dog2 = new Dog('Pluto', 8, 'Bloodhound', 'B71000');
const dog3 = new Dog('ScoobyDoo', 8, 'Gran Danes', 'S91000');

const cat = new Animal('Garfield', 7);

// Mostrando los contadores
console.log(`Total de perros creados: ${Dog.dogCount}`); // Salida: 2
console.log(`Total de animales creados: ${Animal.animalCount}`); // Salida: 3
