
updateCartBadge()

// Dev function
function clearCart(){
    localStorage.clear() 
    updateCartBadge()
}

// update the cart number on load

function printCart(){

    const cart = JSON.parse(localStorage.getItem("cart")) || []

    const cartContainer = document.getElementById("cart-items");
    cart.forEach(item => {
        cartContainer.innerHTML += `
        <div class = "cart-item">
            <img src = "${item.image}" class = "cart-image">
            <div class= "cart-details">
                <h3>${item.name}</h3>
                <p>Date: ${item.date}</p>
                <p>Price: $${item.price} </p>
                <p class="remove-btn" onclick="removeItem(${item.id}, '${item.date}')"> remove X </p>
            </div>
        </div>
        `
    })
}

function removeItem(classId, date){
    let cart = JSON.parse(localStorage.getItem('cart')) || []

    // filter the matching item
    cart = cart.filter(item => !(item.id === classId && item.date === date))

    localStorage.setItem('cart', JSON.stringify(cart))

    // reload the page
    location.reload()
}

function calculateTotal(){
    const cart = JSON.parse(localStorage.getItem('cart')) || []

    // Build order summary items
    const orderItems = document.getElementById("order-items")
    let total = 0

    cart.forEach(item => {
        orderItems.innerHTML += `<p>${item.name}: $${item.price}</p>`
        total += parseFloat(item.price)
    })

    document.getElementById('total-price').textContent = `$${total.toFixed(2)}`

}

calculateTotal();
printCart();
