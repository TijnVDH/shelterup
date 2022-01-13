let mainelement = document.querySelector("main");

document.querySelector("#addToCart").addEventListener("click", () => {
    console.debug("Retrieving list from API");
    const cart=JSON.stringify({name:"Pinot Grigio",type:"Wine", alcohol: 30, price: 8, points: 20});
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