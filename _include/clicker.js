let displays = displayClick();
let text;
let displayMultiplicateur1 = shopMultiplicateur();
let displayItemOne = displayLittleClicker();
let displayItemTwo = displayMediumClicker();
let displayItemThree = displayBigClicker();
let reset = displayResetClicker();
setLocalStorage();



function displayMultiplicateur() {
    let place = document.querySelector("#place-multiplicateur")

    let multiplicateur = document.createElement("div")
    multiplicateur.setAttribute("class", "multiplicateur")
    multiplicateur.innerHTML = "MutliplicateurX" + parseInt(localStorage.getItem("multiplicateur"))
    place.append(multiplicateur)
}

function shopMultiplicateur() {
    let place = document.querySelector("#multiplicateur-shop")


    let name = document.createElement("h3")
    name.setAttribute("class", "title-shop")
    name.innerHTML = "Oeuf multiplicateur"

    let price = document.createElement("p")
    price.setAttribute("class", "title-shop")

    let icon = document.createElement("img")
    icon.setAttribute("src", "_img/egg.png")
    icon.setAttribute("class", "img")


    let clickSecond = document.createElement("p")
    clickSecond.setAttribute("class", "title-shop")


    let quantity = document.createElement("p")
    quantity.setAttribute("class", "title-shop")



    let buy = document.createElement("button")
    buy.setAttribute("class", "button-78")
    buy.innerHTML = "Buy"

    setInterval(() => {
        price.innerHTML = "Prix : " + parseInt(localStorage.getItem("priceMultiplicateur"))
        clickSecond.innerHTML = "Click X " +parseInt(localStorage.getItem("clickMultiplicateur"))
        quantity.innerHTML = "Quantité : " + parseInt(localStorage.getItem("quantityMultiplicateur"))
    }, 100)

    place.append(name, icon, price, clickSecond, quantity, buy)

    return {"display":price, "button":buy, "quantity":quantity, "click":clickSecond}
}

function multiplicateur(click) {
    let price = localStorage.getItem("priceMultiplicateur")
    price = parseInt(price)
    let points = localStorage.getItem("points")
    points = parseInt(points)
    let clicks = localStorage.getItem("clickMultiplicateur")
    clicks = parseInt(clicks)

    if(points >= price) {

        let increment = parseInt(click.quantity.innerHTML[click.quantity.innerHTML.length - 1]);

        increment++

        let inflation = (price * 2 )

        let clickSecond = (clicks+ 1);

        let pricing = points - price;

        localStorage.setItem("clickMultiplicateur", clickSecond)
        localStorage.setItem("quantityMultiplicateur", increment)
        localStorage.setItem("points", pricing);
        localStorage.setItem("priceMultiplicateur", inflation)
    }else {
        alert("Pas assez de piéces")
    }
}

function displayClick() {
    let placeClicker = document.querySelector("#clicker");
    let count = document.createElement("div")
    count.setAttribute("id", "count")
    count.setAttribute("class", "title")

    placeClicker.appendChild(count)


    let clicker = document.createElement("a")
    clicker.setAttribute("id", "click")
    clicker.setAttribute("class", "click-place")
    clicker.style.width = "fit-content";
    placeClicker.appendChild(clicker);

    let dragon = document.querySelector("#gif")
    dragon.setAttribute("class", "dragon")

    clicker.appendChild(dragon)

    setInterval(()=> {

        let displayClick = localStorage.getItem("points")
        count.innerHTML = displayClick
    }, 10  )

    return {"button" : clicker, "display" : count};
}


function clicker(click) {
    let points = parseInt(localStorage.getItem("points"))
    let multiplicateur = parseInt(localStorage.getItem("clickMultiplicateur"));
    let point = click.display.innerHTML = points + multiplicateur;


    localStorage.setItem("points", point)

}

function displayLittleClicker() {
    let place = document.querySelector("#littleItem")


    let name = document.createElement("h3")
    name.setAttribute("class", "title-shop")
    name.innerHTML = "Petit Oeuf"

    let icon = document.createElement("img")
    icon.setAttribute("src", "_img/dragon-fruit.png")
    icon.setAttribute("class", "img")

    let price = document.createElement("p")
    price.setAttribute("class", "title-shop")


    let clickSecond = document.createElement("p")
    clickSecond.setAttribute("class", "title-shop")


    let quantity = document.createElement("p")
    quantity.setAttribute("class", "title-shop")



    let buy = document.createElement("button")
    buy.setAttribute("class", "button-78")
    buy.innerHTML = "Buy"

    window.addEventListener("load", () => {

        setInterval(() => {
            let points = localStorage.getItem("points")
            let prixSecondes = localStorage.getItem("priceItemOne")
            let clickSecondes = localStorage.getItem("clickItemOne")
            let quantitys = localStorage.getItem("quantityItemOne")
            let pointAugment = displays.display.innerHTML = parseInt(points) + parseInt(clickSecondes)
            price.innerHTML = "Prix : " + parseInt(prixSecondes)
            clickSecond.innerHTML = "Click/s : " + parseInt(clickSecondes)
            quantity.innerHTML = "Quantité : " + parseInt(quantitys)

            localStorage.setItem("points", pointAugment);

        },1000)
    })

    place.append(name, icon, price, clickSecond, quantity, buy)

    return {"display":price, "button":buy, "quantity":quantity, "click":clickSecond}

}

function littleClicker(click) {
    let price = localStorage.getItem("priceItemOne")
    price = parseInt(price)
    let points = localStorage.getItem("points")
    points = parseInt(points)
    let clicks = localStorage.getItem("clickItemOne")
    clicks = parseInt(clicks)

    if(points >= price) {

        let increment = parseInt(click.quantity.innerHTML[click.quantity.innerHTML.length - 1]);

        increment++

        let inflation = (price + (increment + 1)) * 2

        let clickSecond = (clicks + (increment + 1))* 1.5;

        let pricing = points - price;

        localStorage.setItem("clickItemOne", clickSecond)
        localStorage.setItem("quantityItemOne", increment)
        localStorage.setItem("points", pricing);
        localStorage.setItem("priceItemOne", inflation)
    }else {
        alert("Pas assez de piéces")
    }
}

function displayMediumClicker() {
    let place = document.querySelector("#middleItem")


    let name = document.createElement("h3")
    name.setAttribute("class", "title-shop")

    name.innerHTML = "Oeuf Moyen"

    let price = document.createElement("p")
    price.setAttribute("class", "title-shop")

    let icon = document.createElement("img")
    icon.setAttribute("src", "_img/dragon-fruit-egg.png")
    icon.setAttribute("class", "img")


    let clickSecond = document.createElement("p")
    clickSecond.setAttribute("class", "title-shop")


    let quantity = document.createElement("p")
    quantity.setAttribute("class", "title-shop")
    quantity.innerHTML = 0


    let buy = document.createElement("button")
    buy.setAttribute("class", "button-78")
    buy.innerHTML = "Buy"

    setInterval(() => {
        let points = localStorage.getItem("points")
        let prixSecondes = localStorage.getItem("priceItemTwo")
        let clickSecondes = localStorage.getItem("clickItemTwo")
        let quantitys = localStorage.getItem("quantityItemTwo")
        let pointAugment = displays.display.innerHTML = parseInt(points) + parseInt(clickSecondes)
        price.innerHTML = "Prix : " + parseInt(prixSecondes)
        clickSecond.innerHTML = "Click/s : " + parseInt(clickSecondes)
        quantity.innerHTML = "Quantité : " + parseInt(quantitys)

        localStorage.setItem("points", pointAugment);

    },1000)


    place.append(name, icon, price, clickSecond, quantity, buy)

    return {"display":price, "button":buy, "quantity":quantity, "click":clickSecond}
}

function mediumClicker(click) {
    let price = localStorage.getItem("priceItemTwo")
    price = parseInt(price)
    let points = localStorage.getItem("points")
    points = parseInt(points)
    let clicks = localStorage.getItem("clickItemTwo")
    clicks = parseInt(clicks)

    if(points >= price) {

        let increment = parseInt(click.quantity.innerHTML[click.quantity.innerHTML.length - 1]);

        increment++

        let inflation = (price + (increment + 1)) * 2

        let clickSecond = (clicks + (increment + 2))* 2;

        let pricing = points - price;

        localStorage.setItem("clickItemTwo", clickSecond)
        localStorage.setItem("quantityItemTwo", increment)
        localStorage.setItem("points", pricing);
        localStorage.setItem("priceItemTwo", inflation)
    }else {
        alert("Pas assez de piéces")
    }
}


function displayBigClicker() {

    let place = document.querySelector("#bigItem")


    let name = document.createElement("h3")
    name.setAttribute("class", "title-shop")
    name.innerHTML = "Gros Oeuf"

    let price = document.createElement("p")
    price.setAttribute("class", "title-shop")

    let icon = document.createElement("img")
    icon.setAttribute("src", "_img/dragon-egg.png")
    icon.setAttribute("class", "img")


    let clickSecond = document.createElement("p")
    clickSecond.setAttribute("class", "title-shop")


    let quantity = document.createElement("p")
    quantity.setAttribute("class", "title-shop")
    quantity.innerHTML = 0


    let buy = document.createElement("button")
    buy.setAttribute("class", "button-78")
    buy.innerHTML = "Buy"

    setInterval(() => {
        let points = localStorage.getItem("points")
        let prixSecondes = localStorage.getItem("priceItemThree")
        let clickSecondes = localStorage.getItem("clickItemThree")
        let quantitys = localStorage.getItem("quantityItemThree")
        let pointAugment = displays.display.innerHTML = parseInt(points) + parseInt(clickSecondes)
        price.innerHTML = "Prix : " + parseInt(prixSecondes)
        clickSecond.innerHTML = "Click/s : " + parseInt(clickSecondes)
        quantity.innerHTML = "Quantité : " + parseInt(quantitys)

        localStorage.setItem("points", pointAugment);

    },1000)


    place.append(name, icon, price, clickSecond, quantity, buy)

    return {"display":price, "button":buy, "quantity":quantity, "click":clickSecond}
}


function bigClicker(click) {
    let price = localStorage.getItem("priceItemThree")
    price = parseInt(price)
    let points = localStorage.getItem("points")
    points = parseInt(points)
    let clicks = localStorage.getItem("clickItemThree")
    clicks = parseInt(clicks)

    if(points >= price) {

        let increment = parseInt(click.quantity.innerHTML[click.quantity.innerHTML.length - 1]);

        increment++

        let inflation = (price + (increment + 1)) * 4

        let clickSecond = (clicks + (increment + 2))* 4;

        let pricing = points - price;

        localStorage.setItem("clickItemThree", clickSecond)
        localStorage.setItem("quantityItemThree", increment)
        localStorage.setItem("points", pricing);
        localStorage.setItem("priceItemThree", inflation)
    }else {
        alert("Pas assez de piéces")
    }
}

function displayResetClicker() {
    let place = document.querySelector("#reset")
    let button = document.createElement("button")
    button.textContent = "Reset"
    button.setAttribute("class", "button-78")
    place.append(button)
    return {"button" : button}
}

function resetClicker() {

    localStorage.setItem("clickMultiplicateur", 1)
    localStorage.setItem("priceMultiplicateur", 10)
    localStorage.setItem("quantityMultiplicateur", 0)

    localStorage.setItem("clickItemOne", 0)
    localStorage.setItem("priceItemOne", 20)
    localStorage.setItem("points", 0)
    localStorage.setItem("quantityItemOne", 0)

    localStorage.setItem("clickItemTwo", 0)
    localStorage.setItem("priceItemTwo", 50)
    localStorage.setItem("quantityItemTwo", 0)

    localStorage.setItem("clickItemThree", 0)
    localStorage.setItem("priceItemThree", 80)
    localStorage.setItem("quantityItemThree", 0)



}

function setLocalStorage() {
    if(localStorage.getItem("points") != null)
    {
        displays.display.innerHTML = localStorage.getItem("points")
    }
    else
    {
        localStorage.setItem("points", 0)
    }

    /**********************************MULTIPLICATEUR*******************************/

    if(localStorage.getItem("clickMultiplicateur") != null)
    {
        displays.display.innerHTML = "ClickX" + parseInt(localStorage.getItem("clickMultiplicateur"))
    }
    else
    {
        localStorage.setItem("clickMultiplicateur", 1)
    }

    if(localStorage.getItem("priceMultiplicateur") != null)
    {
        displays.display.innerHTML = "Prix : " + parseInt(localStorage.getItem("priceMultiplicateur"))
    }
    else
    {
        localStorage.setItem("priceMultiplicateur", 10)
    }

    if(localStorage.getItem("quantityMultiplicateur") != null)
    {
        displayItemOne.quantity.innerHTML = "Quantité : " + parseInt(localStorage.getItem("quantityMultiplicateur"))
    }
    else
    {
        localStorage.setItem("quantityMultiplicateur", 1)
    }


    /**********************************ITEM ONE*******************************/

    if(localStorage.getItem("priceItemOne") != null)
    {
        displayItemOne.display.innerHTML = "Prix : " + parseInt(localStorage.getItem("priceItemOne"))
    }
    else
    {
        localStorage.setItem("priceItemOne", 20)
    }

    if(localStorage.getItem("quantityItemOne") != null)
    {
        displayItemOne.quantity.innerHTML = "Quantité : " + parseInt(localStorage.getItem("quantityItemOne"))
    }
    else
    {
        localStorage.setItem("quantityItemOne", 0)
    }

    if(localStorage.getItem("clickItemOne") != null)
    {
        displayItemOne.click.innerHTML = "Click/s : " + parseInt(localStorage.getItem("clickItemOne"))
    }
    else
    {
        localStorage.setItem("clickItemOne", 0)
    }

    /**********************************ITEM TWO*******************************/

    if(localStorage.getItem("priceItemTwo") != null)
    {
        displayItemTwo.display.innerHTML = "Prix : " + parseInt(localStorage.getItem("priceItemTwo"))
    }
    else
    {
        localStorage.setItem("priceItemTwo", 50)
    }

    if(localStorage.getItem("quantityItemTwo") != null)
    {
        displayItemTwo.quantity.innerHTML = "Quantité : " + parseInt(localStorage.getItem("quantityItemTwo"))
    }
    else
    {
        localStorage.setItem("quantityItemTwo", 0)
    }

    if(localStorage.getItem("clickItemTwo") != null)
    {
        displayItemOne.click.innerHTML = "Click/s : " + parseInt(localStorage.getItem("clickItemTwo"))
    }
    else
    {
        localStorage.setItem("clickItemTwo", 0)
    }

    /**********************************ITEM THREE*******************************/

    if(localStorage.getItem("priceItemThree") != null)
    {
        displayItemTwo.display.innerHTML = "Prix : " + parseInt(localStorage.getItem("priceItemThree"))
    }
    else
    {
        localStorage.setItem("priceItemThree", 80)
    }

    if(localStorage.getItem("quantityItemThree") != null)
    {
        displayItemTwo.quantity.innerHTML = "Quantité : " + parseInt(localStorage.getItem("quantityItemThree"))
    }
    else
    {
        localStorage.setItem("quantityItemThree", 0)
    }

    if(localStorage.getItem("clickItemThree") != null)
    {
        displayItemOne.click.innerHTML = "Click/s : " + parseInt(localStorage.getItem("clickItemThree"))
    }
    else
    {
        localStorage.setItem("clickItemThree", 0)
    }
}



displays.button.addEventListener("click", () => {
    clicker(displays);
})

displayMultiplicateur1.button.addEventListener("click", () => {
    multiplicateur(displayMultiplicateur1);
})

displayItemOne.button.addEventListener("click", () => {
    littleClicker(displayItemOne)
})

displayItemTwo.button.addEventListener("click", () => {
    mediumClicker(displayItemTwo)
})

displayItemThree.button.addEventListener("click", () => {
    bigClicker(displayItemThree);
})

reset.button.addEventListener("click", () => {
    if(window.confirm("Voulez vous vraiment reprendre votre partie a 0 ?") === true ) {
        resetClicker()
        text = alert("La partie est remise a zéro !");
    }else {
        text = alert("La partie continue !");
    }

})

