<template>
    <header>
        <nav>
            <router-link class="link__img" to="/">
                <img src="@/assets/images/Melin-logo.png" alt="Melin Logo">
            </router-link>
            <a class="link__img" href="#app">
            </a>
            <div class="nav__link">
                <router-link id="about__link" to="/#about">Présentation</router-link>
                <span>|</span>
                <router-link to="/#projets">Projets</router-link>
                <span>|</span>
                <router-link to="/#contact">Contact</router-link>
            </div>
        </nav>
    </header>
</template>

<style scoped>
    header {
        position: sticky;
        background-color: white;
        top: 0;
        padding: 15px;
        border-bottom: 1px solid #060640;
    }

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .link__img{
        padding: 5px;
    }

    img {
        width: 75px;
    }

    .nav__link * {
        font-size: 1.1em;
        padding: 5px;
        text-decoration: none;
    }

    .nav__link a {
        padding: 15px;
    }

    a:hover {
        background-color: #EFFAFD;
        border-radius: 10px;
        text-decoration: underline;
    }
</style>