// store/index.js
// import Vue from 'vue';
// import Vuex from 'vuex';
import { createStore } from 'vuex';

import axios from 'axios'

// Vue.use(Vuex);

// export default new Vuex.Store

export default createStore({
  state: {
    // products: [
    //   { id: 1, name: 'Indomie Goreng Rendang', description: 'Masakan instan terenak di dunia', stock: 10, price: 3900, category: 'food' },
    //   { id: 2, name: 'Aqua Gelas', description: 'Tinggal glek..ahhh', stock: 100, price: 500, category: 'beverages' },
    //   { id: 3, name: 'Mie Gelas Rendang', description: 'Mie instant khusus anak kosan', stock: 3, price: 1500, category: 'food' },
    //   { id: 4, name: 'Aqua Botol', description: 'Beberapa kali glek..glek..glek', stock: 49, price: 5000, category: 'beverages' },
    //   { id: 5, name: 'Bakmi mewah', description: 'Kalau anak kosan jangan macam2 deh', stock: 80, price: 10000, category: 'food' },
    //   { id: 6, name: 'Aqua Galon', description: 'Sekeluarga glek..glek..glek', stock: 21, price: 20000, category: 'beverages' },
    //   { id: 7, name: 'Kacang Goreng', description: 'Cemilan nonton bola', stock: 19, price: 1000, category: 'food' },
    //   { id: 8, name: 'Tebs Botol', description: 'Segeeer..cssshhh', stock: 30, price: 6000, category: 'beverages' }
    // ],
    products: [], // Initialized as empty, to be filled by fetchProducts action
    cartItems: []
  },
  getters: {
    products: state => state.products,
    cartItems: state => state.cartItems,
    cartItemCount: state => state.cartItems.reduce((total, item) => total + item.quantity, 0)
  },
  actions: {
    async fetchProducts(context) {
      let response = await axios.get("api/getAllProducts");

      context.commit("SET_PRODUCTS", response.data);
    },
    handleAddToCart({ commit }, productToAdd) {
      commit('ADD_TO_CART', productToAdd);
    },
    handleUpdateCartQuantity({ commit }, {payload1, payload2}) {
        // console.log("Update quantity payload:", cartItemToUpdate, quantityChange);
        // console.log("Update quantity payload:", payload1, payload2);
      commit('UPDATE_CART_QUANTITY', {payload1, payload2});
    },
    handleDeleteFromCart({ commit }, cartItemToDelete) {
      commit('DELETE_FROM_CART', cartItemToDelete);
    },
    handleCheckout({ commit }) {
      commit('CHECKOUT');
    }
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    ADD_TO_CART(state, productToAdd) {
      let product = state.products.find(p => p.id === productToAdd.id);
      if (product && product.stock > 0) {
        product.stock -= 1;
        let cartItem = state.cartItems.find(item => item.id === productToAdd.id);
        if (cartItem) {
          cartItem.quantity += 1;
        } else {
          state.cartItems.push({
            ...productToAdd,
            quantity: 1
          });
        }
      }
    },
    UPDATE_CART_QUANTITY(state, { payload1, payload2 }) {
      console.log("Update quantity payload:", payload1.id, payload2);
      let product = state.products.find(p => p.id === payload1.id);
      let cartItem = state.cartItems.find(item => item.id === payload1.id);
      
      if (cartItem && product) {
        let newQuantity = cartItem.quantity + payload2;
        if (newQuantity <= 0) {
          this.commit('DELETE_FROM_CART', cartItem);
        } else if (newQuantity <= product.stock + cartItem.quantity) {
          product.stock -= payload2;
          cartItem.quantity = newQuantity;
        }
      }
    },
    DELETE_FROM_CART(state, cartItemToDelete) {
      let product = state.products.find(p => p.id === cartItemToDelete.id);
      if (product) {
        product.stock += cartItemToDelete.quantity;
      }
      state.cartItems = state.cartItems.filter(item => item.id !== cartItemToDelete.id);
    },
    CHECKOUT(state) {
      if (state.cartItems.length > 0) {
        let total = state.cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        alert(`The total price to pay is: Rp. ${total}`);
        state.cartItems = []; // Clear the cart after checkout
        // We can add post-checkout logic here if necessary
      } else {
        alert('Your cart is empty.');
      }
    }
  }
});
