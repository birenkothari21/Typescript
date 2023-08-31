// type Admin = {
// 	name: string;
// 	privileges: string[];
// };
var errBag = {
    email: "Not a vlaid Email",
    username: "Invalid Username",
};
console.log(errBag);
var e1;
(function (e1) {
    e1[e1["A"] = 1] = "A";
    e1[e1["B"] = 2] = "B";
})(e1 || (e1 = {}));
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
