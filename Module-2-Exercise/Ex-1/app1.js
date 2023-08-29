/*
    "1) Write a TypeScript function that accepts a string as a parameter and find the longest word within the string.
        For Example:
        input: Write a TypeScript function
        output: TypeScript
 */
var str = document.getElementById("str");
var btn = document.getElementById("btnFlw");
function findLongestWord() {
    var longestWord = str.value
        .split(" ")
        .reduce(function (lw, cw) { return (cw.length > lw.length ? cw : lw); }, "");
    console.log("Longest Word From Given Input is '".concat(longestWord, "'"));
}
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", findLongestWord);
