//https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/
//used to revise on arrary methods

//https://www.w3schools.com/Jsref/jsref_reduce.asp
//this for array.reduce.

let inventory = [
    {name: "Healing potion", type: "Potion", price: 50, quantity: 10, description: "Slather this bad boy on an open wound or drink it and you'll be good to go"},
    {name: "Mana potion", type: "Potion", price: 50, quantity: 20, description: "Spray it over some plants or straight up chug it. This is liquified Mana in a bottle. Spell Slots? Whats that?"},
    {name: "Wand of ???", type: "Wand", price: 5000, quantity: 1, description: "Found this stuck to a skeletons ribcage. Swung it around and next thing you know my apprentice disappeared. Most likely a wand of Plane shift."},
    {name: "Wand of fireball", type: "Wand", price: 2000, quantity: 5, description: "I DONT CARE HOW SMALL THE ROOM IS, I CAST FIREBALL!"},
    {name: "Invisibility Cloak", type: "Cloak", price: 10000, quantity: 2, description: "I'm going to need you to fill out this form"},
    {name: "Enchanted Amulet", type: "Accessory", price: 5, quantity: 1, description: "Found this in the depths of a necromancers lair, it radiates a deadly aura and its infecting some of the items in the shop, please just take it, its a 50 50 on whether its cursed or not"},
    {name: "Denvor the talking wand", type: "Wand", price: 0, quantity: 1, description: "You know what young one, I feel this one was fated to be carried by you, he's just been gathering dust by my side so may as well. *secretly* hehe finally getting rid of that old coot. Hopefully he doesn't snap it and free that prisoner from the age of demons but oh well not my problem anymore"},
    {name: "Elministers private diary", type: "Book", price: 100000, quantity: 1, description: "How did THAT get in there?! (Use this to test out the remove button)"},
    {name: "Bless spell book", type: "Book", price: 100, quantity: 5, description: "Its a spell book that teaches you how to cast bless"},
    {name: "Potion of fire breathing", type: "Potion", price: 500, quantity: 10, description: "It's in the name"}
];

function listItems(items = inventory) {
    const list = document.getElementById("itemList");
    list.innerHTML = "";
    items.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `
        <strong>${item.name}</strong> (${item.type})<br>
        Price: $${item.price} | Quantity: ${item.quantity}<br>
        Description: ${item.description}<br>
        <button onclick="removeItem('${item.name}')">Remove</button>`;
        list.appendChild(li);
    });
    calculateTotalValue();
}

function getItem(itemName) {
    return inventory.find(item => item.name.toLowerCase() === itemName.toLowerCase());
}

function addItem(item) {
    if (getItem(item.name)) {
        //could add to the quantity or it has to be unique, I'll decide later.
        alert("Item with that name already exists");
        return;
    }
    inventory.push(item);
    listItems();
}

function removeItem(itemName) {
    inventory = inventory.filter(item => item.name !== itemName);
    listItems();
}

function searchItems(query) {
    const lowerQuery = query.toLowerCase();
    const filteredItems = inventory.filter(item => 
        item.name.toLowerCase().includes(lowerQuery) ||
        item.type.toLowerCase().includes(lowerQuery)
    );
    listItems(filteredItems);
}

function calculateTotalValue() {
    const total = inventory.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    document.getElementById("inventoryTotal").innerText = total;
}

document.addEventListener("DOMContentLoaded", () => {
    listItems();

    const form = document.getElementById("itemForm");
    form.addEventListener("submit", event => {
        event.preventDefault();

        const name = document.getElementById("itemName").value.trim();
        const type = document.getElementById("itemType").value.trim();
        const price = document.getElementById("itemPrice").value;
        const quantity = document.getElementById("itemQuantity").value;
        const description = document.getElementById("itemDescription").value.trim();

        if (!name || !type || isNaN(price) || isNaN(quantity) || !description) {
            alert("please fill in all fields correctly. Brain fogged from practising magic all day!");
            return;
        }

        const newItem = {name, type, price, quantity, description};
        addItem(newItem);

        form.reset();
    });

    const searchButton = document.getElementById("searchButton");
    searchButton.addEventListener("click", () => {
        const query = document.getElementById("searchQuery").value.trim();
        if(query === "") {
            listItems();
        } else {
            searchItems(query);
        }
    });
});