import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { useCounterStore } from './stores/counter'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')


useCounterStore().$subscribe((mutation, state) => {
    console.log('mutation', mutation)
    localStorage.setItem('count', state.count);
});

useCounterStore().$onAction((action, state) => {
    console.log('action', action);
    console.log('state', state);
});



useCounterStore().$patch({ count: parseInt(localStorage.getItem('count') ?? '0') });