<script setup>
import { onBeforeRouteUpdate, useRoute } from 'vue-router';

import { useUsers } from "../composables/users";
import { reactive } from 'vue';

const route = useRoute();

console.log();

const { users, updateUser } = useUsers();
const user = reactive({ ...users.value.find((val) => val.id == route.params.id) });


onBeforeRouteUpdate((to) => {
    const u = users.value.find((val) => val.id == to.params.id);
    user.id = u.id;
    user.name = u.name;
    user.email = u.email;
    user.password = u.password;
});
</script>

<template>
    <form action="" @submit.prevent="updateUser(user.id, user)">
        <label for="">
            name
        </label>
        <input type="text" v-model="user.name">
        <label for="">
            email
        </label>
        <input type="text" v-model="user.email">
        <label for="">
            password
        </label>
        <input type="text" v-model="user.password">
        <button> save</button>
    </form>
    <ul>
        <li v-for="{ id, name } in  users">
            <router-link :to="'/users/' + id">{{ name }}</router-link>
        </li>
    </ul>
</template>