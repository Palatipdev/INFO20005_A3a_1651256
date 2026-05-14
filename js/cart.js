function updateCartBadge() {

    let cart = JSON.parse(localStorage.getItem('cart')) || []
    const badge = document.getElementById('cart-badge');
    if (cart.length > 0){
        badge.textContent = cart.length
        badge.style.display = 'block';
        
    } else {
        badge.style.display = 'none';
    }
}

// Dev function
function clearCart(){
    localStorage.clear()
    updateCartBadge()
}

// update the cart number on load

updateCartBadge()