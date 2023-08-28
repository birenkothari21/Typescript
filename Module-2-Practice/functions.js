"use strict";
function calc(n1 = 0, n2 = 20, dr) {
    dr(n1 + n2);
}
function displayRes(res) {
    console.log("Result : ", res);
}
// console.log(calc(10, 20));
calc(10, 30, displayRes);
calc(30, undefined, displayRes);
calc(30, undefined, displayRes);
calc(30, undefined, displayRes);
