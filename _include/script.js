let place = document.querySelector("#place");
let inscription = document.querySelector("#inscription");
let connexion = document.querySelector("#connexion");


inscription.addEventListener("click", () => {
    fetch("inscription.php")
        .then(response => {
            return response.text()
        })
        .then(formregister => {
            place.innerHTML = formregister;
            let buttonReg = document.querySelector("#buttonReg")
            let formReg = document.querySelector("#formReg")

            buttonReg.addEventListener("click", (e) => {
                e.preventDefault();
                let dataReg = new FormData(formReg);
                fetch("inscription.php", {
                    method: "POST",
                    body: dataReg
                })
                    .then(response => {
                        return response;
                    })
            })

        })
})

connexion.addEventListener("click", (e) => {
    fetch("connexion.php")
        .then(response => {
            return response.text()
        })
        .then(formConnexion => {
            place.innerHTML = formConnexion;
            let buttonCon = document.querySelector("#buttonCon")
            let formCon = document.querySelector("#formCon")

            buttonCon.addEventListener("click", (e) => {
                e.preventDefault();
                let dataCon = new FormData(formCon);
                fetch("connexion.php", {
                    method: "POST",
                    body: dataCon
                })
                    .then(response => {
                        if(response.status === 200)
                        {
                            window.location.href= "clicker.php"
                        }
                        return response
                    })
            })
        })
})



