<template>
  <div>
    <div>
      <div>
        <div>
          <img alt />
        </div>
      </div>
      <div>
        <div>{{ product.name }}</div>
        <p>{{ product.content }}</p>
        <div>
          <p>Price</p>
          <p>${{ product.price }}</p>
        </div>
        <AddToCart :product="product" v-if="user.uid" />
      </div>
    </div>
  </div>
</template>
<script>
import { accountStore } from "@/stores/account";
import { productStore } from "@/stores/product";

import AddToCart from "../../components/details/AddToCart";
export default {
  name: "ProductDetails",
  setup() {
    const account_store = accountStore();
    const product_store = productStore();
    return { account_store, product_store };
  },
  data() {
    return {
      isInCardProp: false,
    };
  },
  computed: {
    user() {
      return this.account_store.user;
    },
    product() {
      return this.product_store.getOneProduct;
    },
  },
  components: { AddToCart },
  methods: {
    productDetails(id) {
      this.product_store.productDetails(id);
    },
  },
  mounted() {
    this.productDetails(this.$route.params.idProduct);
  },
};
</script>

<style></style>
