<script>
export default {
    methods: {
    send() {
        console.log("¡Haz hecho clic en Enviar!");
    }
    }
}
</script>

<template>
    <div class="containerButton">
    <button @click="SendButton">Enviar</button>
    </div>
</template>

<style lang="css" scoped>
.containerButton{
    font-weight: bold;
    color: white;
    background-color:blueviolet;
    border-radius:10px;
    width:10%;
    text-align: center;
}

button{
    font-weight: bold;
    color: white;
}
</style>