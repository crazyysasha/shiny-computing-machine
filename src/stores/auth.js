import { defineStore } from "pinia";
import { reactive, readonly } from "vue";

export const useAuthStore = defineStore('auth', {
    state: () => ({
        name: 'asd',
        surname: '',
        age: '',
        email: '',
        password: '',
    }),
    actions: {
        login() {
            this.name = 'asd';
        },
    },
    getters: {
        getName() {
            return this.name;
        }
    },
});


// export const useAuthStore = defineStore('auth', () => {
//     const state = reactive({
//         name: 'asd',
//         surname: '',
//         age: '',
//         email: '',
//         password: '',
//     });

//     function login() {

//     }
//     function logout() {
//         state.name = '';
//         state.surname = '';
//         state.age = '';
//         state.email = '';
//         state.password = '';

//     }
//     return {
//         name: readonly(state.name),
//         login,
//     };
// });