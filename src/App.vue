<script setup>
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';
  import ContactForm from './components/ContactForm.vue';
  import Presentation from './components/Presentation.vue';
  import Projects from './components/Projects.vue';
</script>

<template>
  <Header/>

  <main>  
    <RouterView></RouterView>
  </main>

  <Footer/>
</template>

<style scoped>
</style>
