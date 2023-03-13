<template>
    
        <div class="login-container">
        <div><h1>Acceso</h1></div>
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
        </div> 
</template>
    
<style language="css" scoped>

body {
    font-family: 'Nunito Sans', sans-serif;
} 
.login-container {
    background-color: #FFF3D6;
    padding: 2rem;
    width: 700px; /* Ancho del contenedor */
    height: 700px; /* Alto del contenedor */
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

h1{
    color:#F08419;
    text-align:center;
    margin-bottom: 5%;  
}

form {
    background-color: #FFFCFC ;
    border:.5rem solid #F08419 ;
    border-radius:10px;
    padding:2rem ;      
    width:400px ; /* Ancho del formulario */
}
label{
    
}

.input-container {
    display:flex ;
    flex-direction:column ;
    margin-bottom: 15px ;
}

.input-field {
font-family:'Nunito Sans', sans-serif ;
font-weight:bold ;
color:#F08419 ;
border-radius:.5rem ;
border:.1rem solid #F08149 ;
background-color:#F5F6F6 ;  
padding:10px ; /* Agregar relleno a los campos de texto */
font-size:10px ; /* Cambiar el tamaño de la fuente en los campos de texto */
}

.submit-button {
font-family:'Nunito Sans', sans-serif ;
font-weight:bold ;
color:white ;
background-color:#F08419 ;
padding: 10px 20px; /* Agregar relleno al botón */

border-radius:10px ; /* Redondear las esquinas del botón */
margin-top: 20px; /* Agregar margen superior al botón */
}
</style>
    
    <script>
    export default {
    data() {
    return {
    email:'',
    password:''
    }
    },
    methods:{
    submitForm(){
    // Validar datos ingresados por el usuario
    // Enviar datos al servidor para iniciar sesión
    }
    }
    }
    </script>