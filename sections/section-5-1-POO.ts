class Car {
  // Parámetros
  public readonly brand: string;
  public door: number;
  public fuelTank: number;
  public isRunning: boolean;
  private readonly createdAt: number;
  public horn: boolean;
  public type: string;

  // Constructor
  constructor(brand: string, type: string) {
    this.brand = brand;
    this.type = type;
    this.door = 0;
    this.fuelTank = 10;
    this.isRunning = false;
    this.createdAt = 18899;
    this.horn = false;
  }

  // Métodos
  turnOnEngine() {
    if (this.isRunning) {
      console.log('El auto ya esta encendido');
      return;
    }

    if (this.fuelTank <= 0) {
      console.log('El auto no tiene combustible');
      return;
    }

    this.isRunning = true;
    console.log('El auto esta encendido');
  }

  turnOffEngine() {
    if (this.isRunning) {
      this.isRunning = false;
      console.log('El auto esta apagado');
    }
  }

  honkOn() {
    this.horn = true;
    console.log('Beep, beep');
  }

  fillTank(gas: number) {
    // Definimos una constante para la capacidad máxima del tanque.
    const MAX_CAPACITY = 100;

    if (gas <= 0) {
      console.log('El gas tiene que ser positivo');
      return;
    }

    let newFuelTank = this.fuelTank + gas;

    if (newFuelTank >= MAX_CAPACITY) {
      this.fuelTank = MAX_CAPACITY;
      console.log('El tanque ya no se puede llenar más');
    } else {
      this.fuelTank = newFuelTank;
      console.log(
        `Has cargado ${gas} litros de gasolina, ahora tienes ${newFuelTank} litros en el tanque`
      );
    }

    // if (this.fuelTank >= 100) {
    //   console.log('El tanque ya no se puede llenar más');
    //   return;
    // } else if (this.fuelTank + gas > 100) {
    //   console.log('No puedes poner tanta gasolina');
    //   return;
    // } else {
    //   let gasActual = this.fuelTank + gas;
    //   console.log(`Has llenado ${gas} de gasolina, ahora tienes ${gasActual}`);
    // }
  }

  // Getter
  // public get fuelTank(): number {
  //   return this.fuelTank;
  // }
}

let myCar = new Car('Mazda', 'Z');

myCar.fillTank(40);
console.log(`Ahora el tanque tiene ${myCar.fuelTank}`);
myCar.fillTank(125);
console.log(`Ahora el tanque tiene ${myCar.fuelTank}`);
// myCar.brand = 'Honda'; // Esto causa un error de compilación por ser 'readonly'
console.log(myCar.fuelTank);

class CarFixed {
  // Ahora 'doorCount' es privado: inaccesible desde fuera de la clase.
  private doorCount: number;

  constructor(initialDoors: number) {
    this.doorCount = initialDoors;
  }

  // Getter público para consultar el valor de forma controlada.
  public get doors(): number {
    return this.doorCount;
  }

  // Método público para "abrir" la puerta (simulando una acción).
  public openDoor(): void {
    console.log(`Abriendo ${this.doorCount} puertas.`);
    // Lógica adicional, como cambiar el estado de las puertas.
  }

  // Método público para "cerrar" la puerta.
  public closeDoor(): void {
    console.log(`Cerrando ${this.doorCount} puertas.`);
  }
}

// Ahora, si intentas:
let car = new CarFixed(4);
console.log(car.doors); // 4

// car.doorCount = 2; // ERROR de compilación: La propiedad es privada.
