class Animal2 {
  constructor(public name: string, public age: number) {}

  public makeSound(): void {
    console.log('El animal hace un sonido');
  }
}

class Dog2 extends Animal2 {
  constructor(
    name: string,
    age: number,
    public breed: string,
    private readonly numberChip: string
  ) {
    super(name, age);
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
    return console.log(`${this.name} ladra`);
  }
}

const dog4 = new Dog2('Snoopy', 5, 'Beagle', 'A52000');

console.log(`Raza: ${dog2.breed}`);
dog2.moveTail();
dog2.getBreed();
//dog2.makeSound();

//console.log(`Número de Chip (Getter): ${dog2.chipNumber}`);
