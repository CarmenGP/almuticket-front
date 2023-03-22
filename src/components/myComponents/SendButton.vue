<script>
export default {
}
</script>

<template>
    <div>
        <RouterLink to="/">
            <a href="../views/MenuView.vue">
                <button class="sendButton">Enviar</button>   
            </a>
        </RouterLink>
        </div>
</template>

<style lang="css" scoped>
.sendButton {
    font-weight: bold;
    color: white;
    background-color: #f08419;
    border-radius: 10px;
    width: 50%;
    text-align: center;
    margin-bottom: 5%;
    margin:auto;
}
</style>