<template>
  <MainTemplate>
    <template #product-list>
      <ProductList
        :products="products"
        @add-to-cart-pl="handleAddToCart"
      />
    </template>
    <template #shopping-cart>
      <ShoppingCart
        :cartItems="cartItems"
        @update-cart-quantity="handleUpdateCartQuantity"
        @remove-from-cart="handleDeleteFromCart"
        @checkout="handleCheckout"
      />
    </template>
  </MainTemplate>
</template>

<script>
import MainTemplate from './MainTemplate.vue';
import ProductList from './ProductList.vue';
import ShoppingCart from './ShoppingCart.vue';

export default {
  name: 'HomePageOld',
  components: {
    MainTemplate,
    ProductList,
    ShoppingCart
  },
  data() {
    return {
      products: [
        { id: 1, name: 'Indomie Goreng Rendang', description: 'Masakan instan terenak di dunia', stock: 10, price: 3900, category: 'food' },
        { id: 2, name: 'Aqua Gelas', description: 'Tinggal glek..ahhh', stock: 100, price: 500, category: 'beverages' },
        { id: 3, name: 'Mie Gelas Rendang', description: 'Mie instant khusus anak kosan', stock: 3, price: 1500, category: 'food' },
        { id: 4, name: 'Aqua Botol', description: 'Beberapa kali glek..glek..glek', stock: 49, price: 5000, category: 'beverages' },
        { id: 5, name: 'Bakmi mewah', description: 'Kalau anak kosan jangan macam2 deh', stock: 80, price: 10000, category: 'food' },
        { id: 6, name: 'Aqua Galon', description: 'Sekeluarga glek..glek..glek', stock: 21, price: 20000, category: 'beverages' },
        { id: 7, name: 'Kacang Goreng', description: 'Cemilan nonton bola', stock: 19, price: 1000, category: 'food' },
        { id: 8, name: 'Tebs Botol', description: 'Segeeer..cssshhh', stock: 30, price: 6000, category: 'beverages' }
      ],
      cartItems: []
    };
  },
  methods: {
    handleAddToCart(productToAdd) {
        let product = this.products.find(p => p.id === productToAdd.id);
        if (product && product.stock > 0) {
          product.stock -= 1;
          let cartItem = this.cartItems.find(item => item.id === productToAdd.id);
          if (cartItem) {
            cartItem.quantity += 1;
          } else {
            this.cartItems.push({
              ...productToAdd,
              quantity: 1
            });
          }
        }
      },
      handleUpdateCartQuantity(cartItemToUpdate, quantityChange) {
        let product = this.products.find(p => p.id === cartItemToUpdate.id);
        let cartItem = this.cartItems.find(item => item.id === cartItemToUpdate.id);
        
        if (cartItem && product) {
          let newQuantity = cartItem.quantity + quantityChange;
          if (newQuantity <= 0) {
            this.handleDeleteFromCart(cartItem);
          } else if (newQuantity <= product.stock + cartItem.quantity) {
            product.stock -= quantityChange;
            cartItem.quantity = newQuantity;
          }
        }
      },
      handleDeleteFromCart(cartItemToDelete) {
        let product = this.products.find(p => p.id === cartItemToDelete.id);
        if (product) {
          product.stock += cartItemToDelete.quantity;
        }
        this.cartItems = this.cartItems.filter(item => item.id !== cartItemToDelete.id);
      },
      handleCheckout() {
        if (this.cartItems.length > 0) {
          let total = this.cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
          alert(`The total price to pay is: Rp. ${total}`);
          this.cartItems = []; // Clear the cart after checkout
          // We can add post-checkout logic here if necessary
        } else {
          alert('Your cart is empty.');
        }
      }
  }
};
</script>

<style>
/* Global styles (in this case: resources/css/app.css) */
</style>
