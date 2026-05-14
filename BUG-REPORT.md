
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
 