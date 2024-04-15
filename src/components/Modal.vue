<script setup>
    const props = defineProps(['projet'])
</script>

<template>
    <div class="modal">
        <span class="material-symbols-outlined" @click="$emit('close')">close</span>
        <p>Test : {{ projet }}</p>
    </div>
</template>

<style scoped>
    .modal {
        background-color: red;
        border-radius: 25px;
        padding: 2em;
        box-sizing: border-box;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .material-symbols-outlined {
        position: absolute;
        top: 10px;
        right: 10px;
        color: #060640;
        cursor: pointer;
    }
</style>