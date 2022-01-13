let mainelement = document.querySelector("main");

document.querySelector("#addToCart").addEventListener("click", () => {
    console.debug("Retrieving list from API");
    const cart=JSON.stringify({name:"Guinness Classic",type:"Beer", alcohol: 10, price: 6, points: 15});
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