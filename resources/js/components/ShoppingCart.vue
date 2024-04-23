<template>
  <div>
    <h2>Keranjang Belanja</h2>
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <ShoppingCartItem
          v-for="item in cartItems"
          :key="item.id"
          :item="item"
          @update-cart-quantity="handleUpdateCartQuantity"
          @remove-from-cart="handleDeleteFromCart"
        />
      </tbody>
    </table>
    <div class="text-end">
      <h3>Total: Rp. {{ total }}</h3>
      <button class="btn btn-primary mx-2" @click="back()">Back</button>
      <button class="btn btn-success" @click="handleCheckout" :disabled="!cartItems.length">Checkout</button>
    </div>
  </div>
</template>

<script>
import { setBlockTracking } from 'vue';
import ShoppingCartItem from './ShoppingCartItem.vue';

export default {
  name: 'ShoppingCart',
  components: {
    ShoppingCartItem
  },
  props: {
    cartItems: {
      type: Array,
      required: true
    }
  },
  computed: {
    total() {
      return this.cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    }
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    handleUpdateCartQuantity(item, quantityChange) {
      console.log('This is from ShoppingCart', quantityChange);
      this.$emit('update-cart-quantity', item, quantityChange);
    },
    handleDeleteFromCart(item) {
      this.$emit('remove-from-cart', item);
    },
    handleCheckout() {
      this.$emit('checkout');
    }
  }
};
</script>
