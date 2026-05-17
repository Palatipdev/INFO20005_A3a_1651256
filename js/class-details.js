
// Rendering the URL from class, into key and val pair
const params = new URLSearchParams(window.location.search)
const classID = parseInt(params.get('id'))
const selectedClass = classes.find(c => c.id === classID)




function renderClassDetail() {
    // connecting each properties to html elems
    document.getElementById('class-image').src = selectedClass.image;
    document.getElementById('class-name').textContent = selectedClass.name;
    document.getElementById('class-level').textContent = selectedClass.classLevel;
    document.getElementById('class-location').textContent = `Location: ${selectedClass.location}`;
    document.getElementById('class-price').textContent = `$${selectedClass.price}`;

    // rendering date and highlighting selected date
    const dateContainer = document.getElementById('date-pills');
    selectedClass.dates.forEach((date, index) => {
        dateContainer.innerHTML += `
        <div class="date-pill ${index === 0? 'selected' : ''}" onclick ="selectDate(this)">
            ${date}
        </div>
        `;
    })

    // What's included list rendering
    const includedList = document.getElementById('included-list');
    selectedClass.included.forEach(item => {
        includedList.innerHTML +=`
        <p>✅ ${item}</p>
        `;
    })
}


function selectDate(element){
    document.querySelectorAll(".date-pill").forEach(pill => {
        pill.classList.remove('selected');
    });
    element.classList.add('selected')
}





function addToCart(){

    // check if datepill with class selected exist
    const selectedDate = document.querySelector('.date-pill.selected')
    if (!selectedDate){
        alert('Please select a date first')
        return;
    }
    const date = selectedDate.textContent.trim();

    // local cartItem of current selected class
    const cartItem = {
        id: selectedClass.id,
        type: selectedClass.type,
        name: selectedClass.name,
        location: selectedClass.location,
        classLevel: selectedClass.location,
        price : selectedClass.price,
        date: date,
        image: selectedClass.image
    }

    // check and get existing cart
    let cart = JSON.parse(localStorage.getItem('cart')) || []

    // add item to cart
    cart.push(cartItem)

    // local storage (only save plain text)
    localStorage.setItem('cart' , JSON.stringify(cart));

    // update cart badge number
    updateCartBadge();

    // replace "book now" with confirmation (new design decision)
    const button = document.getElementById('book-button');
    const originalText = button.textContent
    const originalBackground = button.style.background

    button.textContent = '✓ Added to Cart';
    button.style.background = '#28b148';
    button.disabled = true;

    // After 2 seconds reset back to add to cart
    setTimeout(() => {
        button.textContent = originalText;
        button.style.background = originalBackground;
        button.disabled = false;
    }, 750);
}

renderClassDetail();
