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
                <h1> Detalle de incidencia </h1>
            </div>
            <div class="col-md-12">
                <label for="state" class="form-label">Estado:</label>
                <input type="text" class="form-control" id="state" v-model="form.state" placeholder="Estado de la incidencia">
            </div>
            <div class="staticField1 col-md-12">
                <label for="subject" class="form-label">Asunto:</label>
                <p>{{ form.subject }}</p>
            </div>
            <div class="staticField col-md-6">
                <label for="area" class="form-label">Área:</label>
                <p>{{ form.area }}</p>
            </div>
            <div class="staticField col-md-6">
                <label for="room" class="form-label">Sala:</label>
                <p>{{ form.room }}</p>
            </div>
            <div class="staticField col-md-12">
                <label for="category" class="form-label">Categoria:</label>
                <p>{{ form.category }}</p>
            </div>
            <div class="staticField col-md-12">
                <label for="description" class="form-label">Descripción:</label>
                <p>{{ form.description }}</p>
            </div>
            <div class="col-md-12">
                <label for="comments" class="form-label">Comentarios de la persona que administra:</label>
                <textarea class="form-control" id="comments" rows="3" v-model="form.comments" placeholder="Escribe un comentario"></textarea>
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
    margin-top: 10px;
    color:#F08419;
    font-weight: 600;
}
.staticField{
    margin-bottom: 20px;
}
.staticField1{
    margin-bottom: 20px;
    margin-top:-1px;
}
p{
    background-color: #F0F0F0;
    color:#402306;
    width:100%;
    height: 70%;
    border-radius: 5px;
    padding: px;
    margin-bottom: 10px;
}
input[type="text"] {
    background-color: #F0F0F0;
    border: 2px solid #F08419;
    color:#402306;
    border-radius: 5px;
    padding: 5px;
}
input[type="text"]:focus {
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