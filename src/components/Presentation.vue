<script setup>
    import TitreNiveau2 from './TitreNiveau2.vue';
</script>

<template>
    <div id="presentation">
        <div class="presentation__text">
            <TitreNiveau2>Présentation</TitreNiveau2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor pellentesque libero eget lobortis. Nam nulla est, varius rhoncus nunc a, imperdiet finibus erat. Curabitur sed urna fermentum, pharetra erat sit amet, pulvinar magna. Sed nec dolor justo. Integer imperdiet tellus blandit nisl dictum porta. Sed magna nisl, molestie in sagittis id, finibus quis justo.</p>
            <a href="#contact" class="CTA">Me contacter</a>
        </div>
    
        <img src="@/assets/images/photoProfil.jpg" alt="Photo d'Hugo">
    </div>
</template>

<style scoped>
    #presentation {
        background-color: #EFFAFD;
        display: flex;
        padding: 10px 10%;
        gap : 20px;
        align-items: center;
    }

    .presentation__text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
    }

    .presentation__text p {
        width: 60%;
        text-align: justify;
        text-indent: 5%;
    }

    img {
        width: 25%;
        height: 25%;
        border-radius: 50%;
        box-shadow: -4px 5px 25px #060640;
    }
</style>