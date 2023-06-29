<script setup>
import { ref } from 'vue';
import { useTodosStore } from '../stores/todos';


const store = useTodosStore();
const newTodo = ref('');

const onCreate = () => {
  store.store(newTodo.value);
}


</script>

<template>
  <main class="dark:bg-slate-950">
    <ul v-if="store.todos.length">
      <li v-for="todo in  store.todos" :class="{ 'line-through': todo.isCompleted }">
        {{ todo.text }}
        <button @click="store.destroy(todo.id)">delete</button>
        <button @click="store.toggle(todo.id)">
          {{ todo.isCompleted ? 'uncomplete' : 'complete' }}
        </button>
      </li>
    </ul>
    <p v-else>
      todos not found
    </p>
    <form @submit.prevent="onCreate">
      <input type="text" id="" v-model="newTodo">
      <button>create</button>
    </form>
  </main>
</template>
