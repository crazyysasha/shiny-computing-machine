<script setup>
import { useAuthStore } from '../../stores/auth';
import { ref } from 'vue';
import { useCounterStore } from "../../stores/counter";
const authStore = useAuthStore();

const counter = useCounterStore();
const name = ref('');
const surname = ref('');
const age = ref('');
const email = ref('');
const password = ref('');
const passwordConfirmation = ref('');


const onRegister = () => {


    authStore.$patch({
        name: name.value,
        surname: surname.value,
        age: age.value,
        password: password.value,
    });


    authStore.$patch((state) => {
        if (state.email == "asdsa@sfd.sd") {
            alert("ti ne mojesh pemenyat' svoy email");
            return;
        }

        state.email = email.value;
        return { name: "sdfsd" };
    })

}
</script>

<template>
    <div class="register">
        <h1>Register</h1>
        <form @submit.prevent="onRegister">
            <div>
                <label for="name">name</label>
                <input type="text" id="name" v-model="name" />
            </div>
            <div>
                <label for="surname">surname</label>
                <input type="text" id="surname" v-model="surname" />
            </div>
            <div>
                <label for="email">email</label>
                <input type="text" id="email" v-model="email" />
            </div>
            <div>
                <label for="age">age</label>
                <input type="number" id="age" v-model="age" />
            </div>
            <div>
                <label for="password">Password</label>
                <input type="password" id="password" v-model="password" />
            </div>
            <div>
                <label for="passwordConfirmation">Password Confirmation</label>
                <input type="password" id="passwordConfirmation" v-model="passwordConfirmation" />
            </div>
            <button type="submit">Register</button>
        </form>


        <div>
            <button @click="counter.increment">
                +
            </button>
            {{ counter.count }}
            <button @click="counter.decrement">
                -
            </button>
        </div>
    </div>
</template>