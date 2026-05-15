function addBlackDogs(){
    const container = document.querySelector('.dogs-divider'); 
    
    // Clear first
    container.innerHTML = '';  
    
    for (let i = 0; i < 5; i++){
        container.innerHTML += `<img src="images/k9-jumping.png" alt="Dog">`;
    }
}

addBlackDogs();

setTimeout(() => {
    localStorage.removeItem('cart');
    updateCartBadge();
}, 1000);

