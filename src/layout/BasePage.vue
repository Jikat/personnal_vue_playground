<template>
  <div>
    <div>
      <nav>
        <router-link to="/">eCommerce App</router-link>
        <div>
          <div v-if="user.photoURL">
            <img :src="user.photoURL" alt="User's profile picture" />
            <router-link to="/cart">
              <img
                src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG38.png"
                width="50"
                alt="Shopping Cart"
              />
              <span>{{ cart.length }}</span>
            </router-link>
          </div>
          <router-link v-else to="/login">Login</router-link>
        </div>
      </nav>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { accountStore } from "@/stores/account";
import { productStore } from "@/stores/product";

export default {
  name: "BasePage",
  setup() {
    const account_store = accountStore();
    const product_store = productStore();
    return { account_store, product_store };
  },
  computed: {
    user() {
      return this.account_store.user;
    },
    cart() {
      return this.product_store.cart;
    },
  },
};
</script>

<style></style>
