<script setup>
    import Project_SmallCard from '@/components/Project_SmallCard.vue';
    import TitreNiveau2 from '@/components/TitreNiveau2.vue';
</script>

<template>
    <section>
        <RouterLink class="error404" to="/">
            <img src="@/assets/images/infinity.jpg" alt="">
            <TitreNiveau2 class="title">ERROR-404</TitreNiveau2>
            <p class="CTA">Revenir sur le site</p>
        </RouterLink>
    </section>
</template>

<style scoped>
    .error404 {
        width: 60%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        gap: 2em;
        padding: 15px;
        margin: auto;
        text-decoration: none;
    }

    img {
        width: 50%;
        height: auto;
        border-radius: 35%;
        box-shadow: -4px 4px 25px #060640;
    }

    .title {
        font-size: 2em;
    }
</style>