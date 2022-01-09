localStorage = window.localStorage;

localStorage.clear();

localStorage.setItem('OrderOne', 'Old Fasioned');
localStorage.setItem('OrderTwo', 'Mojito');

document.querySelector('#ordering').addEventListener("click", () => {
    localStorage.clear();
    console.log(localStorage)
});