<script setup>
    import TitreNiveau2 from '@/components/TitreNiveau2.vue'
</script>

<template>
    <div id="contact">
        <TitreNiveau2 class="contact__title">Contact</TitreNiveau2>
    
        <div class="form__grid">
            <input type="text" name="name"  id="name" placeholder="Nom...">
            <input type="email" name="mail" id="mail" placeholder="Email...">
            <input type="tel" name="tel" id="tel" placeholder="Téléphone...">
            <input type="text" name="object" id="object" placeholder="Objet...">
            <textarea name="message" id="message" placeholder="Message..."></textarea>
            <button class="CTA">Envoyer</button>
        </div>
    </div>
</template>

<style scoped>
    #contact {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .contact__title {
        margin-bottom: 25px;
    }

    .form__grid {
        margin : 10px 0px;
        width: 80%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 10px;
    }

    input {
        height: 25px;
    }

    input:focus, textarea:focus {
        box-shadow: -4px 4px 10px #060640;
    }

    #name {
        grid-column: 1 / 2;
    }

    #mail {
        grid-row: 2 / 3;
    }

    #tel {
        grid-row: 3/4;
    }

    .CTA {
        grid-row: 4 / 5;
    }

    #message {
        grid-row: 2 / 4;
    }
</style>