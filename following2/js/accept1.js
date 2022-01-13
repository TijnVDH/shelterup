console.log("test");
document.querySelector("button").addEventListener("click", (event) => {    
    event.preventDefault();
    fetch("https://shelterupapp.herokuapp.com/points").
    then((response) => {
        return response.json(); 
    }).then((data) => {
        if(data.balance<45){
            window.location.href = "/following2/redirect.html";
        } else {
            const reward=JSON.stringify({name:"Halloween Party", points: 45});
            fetch("https://shelterupapp.herokuapp.com/rewards", {
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