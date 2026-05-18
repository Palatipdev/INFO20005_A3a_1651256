function addBlackDogs() {
  const container = document.querySelector(".dogs-divider");

  // Clear first
  container.innerHTML = "";

  for (let i = 0; i < 5; i++) {
    container.innerHTML += `<img src="images/k9-jumping.png" alt="Dog">`;
  }
}

function displayBookedClasses() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const bookedClasses = document.getElementById("booked-classes");

  if (cart.length === 0) {
    bookedClasses.innerHTML = "<p>No classes booked.</p>";
    return;
  }

  bookedClasses.innerHTML = "";

  cart.forEach((item) => {
    bookedClasses.innerHTML += `
            <p><strong>${item.name}:</strong> ${item.date} 2026</p>
        `;
  });
}

setTimeout(() => {
  localStorage.removeItem("cart");
  updateCartBadge();
}, 1000);

addBlackDogs();
displayBookedClasses();
