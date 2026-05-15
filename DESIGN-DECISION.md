## Design Decision: Checkout Flow Optimization
The original Planet K9 website collects dog details at the class selection stage. In my implementation, I moved dog details collection to the checkout page after users have added classes to their cart.

# Rationale: 
This follows e-commerce best practices where product selection is kept friction-free. By deferring the form to checkout, users can browse and add multiple classes without interruption. Once they reach checkout, they've mentally committed to the purchase, making them less likely to abandon mid-flow. This reduces cognitive load during the browsing phase and consolidates all data entry into a single final step.