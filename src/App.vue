<<<<<<< HEAD
<script setup>
import { RouterView } from 'vue-router'
=======
<script>
import { RouterLink, RouterView } from 'vue-router'
>>>>>>> gestionDeIncidencias
import FooterVue from './components/myComponents/FooterVue.vue';
import Header from './components/myComponents/Header.vue'

export default {
  components: {
    RouterLink,
    RouterView,
    FooterVue,
    Header
  }
}
</script>

<template>
  <div class="app-container">
    <Header />
    <div class="main-container">
      <div class="router-container">
        <RouterView />
      </div>
    </div>
    <FooterVue />
  </div>
</template>
<style>
#app{
  background-color:#FFF3D6;
  }
</style>
