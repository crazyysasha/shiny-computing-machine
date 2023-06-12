<script setup>
const emit = defineEmits()

defineProps({
  index: {
    type: Number,
    required: true
  },
  todo: {
    body: {
      type: String,
      required: true
    },
    completed: {
      type: Boolean,
      required: true
    }
  }
})
const todoRemove = (index) => {
  emit('todoRemove', index)
}
const todoToggle = (index,todo) => {
  todo.completed = !todo.completed
  emit('todoToggle', index)
}
</script>
<template>
  <div
    @click="todoToggle(index,todo)"
    :class="{
      'bg-gray-200': todo.completed,
      'text-gray-500': todo.completed,
      'line-through': todo.completed
    }"
    class="px-4 py-2 border-b flex hover:bg-indigo-100"
  >
    <div>
      {{ todo.body }}
    </div>
    <div class="ml-auto">
      <button
        @click.stop="todoRemove(index)"
        class="items-center justify-center text-gray-400 hover: text-gray-700"
      >
        <span class="sr-only">Remove todo</span>
        <svg
          class="h-8 w-8 text-black"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  </div>
</template>
