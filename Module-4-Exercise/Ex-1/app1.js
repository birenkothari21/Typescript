/*
    "1) Create two arrays and two objects and concatenating those two arrays and two object using spread operator.
        For example:
        arr1 = [1,2,3,4]
        arr2 = [1,2,5]
        output: [1,2,3,4,1,2,5]

        obj1 = {id:1, name:""Mohan""}
        obj2 = {age: 20, country: ""IND""}
        output: {""id"": 1, ""name"": ""Mohan"", ""age"": 20, ""country"": ""IND""}
*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var ar1 = [1, 2, 3, 4];
var ar2 = [1, 2, 5];
var ar3 = __spreadArray(__spreadArray([], ar1, true), ar2, true);
console.log("Array 1 : ", ar1);
console.log("Array 2 : ", ar2);
console.log("After Concating Two Array : ", ar3);
// ar3.push(...ar1);
// console.log("After Concating Two Array [Ar1] : ", ar1);
// console.log("After Concating Two Array [Ar2] : ", ar2);
