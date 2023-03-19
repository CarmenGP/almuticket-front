<script>
import { RouterLink, RouterView } from 'vue-router'
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

<style scoped lang="css">
/* Fondo y tipografía */
body {
  background-color: #FBE6C6;
  font-family: 'Nunito Sans', sans-serif;
}

/* Contenedor principal */
.app-container {
  max-width: 1200px;
  margin: 0 auto;
  border: 2px solid #F09600;
  border-radius: 5px;
}

/* Contenedor del router */
.router-container {
  padding: 20px;
}

/* Barra de navegación */
header {
  background-color: #F8C577;
  border-bottom: 2px solid #F09600;
  padding: 10px;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  margin-left: 10px;
}

nav a:hover {
  text-decoration: underline;
}

/* Pie de página */
footer {
  background-color: #F8C577;
  border-top: 2px solid #F09600;
  padding: 10px;
  text-align: center;
}
</style>
