import { defineStore } from "pinia";
import axios from "axios";

export const productStore = defineStore("product", {
  state: () => ({
    products: [],
    product: {},
    cart: [],
  }),

  getters: {
    getAllProducts: (state) => state.products,
    getOneProduct: (state) => state.product,
    getCart: (state) => state.cart,
  },

  actions: {
    setAllProducts(value) {
      this.products = value;
    },
    setOneProduct(value) {
      this.product = value;
    },
    setCart(value) {
      this.cart = value;
    },
    getProductsFromWeb() {
      let url =
        "https://my-json-server.typicode.com/Nelzio/ecommerce-fake-json/products";
      axios
        .get(url)
        .then((response) => {
          this.setAllProducts(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    productDetails(id) {
      let url =
        "https://my-json-server.typicode.com/Nelzio/ecommerce-fake-json/products";
      axios
        .get(url, { params: { id: id } })
        .then((response) => {
          this.setOneProduct(response.data[0]);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    addToCart(payload) {
      let cart = this.cart;
      let data = payload.product;
      data["quantity"] = payload.quantity;
      cart.push(data);
      this.setCart(cart);
    },
    removeFromCart(id) {
      let cart = [];
      let self = this;
      if (id) {
        for (let index = 0; index < self.cart.length; index++) {
          const element = self.cart[index];
          if (element.id !== id) {
            cart.push(element);
          }
        }
      }
      this.setCart(cart);
    },
  },
});
