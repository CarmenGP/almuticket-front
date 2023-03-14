<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/myComponents/Header.vue'
</script>

<template>
<Header/>

  <!-- <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Inicio</RouterLink>
        <RouterLink to="/about">Sobre AlmuTicket</RouterLink>
        <RouterLink to="/incidences">Incidencias</RouterLink>
      </nav>
    </div>
  </header> -->

  <!-- <RouterView /> -->
</template>

<style>
#app{
  width: 100%;
  height: 100%;
}
</style>
