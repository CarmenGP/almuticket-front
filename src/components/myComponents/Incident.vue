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
          <p class="title-text">INCIDENCIA / APOYO</p>
        </div>
      </div>
      <div class="field-container">
        <div class="field-rectangle">
          <label for="estado">Estado</label>
          <select id="estado">
            <option value="visto">Visto</option>
            <option value="pendiente">Pendiente</option>
            <option value="rechazado">Rechazado</option>
            <option value="en tramite">En Trámite</option>
            <option value="finalizado">Finalizado</option>
          </select>
        </div>
        <div class="field-rectangle">
          <label for="programa">Programa</label>
          <input type="text" id="programa">
        </div>
        <div class="field-rectangle">
          <label for="proyecto">Proyecto</label>
          <input type="text" id="proyecto">
        </div>
        <div class="field-rectangle">
          <label for="sede">Sede</label>
          <input type="text" id="sede">
        </div>
        <div class="field-rectangle">
          <label for="categoria">Categoría</label>
          <input type="text" id="categoria">
        </div>
        <div class="field-rectangle">
          <label for="descripcion">Descripción</label>
          <input type="text" id="descripcion">
        </div>
        <div class="field-rectangle">
          <label for="comentarios">Comentarios/ALMUMAIL</label>
          <textarea id="comentarios"></textarea>
        </div>
        <div class="btn-container">
          <button class="btn-actualizar">Actualizar ticket</button>
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
.title-rectangle {
  background-color: #F08419;
  color: white;
  padding: 5px;
  border-radius: 5px;
  display: inline-block;
}
.title-text {
  font-size: 1.5rem;
  margin: 0;
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



