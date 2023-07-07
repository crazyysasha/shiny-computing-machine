<script setup>

defineProps(['modelValue', 'disabled', 'selectedLabel', 'unselectedLabel']);
const emit = defineEmits(['update:modelValue', 'update:disabled']);

</script>   

<template>
    <label class="flex gap-2" @dblclick="$emit('update:disabled', !disabled)">
        
        <div class=" w-10 border border-green-600 rounded-full p-0.5 " :class="{ 'bg-red-500': disabled }">
            <div class="h-4 w-4 rounded-full border border-green-600 transition-all duration-200 ml-0"
                :class="{ '!ml-[18px]': modelValue }"></div>
        </div>
        <input type="checkbox" hidden :checked="modelValue" @change="$emit('update:modelValue', !modelValue)">
        <!-- <input type="checkbox" hidden v-model="modelValue"> -->
        <slot>
            <span v-html="modelValue ? selectedLabel : unselectedLabel">
            </span>
        </slot> 
    </label>
</template>