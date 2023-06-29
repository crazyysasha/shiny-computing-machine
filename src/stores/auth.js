import axios from "axios";
import { defineStore } from "pinia";
import { readonly, ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
    const user = ref(null);

    const token = ref();


    function register(email, password, name) {

    }

    async function login(email, password) {
        const response = await axios.post(import.meta.VITE_APP_URL + "/api/v1/auth/login", { email, password });
        console.log(response);
    }

    function profile() {

    }

    function update() {

    }

    function logout() {

    }


    return {
        user: readonly(user),
        register,
        login,
        logout,
        profile,
    };

});