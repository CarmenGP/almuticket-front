<script>
export default {

}
</script>

<template>
        <div>
            <RouterLink to="/tickets">
                <a href="../views/MyTicketsView.vue">
                    <button class="tickets-button" @click="seeTickets()">Ver mis Tickets</button>   
                </a>
            </RouterLink>            
        </div>
</template>

<style lang="css" scoped>
.tickets-button{
    background-color: #F5F6F6;
    color: #F08419;
    border: 8px solid #F08419;
    border-radius: 10px;
    font-size: 1.2rem;
    padding: 0.8rem 1.2rem;
    cursor: pointer;
    transition: all 0.2s;

}
.tickets-button:hover {
    background-color: #F08419;
    color: #F5F6F6;
    border-color: #F5F6F6;
}

</style>
