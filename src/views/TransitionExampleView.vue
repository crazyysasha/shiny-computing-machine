<script setup>
import { inject, ref } from 'vue';



const items = ref([{ name: "sdfdf", id: 1 }, { name: "fsddf", id: 2 }]);

let id = 3;
function add() {
    let firstname = ["Kai", "Eliana", "Jaden", "Ezra", "Luca", "Rowan", "Nova", "Amara", "Aaliyah", "Finn"];
    items.value.push({ name: firstname[parseInt(Math.random() * 10 - 1)], id: id++ });
};
const shuffle = () => {
    items.value = items.value.sort(() => Math.random() - 0.5)
}
const products = inject('products');
</script>
<template>
    <button @click="add">add</button>
    <button @click="shuffle">shuffle</button>
    <ul class="relative">
        <TransitionGroup enter-from-class="" enter-active-class="transition-all duration-1000" enter-to-class=""
            move-class="transition-all duration-1000" leave-active-class="absolute transition-all duration-1000">
            <li v-for="item in items" :key="item.id" class="opacity-100">
                {{ index }} {{ item.name }}
            </li>
        </TransitionGroup>
    </ul>

    <ul>
        <li v-for="product in products">
            {{ product.name }}
        </li>
    </ul>
</template>

<style>
.container {
    position: relative;
    padding: 0;
}

.item {
    width: 100%;
    height: 30px;
    background-color: #f3f3f3;
    border: 1px solid #666;
    box-sizing: border-box;
}

/* 1. declare transition */
.fade-move,
.fade-enter-active,
.fade-leave-active {
    transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. declare enter from and leave to state */
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: scaleY(0.01) translate(30px, 0);
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.fade-leave-active {
    position: absolute;
}
</style>