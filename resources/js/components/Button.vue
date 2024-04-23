<template>
    <button
      :class="['btn', buttonType, { 'disabled': isDisabled }]"
      @click="clickHandler"
      :disabled="isDisabled">
      {{ label }}
    </button>
  </template>
  
  <script>
  export default {
    name: 'Button',
    props: {
      label: {
        type: String,
        required: true
      },
      type: {
        type: String,
        default: 'primary' // default type is 'primary'
      },
      isDisabled: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      buttonType() {
        // Maps 'type' prop to Bootstrap button classes
        const types = {
          primary: 'btn-primary',
          secondary: 'btn-secondary',
          danger: 'btn-danger',
          success: 'btn-success',
          // Add more mappings as needed
        };
        return types[this.type] || 'btn-primary';
      }
    },
    methods: {
      clickHandler() {
        if (!this.isDisabled) {
          console.log('This is from Button');
          this.$emit('clicked'); // Emit a 'click' event for parent components to listen to
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* We can add custom styles here if needed, or rely on Bootstrap classes */
  .btn.disabled {
    pointer-events: none;
    opacity: 0.50;
  }
  </style>
  