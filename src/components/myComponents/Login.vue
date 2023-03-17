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
        <h1 class="text-lg font-bold">Acceso</h1>
        <div class="formContainer flex flex-col items-center justify-center">
        <form class="flex flex-col mt-4" @submit.prevent="submitForm">
            <label>Correo electrónico
            <input
                v-model="email"
                type="email"
                name="email"
                class="input-field px-4 py-3 w-full rounded-md border-transparent focus:border-orange-500 focus:bg-white focus:ring-0 text-sm"
                placeholder="Correo electrónico"
                required
            />
            </label>
            <label>Contraseña
            <input
                v-model="password"
                type="password"
                name="password"
                class="input-field px-4 py-3 w-full rounded-md border-transparent focus:border-orange-500 focus:bg-white focus:ring-0 text-sm"
                placeholder="Contraseña"
                required
            />
            </label>
            <button
            type="submit"
            class="login-button mt-4 px-4 py-2 text-base rounded-md border border-transparent text-white focus:outline-none bg-orange-500 text-blue-100 hover:text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer inline-flex items-center w-full justify-center items-center font-medium focus:outline-none"
            >
            Acceder
            </button>
        </form>
        <div class="error-message"></div> <!-- Agregar un elemento div para mostrar el mensaje de error -->
        </div>
    </div>
    </div>
</template>
<style lang="css" scoped>
h1 {
    color: #f08419;
    text-align: center;
    margin-bottom: 5%;
    font-weight: bold;
    font-family: "Nunito Sans", sans-serif;
}
.formContainer {
    color: #f08419;
    border-width: 5px;
    border-color: #f08419;
    border-radius: 10px;
    padding: 5px;
    background-color: #fffcfc;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
}
label {
    color: #f08419;
    font-weight: bold;
    font-family: "Nunito Sans", sans-serif;
}
.input-container {
    display: flex;
    width: 100%;
    background-color: #fff3d6;
    margin-bottom: 5px;
    flex-direction: column !important; /* Cambiar la dirección del contenedor de entrada a columna */
    justify-content: center; /* Centrar elementos dentro del contenedor de entrada */
    align-items: center; /* Centrar elementos dentro del contenedor de entrada */
}
.input-field {
    color: #f08419;
    border-radius: 10px;
    border: 0.1rem solid #f08149;
    background-color: #f5f6f6;
    margin-bottom: 5%;
    font-family: "Nunito Sans", sans-serif;
}
.login-button {
    font-weight: bold;
    color: white;
    background-color: #f08419;
    border-radius: 10px;
    width: 50%;
    text-align: center;
    font-family: "Nunito Sans", sans-serif;
}
</style>

