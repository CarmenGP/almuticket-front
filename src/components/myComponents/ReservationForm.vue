<script>
export default {
    data() {
        return {
        form: {
            estado: '',
            programa: '',
            proyecto: '',
            sede: '',
            sala: '',
            fecha: '',
            horaInicio: '',
            horaFinal: '',
            numeroAsistencias: '',
            comentarios: ''
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
    <!-- <div class="container"> -->
        <form @submit.prevent="submitForm" class="row g-3">
        <div class="col-md-6">
        <label for="estado" class="form-label">Estado:</label>
        <select class="form-select" id="estado" v-model="form.estado">
            <option value="">Seleccione un estado</option>
            <option value="En proceso">Visto</option>
            <option value="Terminado">Pendiente</option>
            <option value="Terminado">En trámite</option>
            <option value="Terminado">Finalizado</option>
            <option value="Cancelado">Rechazado</option>
        </select>
        </div>
        <div class="col-md-6">
            <label for="programa" class="form-label">Programa:</label>
            <input type="text" class="form-control" id="programa" v-model="form.programa">
        </div>
        <div class="col-md-6">
            <label for="proyecto" class="form-label">Proyecto:</label>
            <input type="text" class="form-control" id="proyecto" v-model="form.proyecto">
        </div>
        <div class="col-md-6">
        <label for="sede" class="form-label">Sede:</label>
        <select class="form-select" id="sede" v-model="form.sede">
            <option value="">Seleccione un estado</option>
            <option value="En proceso">Remoto</option>
            <option value="Terminado">Edificio Galaxia</option>
            <option value="Terminado">Innova. Social</option>
            <option value="Terminado">Pasaje Begoña</option>
            <option value="Cancelado">El Carmen</option>
            <option value="Cancelado">Dos aceras</option>
        </select>
        </div>
        <div class="col-md-6">
            <label for="sala" class="form-label">Sala:</label>
            <input type="text" class="form-control" id="sala" v-model="form.sala">
        </div>
        <div class="col-md-6">
            <label for="fecha" class="form-label">Fecha:</label>
            <input type="date" class="form-control" id="fecha" v-model="form.fecha">
        </div>
        <div class="col-md-6">
            <label for="horaInicio" class="form-label">Hora de inicio:</label>
            <input type="time" class="form-control" id="horaInicio" v-model="form.horaInicio">
        </div>
        <div class="col-md-6">
            <label for="horaFinal" class="form-label">Hora final:</label>
            <input type="time" class="form-control" id="horaFinal" v-model="form.horaFinal">
        </div>
        <div class="col-md-6">
            <label for="asistencias" class="form-label">Número de asistencias:</label>
            <input type="number" class="form-control" id="asistencias" v-model="form.numeroAsistencias">
        </div>
        <div class="col-md-12">
            <label for="comentarios" class="form-label">Comentarios:</label>
            <textarea class="form-control" id="comentarios" rows="3" v-model="form.comentarios"></textarea>
        </div>
        <div class="sendButton">
            <button type="submit" class="btn ">Enviar</button>
        </div>
        </form>
    <!-- g -->
</template>

<style lang="css" scoped>
/* .container{
    background-color:#FFF3D6;
} */

.g-3{
    background-color:#FFF3D6;
    margin: 10px 10px 10px 10px;
    width: 100%;
    height: 100%;
}

h1{
    color:#F08419;
    text-align:center;
    margin-bottom: 5%;   
}

label{
    color:#F08419;
    font-weight: bold;
}

.sendButton{
    font-weight: bold;
    color: white;
    background-color:#F08419;
    border-radius:10px;
    width:15%;
    text-align: center;
    margin-bottom: 10px;
}

</style>