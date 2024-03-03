<template>
    <MainTemplate>
      <template #product-list>
        <ProductList
          :products="products"
          @add-to-cart-pl="handleAddToCart"
        />
        <div class="text-center">
          <button class="btn btn-success m-2">
            <router-link to="/cart">Cart ({{ cartItemCount }})</router-link>
          </button>
        </div>
      </template>
    </MainTemplate>
  </template>
  
  <script>
  import MainTemplate from './MainTemplate.vue';
  import ProductList from './ProductList.vue';
  // import ShoppingCart from './ShoppingCart.vue';
  import { mapGetters, mapActions } from 'vuex';
  
  export default {
    name: 'HomePage',
    components: {
      MainTemplate,
      ProductList,
      // ShoppingCart
    },
    computed: {
      ...mapGetters(['products', 'cartItems', 'cartItemCount'])
    },
    methods: {
      ...mapActions([
        // 'fetchProducts',
        'handleAddToCart',
      ])
    },

    // Check if products wasn't already loaded before dispatch ("products" has no length before loaded).
    // This way "products" will not be loaded (refreshed) everytime user click "Back" from Cart".
    mounted() {
      if(!this.products.length) {
        this.$store.dispatch("fetchProducts");
      }
    }
  };
  </script>
  