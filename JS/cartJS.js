<<<<<<< Updated upstream


=======
>>>>>>> Stashed changes
function addItem() {
    var pro = document.getElementById('Product').value // lägger till nya items i slutet på array
    var antal = document.getElementById('Antal').value // lägger till nya items i slutet på array
    var price = document.getElementById('Price').value // lägger till nya items i slutet på array
    var total = antal * price

    displayCart(pro, antal, total) // kallar på funktionen "visa-cart".
}
function displayCart(pro, antal, total) {
    var body = document.getElementsByTagName("body")[0]

    var title = document.createElement("h1");
    title.innerText = pro

    var quan = document.createElement("h2");
    quan.innerText = antal

    var price = document.createElement("h3");
    price.innerText = total + " " + "kr";

    body.append(title)
    body.append(quan)
    body.append(price)
}







<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
