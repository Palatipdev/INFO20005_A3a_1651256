function updateCartBadge() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const badge = document.getElementById("cart-badge");
  if (cart.length > 0) {
    badge.textContent = cart.length;
    badge.style.display = "block";
  } else {
    badge.style.display = "none";
  }
}

function displayOrderSummary() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const orderItems = document.getElementById("order-items");

  if (!orderItems) return; // Guard clause if element doesn't exist

  let total = 0;
  orderItems.innerHTML = "";

  cart.forEach((item) => {
    orderItems.innerHTML += `
            <p>
                <span>${item.name}:</span>
                <span>$${item.price}</span>
            </p>
        `;
    total += parseFloat(item.price);
  });

  const totalElement = document.getElementById("total-price");
  if (totalElement) {
    totalElement.textContent = `$${total.toFixed(2)}`;
  }
}

updateCartBadge();
