<template>
    <MainTemplate>
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
  // import ProductList from './ProductList.vue';
  import ShoppingCart from './ShoppingCart.vue';
  import { mapGetters, mapActions } from 'vuex';
  
  export default {
    name: 'Cart',
    components: {
      MainTemplate,
      // ProductList,
      ShoppingCart
    },
    computed: {
      ...mapGetters(['products', 'cartItems'])
    },
    methods: {
      ...mapActions([
        // 'handleUpdateCartQuantity',
        'handleDeleteFromCart',
        'handleCheckout'
      ]),

      // This method is not in map action due to multiple arguments that it carry.
      // Somehow, actions in store can only get single argument.
      // So multiple args needs to be wrapped in an object to be passed to actions in store.
      handleUpdateCartQuantity(item, quantityChange){
        this.$store.dispatch('handleUpdateCartQuantity', {payload1: item, payload2: quantityChange});
      }
    },
  };
  </script>
  