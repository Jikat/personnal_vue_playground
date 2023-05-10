<template>
  <div>
    <div>
      <label>Quantity</label>
      <input type="number" v-model="quantity" />
    </div>
    <button
      v-if="!isInCardProp"
      @click.stop="addToCart({ product, quantity })"
      type="button"
    >
      ADD TO CART
    </button>
    <button v-else @click.stop="removeFromCart(product.id)" type="button">
      REMOVE FROM CART
    </button>
  </div>
</template>
<script>
import { mapActions, mapState } from "pinia";
export default {
  name: "AddToCart",
  props: ["product"],
  data() {
    return {
      isInCardProp: false,
      quantity: 1,
    };
  },
  computed: {
    ...mapState("product", ["cart"]),
  },
  methods: {
    ...mapActions("product", ["addToCart", "removeFromCart"]),
    isInCart(id) {
      for (let index = 0; index < this.cart.length; index++) {
        const element = this.cart[index];
        if (element.id === id) {
          return true;
        }
      }
      return false;
    },
  },
  watch: {
    product(val) {
      this.isInCardProp = this.isInCart(val.id);
    },
    cart() {
      this.isInCardProp = this.isInCart(this.product.id);
    },
    quantity(val) {
      if (val <= 0) {
        this.quantity = 1;
      }
    },
  },
};
</script>
<style></style>
