<script>
    import axios from 'axios';

    export default {
        name: 'Register',
        data() {
        return {
            name:"",
            surname:"",
            email: "",
            password: "",
        };
        },
        methods: {
            async submitRegister()
            {

                await axios.post('http://127.0.0.1:8000/api/auth/register', {
                    name: this.name,
                    surname: this.surname,
                    email: this.email,
                    password: this.password,
                })

                .then(response=> {
                    console.log(response);
            });
        },
        }
    }
</script>

<template>
    <div class="input-container container mx-auto p-4">
        <div class="w-full md:w-1/2 lg:w-1/3 mx-auto my-12">
            <div class="formContainer">
                <h1 class="">Registro</h1>
                <form action class="flex flex-col mt-4" @submit.prevent="submitRegister()">
                <label>Nombre
                    <input
                    type="text"
                    v-model="name"
                    name="name"
                    class="input-field px-4 py-3 w-full rounded-md border-transparent focus:border-orange-500 focus:bg-white focus:ring-0 text-sm"
                    placeholder="Nombre"
                    />
                </label>
                <label>Apellidos
                    <input
                    v-model="surname"
                    type="text"
                    name="surname"
                    class="input-field px-4 py-3 w-full rounded-md border-transparent focus:border-orange-500 focus:bg-white focus:ring-0 text-sm"
                    placeholder="Apellidos"
                    />
                </label>
                <label>Correo electrónico
                    <input
                    type="email"
                    v-model="email"
                    name="email"
                    class="input-field px-4 py-3 w-full rounded-md border-transparent focus:border-orange-500 focus:bg-white focus:ring-0 text-sm"
                    placeholder="Correo electrónico"
                />
                </label>
                <label>Contraseña
                    <input
                    type="password"
                    v-model="password"
                    name="password"
                    class="input-field px-4 py-3 w-full rounded-md border-transparent focus:border-orange-500 focus:bg-white focus:ring-0 text-sm"
                    placeholder="Contraseña"
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
    font-weight:800;
    font-size: 1.5rem;
    margin-bottom: 5%;  
    text-shadow: -1px -1px 0 #402306, 1px -1px 0 #402306, -1px 1px 0 #402306, 1px 1px 0 #402306;
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
        background-color: #E6E6E6;
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