<script setup>
import { RouterLink, RouterView } from 'vue-router'
import FooterVue from './components/myComponents/FooterVue.vue';
</script>

<template>
  <!-- <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Inicio</RouterLink>
        <RouterLink to="/about">Sobre AlmuTicket</RouterLink>
        <RouterLink to="/incidences">Incidencias</RouterLink>
      </nav>
      
    </div>
  </header> -->
  
  <RouterView />

  <FooterVue />
</template>

<style scoped>
import Header from './components/myComponents/Header.vue'
</script>

<template>
<Header/>
</template>

<style>

</style>
