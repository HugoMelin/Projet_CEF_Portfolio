<script setup>
  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';
  import ContactForm from './components/ContactForm.vue';
</script>

<template>
  <Header/>

  <ContactForm/>

  <Footer/>
</template>

<style scoped>
  Header {
    margin-bottom: 10px;
  }
</style>
