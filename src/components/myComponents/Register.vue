<script>
export default{}
</script>

<template>
    <div class="container mx-auto p-4 bg-white">
        <div class="w-full md:w-1/2 lg:w-1/3 mx-auto my-12">
            <h1 class="text-lg font-bold">Registro en Asociación Arrabal</h1>
            <form class="flex flex-col mt-4">
            <label>Nombre
                <input
                type="text"
                name="full-name"
                class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                placeholder="Nombre"
                />
            </label>
            <label>Apellidos
                <input
                type="text"
                name="full-name"
                class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                placeholder="Nombre"
                />
            </label>
            <label>Correo
            <input
                type="email"
                name="email"
                class="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                placeholder="Correo electrónico"
            />
            </label>
            <label>Contraseña
            <input
                type="password"
                name="password"
                class="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                placeholder="Contraseña"
            />
            </label>
            <label>Confirmar contraseña
            <input
                type="password"
                name="repeat-password"
                class="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                placeholder="Confirmar constraseña"
            />
            </label>
            <button
                type="submit"
                class="mt-4 px-4 py-3  leading-6 text-base rounded-md border border-transparent text-white focus:outline-none bg-blue-500 text-blue-100 hover:text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer inline-flex items-center w-full justify-center items-center font-medium focus:outline-none"
            >
                Registrarse
            </button>            
            </form>
        </div>
    </div>
</template>

<style language="CSS" scoped>
form{
    font-family: 'Nunito Sans', sans-serif;
}
label{
    color:#F08419;
}

</style>