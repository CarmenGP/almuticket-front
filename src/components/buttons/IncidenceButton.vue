<script>
export default {   
}
</script>

<template>
        <div>
            <RouterLink to="/incident">
                <button class="incidence-button">Incidencia/Apoyo Programas</button>   
            </RouterLink>
        </div>
</template>

<style lang="css" scoped>
.incidence-button{
    background-color: #F5F6F6;
    color: #F08419;
    border: 8px solid #F08419;
    border-radius: 10px;
    font-size: 1.2rem;
    padding: 0.8rem 1.2rem;
    cursor: pointer;
    transition: all 0.2s;
}
.incidence-button:hover {
    background-color: #F08419;
    color: #F5F6F6;
    border-color: #F5F6F6;
}
</style>
