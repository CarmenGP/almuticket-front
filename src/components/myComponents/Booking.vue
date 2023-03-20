<script>
export default {
    methods: {
        requestReservation() {
        // Lógica para mostrar el formulario de solicitud de reserva de sala
        },
        createIncidence() {
        // Lógica para crear una nueva incidencia o solicitud de apoyo de programas
        },
        seeTickets() {
        // Lógica para mostrar los tickets del usuario actual
        }
    }
}
</script>

<template>
        <div class="reservations-container">
        <!-- <h1 class="text-3xl font-bold text-center mb-8" style="color: #F08419">Crear Ticket</h1>  -->
        <div class="buttons-container flex justify-center">
            <button class="request-button mr-4" @click="requestReservation()">Solicitud de reserva de sala</button>
            <button class="incidence-button mx-4" @click="createIncidence()">Incidencia/Apoyo Programas</button>
            <button class="tickets-button ml-4" @click="seeTickets()">Ver mis tickets</button>
        </div>
        </div>
</template>

<style lang="css" scoped>

h1 {
    color: #F08419;
    margin-top: 4rem;
    text-align: center;
    margin-bottom: 2rem;
}
html, body {
    height: 100%;
    margin: 0;
    padding: 0;
}

.buttons-container {
    margin-top: 13rem;
}
.buttons-wrapper {
    margin-top: 2rem;
}
.request-button, .incidence-button, .tickets-button {
    background-color: #F8F8F8;
    color: #F08419;
    border: 8px solid #F08419;
    border-radius: 13px;
    font-size: 1.2rem;
    padding: 0.8rem 1.2rem;
    cursor: pointer;
    transition: all 0.2s;
}
.request-button:hover, .incidence-button:hover, .tickets-button:hover {
    background-color: #F08419;
    color: #F8F8F8;
    border-color: #F8F8F8;
}
.reservations-container {
    background-color: #F2F2F2;
    padding: 2rem;
    min-height: 100vh;
}
@media screen and (max-width: 768px) {
    .buttons-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 5rem;   
    }
    .request-button, .incidence-button, .tickets-button {
        font-size: 1rem;
        padding: 0.5rem 0.8rem;
        margin-top:5rem;
        margin-bottom: 2;
    }
    .request-button:hover, .incidence-button:hover, .tickets-button:hover {
    background-color: #F08419;
    color: #F8F8F8;
    border-color: #F8F8F8;
    }
}
</style>
