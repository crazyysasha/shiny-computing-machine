<script setup>
import { reactive } from 'vue';
import { useAuthStore } from '../../stores/auth';
import { watch } from 'vue';

const store = useAuthStore();


const state = reactive({
    email: '',
    password: '',
});

watch(() => state.email, () => {
        store.validation.email = null;
});

watch(() => state.password, () => {
        store.validation.password = null;
});
const onSubmitted = () => {
    store.login(state.email, state.password);
}
</script>

<template>
    <div class="min-h-screen flex bg-slate-600 items-center justify-center">
        <form class="flex flex-col gap-4" @submit.prevent="onSubmitted">
            <input type="text"
                class="border border-white/75 bg-transparent p-4 py-2 rounded-lg min-w-[20rem] placeholder:text-white text-white"
                placeholder="email" v-model="state.email" :class="{ 'border-red-500': !!store.validation.email }">
            <p v-for=" error in store.validation.email" class="text-red-500">
                {{ error }}
            </p>
            <input type="password"
                class="border border-white/75 bg-transparent p-4 py-2 rounded-lg min-w-[20rem] placeholder:text-white text-white"
                placeholder="password" v-model="state.password" :class="{ 'border-red-500': !!store.validation.password }">
            <p v-for=" error in store.validation.password" class="text-red-500">
                {{ error }}
            </p>
            <button class="bg-green-500 p-4 py-2 rounded-lg disabled:bg-slate-200" :disabled="store.validation.email != null || store.validation.password != null">
                login
            </button>
        </form>
    </div>
</template>