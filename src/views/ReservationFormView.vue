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
/* .containerFormButton{
    display:flex;
    justify-content: center;

} */
</style>