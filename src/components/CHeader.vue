<script setup>
import { useAuth } from '../composables/auth';

const { isAuthed, onLogout } = useAuth();
</script>
<template>
    <header>
        <a href="">logo</a>
        <nav>
            <a href="">home</a>
            <a href="" v-if="isAuthed">profile</a>
            <a href="" @click.prevent="onLogout" v-if="isAuthed">logout</a>
        </nav>
    </header>
</template>