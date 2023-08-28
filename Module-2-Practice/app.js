"use strict";
function add(n1, n2, logRes, resStr) {
    if (logRes) {
        console.log(`${resStr} : ${n1 + n2}`);
        return;
    }
    return n1 + n2;
}
// number type...
let n1 = 12;
let n2 = 23;
// string type...
let v3 = "String";
// boolean type...
let bool = true;
// object type...
let obj = {
    name: "Test Name",
    age: 23,
};
let obj2 = {
    name: "Test Name",
    age: 22,
};
// array...
let arrStr = ["One", "Two"];
console.log("String Array : ", arrStr);
let arrNum = [1, 2, 3, 4, 5];
console.log("Number Array : ", arrNum);
let arrObj = [
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
let arrMix = [1, true, "hello", false];
console.log("Array of Union types : ", arrMix);
let tpl = [1, "ADMIN"];
tpl = [2, "Employee"];
console.log(tpl);
// literak type...
const ltrl = "test-literal";
console.log("Literal Type : ", ltrl);
// literal type with union...
let ltrl2;
ltrl2 = "hi";
console.log("Literal Type : ", ltrl2);
ltrl2 = "hello";
console.log("Literal Type : ", ltrl2);
ltrl2 = "hey";
console.log("Literal Type : ", ltrl2);
let v1 = 23;
let v2 = "some text";
