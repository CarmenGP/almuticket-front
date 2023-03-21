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

<template>
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
            <option value="in progress">En Trámite</option>
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
</template>


<style scoped lang="css">
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
  border: 13px solid #F08419;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
}

/* Campo */
.field-rectangle {
  background-color: #FFFCFC;
  border: 2px solid #F08419;
  border-radius: 10px;
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
</style>



