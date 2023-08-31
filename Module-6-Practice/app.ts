// type Admin = {
// 	name: string;
// 	privileges: string[];
// };

// type Employee = {
// 	name: string;
// 	startDate: Date;
// };

// type ElevatedEmployee = Admin & Employee;

// const e1: ElevatedEmployee = {
// 	name: "Biren",
// 	privileges: ["development"],
// 	startDate: new Date(),
// };

// console.log(e1);

// type Combinable = string | number;
// type Numeric = number | boolean;

// type Intersection = Combinable & Numeric;

// const val: Intersection = 0;
// const val2: Combinable = 12;

// type ukemp = Employee | Admin;

// function printEmpUnKn(emp: ukemp) {
// 	console.log(emp.name);
// 	if ("privileges" in emp) {
// 		console.log("Privileges : ", emp.privileges);
// 	} else {
// 		console.log("Start Date : ", emp.startDate);
// 	}
// }

// const e2: Admin = {
// 	name: "Biren",
// 	privileges: ["servercreation"],
// };

// const e3: Employee = {
// 	name: "Raj",
// 	startDate: new Date(),
// };

// printEmpUnKn(e2);
// printEmpUnKn(e3);

// class Car {
// 	driivng() {
// 		console.log("Driving...");
// 	}
// }

// class Truck {
// 	driivng() {
// 		console.log("Driving...");
// 	}

// 	loadCargo() {
// 		console.log("Driving Cargo Truck...");
// 	}
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(v: Vehicle) {
// 	v.driivng();
// 	if (v instanceof Truck) {
// 		v.loadCargo();
// 	}
// }

// useVehicle(v1);
// useVehicle(v2);

// interface Bird {
// 	type: "Bird";
// 	fs: number;
// }

// interface Horse {
// 	type: "Horse";
// 	rs: number;
// }

// type Animal = Bird | Horse;

// function desc(animal: Animal) {
// 	let speed;
// 	switch (animal.type) {
// 		case "Bird":
// 			speed = animal.fs;
// 			break;
// 		case "Horse":
// 			speed = animal.rs;
// 			break;
// 	}
// 	console.log(animal.type, speed);
// }

// desc({ type: "Bird", fs: 100 });
// desc({ type: "Horse", rs: 120 });

interface ErrStruct {
	[prop: string]: string;
}

const errBag: ErrStruct = {
	email: "Not a vlaid Email",
	username: "Invalid Username",
};

console.log(errBag);

enum e1 {
	A = 1,
	B = 2,
}

console.log(e1);

// type ct = number | string;

// function add(a: string, b: string): string;
// function add(a: number, b: string): string;
// function add(a: string, b: number): string;
// function add(a: number, b: number): number;
// function add(a: ct, b: ct) {
// 	if (typeof a === "string" || typeof b === "string") {
// 		return a.toString() + b.toString();
// 	}
// 	return a + b;
// }

// console.log(add(10, 20));
// console.log(add(10, "20"));
// console.log(add("10", 10));
// console.log(add("10", "10"));

// const userData = {
// 	id: "u1",
// 	name: "John",
// 	job: {
// 		title: "CEO",
// 		desc: "My own company",
// 	},
// };

// console.log(userData?.id);
// console.log(userData?.name);
// console.log(userData?.job?.title);
// console.log(userData?.job?.desc);

// const inpt = null;
// const data = inpt ?? "defualt";
// console.log(data);

// interface customKeys {
// 	[prop: string]: string;
// }
