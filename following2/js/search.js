const searchBar = document.getElementById('form1')
const list = document.querySelector('#drinkContainer div')

searchBar.addEventListener('keyup', (e) => {
    const term = e.target.value.toLowerCase()
    const drinks = list.getElementsByTagName('div')
    Array.from(drinks).forEach(function(drink) {
        const title = drink.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) != -1)
        {
            drink.style.display = 'block'
        }
        else
        {
            book.style.display = 'none'
        }
    })
})