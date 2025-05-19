function addToCart(productName) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(productName);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(productName + " ditambahkan ke keranjang!");
}

function showCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartList = document.getElementById("cart-list");
  if (cartList) {
    if (cart.length === 0) {
      cartList.innerHTML = "<li>Keranjang Barang.</li>";
    } else {
      cartList.innerHTML = cart.map(item => `<li>${item}</li>`).join("");
    }
  }
}

document.addEventListener("DOMContentLoaded", showCart);