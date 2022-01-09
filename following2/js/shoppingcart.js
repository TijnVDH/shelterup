let mainelement = document.querySelector("main");

    console.debug("Retrieving list from API");
    fetch("http://localhost:8080/cart/")
    .then((response) => {
        return response.json();
    }).then((data) => {
        displayOrder(data)
    })

    function displayOrder(orderArray)
    {
        console.log(orderArray)
        const container = document.querySelector('#ordercontainer')
        orderArray.forEach(drink => {
            container.innerHTML = container.innerHTML + 
            `<div id="buttonOne">
            <button id="removeOne" class="remove">
                <i class="fas fa-times"></i>
            </button>
            <img src="images/drinksOne.png" draggable="false">
            <div class="centered">${drink.name}</div>
            <div class="price">€${drink.price}
                <span class="updatePrice"></span>
            </div>

            <div class="counter">
                <button class="increment">-</button>
                <div class="amountOrder"></div>
                <button class="addUp">+</button>
            </div>
        </div>`      
        })
    }