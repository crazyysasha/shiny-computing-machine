import axios from "axios";
import { data } from "browserslist";
import { defineStore } from "pinia";
import { reactive, readonly } from "vue";

// export const useAuthStore = defineStore('auth', {
//     state: () => ({
//         name: 'asd',
//         surname: '',
//         age: '',
//         email: '',
//         password: '',
//     }),
//     actions: {
//         login() {
//             this.name = 'asd';
//         },
//     },
//     getters: {
//         getName() {
//             return this.name;
//         }
//     },
// });


export const useAuthStore = defineStore('auth', () => {
    const state = reactive({
        name: '',
        email: '',
        password: '',
    });

    const validation = reactive({
        email: null,
        password: null,
    });

    async function login(email, password) {
        try {
            const response = await axios.post('http://it-termez.uz/api/v1/auth/login', {
                email: email,
                password: password,
            });
            axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.token.value}`;
            
            profile();
        } catch (error) {

            validation.email = error.response.data.errors.email;
            validation.password = error.response.data.errors.password;
        }
        // fetch('http://it-termez.uz/api/v1/auth/login', {
        //     method: "POST",
        //     headers: {
        //         "Accept": "application/json",
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //         email: email,
        //         password: password,
        //     }),
        // }).then(response => response.json()).then(data => console.log(data));
    }

    function logout() {
    }


    function register() {

    }
    async function profile() {
        const response = await axios.post('http://it-termez.uz/api/v1/auth/profile');
        console.log(response.data);
    }
    return {
        state: readonly(state),
        validation,
        login,
        logout,
        register,
        profile,
    };
});