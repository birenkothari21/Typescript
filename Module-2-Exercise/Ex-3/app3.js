/*
    3)  Write a TypeScript function to extract unique characters from a string.
        For Example:
        input: prominentpixel
        output: prominetixl"
 */
var str = document.getElementById("str");
var btn = document.getElementById("btnFlw");
function extractUnique() {
    var unqChars = str.value.split("");
    var unq = unqChars
        .filter(function (ch, index) { return unqChars.indexOf(ch) === index; })
        .join("");
    console.log("Longest Word From Given Input is '".concat(unq, "'"));
}
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", extractUnique);
