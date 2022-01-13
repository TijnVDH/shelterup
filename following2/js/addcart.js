let mainelement = document.querySelector("main");

document.querySelector("#addToCart").addEventListener("click", () => {
    console.debug("Retrieving list from API");
    const cart=JSON.stringify({name:"Old Fashioned",type:"Cocktail", alcohol: 40, price: 8, points: 20});
    fetch("https://shelterupapp.herokuapp.com/cart", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:cart
    }).then((response) => {
        return response.json(); 
    }).then((data) => {
        console.log(data.id);
    })
})