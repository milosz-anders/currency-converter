let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let rateUSD = 4.04;
let rateEUR = 4.40;
let rateGBP = 5.02;
let rateCHF = 4.55;


formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;

    let result;

    switch (currency) {
        case "USD":
            result = amount / rateUSD;
            break;

        case "EUR":
            result = amount / rateEUR;
            break;

        case "GBP":
            result = amount / rateGBP;
            break;

        case "CHF":
            result = amount / rateCHF;
            break;
    }

    resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;

});