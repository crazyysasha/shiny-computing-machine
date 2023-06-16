<script setup>
import { useAuth } from '../composables/auth';



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
            <router-link to="/login" v-if="!isAuthed">
                Login
            </router-link>
            <button @click="onLogout">
                logout
            </button>
        </nav>
    </header>
</template>