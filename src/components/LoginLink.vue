<script setup>
import { onActivated, ref } from 'vue';

 onActivated(() => {
    console.log('activated');

    count.value = 0;
 });

 const count = ref(0);
</script>
<template>
    <router-link to="/login" >
        Login
    </router-link>

    <button @click="count++">
        {{ count }}
    </button>
</template>