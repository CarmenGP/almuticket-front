<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <nav>
      <ul>
        <li>
          <router-link to="/">Login</router-link>
        </li>
        <li>
          <router-link to="/incidences">Incidencias</router-link>
        </li>
        <li>
          <router-link to="/about">Acerca de</router-link>
        </li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<style></style> 
