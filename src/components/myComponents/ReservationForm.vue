<script>
export default {
    data() {
        return {
        form: {
            state:'',
            area:'',
            site:'',
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
        submitForm() {
        // Aquí podrías enviar el formulario a través de una petición HTTP o realizar alguna otra acción con los datos.
        console.log(this.form);
        }
    }
    }
</script>

<template>
    <div class="formContainer">
        <form @submit.prevent="submitForm" class="form row g-3">
            <div class="containerTitle">
                <h1 class="reservationTitle"> Crear Reserva </h1>
            </div>
            <div class="col-md-6">
                <label for="state" class="form-label">Estado:</label>
                <select class="form-select" id="state" v-model="form.state" >
                    <option disabled value="">Seleccione un estado</option>
                    <option value="seen">Visto</option>
                    <option value="pending">Pendiente</option>
                    <option value="inProgress">En trámite</option>
                    <option value="finished">Finalizado</option>
                    <option value="rejected">Rechazado</option>
                </select>
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
                <label for="site" class="form-label">Sede:</label>
                <select class="form-select" id="site" v-model="form.site">
                    <option disabled value="">Seleccione una sede</option>
                    <option value="dosAceras">Dos aceras</option>
                    <option value="galaxiaBuilding">Edificio Galaxia</option>
                    <option value="carmen">El Carmen</option>
                    <option value="socialInnovation">Innovación Social</option>
                    <option value="begonaPassage">Pasaje Begoña</option>
                    <option value="remote">Remoto</option>                    
                </select>
            </div>
            <div class="col-md-6">
                <label for="room" class="form-label">Sala:</label>
                <select class="form-select" id="room" v-model="form.room">
                <option disabled value="">Seleccione una sala</option>
                <option value="carmenTrainingRoom">El Carmen / Aula de formación</option>
                <option value="carmenCoworking">El Carmen / Coworking</option>
                <option value="carmenOpenSpace">El Carmen / Espacio central abierto</option>
                
                <option value="begonaGalaxia">Begoña / Edificio Galaxia</option>
                    <option value="Edificio Galaxia">Edificio Galaxia</option>
                    <option value="Innova. Social">Innova. Social</option>
                    <option value="Pasaje Begoña">Pasaje Begoña</option>
                    <option value="El Carmen">El Carmen</option>
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
                <label for="assistantsNumber" class="form-label">Número de asistencias:</label>
                <input type="number" class="form-control" id="assistantsNumber" v-model="form.assistantsNumber">
            </div>
            <div class="col-md-12">
                <label for="comments" class="form-label">Comentarios:</label>
                <textarea class="form-control" id="comments" rows="3" v-model="form.comments" placeholder="Escribe un comentario"></textarea>
            </div>
            <div class="containerButton">
            <div class="sendButton">
                <button type="submit" class="btn ">Enviar</button>
            </div>
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
.containerButton{
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
}
.sendButton{
    font-weight: bold;
    color: white;
    background-color:#F08419;
    border-radius:10px;
    width:10%;
    text-align: center;
}
.btn{
    font-weight: bold;
    color: white;
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