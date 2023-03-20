<script>
import RequestButton from '../components/myComponents/RequestButton.vue'
import IncidenceButton from '../components/myComponents/IncidenceButton.vue'
import TicketsButton from '../components/myComponents/TicketsButton.vue'
export default {
    components: { RequestButton, IncidenceButton, TicketsButton },
}
</script>

<template>
    <div class="buttonsContainer flex justify-center">
        <RequestButton />
        <IncidenceButton />
        <TicketsButton />
    </div>
</template>

<style lang="css">
.buttonsContainer {
    display: flex;
    flex-direction: row;
    margin: 10rem;
    justify-content: space-around;
}
@media screen and (max-width: 768px) {
    .buttonsContainer {
        display: flex;
        flex-direction: column;
        margin: 5rem;
        justify-content: space-between;
        align-items: center;
    }
    .request-button, .incidence-button, .tickets-button {
    background-color: #F5F6F6;
    color: #F08419;
    border: 8px solid #F08419;
    border-radius: 13px;
    font-size: 0.5rem;
    padding: 0.8rem 1.2rem;
    cursor: pointer;
    transition: all 0.2s;
    margin-top:2rem;
    margin-bottom: 2rem;
    }
   
    .request-button:hover, .incidence-button:hover, .tickets-button:hover {
    background-color: #F08419;
    color:  #F5F6F6;
    border-color: #F5F6F6;
    }
}
</style>