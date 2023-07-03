<script setup>
import { ref } from 'vue';
import CSwitch from '../CSwitch.vue';

const isDarkMode = ref(false);
const isDisabled = ref(false);
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
            <CSwitch v-model="isDarkMode" v-model:disabled="isDisabled" selected-label="is dark theme" unselected-label="light theme"></CSwitch>
        </nav>
    </header>
</template>