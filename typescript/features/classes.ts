class Vehicle {
	// color: string

	// constructor(color: string) {
	//   this.color = color;
	// }

	// El constructor de abajo es equivalente a las lineas de arriba
	constructor(public color: string) {}

	// public drive(): void {
	//   console.log('chugga chugga')
	// }

	// Si es protected se puede llamar tanto desde la propia clase,
	// como desde una clase hija.
	protected honk(): void {
		console.log('beep');
	}
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

// "Heredar" de otra clase madre
class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  // Se pueden sobreescribir metodos
  // No se puede cambiar los modificadores
  // o sea si es public en el madre, no puede ser private en el child
  private drive(): void {
    console.log('vroom')
  }

  startDrivingProcess(): void {
    this.drive()
    this.honk()
  }
}

const ford = new Car(5, 'blue')
ford.startDrivingProcess()
// ford.honk() //no se puede acceder desde afuera si es private o protected
