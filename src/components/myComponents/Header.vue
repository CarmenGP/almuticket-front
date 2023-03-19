<script>
import { ref } from 'vue';
export default {
    setup() {
        let showMenu = ref(false);
        const toggleNav = () => (showMenu.value = !showMenu.value);
        return { showMenu, toggleNav };
    }
}
</script>

<template>
    <div class="headerContainer bg-indigo-600">
        <nav class="container px-4  py-2 mx-auto md:flex md:justify-between md:items-center ">
            <div class="logoArrabal flex items-center justify-between">
                <router-link     to="/"    class="text-xl font-bold text-gray-100  md:text-2xl ">
                    <a class="logoArrabal" href="../views/login.vue">
                        <img class="logoArrabal" src="public/logoArrabal.png" alt="Logo Arrabal">
                    </a>
                </router-link>
            <!-- Mobile menu button -->
                <div @click="toggleNav" class="flex md:hidden">
                    <button  type="button" class="text-gray-100  hover:text-xl  focus:outline-none focus:text-white-400">
                        <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                            <path  fill-rule="evenodd"  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"                   ></path>
                        </svg>
                    </button>
                </div>
            </div>
        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
            <ul :class="showMenu ? 'flex' : 'hidden'"  class="menu flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0">
                <li><RouterLink to="/"><strong><a href="../views/login.vue">Inicio</a></strong></RouterLink></li>
                <li class="text-gray-100 hover:text-indigo-400"><RouterLink to="/booking"><strong><a href="../views/bookingForm.vue">Crear reserva</a></strong></RouterLink></li>
                <li class="text-gray-100 hover:text-indigo-400"><RouterLink to="/incidence"><strong><a href="../views/incidenceForm.vue">Crear incidencia</a></strong></RouterLink></li>
                <li class="text-gray-100 hover:text-indigo-400"><RouterLink to="/allTickets"><strong><a href="../views/allTickets.vue">Mis Tickets</a></strong></RouterLink></li>
            </ul>
        </nav>
    </div>
</template> 

<style lang="css" scoped>

.headerContainer{
    background-color:#F08419; 
}  

.logoArrabal{
    width: 75%;
    margin-left: 2%;
}

.menu{
    margin-right: 10%;
}
a{
    text-decoration: none;
    display: flex;
    flex-direction: row;
    color:white;
    margin:15px;
    justify-items: center;
}

a:hover{
    color:white;
    text-decoration: underline;
}


@media only screen and (max-width: 768px) {

.logoArrabal{
    width: 90%;
    margin-left: 2%;
}

a{
    text-decoration: none;
    display: flex;
    flex-direction: row;
    color:white;
    justify-items: center;
}

a:hover{
    color:white;
    text-decoration: underline;
}
}



</style>