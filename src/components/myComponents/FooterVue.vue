<script>
export default {
    name:'FooterVue',
}
</script>

<template>
    <footer>
        <div class="textCenter">
            <p>&copy; Asociacionarrabal.org</p>
        </div>
        <div class="textCenter">
            <p>Málaga Tel: 952 300 500 </p>                                                                                                                       
        </div>
        <div class="textCenter femCoders">
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
    bottom: 0px;
    width: 100%;
    color: white;
    height: 70px;
    align-items: center;
}
.femCoders{
    display: flex;
    flex-direction: row;
    justify-content: space-between !important;
    
}
.logo{
    width: 55px;
    margin-left: 10px;
}


@media only screen and (max-width: 768px) {

    .textCenter {
        margin-left: 2.5%;
        margin-right: 2.5%;
    }

    .textCenter .femCoders {
        flex-basis: 100%;
        margin-bottom: 5%;
        margin-top: 5%;
    }
}
</style>
