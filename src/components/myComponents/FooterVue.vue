<script>
export default {
    name:'FooterVue',
}
</script>

<template>
    <footer>
        <div class="text-center p-3">
            &copy; Asociacionarrabal.org
        </div>
        <div class="text-center p-3">
            <a class="text-white" href="https://asociacionarrabal.org/avisos-legales">Aviso legal</a>
        </div>
        <div class="text-center p-3">
            Málaga Tel: 952 300 500                                                             
        </div>
        <div class="femCoders">
            Diseñado por <img src="public\femLogo.png" width="10%" alt=logoFemCoders>                                                   
        </div>
    </footer>
</template>
<style>
footer{
    display: flex;
    flex-direction: row;
    background-color:#F08419;
    position:absolute;
    bottom: 0px;
    width: 100%;
    color: white;
}
.femCoders{
    display: flex;
    justify-items: center;
}
</style>
