<script>
export default {
    name:'FooterVue',
}
</script>

<template>
    <footer>
        <div class="text-center">
            <p>&copy; Asociacionarrabal.org</p>
        </div>
        <div class="text-center">
            <p>Málaga Tel: 952 300 500 </p>                                                                                                                       
        </div>
        <div class="text-center femCoders">
            <p>Diseñado por </p>  
            <div><img class="logo" src="public\femCoders.png" alt="logo FemCoders"></div>                                               
        </div>
    </footer>
</template>
<style lang="css" scoped>
@import "bootstrap/dist/css/bootstrap.min.css";
footer{
    display: flex;
    flex-direction: row;
    justify-content: space-around !important;
    background-color:#F08419;
    position:absolute;
    bottom: 0px;
    width: 100%;
    color: white;
}
.femCoders{
    display: flex;
    flex-direction: row;
    justify-content: space-between !important;
    
}
.logo{
    width: 40px;
    margin-left: 10px;
}

@media only screen and (max-width: 700px) {


}
</style>
