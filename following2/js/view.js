let mainelement = document.querySelector("main");

    console.debug("Retrieving list from API");
    fetch("https://shelterupapp.herokuapp.com/drinks")
    .then((response) => {
        return response.json();
    }).then((data) => {
        displayOrder(data)
        setInterval(() => 
        console.log(data), 500);
        setTimeout(function(){
            location = ''
          },5000)
    })

    function displayOrder(orderArray)
    {
        console.log(orderArray)
        const container = document.querySelector('#drink-container')
        orderArray.forEach(drink => {
            container.innerHTML = container.innerHTML + 
            `<div class='drinkcontainer'>
                <div class="description">
                    <h2> Order Number ${drink._id}:</h2> 
                    <p>Name: ${drink.name}</p>
                    <p>Type: ${drink.type}</p>
                    <p>Alcohol: ${drink.alcohol}</p>
                    <p>Price: ${drink.price}</p>
                    <button>Drink Served</button>
                </div>
            </div>`      
        })
    }