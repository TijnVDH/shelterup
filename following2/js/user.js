    console.debug("Retrieving list from API");
    fetch("http://localhost:8080/users/").
    then((response) => {
        return response.json(); 
    }).then((data) => {
        console.log(data)
        displayUser(data)
    })

    function displayUser(userArray)
    {
        const usname = document.querySelector('#username')
        userArray.forEach(user => {
            usname.innerHTML = usname.innerHTML + `${user.username}`
        })
    }