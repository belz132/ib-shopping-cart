# ib-shopping-cart

This is a continuation of "product-page-basic" project before.

This project extends the use of Vuex as state management, Vue Router for navigating through pages, and Axios for making HTTP request to a made-up/ mocking controller that simulate backend functionality. This time, HomePage component was broken down into two separate routes, which are: HomePage (end point component for product list route ) and Cart (end point component for shopping cart route). All other features/ functionalities remain the same with "product-page-basic" project before.

Components

1. Atoms:

    * Button (Button.vue): a simple component re-usable in this project.

2. Molecules:

    * ProductItem (ProductItem.vue): represents a row in the product list table.
    * ShoppingCartItem (ShoppingCartItem.vue): represents a row in the shopping cart table.

3. Organisms:

    * ProductList (ProductList.vue): made up of multiple ProductItem molecules to make a complete product table.
    * ShoppingCart (ShoppingCart.vue): similar to ProductList, this is an organism that consists of multiple ShoppingCartItem to make a complete shopping cart table.

4. Templates:

    * MainTemplate (MainTemplate.vue): a layout that defines how the ProductList and ShoppingCart organisms are positioned on the page, essentially structuring the main page layout. Could be used for other pages next as well.

5. Pages:

    * HomePage (HomePage.vue): end point component for product list route, diplaying list of all products.
    * Cart (Cart.vue): end point component for shopping cart route, displaying products that have been added into the shopping cart.

Hierarchy

1. HomePage.vue 
    * MainTemplate.vue 
    * ProductList.vue 
        - ProductItem.vue 
            - Button.vue 
2. Cart.vue
    * MainTemplate.vue 
    * ShoppingCart.vue 
        * ShoppingCartItem.vue 
            * Button.vue

Features/ Functionalities

- When "Add to cart" button is pressed, the "Stock" quantity in Product list will be decrease accordingly. 
- Stock quantities can't go below zero.
- You can't add more items to the cart than are available in stock.
- In "Cart" button in ProductList.vue, there will be a number that show how many products have been added into the cart. The button will look something like this: "Cart (0)" or "Cart (10)".
- ShoppingCart.vue can only access by clicking "Cart" button in ProductList.vue.
- There will be buttons in ShoppingCart.vue to increase and decrease the amount of product that is added ("+" and "-" buttons). 
- When "Delete" button in ShoppingCart.vue is pressed, product will be deleted from Shopping Cart and "Stock" quantity is restored accordingly.
- The "Total" row in ShoppingCart.vue section is to display the total price of all added products.
- When "Checkout" button in ShoppingCart.vue is clicked, there will be an Alert message displaying the total price of products that customer have to pay.
- No checkout if total price is 0.
- When "Back" button in ShoppingCart.vue is clicked, the user will back to ProductList.vue, with the state at that time (the Cart will not refreshed to zero).
