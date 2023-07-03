<script setup>
import { defineProps } from 'vue';
</script>
<template>
<label class="flex gap-2">
    <div class=" w-10 border border-green-600 rounded-full p-0.5 ">
        <div class="h-4 w-4 rounded-full border border-green-600 transition-all duration-200 ml-0"
            :class="{ '!ml-[18px]': isDarkMode }"></div>
    </div>
    <input type="checkbox" hidden v-model="isDarkMode">
    <span>

        {{ isDarkMode ? 'is dark theme' : 'light theme' }}
    </span>
</label>
</template>