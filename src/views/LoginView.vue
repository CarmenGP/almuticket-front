<template>
        <form @submit.prevent="submitForm">
        <div class="input-container">
            <label for="email">Correo electrónico:</label>
            <input type="email" id="email" v-model="email" class="input-field">
        </div>
        <div class="input-container">
            <label for="password">Contraseña:</label>
            <input type="password" id="password" v-model="password" class="input-field">
        </div>
        <button type="submit" class="submit-button">Ingresar</button>
        </form>
</template>
  
    <style scoped>
    .input-container {
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;
    }
    
    .input-field {
        font-family: 'Nunito Sans', sans-serif;
        font-weight: bold;
        color: #F08419;
        border-radius: .5rem;
        border: .1rem solid #F08149;
        background-color: #F5F6F6;
    }
    
    .submit-button {
        font-family: 'Nunito Sans', sans-serif;
        font-weight: bold;
        color: white;
        background-color:#F08419 ;
    }
    </style>
    
    <script>
    export default {
    data() {
    return {
    email: '',
    password: ''
    }
    },
    methods:{
    submitForm(){
    // Validar datos ingresados por el usuario
    // Enviar datos al servidor para iniciar sesión
    }
    }
    }
    </script>```