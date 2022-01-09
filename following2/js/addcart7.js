let mainelement = document.querySelector("main");

document.querySelector("#addToCart").addEventListener("click", () => {
    console.debug("Retrieving list from API");
    const cart=JSON.stringify({name:"Pinot Noir",type:"Wine", alcohol: 20, price: 7, points: 20});
    fetch("http://localhost:8080/cart/", {
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