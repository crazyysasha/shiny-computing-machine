<script setup>
import { ref } from 'vue'

const emit = defineEmits()
const todoBody = ref('')
const todoBodyInput = ref(null)
const todoCreate = () => {
    if (!todoBody.value) {
        return null
    }
    emit('todoCreate', {
        body: todoBody.value,
        completed: false,
    })
    todoBody.value = ''
    todoBodyInput.value.focus()
}
</script>
<template>
  <div class="">
    <div class="flex">
      <input
      v-model="todoBody"
        @keyup.enter="todoCreate"
        ref="todoBodyInput"
        class="w-full px-4 py-2 focus: outline-none"
        type="text"
      />
      <button
        @click="todoCreate"
        class="px-8 py-2 bg-blue-400 text-white hover:bg-blue-800 transition ease-in-out"
      >
        Add
      </button>
    </div>
  </div>
</template>
