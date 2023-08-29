/* 
    "1) Write a TypeScript function that accepts a string as a parameter and find the longest word within the string.
        For Example:
        input: Write a TypeScript function
        output: TypeScript
 */

const str = document.getElementById("str")! as HTMLInputElement;
const btn = document.getElementById("btnFlw")!;

function findLongestWord() {
	const longestWord: string = str.value
		.split(" ")
		.reduce((lw, cw) => (cw.length > lw.length ? cw : lw), "");

	console.log(`Longest Word From Given Input is '${longestWord}'`);
}

btn?.addEventListener("click", findLongestWord);
