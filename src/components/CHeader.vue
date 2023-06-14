<script setup>
import { useAuth } from '../composables/auth';


const { isAuthed } = useAuth();
</script>
<template>
    <header>
        <a href="">logo</a>
        <nav>
            <router-link to="/">home</router-link>
            <router-link to="/login" v-if="!isAuthed">login</router-link>
            <a href="" v-if="isAuthed">profile</a>
        </nav>
    </header>
</template>