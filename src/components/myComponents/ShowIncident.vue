<script>
export default {
    name: "IncidentView",
    data() {
        return {
            form: {
                state:"",
                subject: "",
                area: "",
                room: "",
                category: "",
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
                <h1> Mi Incidencia </h1>
            </div>
            <div class="imputForm col-md-12">
                <label for="state" class="form-label">Estado:</label>
                <input type="text" class="form-control" id="state" v-model="form.state" placeholder="Estado de la incidencia">
            </div>
            <div class="col-md-12">
                <label for="subject" class="form-label">Asunto:</label>
                <input type="text" class="form-control" id="subject" v-model="form.subject" placeholder="Asunto de la incidencia">
            </div>
            <div class="col-md-6">
                <label for="area" class="form-label">Área:</label>
                <input type="text" class="form-control" id="area" v-model="form.area" placeholder="Área de la incidencia">
            </div>
            <div class="col-md-6">
                <label for="room" class="form-label">Sala:</label>
                <input type="text" class="form-control" id="sala" v-model="form.sala" placeholder="Sala de la incidencia">
            </div>
            <div class="col-md-12">
                <label for="category" class="form-label">Categoria:</label>
                <input type="text" class="form-control" id="Category" v-model="form.category" placeholder="Categoria de la incidencia">
            </div>
            <div class="col-md-12">
                <label for="description" class="form-label">Descripción:</label>
                <input type="text" class="form-control" id="Description" v-model="form.description" placeholder="Descripción de la incidencia">
            </div>
            <div class="inputForm col-md-12">
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