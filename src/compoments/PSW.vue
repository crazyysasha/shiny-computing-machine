<template>
    <!-- <input :type="passwordFieldType" v-model="password">
    <button type="password" @click="switchVisibility">show / hide</button> -->
    <div class="relative z-0 w-40 mb-6 group">
      <input :type="passwordFieldType" v-model="password" name="passwordinput" id="password_input" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-900 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="password_input" class="peer-focus:font-medium absolute text-sm text-gray-900 dark:text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
      <button type="password" @click="switchVisibility">show / hide</button>
  </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        password: "",
        passwordFieldType: "password"
      };
    },
    methods: {
      switchVisibility() {
        this.passwordFieldType = this.passwordFieldType === "password" ? "text" : "password";
      }
    }
  };
  </script>