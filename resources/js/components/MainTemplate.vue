<template>
    <div class="container mt-3">
      <div class="row">
        <div>
          <!-- Slot for ProductList -->
          <slot name="product-list"></slot>
        </div>
        <div>
          <!-- Slot for ShoppingCart -->
          <slot name="shopping-cart"></slot>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MainTemplate',
  };
  </script>
  
  <style>
  /* We add some styling specific to the layout here */
  </style>
  