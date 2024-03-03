<template>
  <div id="products-page">
    <h2>Semua Produk</h2>
    <table class="table w-100">
      <thead>
        <tr>
          <th class="col-3">Name</th>
          <th class="col-4">Description</th>
          <th class="col-1">Stock</th>
          <th class="col-2">Price</th>
          <th class="col-2">Action</th>
        </tr>
      </thead>
      <tbody>
        <ProductItem
          v-for="product in products"
          :key="product.id"
          :product="product"
          @add-to-cart-pi="addToCartPl"
        />
      </tbody>
    </table>
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue';

export default {
  name: 'ProductList',
  components: {
    ProductItem
  },
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  methods: {
    addToCartPl(product) {
      console.log('This is from ProductList', product);
      this.$emit('add-to-cart-pl', product);
    }
  }
};
</script>

<!-- <style>
#products-page {
  width: 100%;
}
</style> -->