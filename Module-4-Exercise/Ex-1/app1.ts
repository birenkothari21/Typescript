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

const ar1: number[] = [1, 2, 3, 4];
const ar2: number[] = [1, 2, 5];
let ar3: number[] = [...ar1, ...ar2];

console.log("Array 1 : ", ar1);
console.log("Array 2 : ", ar2);
console.log("After Concating Two Array : ", ar3);
