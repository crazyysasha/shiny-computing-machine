<script setup>
import { ref } from 'vue';
import DarkMode  from './DarkMode.vue'

const isDarkMode = ref(false);
</script>
<template>
    <header>
        <a href="">
            logo
        </a>
        <nav>
            <a href="">
                home
            </a>
            <a href="">
                profile
            </a>
            </nav>

        <div><DarkMode></DarkMode></div>
    </header>
</template>