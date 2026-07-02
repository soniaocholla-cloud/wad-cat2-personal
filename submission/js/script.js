const menuItems = [

    {
        name: "Lotus Biscoff Waffles 🧇",
        image: "images/Layali Waffles.jpeg",
        description: "Crispy golden waffles drizzled with Lotus Biscoff spread & ice cream — the one everyone talks about."
    },

    {
        name: "Milkshakes 🥤",
        image: "images/Layali Milkshakess.jpeg",
        description: "Thick, creamy, and indulgent. Made fresh every time, just the way you like it."
    },

    {
        name: "Scud ⚡",
        image: "images/LAYALI SCUD.jpeg",
        description: "Our signature bold drink that hits different. Come try it and see for yourself."
    }

];

const menuGrid = document.querySelector(".menu-grid");

//loop
menuItems.forEach(function (item) {
    let card = document.createElement("article");
    let heading = document.createElement("h3");
    let image = document.createElement("img");
    let paragraph = document.createElement("p");

    //add text
    heading.textContent = item.name;
    paragraph.textContent = item.description;

    //image
    image.setAttribute("src", item.image);
    image.setAttribute("width","200");
    image.setAttribute("alt", item.name);

    //building the card
    card.appendChild(heading);
    card.appendChild(image);
    card.appendChild(paragraph);
    
    //class
    card.classList.add("menu-card");

    //put the card on the page
    menuGrid.appendChild(card);

});

//build Your Order

let orderInput = document.querySelector("#orderInput");
let addOrderButton = document.querySelector("#orderForm button");
let orderItems = document.querySelector("#orderItems");

addOrderButton.addEventListener("click", function(event){

    event.preventDefault();

    if(orderInput.value != ""){

        //create elements
        let li = document.createElement("li");
        let button = document.createElement("button");

        //add text
        li.textContent = orderInput.value;
        button.textContent = "Delete";

        //delete button
        button.addEventListener("click", function(){

            li.remove();

        });

        //add button to list item
        li.appendChild(button);

        //add list item to the list
        orderItems.appendChild(li);

        //clear textbox
        orderInput.value = "";

    }
    else{

        alert("Please type an item.");

    }

});