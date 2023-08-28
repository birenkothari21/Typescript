function add(
	n1: number,
	n2: number,
	logRes: boolean,
	resStr: string
): number | undefined {
	if (logRes) {
		console.log(`${resStr} : ${n1 + n2}`);
		return;
	}
	return n1 + n2;
}

// number type...
let n1: number = 12;
let n2 = 23;

// string type...
let v3: string = "String";

// boolean type...
let bool: boolean = true;

// object type...
let obj: {
	name: string;
	age: number;
} = {
	name: "Test Name",
	age: 23,
};

let obj2 = {
	name: "Test Name",
	age: 22,
};

// array...
let arrStr: string[] = ["One", "Two"];
console.log("String Array : ", arrStr);

let arrNum: number[] = [1, 2, 3, 4, 5];
console.log("Number Array : ", arrNum);

let arrObj: {
	name: string;
	age: number;
	clg: string;
	cgpa: number;
	backlog?: number;
}[] = [
	{
		name: "A",
		age: 23,
		clg: "ABC",
		cgpa: 8,
		backlog: 2,
	},
	{
		name: "B",
		age: 25,
		clg: "XYD",
		cgpa: 8,
	},
	{
		name: "C",
		age: 34,
		clg: "df",
		cgpa: 8,
	},
	{
		name: "C",
		age: 34,
		clg: "df",
		cgpa: 8,
	},
];

arrObj.push({
	name: "D",
	age: 22,
	clg: "Auf",
	cgpa: 8,
});

console.log("Array of Objects : ", arrObj);

let arrMix: (string | number | boolean)[] = [1, true, "hello", false];
console.log("Array of Union types : ", arrMix);

let tpl: [number, string] = [1, "ADMIN"];
tpl = [2, "Employee"];
console.log(tpl);

// literak type...
const ltrl: "test-literal" = "test-literal";
console.log("Literal Type : ", ltrl);

// literal type with union...
let ltrl2: "hi" | "hello" | "hey";

ltrl2 = "hi";
console.log("Literal Type : ", ltrl2);

ltrl2 = "hello";
console.log("Literal Type : ", ltrl2);

ltrl2 = "hey";
console.log("Literal Type : ", ltrl2);

// custom type...
type custom = number | string;
let v1: custom = 23;
let v2: custom = "some text";
