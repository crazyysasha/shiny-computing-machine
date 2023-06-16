<script setup>
import { useAuth } from '../composables/auth';

const { user } = useAuth();
</script>

<template>
  <main>
    welcome, {{ user.name }}
  </main>
</template>
