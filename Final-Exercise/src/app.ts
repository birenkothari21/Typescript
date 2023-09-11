type currenctType = {
	currency: number;
	numOfCurrency: number;
	totalValue: number;
};

const currency = document.getElementById("currency")! as HTMLInputElement;
const numOfCurrency = document.getElementById(
	"numOfCurrency"
)! as HTMLInputElement;
const addCurrencyForm = document.getElementById("addCurrencyForm")!;

const givenAmount = document.getElementById("givenAmount")! as HTMLInputElement;
const actualAmount = document.getElementById(
	"actualAmount"
)! as HTMLInputElement;
const calcChangeForm = document.getElementById("calcChangeForm")!;

const currTbl = document.querySelector(
	"#currencyTable #currTbl tbody"
)! as HTMLTableElement;
const rtnCurrTbl = document.querySelector(
	"#rtnCurrTable #currTbl tbody"
)! as HTMLTableElement;

const currencyTable: currenctType[] = [];

// Function of Creating Tables For Currency...
function generateCurrencyTable(
	table: HTMLTableElement,
	ct: currenctType[]
): void {
	table.textContent = "";
	let sum = 0;
	ct.forEach((item) => {
		const tr = document.createElement("tr");
		let key: keyof typeof item;

		for (key in item) {
			const td = document.createElement("td");
			td.style.textAlign = "right";
			td.textContent = item[key].toString();
			tr.append(td);
			if (key === "totalValue") {
				sum += item[key];
			}
		}
		table.append(tr);
	});
	const trTotal = document.createElement("tr");
	const tdTotal = document.createElement("td");
	tdTotal.style.textAlign = "right";
	tdTotal.colSpan = 3;
	tdTotal.textContent = `Total : ${sum}`;
	trTotal.append(tdTotal);
	table.append(trTotal);
	console.log(ct);
}

//	Function to Validate User Inputs...
function validateInput(input: number): boolean {
	if (isNaN(input) || input <= 0) {
		return false;
	}
	return true;
}

// 	Event-Handler Function to Add Currency...
function addCurrencyHandler(): void {
	const enteredCurrency: number = parseInt(currency.value);
	const enteredNumOfCurrency: number = parseInt(numOfCurrency.value);

	if (
		!validateInput(enteredCurrency) ||
		!validateInput(enteredNumOfCurrency)
	) {
		alert("Pleas, Enter Valid Currency...");
		return;
	}

	if (currencyTable.length === 0) {
		const newCurrency: currenctType = {
			currency: enteredCurrency,
			numOfCurrency: enteredNumOfCurrency,
			totalValue: enteredCurrency * enteredNumOfCurrency,
		};

		currencyTable.push(newCurrency);
	} else {
		let flag: boolean = false;
		for (const curr of currencyTable) {
			if (curr.currency === enteredCurrency) {
				curr.numOfCurrency += enteredNumOfCurrency;
				curr.totalValue += enteredCurrency * enteredNumOfCurrency;
				flag = true;
				break;
			}
		}

		if (!flag) {
			const newCurrency: currenctType = {
				currency: enteredCurrency,
				numOfCurrency: enteredNumOfCurrency,
				totalValue: enteredCurrency * enteredNumOfCurrency,
			};

			currencyTable.push(newCurrency);
		}
	}

	currencyTable.sort((a, b) =>
		a.currency < b.currency ? 1 : a.currency === b.currency ? 0 : -1
	);

	generateCurrencyTable(currTbl, currencyTable);
}

// 	Helper-Function to find all possible currencies combinations...
function findCurrencyCombination(
	currencies: currenctType[],
	rtnAmount: number
): currenctType[][] {
	const combinations: currenctType[][] = [];

	function generateCombinations(
		currentCombination: currenctType[],
		remainingAmount: number,
		currIndex: number
	) {
		if (remainingAmount === 0) {
			combinations.push(currentCombination);
			return;
		}

		if (remainingAmount < 0 || currIndex >= currencies.length) {
			return;
		}

		const currentCurr = currencies[currIndex];

		for (let qty = 0; qty <= currentCurr.numOfCurrency; qty++) {
			generateCombinations(
				currentCombination.concat({
					currency: currentCurr.currency,
					numOfCurrency: qty,
					totalValue: currentCurr.currency * qty,
				}),
				remainingAmount - currentCurr.currency * qty,
				currIndex + 1
			);
		}
	}

	generateCombinations([], rtnAmount, 0);

	return combinations;
}

//	Event-Handler Function for Calculating Change...
function calcChangeHandler(): void {
	const enteredGivenAmount: number = parseInt(givenAmount.value);
	const enteredActualAmount: number = parseInt(actualAmount.value);

	let returnAmount: number = enteredGivenAmount - enteredActualAmount;
	let rctbl: currenctType[] = [];

	if (
		!validateInput(enteredGivenAmount) ||
		!validateInput(enteredActualAmount)
	) {
		alert("Pleas, Enter Valid Currency...");
		return;
	}

	let rtn: currenctType[][] = findCurrencyCombination(
		currencyTable,
		returnAmount
	);
	console.log("Combinations : ", rtn);

	if (rtn.length > 0) {
		let minCurr: number = 0;
		let minCurrInd: number = 0;
		for (let i = 0; i < rtn.length; i++) {
			let sumCurr: number = rtn[i].reduce((p, c) => {
				return (p += c.numOfCurrency);
			}, 0);

			if (sumCurr < minCurr || i === 0) {
				minCurr = sumCurr;
				minCurrInd = i;
			}
		}

		rtn[minCurrInd].forEach((ele) => {
			if (ele.numOfCurrency > 0) {
				rctbl.push(ele);

				currencyTable.forEach((ec) => {
					if (ec.currency === ele.currency) {
						ec.numOfCurrency -= ele.numOfCurrency;
						ec.totalValue = ec.currency * ec.numOfCurrency;
					}
				});
			}
		});

		generateCurrencyTable(rtnCurrTbl, rctbl);
		generateCurrencyTable(currTbl, currencyTable);
	} else {
		alert("Sorry, We Have Not Enough Changes...");
	}
}

// 	Adding Event-Listner for Adding Currencies...
addCurrencyForm.addEventListener("submit", (event) => {
	event.preventDefault();
	addCurrencyHandler();
});

// 	Adding Event-Listner for Calculating Change...
calcChangeForm.addEventListener("submit", (event) => {
	event.preventDefault();
	calcChangeHandler();
});
