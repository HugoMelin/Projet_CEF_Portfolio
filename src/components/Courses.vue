<script setup>
    import TitreNiveau2 from './TitreNiveau2.vue';

    const parcours = {
        annee1: {
            ecole: 'Université de La Rochelle',
            date: 'Sept 2018 - Fév 2020',
            title: 'Licence Informatique',
            comment: 'Validation année 1'
        },
        annee2: {
            ecole: 'Excelia Group La Rochelle',
            date: 'Fév 2020 - Août 2022',
            title: 'Bachelor Business',
            comment: "Diplôme d'Etudes Supérieures en Commerce et Management Opérationnel - Réalisation d'un mémoire professionnel sur la gestion des stocks et le maintient de la compétitivité dans un contexte de crise. - Responsable événementiel au sein de l’association LR Beach Cup."
        },
        annee3: {
            ecole: 'Excelia Group La Rochelle',
            date: 'Sept 2022 - à Février 2024',
            title: 'Master Grande Ecole',
        },
    }
</script>

<template>
    <div class="courses">
        <div class="courses__title">
            <span class="material-symbols-outlined">school</span><br>
            <TitreNiveau2>Mon parcours</TitreNiveau2>
        </div>
    
        <div class="parcours">
            <div class="ecole" v-for="annee in parcours">
                <h3 class="ecole__title">{{ annee.ecole }}</h3>
                <h4 class="ecole__info">{{ annee.title }} <span class="separation">|</span> {{ annee.date }}</h4>
                <p class="ecole__comment">{{ annee.comment }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .courses {
        width: 60%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: auto;
    }

    .courses__title {
        text-align: center;
    }

    .material-symbols-outlined {
        font-size: 4em;
        color: #A0006D;
    }

    .ecole__title {
        font-size: 1.25em;
    }

    .ecole__info {
        font-size: 1.05em;
    }

    .separation {
        font-style: italic;
        color: #A0006D;
    }

    .ecole__comment {
        text-indent: 2em;
        text-align: justify;
    }

    .parcours {
        margin-top: 15px;
        display: flex;
        flex-direction: column-reverse;
        gap: 25px;
    }

    .ecole {
        padding: 15px;
        background-color: #EFFAFD;
        border-radius: 25px;
        box-shadow: -4px 5px 10px #060640;
    }
</style>