let mainelement = document.querySelector("main");


    console.debug("Retrieving list from API");
    fetch("http://localhost:8080/drinks/").
    then((response) => {
        return response.json(); 
    }).then((data) => {
        let points = data.map(a => a.points)
        let earned = 0
        for (let i = 0; i < points.length; i++) {
            earned += points[i]
        }
        console.log(earned)

        const statuscontainer = document.querySelector('#rewardsstatus')
        statuscontainer.innerHTML = statuscontainer.innerHTML + `${earned}`

        fetch("http://localhost:8080/rewards/").
        then((response) => {
            return response.json(); 
        }).then((data) => {
            let spentpoints = data.map(a => a.points)
            let spent = 0
            for (let i = 0; i < spentpoints.length; i++) {
                spent += spentpoints[i]
            }
            console.log(spent)

            var balance = earned - spent
            localStorage.setItem("balanceLocal", balance)
            console.log(balance)
            if(balance < 0)
            {
                balance = 0
                const rewardscontainer = document.querySelector('#rewardsbalance')
                rewardscontainer.innerHTML = rewardscontainer.innerHTML + `${balance}`
            }
            else
            {
                const rewardscontainer = document.querySelector('#rewardsbalance')
                rewardscontainer.innerHTML = rewardscontainer.innerHTML + `${balance}`
            }
        })
    })