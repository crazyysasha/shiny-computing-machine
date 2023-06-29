<script setup>
import { ref } from 'vue';
import { useSystemStore } from '@/stores/system.js';
const systemStore = useSystemStore();
console.log(systemStore.isDarkTheme);
// systemStore.toggleThemeMode();
</script>
<template>
    <div>
        <header class="dark:bg-black">
            <a href="">
                logo
            </a>
            <nav>
                <input type="checkbox" :checked="systemStore.isDarkTheme" @change="systemStore.toggleThemeMode()">
            </nav>
        </header>

    </div>
</template>