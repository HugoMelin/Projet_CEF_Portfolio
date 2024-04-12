<script setup>
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';
  import ContactForm from './components/ContactForm.vue';
  import Presentation from './components/Presentation.vue';
  import Courses from '@/components/Courses.vue';
  import Experiences from '@/components/Experiences.vue';
  import Skills from '@/components/Skills.vue'
</script>

<template>
  <Header/>

  <Presentation/>

  <Courses/>

  <Experiences/>

  <Skills/>

  <ContactForm/>

  <Footer/>
</template>

<style scoped>
</style>
