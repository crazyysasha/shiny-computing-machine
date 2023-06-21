<script setup>
import { onUpdated } from 'vue';
import CHeader from './components/CHeader.vue';
import { onBeforeRouteUpdate } from 'vue-router';

onUpdated(() => {
  console.log("App component updated");
});


onBeforeRouteUpdate((to, from) => {
  console.log(to, from);
});
</script>

<template>
  <CHeader />
  
  <RouterView />
</template>

