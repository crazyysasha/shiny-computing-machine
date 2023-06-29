import { computed, readonly } from "@vue/reactivity";
import { useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import { ref } from "vue";

// export const useSystemStore = defineStore('system', {
//     state: () => {
//         return {
//             themeMode: false,
//         };
//     },
//     actions: {
//         toggleThemeMode() {
//             this.themeMode = !this.themeMode;
//         }
//     },
//     getters: {
//         isDarkTheme() {
//             return this.themeMode;
//         }
//     },
// });


export const useSystemStore = defineStore('system', () => {

    const themeMode = useLocalStorage('isDarkTheme', false);
    // const themeMode = ref(!!(parseInt(localStorage.getItem('isDarkTheme')) ?? 0));

    function toggleThemeMode() {
        themeMode.value = !themeMode.value;
        // localStorage.setItem('isDarkTheme', themeMode.value ? 1 : 0)
    }

    return { isDarkTheme: readonly(themeMode), toggleThemeMode, };
});