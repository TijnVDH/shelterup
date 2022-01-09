let counterDisplayElem = document.querySelector('.amountOrder');
let counterMinusElem = document.querySelector('.increment');
let counterPlusElem = document.querySelector('.addUp');
let price = document.querySelectorAll('.updatePrice');
let totalPrice = document.querySelector('.total');

let money = 12;
let count = 1;

updateDisplay();

counterPlusElem.addEventListener("click", () => {
    count++;
    updateDisplay();
});

counterMinusElem.addEventListener("click", () => {
    count--;
    updateDisplay();
});

function updateDisplay() {
    counterDisplayElem.innerHTML = count;

    price.forEach(price => {
        price.innerHTML = money * count;
    });

    totalPrice.innerHTML = `€ ${money * count}`;

    if (counterDisplayElem.innerHTML <= 0) {
        popUp.style.display = "inline-block";

        counterDisplayElem.innerHTML = 1;
        price.innerHTML = 12;
        count = 1;
        money = 12;
    };
};