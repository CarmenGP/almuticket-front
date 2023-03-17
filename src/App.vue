<script setup>
import { RouterView } from 'vue-router'
import FooterVue from './components/myComponents/FooterVue.vue';
import Header from './components/myComponents/Header.vue'

</script>
<template>
  <Header />
  <RouterView />
  <FooterVue />
</template>
<style language="css" scoped>
</style>