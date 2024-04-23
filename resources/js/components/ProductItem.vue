<template>
    <tr>
      <td>{{ product.name }}</td>
      <td>{{ product.description }}</td>
      <td>{{ product.stock }}</td>
      <td>Rp. {{ product.price }}</td>
      <td>
        <Button
          :label="'Add to Cart'"
          type="'primary'"
          :isDisabled="product.stock <= 0"
          @clicked="addToCartPi"
        />
      </td>
    </tr>
  </template>
  
  <script>
  import Button from './Button.vue';
  
  export default {
    name: 'ProductItem',
    components: {
      Button
    },
    props: {
      product: {
        type: Object,
        required: true
      }
    },
    methods: {
      addToCartPi() {
        console.log('This is from ProductItem');
        this.$emit('add-to-cart-pi', this.product);
      }
    }
  };
  </script>

  