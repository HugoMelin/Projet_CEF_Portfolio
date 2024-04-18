<script setup>
    import TitreNiveau2 from './TitreNiveau2.vue';

    const parcours = {
        annee1: {
            entreprise: 'Groupe Esprit Jardin',
            date: 'Mars 2021 - Mai 2021',
            title: 'Assistant chargé gestion de projet - Stage 3 mois',
            comment: "Missions : Gestion de l'implantation d'une nouvelle gamme de produit ; Réalisation d'une veille concurrentielle ; Élaboration d'un questionnaire satisfaction client ; Réception de commande ; Service clients."
        },
        annee2: {
            entreprise: 'Chez Auguste',
            date: 'Avril 2019 - Oct 2022',
            title: 'Responsable d’établissement de nuit - CDI étudiant',
            comment: "Missions : Gestion des équipes et des stocks ; Gestion des conflits interne et externe ; Service clients ; Évaluation des performances de l'établissement et amélioration des processus quand il avait nécessité."
        },
        annee3: {
            entreprise: 'Tekabois',
            date: 'Avril 2022 - Août 2022',
            title: 'Technico-commercial - Stage 5 mois',
            comment: "Missions : Réception de la clientèle ; Conseiller et identifier les besoins des clients ; Proposer des solution techniques appropriées ; Contribuer à la veille concurrentielle de l'entreprise ; Dynamiser les ventes sur une zone géographique définie ; Analyser de nouveaux besoins clients."
        },
        annee4: {
            entreprise: 'Alcazar Café',
            date: 'Déc 2022 - à Août 2023',
            title: 'Assistant de direction - Alternance',
            comment: "Missions : Gestion de l'établissement ; Communication réseaux sociaux, presse local etc.. ; Création d'identité lié au rachat d'un nouvel établissement ; Création d'événements en lien avec les actualités sportifs."
        },
    }
</script>

<template>
    <div class="experience">
        <div class="experience__title">
            <span class="material-symbols-outlined">work</span><br>
            <TitreNiveau2>Mes expériences professionnelles</TitreNiveau2>
        </div>
    
        <div class="annee">
            <div class="job" v-for="annee in parcours">
                <h3 class="job__title">{{ annee.entreprise }}</h3>
                <h4 class="job__info">{{ annee.title }} <span class="separation">|</span> {{ annee.date }}</h4>
                <p class="job__comment">{{ annee.comment }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .experience {
        width: 60%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: auto;
    }

    .experience__title {
        text-align: center;
    }

    .material-symbols-outlined {
        font-size: 4em;
    }

    .job__title {
        font-size: 1.25em;
    }

    .job__info {
        font-size: 1.05em;
    }

    .separation {
        font-style: italic;
        color: #A0006D;
    }

    .job__comment {
        text-indent: 2em;
        text-align: justify;
    }

    .annee {
        margin-top: 15px;
        display: flex;
        flex-direction: column-reverse;
        gap: 25px;
    }

    .job {
        padding: 15px;
        background-color: #EFFAFD;
        border-radius: 25px;
        box-shadow: -4px 5px 10px #060640;
    }

    @media screen and (max-width: 480px) {
        .experience {
            width: 85%;
        }
    }
</style>