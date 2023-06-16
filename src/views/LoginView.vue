<script setup>
import { ref, watch } from 'vue';
import { useAuth } from '../composables/auth.js'
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');

const router = useRouter();

const { onLogin, isAuthed } = useAuth();

watch(isAuthed, () => {
    router.push({name: 'home'});
});
</script>
<template>
    <main>
        <form class="p-10 flex flex-col" @submit.prevent="onLogin(email, password)">
            <div class="flex flex-col">
                <label for="">email</label>
                <input class="border border-gray-400 rounded-xl px-4 py-2" type="email" v-model="email">
            </div>
            <div class="flex flex-col">
                <label for="">password</label>
                <input class="border border-gray-400 rounded-xl px-4 py-2" type="password" v-model="password">
            </div>
            <button class="bg-sky-700 mt-5 rounded-xl px-4 py-2">
                войти
            </button>
        </form>
    </main>
</template>