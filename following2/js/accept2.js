console.log("test");
document.querySelector("button").addEventListener("click", (event) => {    
    event.preventDefault();
    fetch("http://localhost:8080/points/").
    then((response) => {
        return response.json(); 
    }).then((data) => {
        if(data.balance<50){
            window.location.href = "/following2/redirect.html";
        } else {
            const reward=JSON.stringify({name:"Halloween Party", points: 50});
            fetch("http://localhost:8080/rewards/", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body:reward
            }).then((response) => {
                return response.json(); 
            }).then((data) => {
                window.location.href ="/following2/index.html";
            })
        }            
    
    })
    console.debug("Retrieving list from API");
   
})