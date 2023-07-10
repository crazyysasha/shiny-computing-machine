<script setup>
import { ref } from 'vue';

const onScreen = ref(false)

function screen (onScreen = (true)) {
    document.getElementById("profile1").classList.remove("hidden")
}

</script>
<template>
    <header>
        <a href="">
            logo
        </a>
        <nav>
            <a href="">
                home
            </a>
            <button @click="onScreen">Profile</button>
            </nav>

        <div><DarkMode></DarkMode></div>
    </header>

    <div class="absolute backdrop-blur-sm w-[100%] h-[100%] hidden" id="profile1">
        <div class="py-2 px-2 rounded-lg red-500 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-180%] border border-black">Name <br> Surname <br> Number</div>
    </div>
</template>