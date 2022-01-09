let mainelement = document.querySelector("main");

document.querySelector("button").addEventListener("click", () => {
    console.debug("Retrieving list from API");
    const drink=JSON.stringify({name:"Guinness Classic",type:"Beer", alcohol: 10});
    fetch("http://localhost:8080/drinks/", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:drink
    }).then((response) => {
        return response.json(); 
    }).then((data) => {
        console.log(data);
    })
})