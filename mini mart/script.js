// Handle quantity +/-
document.querySelectorAll(".plus").forEach(btn => {
  btn.addEventListener("click", () => {
    let input = btn.previousElementSibling;
    input.value = parseInt(input.value) + 1;
  });
});

document.querySelectorAll(".minus").forEach(btn => {
  btn.addEventListener("click", () => {
    let input = btn.nextElementSibling;
    if (parseInt(input.value) > 1) {
      input.value = parseInt(input.value) - 1;
    }
  });
});

// Cart functionality
let cart = [];
let cartCount = document.getElementById("cart-count");
let cartItems = document.getElementById("cart-items");
let cartTotal = document.getElementById("cart-total");

document.querySelectorAll(".add-to-cart").forEach(btn => {
  btn.addEventListener("click", () => {
    let name = btn.dataset.name;
    let price = parseInt(btn.dataset.price);
    let quantity = parseInt(btn.previousElementSibling.querySelector("input").value);

    let existing = cart.find(item => item.name === name);
    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({ name, price, quantity });
    }

    updateCart();
  });
});

function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    let div = document.createElement("div");
    div.textContent = `${item.name} - ${item.quantity} x Ksh ${item.price}`;
    cartItems.appendChild(div);
    total += item.price * item.quantity;
  });
  cartTotal.textContent = total;
  cartCount.textContent = cart.length;
}

// Checkout
document.getElementById("checkout").addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty!");
  } else {
    alert("Thank you for shopping with us!");
    cart = [];
    updateCart();
  }
});

