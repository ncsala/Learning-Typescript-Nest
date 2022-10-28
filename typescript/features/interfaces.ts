interface Vehicle {
	name: string;
	year: number;
	broken: boolean;
  summary(): string;
}

const oldCivic = {
	name: 'civic',
	year: 2000,
	broken: true,
  summary(): string {
    return `Name: ${this.name}`
  } 
};

(({ name, year, broken }: Vehicle): void => {
	console.log(name, year, broken);
})(oldCivic);
