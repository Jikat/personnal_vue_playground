//cs-ecommerce/src/views/account/Login.vue
<template>
  <div>
    <div>
      <div>
        <div>
          <div>
            <img
              src="https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png"
              width="150"
              alt=""
            />
          </div>
          <div>
            <div>
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <small id="emailHelp"
                >We'll never share your email with anyone else.</small
              >
            </div>
            <div>
              <label for="exampleInputPassword1">Password</label>
              <input type="password" />
            </div>
            <div>
              <input type="checkbox" />
              <label>Check me out</label>
            </div>
            <button @click="login()" type="submit">Login</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { accountStore } from "@/stores/account";
export default {
  name: "LoginPage",
  setup() {
    const account_store = accountStore();
    return { account_store };
  },
  methods: {
    login() {
      this.account_store.login();
    },
  },
};
</script>

<style></style>
