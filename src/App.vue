<script setup>
import CHeader from './components/CHeader.vue';
import CAuth from "./components/CAuth.vue";
import { useAuth } from './composables/auth';


const { isAuthed } = useAuth();
</script>

<template>
  <CHeader></CHeader>
  <CAuth v-if="!isAuthed"></CAuth>
  <p v-else>welcome</p>
</template>
