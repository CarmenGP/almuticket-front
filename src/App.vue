<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <nav>
        <RouterLink to="/">Inicio</RouterLink>
        <RouterLink to="/about">Sobre AlmuTicket</RouterLink>
        <RouterLink to="/incidences">Incidencias</RouterLink>
        <RouterLink to="/register">Registro</RouterLink>

      </nav>
    </div>
  </header> 

  <RouterView />
</template>

<style scoped>
</style>
