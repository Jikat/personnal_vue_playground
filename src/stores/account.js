import { defineStore } from "pinia";
import axios from "axios";

export const accountStore = defineStore("account", {
    state: () => ({
        userData: {},
    }),

    getters: {
        user: (state) => state.userData,
    },

    actions: {
        setUserData(value) {
            this.userData = value;
        },
        login() {
            let url = "https://randomuser.me/api/";
            let self = this;
            axios
                .get(url)
                .then(function (response) {
                    let userData = {
                        displayName: response.data.results[0].name.first,
                        email: response.data.results[0].email,
                        photoURL: response.data.results[0].picture.thumbnail,
                        uid: response.data.results[0].login.uuid,
                    };
                    self.setUserData(userData);
                    self.$router.push("/");
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
    },
});
