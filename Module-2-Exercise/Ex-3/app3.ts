/* 
    3)  Write a TypeScript function to extract unique characters from a string.
        For Example: 
        input: prominentpixel
        output: prominetixl"
 */

const str = document.getElementById("str")! as HTMLInputElement;
const btn = document.getElementById("btnFlw")!;

function extractUnique() {
	let unqChars: string[] = str.value.split("");

	const unq: string = unqChars
		.filter((ch, index) => unqChars.indexOf(ch) === index)
		.join("");

	console.log(`Longest Word From Given Input is '${unq}'`);
}

btn?.addEventListener("click", extractUnique);
