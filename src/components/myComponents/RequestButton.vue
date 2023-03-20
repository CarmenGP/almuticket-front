<script>
export default {
    methods: {
        requestReservation() {
    }
}
}
</script>

<template>
        <div>
            <button class="request-button mr-4" @click="requestReservation()">Solicitud de reserva de sala</button>   
        </div>
</template>

<style lang="css" scoped>
.request-button{
    background-color: #F5F6F6;
    color: #F08419;
    border: 8px solid #F08419;
    border-radius: 10px;
    font-size: 1.2rem;
    padding: 0.8rem 1.2rem;
    cursor: pointer;
    transition: all 0.2s;
}
.request-button:hover {
    background-color: #F08419;
    color: #F5F6F6;
    border-color: #F5F6F6;
}

</style>
