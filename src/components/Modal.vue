<script setup>
    const props = defineProps(['projet'])
</script>

<template>
    <div class="modal__background" @click="$emit('close')"></div>
    <div class="modal">
        <span class="material-symbols-outlined" @click="$emit('close')">close</span>
        <p>Test : {{ projet }}</p>
    </div>
</template>

<style scoped>
    .modal__background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        border: 1px solid black;
    }

    .modal {
        position: fixed;
        top: 2.5%;
        left: 5%;
        background-color: red;
        border-radius: 25px;
        padding: 2em;
        box-sizing: border-box;
        height: 95%;
        width: 90%;
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