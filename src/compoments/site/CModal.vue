<template>
  <div>
    <button @click="openModal" class="py-2 px-4 bg-gray-500 fixed top-0 right-0 mt-2 mr-3 text-white rounded-md">Вход</button>

    <transition name="modal" appear appear-class="opacity-0 scale-90" appear-active-class="opacity-100 scale-100" enter-active-class="opacity-100 scale-100" leave-active-class="opacity-0 scale-90">
      <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-white p-6 rounded-md">
          <form @submit.prevent="register">
            <div class="mb-4">
              <label class="block mb-2 text-sm font-bold" for="username">Имя пользователя</label>
              <input v-model="username" type="text" id="username" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500">
            </div>
            <div class="mb-4">
              <label class="block mb-2 text-sm font-bold" for="password">Пароль</label>
              <input v-model="password" type="password" id="password" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500">
            </div>
            <button type="submit" class="py-2 px-4 bg-green-500 text-white rounded-md">Войти</button>
          </form>
          <button @click="closeModal" class="mt-4 py-2 px-4 bg-red-500 text-white rounded-md">Закрыть</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
      username: '',
      password: ''
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    register() {
      // Perform registration logic here
      console.log('Registering user:', this.username, 'with password:', this.password);
      // Reset form fields
      this.username = '';
      this.password = '';
      // Close the modal
      this.closeModal();
    }
  }
};
</script>
