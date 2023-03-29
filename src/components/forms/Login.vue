<script>
import axios from 'axios';

export default {
    name: 'Login',
    data() {
    return {
        email: '',
        password: ''
    };
    },
    methods: {
    async submitForm() {
        const emailDomain = this.email.split('@')[1];
        if (emailDomain !== 'arrabalempleo.com') {
        alert('Solo se permiten correos de @arrabalempleo.com');
        return;
}

    await axios
        .post('http://127.0.0.1:8000/api/auth/login', {
            email: this.email,
            password: this.password
        })
        .then(response => {
            console.log(response.data);
            localStorage.setItem('token', response.data.token);
        });
    }
    }
};
</script>

<template>
    <div class="input-container container mx-auto p-4">
        <div class="w-full md:w-1/2 lg:w-1/3 mx-auto my-12">
            <div class="formContainer flex flex-col items-center justify-center">
            <h1 class="">Acceso</h1>
            <form class="flex flex-col mt-4" @submit.prevent="submitForm()">
                <label>
                Correo electrónico
                <input v-model="email" type="email" name="email" class="input-field px-4 py-3 w-full rounded-md border-transparent focus:border-orange-500 focus:bg-white focus:ring-0 text-sm" placeholder="Correo electrónico" required />
                </label>
                <label>
                Contraseña
                <input v-model="password" type="password" name="password" class="input-field px-4 py-3 w-full rounded-md border-transparent focus:border-orange-500 focus:bg-white focus:ring-0 text-sm" placeholder="Contraseña" required />
                </label>
                <button type="submit" class="login-button mt-4 px-4 py-2 text-base rounded-md border border-transparent text-white focus:outline-none bg-orange-500 text-blue-100 hover:text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer inline-flex items-center w-full justify-center items-center font-medium focus:outline-none">Acceder</button>
            </form>
            <div class="error-message"></div> <!-- Agregar un elemento div para mostrar el mensaje de error -->
            </div>
            <div>
            <p>¿No estás dado de alta en AlmuTicket?
                <RouterLink to="/register"><strong><a href="../views/RegisterView.vue">Regístrate aquí</a></strong></RouterLink>
            </p>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
h1{
    color:#F08419;
    text-align:center;
    margin-bottom: 5%;
    font-weight:800;
    font-size: 1.5rem;
    margin-bottom: 5%;  
    text-shadow: -1px -1px 0 #402306, 1px -1px 0 #402306, -1px 1px 0 #402306, 1px 1px 0 #402306;
    }
.formContainer {
    color: #f08419;
    border-width: 5px;
    border-color: #f08419;
    border-radius: 10px;
    padding: 20px;
    background-color: #fffcfc;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
}
label {
    color: #f08419;
    font-weight: bold;
}
.input-container {
    display: flex;
    width: 100%;
    background-color: #fff3d6;
    margin-bottom: 5px;
    flex-direction: column !important; 
    justify-content: center; 
    align-items: center; 
}
.input-field {
    color: #f08419;
    border-radius: 10px;
    border: 0.1rem solid #f08149;
    background-color: #E6E6E6;
    margin-bottom: 5%;
}
.login-button {
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
.login-button:hover {
    background-color: #F5F6F6;
    color: #F08419 !important;
    border-color: #F08419 !important;
    border-width: 4px !important;
    height: 2.5rem;
    box-shadow: 0 0 0 6px #F5F6F6;
}
p{
    color:#f08419;
    margin-top:2%;
    text-align: center;
}

a:hover{
    color:#f08419;
    text-decoration: underline;

}
</style>
