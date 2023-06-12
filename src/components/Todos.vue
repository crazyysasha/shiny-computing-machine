<script setup>
import { ref, computed, watch } from 'vue'
import TodoItem from './TodoItem.vue'
import TodoCreate from './TodoCreate.vue'

const todos = ref(JSON.parse(localStorage.getItem('todos')) ?? []);

watch(todos, (val) => {
    localStorage.setItem('todos', JSON.stringify(val));
}, {
    deep: true
});


const todoCreate = (todo) => {
    todos.value = [...todos.value, todo]
}

const todoRemove = (index) => {
    todos.value.splice(index, 1);
}
</script>
<template>
    <div class="mx-auto text-center">
        <h1 class="font-extrabold text-4xl">Туду!</h1>
    </div>
    <div class="shadow-lg mt-8 max-w-lg mx-auto">
        <TodoItem v-for="(todo, index) in todos" :todo="todo" :index="index" @todoRemove="todoRemove">
        </TodoItem>
        <TodoCreate @todoCreate="todoCreate" />
    </div>
</template>