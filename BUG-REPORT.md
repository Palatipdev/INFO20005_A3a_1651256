
# Bug 1: Cart Remove Function

## Issue Description
When multiple identical items (same class, same date) were added to the cart, clicking "remove" on one item would delete ALL matching items instead of just the selected one.

```javascript

    function removeItem(classId, date){
        let cart = JSON.parse(localStorage.getItem('cart')) || []

        // filter the matching item
        cart = cart.filter(item => !(item.id === classId && item.date === date))

        localStorage.setItem('cart', JSON.stringify(cart))

        // reload the page
        location.reload()
    }

 ```

 ## Solution
Changed to index based removal using `splice()` function. By changing each cart item to pass its array index

```javascript

function removeItem(index){
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    
    // Remove exactly one item at the specified index
    cart.splice(index, 1)
    
    localStorage.setItem('cart', JSON.stringify(cart))
    location.reload()
}

```

### Bug 2: Redirecting to Confirmation Page in JS

## 
Initially implemented client-side validation with JavaScript redirect, but encountered browser compatibility issues with location.href. 
 

 ``` javascript
 function confirmBooking(){

    // check fields not empty
    const cardName = document.querySelector('.card-form input:nth-child(1)').value.trim();
    const cardNumber = document.querySelector('.card-form input:nth-child(2)').value.trim();

    if (!cardName || !cardNumber){
       alert("Please fill in the detail payment");
        return;
    }

    window.location.href = './confirmation.html'
}

```

## Solution
Switched to semantic <a> tag for reliability and better accessibility.

``` javascript

    <a href="confirmation.html" class="checkout-btn">CONFIRM BOOKING</a>

```


### BUG 3: Viewport Inconsistencies
##
Encountered viewport rendering inconsistencies in Chrome DevTools across monitors with different DPI scaling, 

## Solution
resolved by standardizing testing environment to primary display.