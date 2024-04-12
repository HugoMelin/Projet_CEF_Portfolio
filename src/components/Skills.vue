<script setup>
    import TitreNiveau2 from './TitreNiveau2.vue';

    const competences = ['HTML', 'CSS', 'JavaScript', 'Vue.JS']
</script>

<template>
    <div class="skills">
        <div class="skills__title">
            <span class="material-symbols-outlined">sync_alt</span><br>
            <TitreNiveau2>Mes compétences techniques</TitreNiveau2>
        </div>
        <p v-for="i in competences">{{ i }}</p>
    </div>
</template>

<style scoped>
    .skills {
        width: 60%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: auto;
    }

    .skills__title {
        display: flex;
        align-items: center;
        text-align: center;
    }

    .material-symbols-outlined {
        font-size: 2.5em;
        color: #A0006D;
    }
</style>