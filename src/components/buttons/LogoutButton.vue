<script>
import axios from 'axios';

export default {
    methods: {
        logout() {
        // Hacer la petición al servidor para cerrar la sesión del usuario
        axios.post('/logout').then(() => {
            // Eliminar los datos de sesión almacenados en el cliente
            localStorage.removeItem('token', response.data.token);
            // Redirigir al usuario a la página de login
            this.$router.push('/')
        })
        }
    }
}
</script>

<template>
    <div>
        <button @click="logout">Cerrar sesión</button>
    </div>
</template>

<style>
button{
    text-decoration: none;
    display: flex;
    flex-direction: row;
    color:white;
    margin:15px;
    justify-items: center;
}
</style>