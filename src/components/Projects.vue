<script setup>
    import { ref, computed } from 'vue'
    import { projects } from '@/data/project.json';

    import TitreNiveau2 from './TitreNiveau2.vue';
    import SmallCard from './Project_SmallCard.vue';
    import Modal from './Modal.vue';

    let showModal = ref( false ) 
    let msgToModal = ref('')
</script>

<template>
    <section id="projets">
        <div class="projets__title">
            <span class="material-symbols-outlined">terminal</span>
            <TitreNiveau2>Projets</TitreNiveau2>
        </div>

        <div class="smallCard__box">
            <SmallCard @click="showModal=true; msgToModal=i" v-for="i in projects" :projet="i"></SmallCard>
        </div>
        <Modal v-if="showModal" @close="showModal = false" :projet="msgToModal"></Modal>
    </section>
</template>

<style scoped>
    button {
        border: none;
        background-color: #EFFAFD;
    }

    #projets {
        background-color: #EFFAFD;
        padding: 15px 0px;
    }

    .material-symbols-outlined {
        font-size: 2em;
    }

    .projets__title {
        display: flex;
        align-items: start;
        gap: 5px;
        justify-content: center;
    }

    .smallCard__box {
        margin: 15px auto;
        width: 60%;
        display: flex;
        gap: 25px;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }
</style>