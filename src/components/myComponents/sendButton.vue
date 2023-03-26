<script>
export default {
}
</script>

<template>
    <div>
        <RouterLink to="/">
        <div class="containerButton">
            <a href="../views/MenuView.vue">
                <button class="sendButton">Enviar</button>   
            </a>
        </div>
        </RouterLink>
        </div>
</template>

<style lang="css" scoped>
.sendButton {
    min-width: 130px;
    height: 40px;
    color: #fff;
    padding: 5px 10px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    outline: none;
    border-radius: 10px !important;
    border-color:#f08419;
    border: 2px solid ;
    background:#f08419 ;
}
.sendButton:hover {
    background: #fff;
    color: #f08419;
}
</style>

