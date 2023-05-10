<template>
  <div>
    <div>
      <div>
        <div v-for="product in products" :key="product.id">
          <ProductCard :product="product"></ProductCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import ProductCard from "./ProductCard.vue";

export default {
  name: "ProductGrid",
  computed: {
    ...mapState("product", ["products"]),
  },
  components: { ProductCard },
  methods: {
    ...mapActions("product", ["getAllProducts", "addToCart", "removeFromCart"]),
  },
  mounted() {
    this.getAllProducts();
  },
};
</script>
