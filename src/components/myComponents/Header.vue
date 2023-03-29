<script>
import { ref } from 'vue';
import LogoutButton from '../buttons/LogoutButton.vue';

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
                <div @click="toggleNav" class="flex md:hidden">
                    <button  type="button" class="text-gray-100  hover:text-xl  focus:outline-none focus:text-white-400">
                        <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                            <path  fill-rule="evenodd"  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"                   ></path>
                        </svg>
                    </button>
                </div>
            </div>
            <ul :class="showMenu ? 'flex' : 'hidden'"  class="menu flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0">
                <li><RouterLink to="/login"><strong><a href="../views/LoginView.vue">Acceso</a></strong></RouterLink></li>
                <li><RouterLink to="/"><strong><a href="../views/MenuView.vue">Mi menú</a></strong></RouterLink></li>
                <li><RouterLink to="/reservation"><strong><a href="../views/ReservationFormView.vue">Crear reserva</a></strong></RouterLink></li>
                <li><RouterLink to="/incident"><strong><a href="../views/IncidentView.vue">Crear incidencia</a></strong></RouterLink></li>
                <li><RouterLink to="/tickets"><strong><a href="../views/MyTicketsView.vue">Mis Tickets</a></strong></RouterLink></li>
                <li><LogoutButton/></li>
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