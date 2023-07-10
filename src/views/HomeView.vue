<script setup>
import { ref } from 'vue';
import { useTodosStore } from '../stores/todos';
import CSwitch from '../compoments/CSwitch.vue';


const store = useTodosStore();
const newTodo = ref('');
const newIsCompleted = ref(false);
const onCreate = () => {
  store.store(newTodo.value, newIsCompleted.value);
}


</script>

<template>
  <main>
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
      <CSwitch v-model="newIsCompleted" selected-label="is finished" unselected-label="is not finished"></CSwitch>
      <button>create</button>
    </form>


  </main>
</template>
