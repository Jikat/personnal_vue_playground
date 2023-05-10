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
import { mapState } from "pinia";

export default {
  name: "BasePage",
  computed: {
    ...mapState("account", ["user"]),
    ...mapState("product", ["cart"]),
  },
};
</script>

<style></style>
