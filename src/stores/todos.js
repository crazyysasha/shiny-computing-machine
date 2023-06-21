import { computed, ref } from "@vue/reactivity";
import { defineStore } from "pinia";
import { readonly } from "vue";

export const useTodosStore = defineStore('todos', () => {
    const todos = ref([]);

    const id = ref(0);

    function store(text) {
        todos.value.push({
            id: id.value++,
            text,
            isCompleted: false
        });
    }

    function destroy(id) {
        todos.value = todos.value.filter(todo => todo.id !== id);
    }

    function toggle(id) {
        todos.value = todos.value.map((todo) => {
            if (todo.id == id) {
                todo.isCompleted = !todo.isCompleted;
            }
            return todo;
        });
    }

    const completedTodos = computed(() => todos.value.filter(todo => todo.isCompleted))

    const unCompletedTodos = computed(() => todos.value(todo => !todo.isCompleted))

    return {
        store,
        destroy,
        toggle,
        todos: readonly(todos),
        completedTodos,
        unCompletedTodos,
    };
});