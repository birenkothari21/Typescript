"use strict";
const currency = document.getElementById("currency");
const numOfCurrency = document.getElementById("numOfCurrency");
const addCurrencyForm = document.getElementById("addCurrencyForm");
const givenAmount = document.getElementById("givenAmount");
const actualAmount = document.getElementById("actualAmount");
const calcChangeForm = document.getElementById("calcChangeForm");
const currTbl = document.querySelector("#currencyTable #currTbl tbody");
const rtnCurrTbl = document.querySelector("#rtnCurrTable #currTbl tbody");
const currencyTable = [];
// Function of Creating Tables For Currency...
function generateCurrencyTable(table, ct) {
    table.textContent = "";
    let sum = 0;
    ct.forEach((item) => {
        const tr = document.createElement("tr");
        let key;
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
function validateInput(input) {
    if (isNaN(input) || input <= 0) {
        return false;
    }
    return true;
}
// 	Event-Handler Function to Add Currency...
function addCurrencyHandler() {
    const enteredCurrency = parseInt(currency.value);
    const enteredNumOfCurrency = parseInt(numOfCurrency.value);
    if (!validateInput(enteredCurrency) ||
        !validateInput(enteredNumOfCurrency)) {
        alert("Pleas, Enter Valid Currency...");
        return;
    }
    if (currencyTable.length === 0) {
        const newCurrency = {
            currency: enteredCurrency,
            numOfCurrency: enteredNumOfCurrency,
            totalValue: enteredCurrency * enteredNumOfCurrency,
        };
        currencyTable.push(newCurrency);
    }
    else {
        let flag = false;
        for (const curr of currencyTable) {
            if (curr.currency === enteredCurrency) {
                curr.numOfCurrency += enteredNumOfCurrency;
                curr.totalValue += enteredCurrency * enteredNumOfCurrency;
                flag = true;
                break;
            }
        }
        if (!flag) {
            const newCurrency = {
                currency: enteredCurrency,
                numOfCurrency: enteredNumOfCurrency,
                totalValue: enteredCurrency * enteredNumOfCurrency,
            };
            currencyTable.push(newCurrency);
        }
    }
    currencyTable.sort((a, b) => a.currency < b.currency ? 1 : a.currency === b.currency ? 0 : -1);
    generateCurrencyTable(currTbl, currencyTable);
}
// 	Helper-Function to find all possible currencies combinations...
function findCurrencyCombination(currencies, rtnAmount) {
    const combinations = [];
    function generateCombinations(currentCombination, remainingAmount, currIndex) {
        if (remainingAmount === 0) {
            combinations.push(currentCombination);
            return;
        }
        if (remainingAmount < 0 || currIndex >= currencies.length) {
            return;
        }
        const currentCurr = currencies[currIndex];
        for (let qty = 0; qty <= currentCurr.numOfCurrency; qty++) {
            generateCombinations(currentCombination.concat({
                currency: currentCurr.currency,
                numOfCurrency: qty,
                totalValue: currentCurr.currency * qty,
            }), remainingAmount - currentCurr.currency * qty, currIndex + 1);
        }
    }
    generateCombinations([], rtnAmount, 0);
    return combinations;
}
//	Event-Handler Function for Calculating Change...
function calcChangeHandler() {
    const enteredGivenAmount = parseInt(givenAmount.value);
    const enteredActualAmount = parseInt(actualAmount.value);
    let returnAmount = enteredGivenAmount - enteredActualAmount;
    let rctbl = [];
    if (!validateInput(enteredGivenAmount) ||
        !validateInput(enteredActualAmount)) {
        alert("Pleas, Enter Valid Currency...");
        return;
    }
    let rtn = findCurrencyCombination(currencyTable, returnAmount);
    console.log("Combinations : ", rtn);
    if (rtn.length > 0) {
        let minCurr = 0;
        let minCurrInd = 0;
        for (let i = 0; i < rtn.length; i++) {
            let sumCurr = rtn[i].reduce((p, c) => {
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
    }
    else {
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
