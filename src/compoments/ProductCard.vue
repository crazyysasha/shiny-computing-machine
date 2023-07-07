<script setup>
defineProps(['name','price']);</script>

<template>
    <div class="border border-gray-500 rounded-3xl shadow-2xl overflow-hidden max-w-xs">
        <img class="" src="https://olcha.uz/image/original/products/supplier/stores/1/2023-05-23/hIqZcUObrub3wYypcWjtOSL8eS8PZpZbCRAngxqwbRkFWoGhRw1tixvn57h1.jpg"
            alt="">
        <div class="p-3">
            <h1>
                <slot name="default">
                    <p class="text-red-400">{{ name }}</p>
                </slot>
            </h1>
            <slot name="price">
                <strong>{{ price }}</strong>
            </slot>
            
            <slot name="description">
                <p>
                    {{ description }}
                </p>
            </slot>
            <button> add to cart</button>
        </div>
    </div>
</template>