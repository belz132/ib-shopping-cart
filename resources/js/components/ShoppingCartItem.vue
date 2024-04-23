<template>
    <tr>
      <td>{{ item.name }}</td>
      <td>
        <Button :label="'-'" @click="updateQuantity(-1)" :isDisabled="item.quantity <= 1" />
        {{ item.quantity }}
        <Button :label="'+'" @click="updateQuantity(1)" :isDisabled="item.quantity > item.stock" />
      </td>
      <td>Rp. {{ item.price * item.quantity }}</td>
      <td><Button type="danger" label="Delete" @click="removeFromCart" /></td>
    </tr>
  </template>
  
  <script>
  import Button from './Button.vue';
  
  export default {
    name: 'ShoppingCartItem',
    components: {
      Button
    },
    props: {
      item: {
        type: Object,
        required: true
      }
    },
    methods: {
      updateQuantity(change) {
        console.log('This is from ShoppingCartItem', change);
        this.$emit('update-cart-quantity', this.item, change);
      },
      removeFromCart() {
        this.$emit('remove-from-cart', this.item);
      }
    }
  };
  </script>
  