<script setup>
</script>

<template>
    <header>
        <nav>
            <img src="@/assets/images/Melin-logo.png" alt="Melin Logo">
            <div class="nav__link">
                <a href="">Présentation</a>
                <span>|</span>
                <a href="">Projets</a>
                <span>|</span>
                <a href="">Contact</a>
            </div>
        </nav>
    </header>
</template>

<style scoped>
    header {
        padding: 15px;
        border-bottom: 1px solid #060640;
    }

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    img {
        width: 75px;
    }

    .nav__link * {
        padding-left: 10px;
        text-decoration: none;
    }
</style>