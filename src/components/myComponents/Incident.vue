<script>
export default {
  name: "IncidentView",
  data() {
    return {
      estado: "",
      programa: "",
      proyecto: "",
      sede: "",
      categoria: "",
      almumail: "",
      descripcion: "",
      comentarios: "",
    };
  },
};
</script>

<!-- <template>
  <form @submit.prevent="submitForm" class="row g-3"></form>
  <div class="incident-view">
    <div class="fields-container">
      <div class="title-container">
        <div class="title-rectangle">
          <p class="title-text">Incidencia / Apoyo</p>
        </div>
      </div>
      <div class="field-container">
        <div class="field-rectangle">
          <label for="state">Estado</label>
          <select id="state">
            <option value="pending">Pendiente</option>
            <option value="rejected">Rechazado</option>
            <option value="inProgress">En Trámite</option>
            <option value="finished">Finalizado</option>
          </select>
        </div>
        <div class="field-rectangle">
          <label for="program">Programa</label>
          <input type="text" id="program">
        </div>
        <div class="field-rectangle">
          <label for="project">Proyecto</label>
          <input type="text" id="project">
        </div>
        <div class="field-rectangle">
          <label for="location">Sede</label>
          <input type="text" id="location">
        </div>
        <div class="field-rectangle">
          <label for="category">Categoría</label>
          <input type="text" id="category">
        </div>
        <div class="field-rectangle">
          <label for="description">Descripción</label>
          <input type="text" id="description">
        </div>
        <div class="field-rectangle">
          <label for="comments">Comentarios/ALMUMAIL</label>
          <textarea id="comments"></textarea>
        </div>
        <div class="btn-container">
          <button class="btn-update">Actualizar ticket</button>
        </div>
      </div>
    </div>
    <router-link to="/" class="back-btn">&#60; Volver</router-link>
  </div>
</template> -->
<template>
<form @submit.prevent="submitForm" class="row g-3">
  <div class="containerTitle">
      <h1 class="incidentTitle"> Incidencia/Apoyo </h1>
  </div>
  <div class="col-md-6">
  <label for="state" class="form-label">Estado:</label>
  <select class="form-select" id="state" v-model="form.estado">
      <option value="selectState" >Seleccione un estado</option>
      <option value="seen" style="">Visto</option>
      <option value="pending">Pendiente</option>
      <option value="rejected">Rechazado</option>
      <option value="inProgress">En Trámite</option>
      <option value="finished">Finalizado</option>
  </select>
  </div>
  <div class="col-md-6">
      <label for="program" class="form-label">Programa:</label>
      <input type="text" class="form-control" id="program" v-model="form.programa">
  </div>
  <div class="col-md-6">
      <label for="proyect" class="form-label">Proyecto:</label>
      <input type="text" class="form-control" id="proyect" v-model="form.proyecto">
  </div>
  <div class="col-md-6">
  <label for="sede" class="form-label">Sede:</label>
  <select class="form-select" id="sede" v-model="form.sede">
      <option value="Seleccione un estado">Seleccione una sede</option>
      <option value="Remote">Remoto</option>
      <option value="Edificio Galaxia">Edificio Galaxia</option>
      <option value="Innova. Social">Innova. Social</option>
      <option value="Pasaje Begoña">Pasaje Begoña</option>
      <option value="El Carmen">El Carmen</option>
      <option value="Dos aceras">Dos aceras</option>
  </select>
  </div>
  <div class="col-md-12">
      <label for="category" class="form-label">Categoria:</label>
      <textarea class="form-control" id="category" rows="3" v-model="form.categoria"></textarea>
  </div>
  <div class="col-md-12">
      <label for="description" class="form-label">Descripción:</label>
      <textarea class="form-control" id="description" rows="3" v-model="form.descripcion"></textarea>
  </div>
  <div class="col-md-12">
      <label for="comments" class="form-label">Comentarios/AlmuMail:</label>
      <textarea class="form-control" id="comments" rows="3" v-model="form.comentarios"></textarea>
  </div>
  <div class="containerButton">
  <div class="sendButton">
      <button type="submit" class="btn "> Enviar </button>
  </div>
  </div>
  <div class="containerBack">
  <router-link to="/" class="back-btn">&#60; Volver</router-link>
  </div>
  </form>
</template>

<!-- <style lang="css" scoped>
/* Fondo y tipografía */
body {
  background-color: #FBE6C6;
  font-family: 'Nunito Sans', sans-serif;
}
/* Título */
.title-container {
  text-align: center;
  margin-bottom: 20px;
}
.title-text {
  font-size: 1.5rem;
  margin: 0;
  color:#F08419;
  text-align:center;
  margin-bottom: 5%;
  font-family: 'Nunito Sans', sans-serif;
    
}
/* Contenedor de campos */
.fields-container {
  border: 5px solid #F08419;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
}
/* Campo */
.field-rectangle {
  background-color: #FFFCFC;
  border: 2px solid #F08419;
  border-radius: 5px;
  margin-bottom: 15px;
  padding: 10px;
}
/* Etiqueta del campo */
label {
  font-size: 0.9rem;
  font-weight: bold;
  margin-bottom: 5px;
  color: #F08419;
}
/* Input del campo */
.input-field {
  padding: 10px;
  border-radius: 5px;
  border: 2px solid #F08419;
  width: 100%;
  color: #F08419;
}
/* Select del campo */
select {
  padding: 10px;
  border-radius: 5px;
  border: 2px solid #F08419;
  width: 100%;
  color: #F08419;
}
/* Área de texto del campo */
textarea {
  padding: 10px;
  border-radius: 5px;
  border: 2px solid #F08419;
  resize: none;
  width: 100%;
  color: #F08419;
}
/* Botón */
.register-button {
  font-weight: bold;
  color: white;
  background-color: #F08419;
  border-radius: 10px;
  width: 50%;
  margin: auto;
  text-align: center;
  padding: 10px;
  border: none;
}
/* Error message */
.error-message {
  color: red;
  margin-top: 10px;
  font-size: 0.8rem;
}
/* Volver */
.back-btn {
  background-color: transparent;
  border: none;
  color: #F08419;
  font-size: 1rem;
  text-decoration: underline;
  cursor: pointer;
  margin-top: 20px;
}
@media only screen and (max-width: 768px) {
  /* Campo */
  .field-rectangle {
    width: 100%;
  }
  /* Etiqueta del campo */
  label {
    font-size: 1rem;
  }
  /* Input del campo */
  input,
  select,
  textarea {
    width: 100%;
  }
  /* Botón */
  .register-button {
    margin-top: 40px;
  }
}
</style> -->

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



