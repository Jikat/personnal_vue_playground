import { createRouter, createWebHistory } from "vue-router";
import ProductGrid from "../views/home/ProductGrid";
import CartView from "../views/home/CartView";
import ProductDetails from "../views/home/ProductDetails";
import LoginPage from "../views/account/LoginPage";

const routes = [
  {
    path: "/",
    name: "product-grid",
    component: ProductGrid,
  },
  {
    path: "/cart",
    name: "cart",
    component: CartView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/details/:id",
    name: "product-details",
    component: ProductDetails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
