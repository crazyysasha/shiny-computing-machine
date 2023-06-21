import { defineStore } from "pinia/dist/pinia";
import { readonly, ref, watch } from "vue";

export const useCounter = defineStore('counter', () => {
    const count = ref(0);
    watch(count, (val) => {
        console.log(val);
    });
    function increment() {
        count.value++;
    }
    function decrement() {
        count.value--;
    }
    return {
        count: readonly(count),
        increment,
        decrement,
    }
});