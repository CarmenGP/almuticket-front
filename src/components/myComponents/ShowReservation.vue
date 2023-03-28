<script>
export default {
    name: "ReservationView",
    data() {
        return {
            form: {
                state:"",
                subject: "",
                activity: "",
                area: "",
                room: "",
                date: "",
                startTime: "",
                endTime: "",
                assistantsNumber: "",
                description: "",
                comments: "",
            },
        };
    },
    methods: {
        submitForm() {
            console.log("Formulario enviado");
        },
    },
};
</script>

<template>
    <div class="formContainer">
    <form @submit.prevent="submitForm" class="form row g-3">
    <div class="containerTitle">
        <h1>Mi Reserva</h1>
    </div>
    <div class="imputForm col-md-12">
        <label for="state" class="form-label">Estado:</label>
        <input type="text" class="form-control" id="state" v-model="form.state" placeholder="Reservation state">
    </div>
    <div class="staticField1 col-md-12">
        <label for="subject" class="form-label">Asunto:</label>
        <p>{{ form.subject }}</p>
    </div>
    <div class="activityField staticField col-md-6">
        <label for="activity" class="form-label">Actividad:</label>
        <p>{{ form.activity }}</p>
    </div>
    <div class="staticField col-md-6">
        <label for="area" class="form-label">Area:</label>
        <p>{{ form.area }}</p>
    </div>
    <div class="staticField col-md-6">
        <label for="room" class="form-label">Sala:</label>
        <p>{{ form.room }}</p>
    </div>
    <div class="staticField col-md-3">
        <label for="date" class="form-label">Fecha:</label>
        <p>{{ form.date }}</p>
    </div>
    <div class="staticField col-md-3">
        <label for="start_time" class="form-label">Hora de inicio:</label>
        <p>{{ form.start_time }}</p>
    </div>
    <div class="staticField col-md-3">
        <label for="end_time" class="form-label">Hora de fin:</label>
        <p>{{ form.end_time }}</p>
    </div>
    <div class="staticField col-md-3">
        <label for="assistantsNumber" class="form-label">Número de asistentes:</label>
        <p>{{ form.assistantsNumber }}</p>
    </div>
    <div class="staticField col-md-12">
        <label for="description" class="form-label">Descripción:</label>
        <p>{{ form.description }}</p>
    </div>
    <div class="inputForm col-md-12">
        <label for="comments" class="form-label">Comentarios de la persona que administra:</label>
        <textarea class="form-control" id="comments" rows="3" v-model="form.comments" placeholder="Write a comment"></textarea>
        </div>
                <div class="containerBack">
                    <router-link to="/" class="back-btn">← Volver</router-link>
                </div>
        </form>
            </div>
</template>

<style lang="css" scoped>
.formContainer{
    width:70%;
    margin:auto;
}
.container{
    width: 100%;
    height: 100%;
}
.form{
    background-color:#FFFCFC;
    margin: 5%; 
    padding: 20px;
    border-width: 5px;
    border-color: #f08419;
    border-radius: 10px;
}
h1{
    color:#F08419;
    text-align:center;
    margin-bottom: 5%;
    font-weight:800;
    font-size: 1.5rem;  
    text-shadow: -1px -1px 0 #402306, 1px -1px 0 #402306, -1px 1px 0 #402306, 1px 1px 0 #402306;
    }
label{
    color:#F08419;
    font-weight: 600;
}

p{
    background-color: #F0F0F0;
    color:#402306;
    width:100%;
    height: 70%;
    border-radius: 5px;
    margin-bottom: 10px;
}
.staticField{
    margin-bottom: 20px;
}

.staticField1{
    margin-bottom: 20px;
    margin-top:-1px;
}

.activityField{
    width: 100%;
}
.containerButton {
    display: flex;
    justify-content: space-around;
}
.sendButton {
    font-weight: bold;
    color: #F5F6F6;
    background-color: #F08419;
    border-color: #F5F6F6;
    border-radius: 10px;
    width: 31%;
    text-align: center;
    margin-right: 10px;
    border-width: 4px;
    border-style: solid;
    box-sizing: border-box;
}
.sendButton:hover {
    background-color: #F5F6F6;
    color: #F08419;
    border-color: #F08419;
    border-width: 4px;
    border-style: solid;
    border-radius: 10px;
}
.resetButton {
    font-weight: bold;
    color: #F5F6F6;
    background-color: #F08419;
    border-radius: 10px;
    width: 33%;
    text-align: center;
    border-color: #F5F6F6;
    border-width: 4px;
    border-style: solid;
    box-sizing: border-box;
}
.resetButton:hover {
    background-color: #F5F6F6;
    color: #F08419;
    border-color: #F08419;
    border-width: 4px;
    border-style: solid;
    border-radius: 10px;
}
.reset-btn {
    text-align: center;
}
.btn {
    font-weight: bold;
    color: #F5F6F6;
}
input[type="text"], select {
    background-color: #F0F0F0;
    border: 2px solid #F08419;
    color:#402306;
    border-radius: 5px;
    padding: 5px;
    margin-bottom: 10px;
}
input[type="text"]:focus {
    background-color: #E6E6E6;
    border: 2px solid #F08419;
    color:#402306;
    border-radius: 5px;
    padding: 5px;
    margin-bottom: 10px;
}
input[type="date"], input[type="time"], input[type="number"], select {
    background-color: #E6E6E6;
    border: 2px solid #F08419;
    color:#402306;
    border-radius: 5px;
    padding: 5px;
    margin-bottom: 10px;
}

textarea{
    background-color: #F0F0F0;
    border: 2px solid #F08419;
    color:#402306;
    border-radius: 5px;
    padding: 5px;
    margin-bottom: 10px;
}

select {
    color:#402306;
}

.back-btn {
    background-color: transparent;
    border: none;
    font-weight: 600;
    color: #F08419;
    font-size: 1.2rem;
    cursor: pointer;
}

.containerBack{
    margin-bottom: 20px;
}

@media only screen and (max-width: 768px) {
    .formContainer{
        width:100%;
        margin:auto;
    }
}
</style>