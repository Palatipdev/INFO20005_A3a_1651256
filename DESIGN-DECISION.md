## Design Decision: Checkout Flow Optimization
The original Planet K9 website collects dog details at the class selection stage. In my implementation, I moved dog details collection to the checkout page after users have added classes to their cart.

# Rationale: 
This follows e-commerce best practices where product selection is kept friction-free. By deferring the form to checkout, users can browse and add multiple classes without interruption. Once they reach checkout, they've mentally committed to the purchase, making them less likely to abandon mid-flow. This reduces cognitive load during the browsing phase and consolidates all data entry into a single final step.

## Design Decision: Dog Details Form Layout
On the checkout page, I changed the dog details form so that each label sits on its own line directly above its input, and all three input fields (Name, Age, Traits) span the full width of the form card so they line up vertically flush-left.

# Rationale:
The original side-by-side label/input pairing left each input starting at a different horizontal position depending on the length of its label, which made the form feel ragged and harder to scan. Stacking the label above and giving every input the same full width matches the existing Card Details section directly above it, creating a single consistent input pattern throughout the checkout page. Vertical alignment also reduces the eye-tracking effort needed to read across the form.

## Design Decision: Rounded CTA Buttons on Homepage
The two homepage CTA buttons ("Puppy Training", "Dog Training") were given an 8px border-radius instead of the original sharp corners.

# Rationale:
The rest of the site (info cards, inputs, dog-details container, etc.) consistently uses ~8px rounded corners. Sharp-cornered CTAs on the homepage read as a small visual inconsistency rather than an intentional bold statement, and a subtle radius fits better with Planet K9's overall friendly, approachable visual tone without going so round it feels gimmicky.

## Design Decision: Trust Badges on a White Background
The container that holds the three trust badges on the homepage was kept on a plain white background instead of being filled with a brand colour.

# Rationale:
The badges themselves are already strong primary-blue blocks with white text. Adding a colored background behind them would compete with the badges, reduce the contrast that makes them pop, and add visual noise. White breathing room lets the badges remain the focal point and matches the clean, uncluttered theme of the rest of the page.

## Design Decision: Smaller Desktop Logo and Information Bar
The desktop information bar logo was shrunk from 110px to 75px and the three info icons (location, phone, hours) from 90px to 55px, with the surrounding gaps and label/value type stepped down to match.

# Rationale:
At their original sizes the info bar took an unnecessarily large slice of vertical space at the top of the page, pushing the actual page content (hero, CTAs) further down. The smaller proportions keep the bar useful and readable without dominating the viewport, and leave more room for the content the user actually came to engage with.

## Design Decision: Class Price as a Typographic Label, Not a Button
On the class detail page, the "Class Price:" label was changed from a solid blue (primary) block with white text to plain bold text in the primary blue colour, paired tightly with the price number.

# Rationale:
The previous styling gave "Class Price:" a button-like appearance that sat directly above the actual BOOK NOW button, which risked confusing users into thinking it was also tappable. Reducing it to a typographic label removes the button affordance entirely, so the only button-shaped element in that section is the genuine call to action. Pairing the bold blue label with the bold accent-colored price number visually groups them as a single price unit, while keeping a clear hierarchy from label → price → action button.

## Design Decision: Combined Header (Logo + Nav) and Site Footer
The desktop layout was restructured so that the top information bar now contains only the logo (left) and the main navigation (right) in a single row. The original right-side content of the info bar (location, phone, opening hours) plus a new email address and copyright line were moved into a new site-wide footer that appears on every page.

# Rationale:
Contact details and operating hours are reference information users typically look for once they're already deciding to engage, not at first arrival. Pushing them to the footer is the standard web convention and frees the header to do its primary job — branding (logo) and navigation. Merging the previously-separate desktop nav into the same row as the logo also removes a redundant horizontal bar, tightening the header and giving the rest of the page more visible real estate. A consistent footer across all pages reinforces the brand identity and gives users a reliable secondary place to find contact info and quick links no matter where they are in the site.

## Design Decision: Horizontally Scrollable Class Cards on All Desktop Widths
On the class listing page, the desktop layout uses a horizontally scrollable row of class cards (matching the mobile pattern) rather than a wrapping multi-column grid.

# Rationale:
At narrower desktop widths (roughly 1024–1300px), a four-column grid forced each card so narrow that the card image and content no longer fit comfortably, and the user couldn't see all classes without the layout breaking. Switching to a horizontal-scroll row keeps every card at a comfortable, readable width and lets the user browse the full set by scrolling sideways. It also gives the class page a consistent interaction pattern between mobile and desktop, so the mental model of "swipe / scroll through the available classes" carries over.
