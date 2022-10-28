const drink = {
	color: 'brown',
	carbonated: true,
	sugar: 40,
};

// Type alias
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const tea: Drink = ['brown', false, 0]
pepsi[0] = 40; //tira error pq en la posicion 0 solo puede ir string
