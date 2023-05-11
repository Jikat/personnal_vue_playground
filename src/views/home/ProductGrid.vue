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
import ProductCard from "./ProductCard.vue";
import { productStore } from "@/stores/product";

export default {
  name: "ProductGrid",
  setup() {
    const product_store = productStore();
    return { product_store };
  },
  computed: {
    products() {
      return this.product_store.getAllProducts;
    },
  },
  components: { ProductCard },
  methods: {
    getProductsFromWeb() {
      this.product_store.getProductsFromWeb();
    },
    addToCart(product) {
      this.product_store.addToCart(product);
    },
    removeFromCart(product) {
      this.product_store.removeFromCart(product);
    },
  },
  mounted() {
    this.getProductsFromWeb();
  },
};
</script>
