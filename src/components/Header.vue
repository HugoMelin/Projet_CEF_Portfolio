<template>
    <header>
        <nav>
            <a class="link__img" href="/">
                <img src="@/assets/images/Melin-logo.png" alt="Melin Logo">
            </a>
            <div class="nav__link">
                <a href="#about">Présentation</a>
                <span>|</span>
                <a href="#projets">Projets</a>
                <span>|</span>
                <a href="#contact">Contact</a>
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
    }
</style>