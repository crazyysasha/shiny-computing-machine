<script setup>
import { useAuth } from '../composables/auth';
import LoginLink from './LoginLink.vue';



const { isAuthed, onLogout } = useAuth();
</script>

<template>
    <header>
        <a href="">
            logo
        </a>
        <nav>
            <router-link to="/">
                Home
            </router-link>
            <router-link to="/about">
                About
            </router-link>
            <keep-alive>
                <login-link v-if="!isAuthed"></login-link>
            </keep-alive>
            <button @click="onLogout">
                logout
            </button>
        </nav>
    </header>
</template>