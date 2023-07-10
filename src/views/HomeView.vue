<script setup>
import { ref } from 'vue';
import { useTodosStore } from '../stores/todos';
import CSwitch from '../compoments/ui/CSwitch.vue';
import ProductCard from '../compoments/ProductCard.vue'

const store = useTodosStore();
const newTodo = ref('');
const newIsCompleted = ref(false);
const onCreate = () => {
  store.store(newTodo.value, newIsCompleted.value);
}


const isShowed = ref(false);


function onBeforeEnter(el) {
  console.log('before', el);
}

function onEnter(el, done) {
  console.log('active', el, done);
  el.style.transform = "scale(0.70)";
  el.style.transition = "all 0.5s ease";
  setTimeout(() => {

    el.style.transform = "scale(2)";

    done();
  }, 1000);
}

function onAfterEnter(el) {
  console.log('after', el);
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
      <CSwitch v-model="newIsCompleted" selected-label="is <b>finish</b>ed" unselected-label="is not finished">
        fdffd
      </CSwitch>
      <button>create</button>
    </form>


    <div class="mt-10">
      <button class="bg-slate-500 px-4 py-1.5" @click="isShowed = !isShowed">
        show/ hide
      </button>
      <!-- <Transition enter-from-class="opacity-0" enter-active-class="transition duration-1000 ease-in-out"
        enter-to-class="opacity-100">
        <p v-if="isShowed">this text is showed</p>
      </Transition> -->
      <Transition @before-enter="onBeforeEnter" @enter="onEnter" @after-enter="onAfterEnter">
        <p v-if="isShowed" class="max-w-max px-20">this text is showed</p>
      </Transition>
      <p>
        dfgdf
      </p>
    </div>
    <div class="flex gap-5">
      <ProductCard name="Redmi" price="100000 dollar" description="dfdsf">
        <template v-slot:default>
          <b>Red</b>mi
        </template>
        <template v-slot:description></template>
        <template v-slot:price>
          <span class="line-through">1 000 000 sum</span>
          <span class="font-bold">900 000 sum</span>
        </template>
      </ProductCard>
      <ProductCard name="Samsung" price="100 sum"></ProductCard>
      <ProductCard name="Iphone" price="1 rubl"></ProductCard>
    </div>
  </main>
</template>

<style>
/* .v-enter-active,
.v-leave-active {
  transition: opacity 2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
} */
</style>