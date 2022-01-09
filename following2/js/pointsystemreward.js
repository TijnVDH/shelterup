let mainelement = document.querySelector("main");


    console.debug("Retrieving list from API");
    fetch("http://localhost:8080/points/").
    then((response) => {
        return response.json(); 
    }).then((data) => {
        const notenough = document.querySelector('#notavailable')
        notenough.innerHTML = notenough.innerHTML + `${data.balance} / ???`

        const notenough2 = document.querySelector('#notavailable2')
        notenough2.innerHTML = notenough2.innerHTML + `${data.balance} / ???`

        const notenough3 = document.querySelector('#notavailable3')
        notenough3.innerHTML = notenough3.innerHTML + `${data.balance} / ???`

        const notenough4 = document.querySelector('#notavailable4')
        notenough4.innerHTML = notenough4.innerHTML + `${data.balance} / ???`

                const rewardscontainer = document.querySelector('#rewardsbalance')
                rewardscontainer.innerHTML = rewardscontainer.innerHTML + `${data.balance}`
    
    })