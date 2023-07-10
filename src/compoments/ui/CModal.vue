<script setup>
import { ref } from 'vue';

const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false,
    }
});

const emit = defineEmits(['update:modelValue']);

const isLayerTransitioned = ref(false);
function closeLayer() {
    modalIsOpened.value = false;
    setTimeout(function () {
        emit('update:modelValue', !props.modelValue);

    }, 1);
}

const modalIsOpened = ref(false);

function cancelled(el) {
    console.log(el);
}
</script>

<template>
    <transition enter-from-class="backdrop-blur-0" enter-active-class="transition duration-[4s] ease-in-out"
        enter-to-class="backdrop-blur-sm" @after-enter=" isLayerTransitioned = true;"
        @before-enter="isLayerTransitioned = false;" @enter="modalIsOpened = true" leave-from-class="backdrop-blur-sm"
        @enter-cancelled="cancelled"
        leave-active-class="transition duration-[4s] ease-in-out" leave-to-class="backdrop-blur-0">
        <div @click="closeLayer" v-if="modelValue" class="fixed inset-0 flex justify-center items-center"
            :class="{ 'backdrop-blur-sm': isLayerTransitioned }">
            <transition  enter-from-class="opacity-0" enter-active-class="transition duration-[4s] ease-in-out"
                enter-to-class="opacity-100" leave-from-class="opacity-100" leave-active-class="transition duration-[4s] ease-in-out" leave-to-class="opacity-0">
                <div class="bg-white p-5 max-w-3xl w-max" v-if="modalIsOpened">
                    this is modal
                </div>
            </transition>
        </div>
    </transition>
</template>