<script setup>
import { ref } from 'vue';
import CSwitch from '../ui/CSwitch.vue';
import CModal from '../ui/CModal.vue';

const isDarkMode = ref(false);
const isDisabled = ref(false);

const regModalIsOpened = ref(false);

function onOpenRegModalClicked() {
    regModalIsOpened.value = !regModalIsOpened.value;
}
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
            <CSwitch v-model="isDarkMode" v-model:disabled="isDisabled" selected-label="is dark theme"
                unselected-label="light theme"></CSwitch>
            <button @click="onOpenRegModalClicked">
                register
            </button>
            <c-modal ref="regModal" v-model="regModalIsOpened"></c-modal>
            <button>
                login
            </button>
            <c-modal></c-modal>
        </nav>
    </header>
</template>