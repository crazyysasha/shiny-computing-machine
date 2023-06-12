<script setup>
import { useAuth } from '../composables/auth';


const { isAuthed } = useAuth();
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