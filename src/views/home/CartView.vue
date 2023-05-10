<template>
  <div>
    <div>
      <div>
        <a v-for="item in cart" :key="item.id" href="#">
          <img :src="item.imageUrl" alt height="60" width="60" />
          <p>{{ item.name }}</p>
          <div>
            <div>
              <p>Unique Price</p>
              <p>${{ item.price }}</p>
            </div>
            <div>
              <p>Total Price</p>
              <p>${{ item.price * item.quantity }}</p>
            </div>
            <div>
              <p>Quantity</p>
              <p>{{ item.quantity }}</p>
            </div>
          </div>
        </a>
        <div>
          <p>Total</p>
          <div>
            <p>Total Price</p>
            <p>${{ totalPrice }}</p>
          </div>
        </div>
        <button @click="checkout()" type="button">Checkout</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "pinia";
export default {
  name: "CartView",
  data() {
    return {
      totalPrice: 0,
    };
  },
  computed: {
    ...mapState("product", ["cart"]),
    ...mapState("account", ["user"]),
  },
  methods: {
    ...mapActions("product", ["removeFromCart"]),
    calcPrice() {
      this.cart.forEach((element) => {
        this.totalPrice += element.price * element.quantity;
      });
    },
    checkout() {
      const vm = this;
      setTimeout(() => {
        vm.removeFromCart();
        alert("Purchase successful!");
        vm.$router.push("/");
      }, 2000);
    },
  },
  mounted() {
    this.calcPrice();
  },
};
</script>
<style></style>
