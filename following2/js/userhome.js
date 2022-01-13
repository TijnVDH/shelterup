
        console.debug("Retrieving list from API");
        fetch("https://shelterupapp.herokuapp.com/users").
        then((response) => {
            return response.json(); 
        }).then((data) => {
            console.log(data)
            displayHomeUser(data)
        })
    
    function displayHomeUser(userArray)
    {
        const usname = document.querySelector('#homeusername')
        userArray.forEach(user => {
            usname.innerHTML = usname.innerHTML + `Hey, ${user.username}!`
        })
    }