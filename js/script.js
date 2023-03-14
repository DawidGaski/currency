{
    const calculateResult = (sum, currency) => {
        const rateJPY = 0.034;
        const rateUSD = 4.33;
        const rateEUR = 4.69;
        
        switch (currency) {
            case "JPY":
                return sum / rateJPY;

            case "USD":
                return sum / rateUSD;

            case "EUR":
                return sum / rateEUR;
        };
    }

    const updateResultText = (sum, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `${sum.toFixed(2) } PLN = ${result.toFixed(2)} ${currency}`;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const currencyElement = document.querySelector(".js-currency");
        const sumElement = document.querySelector(".js-sum");

        const sum = +sumElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(sum, currency);

        updateResultText(sum, result, currency);
    };


    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };
    init();
}