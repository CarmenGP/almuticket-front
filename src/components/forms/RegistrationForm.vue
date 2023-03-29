<script>
    import axios from 'axios';
    import router from '@/router';

    export default {
        name: 'Register',
        data() {
        return {
            name:"",
            surname:"",
            email: "",
            password: "",
            errorMessage: "",
        };
        },
        methods: {
            verifyEmailDomain() {
                const emailDomain = this.email.split('@')[1];
                console.log('emailDomain:', emailDomain);
                if (emailDomain !== 'arrabalempleo.org') {
                    console.log('Correo no válido:', this.email);
                    this.errorMessage = 'Solo se permiten correos de @arrabalempleo.org';
                setTimeout(() => {
                    this.errorMessage = '';
                }, 5000);
                    return;
                }
                    return true;
                },

            async submitRegister(){
                if (!this.verifyEmailDomain()) {
                    return;
                }
                try {
                    const response = await axios.post('http://127.0.0.1:8000/api/auth/register', {
                    email: this.email,
                    password: this.password
                    });
                    console.log('Token recibido:', response.data.token);
                    localStorage.setItem('token', response.data.token);
                } catch (error) {
                    console.log('Error al hacer petición:', error);
                    if (error.response) {
                        if (error.response.status === 401) {
                            this.errorMessage = 'Correo no Registrado';
                        } else {
                            this.errorMessage ='Registro Correcto';
                        }
                    } else {
                        this.errorMessage = 'Error al conectar con el servidor';
                    }
                };
                
                setTimeout(() => {
                    this.errorMessage = '';
                }, 5000);
                await axios.post('http://127.0.0.1:8000/api/auth/register', {
                    name: this.name,
                    surname: this.surname,
                    email: this.email,
                    password: this.password,
                })

                .then(response=> {
                    console.log(response);
                    localStorage.setItem('token', response.data.token);
                    router.push('/menu'); 
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
                <div class="error-message mt-4" v-if="errorMessage">{{ errorMessage }}</div>
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
.error-message {
    color: red;
    margin-top: 5px;
    margin-bottom: 10px;
    font-size: small;
    font-weight: bold;
} 
.register-button {
    font-weight: bold;
    color: white;
    background-color: #f08419;
    border-radius: 10px;
    width: 50%;
    text-align: center;
    margin-bottom: 5%;
    margin:auto;
    height: 2.5rem;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
}
.register-button:hover {
    background-color: #F5F6F6;
    color: #F08419 !important;
    border-color: #F08419 !important;
    border-width: 4px !important;
    height: 2.5rem;
    box-shadow: 0 0 0 6px #F5F6F6;
}
</style>