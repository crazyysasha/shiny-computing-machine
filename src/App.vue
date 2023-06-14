<script setup>
import CHeader from '@/components/CHeader.vue';
import { useAuth } from '@/composables/auth';


const { isAuthed } = useAuth();
</script>

<template>
  <CHeader></CHeader>
  <router-view>
  </router-view>
</template>
