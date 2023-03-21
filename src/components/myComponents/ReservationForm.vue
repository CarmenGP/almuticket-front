<script>
export default {
    data() {
        return {
        form: {
            state:'',
            program:'',
            proyect:'',
            sede:'',
            hall:'',
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
        <form @submit.prevent="submitForm" class="row g-3">
        <div class="containerTitle">
            <h1 class="reservationTitle"> Crear Reserva </h1>
        </div>
        <div class="col-md-6">
        <label for="state" class="form-label">Estado:</label>
        <select class="form-select" id="estado" v-model="form.estado">
            <option value="Seleccione un estado" >Seleccione un estado</option>
            <option value="Visto" style="">Visto</option>
            <option value="Pendiente">Pendiente</option>
            <option value="En trámite">En trámite</option>
            <option value="Finalizado">Finalizado</option>
            <option value="Rechazado">Rechazado</option>
        </select>
        </div>
        <div class="col-md-6">
            <label for="program" class="form-label">Programa:</label>
            <input type="text" class="form-control" id="programa" v-model="form.programa">
        </div>
        <div class="col-md-6">
            <label for="proyect" class="form-label">Proyecto:</label>
            <input type="text" class="form-control" id="proyecto" v-model="form.proyecto">
        </div>
        <div class="col-md-6">
        <label for="sede" class="form-label">Sede:</label>
        <select class="form-select" id="sede" v-model="form.sede">
            <option value="Seleccione un estado">Seleccione una sede</option>
            <option value="Remoto">Remoto</option>
            <option value="Edificio Galaxia">Edificio Galaxia</option>
            <option value="Innova. Social">Innova. Social</option>
            <option value="Pasaje Begoña">Pasaje Begoña</option>
            <option value="El Carmen">El Carmen</option>
            <option value="Dos aceras">Dos aceras</option>
        </select>
        </div>
        <div class="col-md-6">
            <label for="hall" class="form-label">Sala:</label>
            <input type="text" class="form-control" id="sala" v-model="form.sala">
        </div>
        <div class="col-md-6">
            <label for="date" class="form-label">Fecha:</label>
            <input type="date" class="form-control" id="fecha" v-model="form.fecha">
        </div>
        <div class="col-md-6">
            <label for="startTime" class="form-label">Hora de inicio:</label>
            <input type="time" class="form-control" id="horaInicio" v-model="form.horaInicio">
        </div>
        <div class="col-md-6">
            <label for="finishTime" class="form-label">Hora final:</label>
            <input type="time" class="form-control" id="horaFinal" v-model="form.horaFinal">
        </div>
        <div class="col-md-6">
            <label for="assistantsNumber" class="form-label">Número de asistencias:</label>
            <input type="number" class="form-control" id="asistencias" v-model="form.numeroAsistencias">
        </div>
        <div class="col-md-12">
            <label for="comments" class="form-label">Comentarios:</label>
            <textarea class="form-control" id="comentarios" rows="3" v-model="form.comentarios"></textarea>
        </div>
        <div class="containerButton">
        <div class="sendButton">
            <button type="submit" class="btn ">Actualizar Ticket</button>
        </div>
        </div>
        <div class="containerBack">
        <router-link to="/" class="back-btn">← Volver</router-link>
        </div>
        </form>
</template>

<style lang="css" scoped>

.container{
    width: 100%;
    height: 100%;
}
.g-3{
    background-color:#FFFCFC;
    margin: 20px 20px 20px 20px; 
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
    border-radius: 5px;
    padding: 5px;
    margin-bottom: 10px;
}
input[type="date"], select {
    background-color: #E6E6E6;
    border: 2px solid #F08419;
    border-radius: 5px;
    padding: 5px;
    margin-bottom: 10px;
}
input[type="time"], select {
    background-color: #E6E6E6;
    border: 2px solid #F08419;
    border-radius: 5px;
    padding: 5px;
    margin-bottom: 10px;
}
input[type="number"], select {
    background-color: #E6E6E6;
    border: 2px solid #F08419;
    border-radius: 5px;
    padding: 5px;
    margin-bottom: 10px;
}
textarea{
    background-color: #E6E6E6;
    border: 2px solid #F08419;
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
    /* text-decoration: underline; */
    cursor: pointer;
    }
.containerBack{
    margin-bottom: 20px;
}

</style>