let mainelement = document.querySelector("main");

document.querySelector("button").addEventListener("click", () => {
    console.debug("Retrieving list from API");
    const drink=JSON.stringify({name:"Guinness Classic",type:"Beer", alcohol: 10, price: 6, points: 15});
    fetch("https://shelterupapp.herokuapp.com/drinks", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:drink
    }).then((response) => {
        return response.json(); 
    }).then((data) => {
        console.log(data.id);
        var parametersJson = {
            "size": 300, // Size of Qr Code
            "backgroundColor": "38-38-38", // Background Color Of Qr Code (In RGB)
            "qrColor": "255-255-255", // Color of Qr Code (In RGB)
            "padding": 2, // Padding 
        };
        
        var parameters;
        var img = document.querySelector("#qrCode");
        parameters = `size=${parametersJson.size}&bgcolor=${parametersJson.backgroundColor}&color=${parametersJson.qrColor}&qzone=${parametersJson.padding}&data=${data.id}` // Stitch Together all Paramenters
        img.src = `https://api.qrserver.com/v1/create-qr-code/?${parameters}` // Set Image URL To Link
    })
})