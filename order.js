// Get all the add-to-cart buttons
const addButtons = document.querySelectorAll('.add-to-cart');

// Get the calculate-total button
const calculateTotalBtn = document.querySelector('#calculate-total');

// Array to store the items in the cart
let cart = [];

// Function to add an item to the cart
function addItemToCart(name, price) {
  cart.push({name: name, price: price});
  updateCart();
}

// Function to update the cart
function updateCart() {
  let cartList = document.getElementById("cart-list");
  cartList.innerHTML = "";

  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    let item = cart[i];
    let itemElement = document.createElement("li");
    itemElement.innerHTML = item.name + ": $" + item.price.toFixed(2);
    cartList.appendChild(itemElement);
    total += item.price;
  }

  let totalElement = document.getElementById("cart-total");
  totalElement.innerHTML = "Total: $" + total.toFixed(2);
}

// Function to calculate the total and print the receipt
function calculateTotal() {
  // Get the customer's information
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let address = document.getElementById("address").value;

  // Calculate the total
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price;
  }

  // Print the receipt
  let receipt = "Name: " + name + "\n";
  receipt += "Phone: " + phone + "\n";
  receipt += "Address: " + address + "\n\n";
  receipt += "Order Summary:\n";
  for (let i = 0; i < cart.length; i++) {
    receipt += cart[i].name + ": $" + cart[i].price.toFixed(2) + "\n";
  }
  receipt += "Total: $" + total.toFixed(2);
  alert(receipt);

  // Clear the cart and update the view
  cart = [];
  updateCart();
}

// Add event listeners for the Add to Cart buttons
addButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    let name = button.getAttribute('data-name');
    let price = parseFloat(button.getAttribute('data-price'));
    addItemToCart(name, price);
  });
});

// Add event listener for the Calculate Total button
calculateTotalBtn.addEventListener("click", calculateTotal);
