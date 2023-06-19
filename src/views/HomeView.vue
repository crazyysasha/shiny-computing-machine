<script setup>
import { ref, onMounted, onUnmounted, onUpdated, onBeforeUpdate, onErrorCaptured, onRenderTracked, onRenderTriggered, onActivated } from 'vue';
import { useAuth } from '../composables/auth';
import { onBeforeRouteUpdate } from 'vue-router';

import { useUsers } from "../composables/users";
// const { user } = useAuth();

const input = ref();

const name = ref();

const btnclick = () => {
  console.log(input.value);

}

onMounted(() => {
  console.log(input.value);
});

onUnmounted(() => {
  console.log("vishel iz glavnoy");
});

onUpdated(() => {
  console.log('updated');
});
onBeforeUpdate(() => {
  console.log('before update');
});

onErrorCaptured((err, instance, info) => {
  console.log("nasha oshibka", info);
});
onRenderTracked((event) => {
  console.log(event);
});

onRenderTriggered((event) => {
  console.log(event);
})

onActivated(() => {
  console.log('activated');
});

const { users } = useUsers();


</script>

<template>
  <!-- <main>
    welcome, {{ user.name }}
  </main> -->
  <!-- <input type="text" ref="input" v-model="name">
  <button @click="btnclick">d</button>
  {{ name }} -->

  <ul>
    <li v-for="{ id, name } in  users">
      <router-link :to="'/users/' + id">{{ name }}</router-link>
    </li>
  </ul>
</template>
