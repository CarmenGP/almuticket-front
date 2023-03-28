<script>
export default {
}
</script>
<template>
    <MDBFooter :text="['center', 'lg-start']">
    <!-- Grid container -->
    <MDBContainer class=" p-4 pb-0">
        <!--Grid row-->
        <MDBRow>
            <!--Grid column-->
            <MDBCol auto class="mb-4 mb-md-0">

            </MDBCol>
            <!--Grid column-->
            <!--Grid column-->
            <MDBCol md="5" col="12" class="mb-4 mb-md-0">
            <!-- Email input -->

            </MDBCol>
            <!--Grid column-->
            <!--Grid column-->
            <MDBCol auto class="mb-4 mb-md-0">

            </MDBCol>
            <!--Grid column-->
        </MDBRow>
        <!--Grid row-->
    </MDBContainer>
    <!-- Grid container -->
    <!-- Copyright -->
        <div class="footerContainer">
            <div class="text-center p-3">
                <p>&copy; Asociacionarrabal.org</p>
            </div>
            <div class="text-center p-3">
                <p>Málaga Tel: 952 300 500 </p>                                                                                                                       
            </div>
            <div class="text-center p-3 femCoders">
                <p>Diseñado por </p>  
                <div><img class="logo" src="public\femCoders.png" alt="logo FemCoders"></div>                                               
            </div>
        </div>
    </MDBFooter>
</template>

<style lang="css" scoped>
.footerContainer{
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
@media only screen and (max-width: 992px) {
    p{
        font-size: 0.8em;
    }
    .logo{
    width: 70px;
}
}
</style>