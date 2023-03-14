<!-- <template>
    
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
    font-family:'Nunito Sans', sans-serif;
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
</style> -->
    
<template>
    <div class="input-container container mx-auto p-4">
        <div class="w-full md:w-1/2 lg:w-1/3 mx-auto my-12">
            <h1 class="text-lg font-bold">Registro</h1>
            <div class="formContainer">
                <form class="flex flex-col mt-4">
                <label>Nombre
                    <input
                    type="text"
                    name="name"
                    class="input-field px-4 py-3 w-full rounded-md border-transparent focus:border-orange-500 focus:bg-white focus:ring-0 text-sm"
                    placeholder="Nombre"
                    />
                </label>
                <label>Apellidos
                    <input
                    type="text"
                    name="surname"
                    class="input-field px-4 py-3 w-full rounded-md border-transparent focus:border-orange-500 focus:bg-white focus:ring-0 text-sm"
                    placeholder="Apellidos"
                    />
                </label>
                <label>Correo electrónico
                    <input
                    type="email"
                    name="email"
                    class="input-field px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-orange-500 focus:bg-white focus:ring-0 text-sm"
                    placeholder="Correo electrónico"
                />
                </label>
                <label>Contraseña
                    <input
                    type="password"
                    name="password"
                    class="input-field px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-orange-500 focus:bg-white focus:ring-0 text-sm"
                    placeholder="Contraseña"
                />
                </label>
                <label>Confirmar contraseña
                    <input
                    type="password"
                    name="repeat-password"
                    class="input-field px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                    placeholder="Confirmar contraseña"
                />
                </label>
                <button  type="submit" class="register-button mt-4 px-4 py-2  text-base rounded-md border border-transparent text-white focus:outline-none bg-orange-500 text-blue-100 hover:text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer inline-flex items-center w-full justify-center items-center font-medium focus:outline-none"
                >
                    Registrarse
                </button>            
                </form>
            </div>
        </div>
    </div>
</template>

<style language="CSS" scoped>

h1{
    color:#F08419;
    text-align:center;
    margin-bottom: 5%;   
}
.formContainer{
    color:#F08419;
    border-width: 5px;
    border-color: #F08419;
    border-radius: 10px;
    padding: 50px;
    background-color: #FFFCFC;
}

label{
    color:#F08419;
    font-weight: bold;

}
.input-container {
    display: flex;
    background-color: #FFF3D6;
    margin-bottom:15px;

}    
.input-field {
        color: #F08419;
        border-radius: 10px;
        border: .1rem solid #F08149;
        background-color: #F5F6F6;
        margin-bottom: 5%;
}
    
.register-button{
    font-weight: bold;
    color: white;
    background-color:#F08419;
    border-radius:10px ; /* Redondear las esquinas del botón */
    width:30%;
    margin:auto;
    text-align: center;
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