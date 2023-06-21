<script setup>
import { onActivated, ref } from 'vue';
import { useCounter } from '../pinia/useCounter';
const store = useCounter();
console.log(store);
</script>
<template>
    <router-link to="/login">
        Login
    </router-link>

    <button @click="store.increment">
        {{ store.count }}
    </button>
    <button @click="store.decrement">
        -
    </button>
</template>