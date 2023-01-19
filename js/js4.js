console.log("hi")

let formElement = document.querySelector(".js-form");
let currencyElement = document.querySelector(".js-currency");
let sumElement = document.querySelector(".js-sum");
let resultElement = document.querySelector(".js-result");

let rateJPY = 0.034
let rateUSD = 4.33
let rateEUR = 4.69

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let sum = +sumElement.value;
    let currency = currencyElement.value;

    let result
    switch (currency) {
        case "JPY":
            result = sum / rateJPY;
            break

        case "USD":
            result = sum / rateUSD;
            break

        case "EUR":
            result = sum / rateEUR;
    }

    resultElement.innerHTML = `${sum.toFixed(2)
        } PLN = ${result.toFixed(2)} ${currency}`;

});
