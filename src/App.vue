<script setup>
import { ref } from 'vue';



const todos = ref(JSON.parse(localStorage.getItem('todos')) ?? []);

const newTodo = ref();

const createTodo = () => {

  todos.value.push({ name: newTodo.value, isCompleted: false });
  localStorage.setItem('todos', JSON.stringify(todos.value));
  newTodo.value = '';
}

const onCompleted = (todoIndex) => {
  todos.value[todoIndex].isCompleted = true;
  
  localStorage.setItem('todos', JSON.stringify(todos.value));
}

const deleteTodo = (todoIndex) => {
  todos.value.splice(todoIndex, 1);
  // delete todos.value[todoIndex];
  localStorage.setItem('todos', JSON.stringify(todos.value));
}
</script>

<template>
  <ul>
    <li v-for="{ name, isCompleted }, index in todos" :class="{ 'line-through': isCompleted }">
      {{ index + 1 }} {{ name }}
      <button v-if="!isCompleted" @:click="onCompleted(index)">
        complete
      </button>
      <button @:click="deleteTodo(index)">
        delete
      </button>
    </li>
  </ul>
  <form @:submit.prevent="createTodo">
    <input type="text" name="" id="" v-model="newTodo">
    <button>
      add todo
    </button>
  </form>
</template>
