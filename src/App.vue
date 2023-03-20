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
<style>
#app{
  background-color:#FFF3D6;
  height:100%;
  }
</style>