<script setup>
import CHeader from './components/CHeader.vue';
import CAuth from "./components/CAuth.vue";
import { ref } from 'vue';

const isAuthed = ref(false);

const onLogin = (email, password) => {
  
  if (email == 'admin@loc.test' && password == 'pass') {
    isAuthed.value = true;
    return;
  }
  alert("введенные данные неверны!");
}
</script>

<template>
  <CHeader v-bind:isAuthed="isAuthed"></CHeader>
  <CAuth v-if="!isAuthed" @on-login="onLogin"></CAuth>
  <p v-else>welcome</p>
</template>
