<script setup>
    import { computed } from 'vue'

    const copyright = computed(() =>{
        const currentYear = new Date().getFullYear()
        return `© Copyright ${currentYear} | Hugo Melin`
    });
</script>

<template>
    <footer class="footer">
        <p class="copyright">{{ copyright }}</p>
    </footer>
</template>

<style scoped>
    footer * {
        background-color: #060640;
        color: white;
        padding: 10px;
    }

    .copyright {
        text-align: center;
        font-style: italic;
        font-size: 0.8em;
    }
</style>