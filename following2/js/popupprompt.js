//let removeOne = document.querySelector('#removeOne');

let buttonOne = document.querySelector('#buttonOne');
let emptyCart = document.querySelector('#empty');

let remove = document.getElementsByClassName("remove");

let popUp = document.querySelector('.pop_up');
let yes = document.querySelector('.popButton');
let no = document.querySelector('.popButtonNo');

popUp.style.display = "none";
emptyCart.style.visibility = "hidden";

for (var i = 0; i < remove.length; i++) {
    var button = remove[i];
    button.addEventListener('click', function (event) {
        popUp.style.display = "block";

        yes.addEventListener("click", () => {
            popUp.style.display = "none"
            var buttonClicked = event.target
            buttonClicked.parentElement.parentElement.remove();
        })
    })
}

no.addEventListener("click", () => {
    popUp.style.display = "none";
});