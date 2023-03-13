<script>
export default{}
</script>

<template>
    <div class="input-container container mx-auto p-4">
        <div class="w-full md:w-1/2 lg:w-1/3 mx-auto my-12">
            <h1 class="text-lg font-bold">Registro</h1>
            <div class="formContainer">
                <form class="flex flex-col mt-4">
                <label>Nombre
                    <input
                    type="text"
                    name="full-name"
                    class="input-field px-4 py-3 w-full rounded-md border-transparent focus:border-orange-500 focus:bg-white focus:ring-0 text-sm"
                    placeholder="Nombre"
                    />
                </label>
                <label>Apellidos
                    <input
                    type="text"
                    name="full-name"
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
                    placeholder="Confirmar constraseña"
                />
                </label>
                <button
                    type="submit"
                    class="submit-button mt-4 px-4 py-2  leading-6 text-base rounded-md border border-transparent text-white focus:outline-none bg-orange-500 text-blue-100 hover:text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer inline-flex items-center w-full justify-center items-center font-medium focus:outline-none"
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
    margin-bottom: 5%;
    font-weight: bold;

}
.input-container {
        display: flex;
        background-color: #FFF3D6;

}    
.input-field {
        font-weight: bold;
        color: #F08419;
        border-radius: 10px;
        border: .1rem solid #F08149;
        background-color: #F5F6F6;
        margin-bottom: 5%;

}
    
.submit-button {
        font-weight: bold;
        color: white;
        background-color:#F08419 ;
    }

</style>