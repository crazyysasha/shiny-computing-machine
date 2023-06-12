<script setup>
defineProps({
    isAuthed: {
        type: Boolean,
        default: false,
        required: true,
    }
});
</script>
<template>
    <header>
        <a href="">logo</a>
        <nav>
            <a href="">home</a>
            <a href="" v-if="isAuthed">profile</a>
        </nav>
    </header>
</template>