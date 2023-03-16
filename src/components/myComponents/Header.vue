<script>

export default {
    name:'Header'
}

</script>


<template>
    <div class="headerContainer">
        <div class="logoContainer">
            <a class="logoArrabal" href="#">
            <img src="public/logoArrabal.png" alt="Logo Arrabal">
            </a>
            </div>
        <ul class="menu">
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Crear Reserva</a></li>
            <li><a href="#">Crear Incidencia</a></li>
            <li><a href="#">Mis Tickets</a></li>
        </ul>
    </div>
</template>

<style lang="css" scoped>
@import "bootstrap/dist/css/bootstrap.min.css";

.headerContainer{
    background-color:#F08419; 
    height: 20%;
    width: 100%!important;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
}  

.logoContainer{
    margin-top: 0px;
    width: 20%;
    align-items: center;
}  

.logoArrabal{
    margin-top:10px;
    margin-left: 10px;
    align-items: center;

}

.menu{
    display: flex;
    flex-direction: row;
    margin-right: 0;
    width: 50%;
    align-items: center;
    justify-content: space-between;
    margin-right: 10%;
}
a{
    text-decoration: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color:white;
    margin:15px;
    justify-items: center;
    align-items: baseline;
}

a:hover{
    color:black;
}

</style>