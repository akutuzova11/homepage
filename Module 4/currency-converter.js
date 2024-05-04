const formElement = document.querySelector(".js-form");
const amountElement = document.querySelector(".js-amount");
const currencyElement = document.querySelector(".js-currency");
const outcomeElement = document.querySelector(".js-outcome");
formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const amount = amountElement.value;
    const usd = amount * 0.2482;
    const eur = amount * 0.2302;
    const chf = amount * 0.2167;
    const gbp = amount * 0.1965;

    switch (currencyElement.value) {
        case "usd": outcomeElement.innerText = `${usd.toFixed(2)} $`;
            break;
        case "eur": outcomeElement.innerText = `${eur.toFixed(2)} €`;
            break;
        case "chf": outcomeElement.innerText = `${chf.toFixed(2)} ₣`;
            break;
        case "gbp": outcomeElement.innerText = `${gbp.toFixed(2)} £`;
            break;
    }
});