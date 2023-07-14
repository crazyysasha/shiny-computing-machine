<script setup>
import { RouterLink, RouterView } from 'vue-router'
import CHeader from './compoments/site/CHeader.vue';
import { onMounted, provide, ref, watch } from 'vue';

import { useMouse } from './composables/mouse'

const products = ref([
  { name: 'mac' },
  { name: "Tyoma" }
]);
const newProduct = ref('');

provide('products', products);

const { x, y } = useMouse();

const isHolding = ref(false);
const canva = ref();
onMounted(() => {

  canva.value.height = window.innerHeight;
  canva.value.width = window.innerWidth;

  watch([x, y], ([newX, newY], [oldX, oldY]) => {
    if (oldX == 0 && oldY == 0) {
      return;
    } if (!isHolding.value) {
      return;
    }
    const ctx = canva.value.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(newX, newY);
    ctx.lineTo(oldX, oldY);
    ctx.strokeStyle = 'red';

    ctx.lineWidth = 3;

    ctx.stroke();
  });

});
</script>

<template>
  <CHeader></CHeader>

  <RouterView />

  <input type="text" v-model="newProduct" @keyup="products.push(newProduct)">
  <div>
    {{ x }}, {{ y }}
  </div>
  <ul>
    <li v-for="{ name } in products">
      {{ name }}
    </li>
  </ul>
  <canvas ref="canva" class="fixed inset-0 w-full h-screen" @mousedown.left="isHolding = true" @mouseup="isHolding = false">

  </canvas>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
