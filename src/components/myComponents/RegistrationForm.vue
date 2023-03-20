<script>
    export default {
        data() {
        return {
            email: "",
            password: "",
        };
        },
        methods: {
        submitForm() {
            // Validar datos ingresados por el usuario
            if (!this.email.endsWith("@arrabalempleo.org")) {
            // Asignar el mensaje de error al elemento div
            const errorMessage = document.querySelector(".error-message");
            errorMessage.innerHTML = 'Solo se permiten correos electrónicos que terminen en "@arrabalempleo.org".';
            return;
            }
    
            // Enviar datos al servidor para iniciar sesión
            // ...
        },
        },
    };
</script>

<template>
    <div class="input-container container mx-auto p-4">
        <div class="w-full md:w-1/2 lg:w-1/3 mx-auto my-12">
            <div class="formContainer">
                <h1 class="text-lg font-bold">Registro</h1>
                <form class="flex flex-col mt-4" @submit.prevent="submitForm">
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
                    class="input-field px-4 py-3 w-full rounded-md border-transparent focus:border-orange-500 focus:bg-white focus:ring-0 text-sm"
                    placeholder="Correo electrónico"
                />
                </label>
                <label>Contraseña
                    <input
                    type="password"
                    name="password"
                    class="input-field px-4 py-3 w-full rounded-md border-transparent focus:border-orange-500 focus:bg-white focus:ring-0 text-sm"
                    placeholder="Contraseña"
                />
                </label>
                <label>Confirmar contraseña
                    <input
                    type="password"
                    name="repeat-password"
                    class="input-field px-4 py-3 w-full rounded-md border-transparent focus:border-orange-500 focus:bg-white focus:ring-0 text-sm"
                    placeholder="Confirmar contraseña"
                />
                </label>
                <button  type="submit" class="register-button mt-4 px-4 py-2  text-base rounded-md border border-transparent text-white focus:outline-none bg-orange-500 text-blue-100 hover:text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer inline-flex items-center w-full justify-center items-center font-medium focus:outline-none"
                >
                    Registrarse
                </button>            
                </form>
                <div class="error-message"></div> <!-- Agregar un elemento div para mostrar el mensaje de error -->
            </div>
        </div>
    </div>
</template>

<style language="css" scoped>

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
    padding: 20px;
    background-color: #FFFCFC;
}

label{
    color:#F08419;
    font-weight: bold;

}
.input-container {
    display: flex;
    width:100%;
    background-color:#FFF3D6;
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
    width:50%;
    margin:auto;
    text-align: center;
    }

</style>