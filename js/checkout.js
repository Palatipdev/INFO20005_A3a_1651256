function confirmBooking(){

    // check fields not empty
    const cardName = document.querySelector('.card-form input:nth-child(1)').value.trim();
    const cardNumber = document.querySelector('.card-form input:nth-child(2)').value.trim();

    if (!cardName || cardNumber){
        alert("Please fill in the detail payment");
        return;
    }

    location.href = 'confirmation.html'
}

displayOrderSummary();