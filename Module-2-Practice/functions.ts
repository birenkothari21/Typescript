function calc(
	n1: number | undefined = 0,
	n2: number | undefined = 20,
	dr: (res: number) => void
): void {
	dr(n1 + n2);
}

function displayRes(res: number) {
	console.log("Result : ", res);
}

// console.log(calc(10, 20));
calc(10, 30, displayRes);
calc(30, undefined, displayRes);
calc(30, undefined, displayRes);
calc(30, undefined, displayRes);
