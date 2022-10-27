const carMakers = ['ford', 'toyota', 'chevy'];

const dates = [new Date(), new Date()];

const cardsByMake = [['f150'], ['corolla'], ['camaro']];

// Help with inference when extractinc values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);

// Help with 'map', 'reduce', 'forEach', etc
// Como sabe que lo que recorrera sera una string, cuando escribis car.
// -> te da sugerencias de metodos de string.
carMakers.map((car: string): string => {
	return car.toUpperCase();
});

// Flexible types
const importantDates: (string | Date)[] = [new Date(), '2030-10-10'];
importantDates.push('2030-10-15');
importantDates.push(new Date());
importantDates.push(15);
