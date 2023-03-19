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
/* Campo */
.field-rectangle {
  background-color: #F8C577;
  border: 2px solid #F09600;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 5px;
}
/* Etiqueta del campo */
label {
  font-size: 0.8rem;
  margin-bottom: 5px;
}
/* Input del campo */
input {
  padding: 5px;
  border-radius: 5px;
  border: 2px solid #F09600;
  width: 100%;
}
/* Select del campo */
select {
  padding: 5px;
  border-radius: 5px;
  border: 2px solid #F09600;
  width: 100%;
}
/* Área de texto del campo */
textarea {
  padding: 5px;
  border-radius: 5px;
  border: 2px solid #F09600;
  resize: none; /* Evita que el usuario pueda cambiar el tamaño de la caja de texto */
  width: 100%;
}
/* Botón */
.btn-rectangle {
  background-color: #F09600;
  border: 2px solid #F09600;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  padding: 5px 10px;
  font-size: 1rem;
  margin-top: 20px;
  margin-bottom: 10px;
  display: block;
  margin: 20px auto 0 auto;
}
/* Volver */
.btn-volver {
  background-color: transparent;
  border: none;
  color: #F09600 !important;
  font-size: 2.5rem;
  text-decoration: underline;
  cursor: pointer;
  margin-top: 20px;
}
/* Contenedor de campos */
.fields-container {
  border: 13px solid #F09600;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
}
/* Estado */
#estado {
  width: 100%;
}
/* Título */
.title-container {
  text-align: center;
  margin-bottom: 20px;
}
.title-rectangle {
  background-color: #F09600;
  color: white;
  padding: 5px;
  border-radius: 5px;
  display: inline-block;
}
.title-text {
  font-size: 1.5rem;
  margin: 0;
}
.btn-actualizar {
  background-color: #F09600;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  padding: 5px 10px;
  font-size: 1rem;
  margin-top: 20px;
  margin-bottom: 10px;
  display: block;
  margin: 20px auto 0 auto;
  width: fit-content;
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
  input {
    width: 100%;
  }
  /* Select del campo */
  select {
    width: 100%;
  }
  /* Área de texto del campo */
  textarea {
    width: 100%;
  }
  /* Contenedor de campos */
  .fields-container {
    border: none;
    padding: 0;
    margin: 0;
  }
  /* Botón */
  .btn-actualizar {
    margin-top: 40px;
  }
}
</style>

