<script>
export default {
    name:'Header'
}
</script>


<template>
    <nav class="navbar">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
        <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Crear Reserva</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Crear Incidencia</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Mis Tickets</a>
        </li>
        </ul>
    </div>
    </nav>
</template>

<style>
.navbar{
    display:flex;
    background-color:#F08419;
    margin-top: 0;
    align-items: flex-start;
}
</style>