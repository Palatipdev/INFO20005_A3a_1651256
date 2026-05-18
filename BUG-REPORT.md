
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

### Bug 4: Horizontal Whitespace and Scrollbar on Desktop Homepage

## Issue Description
On desktop, an unwanted strip of whitespace was appearing to the right of the homepage content and in some cases a horizontal scrollbar was visible. The decorative paw icons on the trust badges are absolutely positioned with `right: -55px` (and `left: -55px` on the first badge), pushing them roughly 39px past the body's right edge. The previous `overflow-x: hidden` only existed inside the desktop media query on `body`, which is not always enough — the scrollbar could still leak onto the `html` element.

```css
body {
  max-width: 390px;
  margin: 0 auto;
}
/* overflow-x: hidden only existed inside @media (min-width: 1440px) */
```

## Solution
Promoted `overflow-x: hidden` to a global rule on both `html` and `body`, outside the media query, so that no element with negative offsets can ever trigger a horizontal scrollbar at any viewport width.

```css
html,
body {
  overflow-x: hidden;
}
```

### Bug 5: Desktop Layout Falling Back to 390px Mobile Column on Laptop Screens

## Issue Description
The desktop styles were gated on `@media (min-width: 1440px)`. Most laptop displays are 1280–1440px wide, so on a typical laptop the page rendered using the mobile layout in a 390px-wide centered column with large amounts of empty whitespace on both sides. The site looked broken on the most common laptop sizes.

```css
@media (min-width: 1440px) {
  /* desktop styles ... */
}
```

## Solution
Lowered the desktop breakpoint to `1024px` so the desktop layout applies on standard laptop widths instead of dropping into the mobile column.

```css
@media (min-width: 1024px) {
  /* desktop styles ... */
}
```

### Bug 6: Paw Icons Clipped After Adding overflow-x: hidden

## Issue Description
After Bug 4 was fixed by adding `overflow-x: hidden`, the decorative paw icons on the trust badges became visually cropped because their negative `left` / `right` positions pushed them outside the body's clipping area, so the overflow rule now hid them entirely.

```css
.paw-icon {
  position: absolute;
  left: -55px;
  width: 120px;
}

.trust-badges {
  padding: 16px;  /* not enough room for the paws */
}
```

## Solution
Added horizontal padding to the `.trust-badges` container so each badge sits far enough in from the edge that its paw (which extends 55px past the badge) fits entirely inside the container.

```css
.trust-badges {
  padding: 16px 60px;
}

@media (min-width: 1024px) {
  .trust-badges {
    padding: 16px 70px;
  }
}
```

### Bug 7: Class Cards Unreachable at Narrow Desktop Widths

## Issue Description
The desktop class listing page used a four-column grid. At viewport widths around 1024–1300px each card was forced so narrow that its image and content no longer fit, and the layout offered no way for the user to access cards that overflowed.

```css
.classArea {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  overflow-x: visible;
}
```

## Solution
Switched the desktop `.classArea` to a flex row with horizontal scroll, mirroring the mobile pattern. Each card has a fixed `min-width: 300px` and `flex-shrink: 0`, so cards keep a comfortable readable size at every desktop width and users scroll horizontally to access the rest.

```css
.classArea {
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  gap: 30px;
}

.class-card {
  min-width: 300px;
  flex-shrink: 0;
}
```

### Bug 8: "Class Price" Label Looked Like a Tappable Button

## Issue Description
On the class detail page, the "Class Price:" label was rendered as a solid primary-blue block with white text, sitting directly above the actual BOOK NOW button. Visually it looked like a second button next to a real one, which risked confusing users into thinking it was interactive.

```css
.price-label {
  background: var(--primary);
  color: white;
  padding: 8px;
  font-weight: 700;
}
```

## Solution
Removed the solid background, dropped the padding, switched the text colour to primary blue, and bumped the size up so the label and the price below read as a single typographic price unit instead of a button.

```css
.price-label {
  color: var(--primary);
  font-weight: 700;
  font-size: 18px;
}
```
