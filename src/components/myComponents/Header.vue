<script>

export default {
    name:'Header'
}

</script>


<template>
    <div class="header">
        <div class="headerContainer">
            <a class="logoArrabal" href="#">
            <img src="public/logoArrabal.png" alt="Logo Arrabal">
            </a>
    <nav class="menu">
        <RouterLink to="/">Inicio</RouterLink>
        <RouterLink to="/about">Crear Reserva</RouterLink>
        <RouterLink to="/login">Crear Incidencia</RouterLink>
        <RouterLink to="/register">Mis Tickets</RouterLink>
    </nav>
        </div>
    </div>
</template>

<style lang="css" scoped>
@import "bootstrap/dist/css/bootstrap.min.css";

.header{
    background-color:#F08419; 
    height: 25%;
    width: 100%;
}

.headerContainer{
    display:flex;
    flex-direction: row;
    justify-content: flex-start;
}  

.logoContainer{
    height: 20%;
    width: 30%;
} 

.logoArrabal{
    height: 20%;
    width: 25%;
    margin: 10px 10px 10px 10px;
}

.menu{
    display:flex;
    flex-direction: row;
    text-decoration: none;
    justify-content: center;
}
a{
    text-decoration: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color:white;
    margin:15px;
}

</style>