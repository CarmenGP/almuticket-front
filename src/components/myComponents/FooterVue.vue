<script>
export default {
    name:'FooterVue',
}
</script>

<template>
    <footer :text="['lg-start']">
        <div class="text-center p-3">
            &copy; Asociacionarrabal.org
        </div>
        <div class="text-center p-3">
            <a class="text-white" href="https://asociacionarrabal.org/avisos-legales">Aviso legal</a>
        </div>
        <div class="text-center p-3">
            Málaga Tel: 952 300 500                                                             
        </div>
        <div class="text-center p-3">
            Diseñado por FemCoders Málaga        
            <a class="text-white" href="public\femLogo.png" alt=logoFemCoders> </a>                                                 
        </div>
    </footer>
</template>
<style>
footer{
    display: flex;
    flex-direction: row;
    background-color:#F19701;

}
</style>
