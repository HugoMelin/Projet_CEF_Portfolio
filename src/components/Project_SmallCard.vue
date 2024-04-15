<script setup>
    const props = defineProps(['projet'])
</script>

<template>
    <div class="SmallCard">
        <div class="polaroid">
            <img :src="projet.image[0].src" :alt="projet.image.alt">
            <p class="caption">
                <span class="material-symbols-outlined">zoom_in</span>
                {{ projet.name }}</p>
        </div>
    </div>
</template>

<style scoped>
    .SmallCard {
        width: 250px;
    }

    .SmallCard:hover .polaroid{
        background-color: rgba(90, 90, 90, 0.2);
    }

    .polaroid {
        border-radius: 20px;
        padding: 10px;
        box-shadow: -4px 5px 25px #060640;
        background-color: white;
        cursor: pointer;
    }

    .polaroid > img {
        width: 100%;
        height: auto;
    }

    .caption {
        padding-top: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .material-symbols-outlined {
        color: #060640;
    }
</style>