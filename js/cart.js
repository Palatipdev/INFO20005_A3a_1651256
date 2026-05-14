


// Dev function

// update the cart number on load

function printCart(){

    const cart = JSON.parse(localStorage.getItem("cart")) || []
    const cartContainer = document.getElementById("cart-items");

    cartContainer.innerHTML = '';

    cart.forEach((item, index) => {
        cartContainer.innerHTML += `
        <div class = "cart-item">
            <img src = "${item.image}" class = "cart-image">
            <div class= "cart-details">
                <h3>${item.name}</h3>
                <p>Date: ${item.date}</p>
                <p>Price: $${item.price} </p>
                <p class="remove-btn" onclick="removeItem(${index})"> remove X </p>
            </div>
        </div>
        `
    })
}

function removeItem(index){
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    
    // Remove exactly one item at the specified index
    cart.splice(index, 1)
    
    localStorage.setItem('cart', JSON.stringify(cart))
    location.reload()
}

printCart();
displayOrderSummary();
