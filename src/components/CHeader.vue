<script setup>
const logout = () => {
    isAuthed.value = false;
}
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
            <a href="" v-if="isAuthed" @click="logout">logout</a>
        </nav>
    </header>
</template>