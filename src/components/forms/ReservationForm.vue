<script>
import axios from 'axios';

export default {
    name: 'ReservationForm',
    data() {
        return {
        form: {
            user_id:'',
            subject:'',
            activity:'',
            area:'',
            room:'',
            date:'',
            startTime:'',
            finishTime:'',
            assistantsNumber:'',
            comments:'',
        }
        }
    },
    methods: {
        async submitForm() {
        const auth = {headers: {
                        'Authorization': 'bearer ' + localStorage.getItem('token')}}

        await axios.post('http://127.0.0.1:8000/api/createBooking',{
                        subject: this.subject,
                        area: this.area,
                        activity: this.activity,
                        room: this.room,
                        date: this.date,
                        startTime: this.startTime,
                        finishTime: this.finishTime,
                        assistantsNumber: this.assistantsNumber,
                        comments: this.comments,
                    })

                    .then(response=> {
                        console.log(response);
                });
        }
    }
    }
</script>

<template>
    <div class="formContainer">
        <form @submit.prevent="submitForm()" class="form row g-3">
            <div class="containerTitle">
                <h1 class="reservationTitle"> Crear Reserva </h1>
            </div>
            <div class="col-md-12">
                <label for="subject" class="form-label">Asunto:</label>
                <input type="text" class="form-control" id="subject" v-model="form.subject" placeholder="Asunto de la reserva">
            </div>
            <div class="col-md-12">
                <label for="activity" class="form-label">Actividad:</label>
                <input type="text" class="form-control" id="activity" v-model="form.activity" placeholder="Título de la actividad">
            </div>
            <div class="col-md-6">
                <label for="area" class="form-label">Área:</label>
                <select class="form-select" id="area" v-model="form.area">
                    <option disabled value="">Seleccione un área</option>
                    <option value="aidei">AIDEI</option>
                    <option value="communication">Comunicación</option>
                    <option value="economics">Económica</option>
                    <option value="employability">Empleabilidad</option>
                    <option value="entrepeneuring">Emprendimiento</option>
                    <option value="specialVulnerability">Especial Vulnerabilidad</option>
                    <option value="workEntry">Incorporación Laboral</option>
                    <option value="infantryFamily">Infancia y Familia</option>
                    <option value="socialInnovation">Innovación Social</option>
                    <option value="international">Internacional</option>
                    <option value="participation">Participación</option>
                    <option value="peopleTalent" >Personas y Talento</option>
                    <option value="freedomExcluded">Privadas de Libertad</option>
                    <option value="projects">Proyectos</option>
                    <option value="begonaReception">Recepción Begoña</option>               
                    <option value="chiclanaReception">Recepción Chiclana</option>
                    <option value="galaxiaReception">Recepción Galaxia</option>
                </select>
            </div>
            <div class="col-md-6">
                <label for="room" class="form-label">Sala:</label>
                <select class="form-select" id="room" v-model="form.room">
                    <option disabled value="">Seleccione una sala</option>
                    <option value="dosAcerasClasroom3">Dos Aceras/Aula 3</option>
                    <option value="dosAceras">Dos Aceras/Sala Común 1ª Planta</option>
                    <option value="DosAcerasAssemblyHall">Dos Aceras/Salón de Actos</option>
                    <option value="carmenTrainingRoom">El Carmen/Aula de formación</option>
                    <option value="carmenCoworking">El Carmen/Coworking</option>
                    <option value="carmenOpenSpace">El Carmen/Espacio central abierto</option>
                    <option value="Edificio Galaxia">Edificio Galxia/Sala Galaxia</option>
                    <option value="IMOTrainingRoom">IMO/Sala de Formación</option>
                    <option value="IMOInovationRoom">IMO/Espacio de Innovación</option>
                    <option value="IMOMeetingRoom">IMO/Salón de Encuentros</option>                 
                    <option value="IMOAssemblyHall">IMO/Salón de Actos</option>
                    <option value="other">Otros</option>
                </select>
            </div>
            <div class="col-md-6">
                <label for="date" class="form-label">Fecha:</label>
                <input type="date" class="form-control" id="date" v-model="form.date">
            </div>
            <div class="col-md-6">
                <label for="startTime" class="form-label">Hora de inicio:</label>
                <input type="time" class="form-control" id="startTime" v-model="form.startTime">
            </div>
            <div class="col-md-6">
                <label for="finishTime" class="form-label">Hora final:</label>
                <input type="time" class="form-control" id="finishTime" v-model="form.finishTime">
            </div>
            <div class="col-md-6">
                <label for="assistantsNumber" class="form-label">Número de asistentes:</label>
                <input type="number" class="form-control" id="assistantsNumber" v-model="form.assistantsNumber">
            </div>
            <div class="col-md-12">
                <label for="description" class="form-label">Descripción:</label>
                <textarea class="form-control" id="description" rows="3" v-model="form.description" placeholder="Escribe una descripción de la incidencia"></textarea>
            </div>
            <div class="col-md-12">
                <label for="comments" class="form-label">Comentarios de la persona que administra:</label>
                <textarea class="form-control" id="comments" rows="3" v-model="form.comments" placeholder="Escribe un comentario"></textarea>
            </div>
            <div class="containerButton">
                    <div class="resetButton">
                        <input type="reset" class="btn reset-btn" value="Resetear">
                    </div>
                    <div class="sendButton">
                        <input type="submit" class="btn send-btn" value="Enviar">
                    </div>
                </div>
            <div class="containerBack">
            <router-link to="/menu" class="back-btn">← Volver</router-link>
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
    background-color: #E6E6E6;
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
input[type="date"], select {
    background-color: #E6E6E6;
    border: 2px solid #F08419;
    color:#402306;
    border-radius: 5px;
    padding: 5px;
    margin-bottom: 10px;
}
input[type="time"], select {
    background-color: #E6E6E6;
    border: 2px solid #F08419;
    color:#402306;
    border-radius: 5px;
    padding: 5px;
    margin-bottom: 10px;
}
input[type="number"], select {
    background-color: #E6E6E6;
    border: 2px solid #F08419;
    color:#402306;
    border-radius: 5px;
    padding: 5px;
    margin-bottom: 10px;
}
textarea{
    background-color: #E6E6E6;
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