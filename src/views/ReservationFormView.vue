<script>
import ReservationForm from '../components/myComponents/ReservationForm.vue'
import SendButton from '../components/myComponents/SendButton.vue'

export default {
components: { ReservationForm , SendButton },
}
</script>

<template>
    <div class="containerFormButton">
        <ReservationForm/>
        <SendButton/>
    </div>
</template>

<style lang="css" scoped>
.containerFormButton{
    background-color: #FFFCFC !important;
    display:flex;
    flex-direction: column;
    align-items: center;
    border-width: 5px;
    border-color: #f08419;
    border-radius: 10px;
    width: 80%;
    margin: auto;
    margin-top:5%;
    margin-bottom: 5%;
    padding-bottom: 5%;
}
</style>