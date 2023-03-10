<script>
import axios, { Axios } from 'axios';
export default {
    data() {
        return {
            incidencesData :null,
        }
    },
    created() {             axios.get('https://management.azure.com/subscriptions/subid/providers/Microsoft.Support/supportTickets/testticket?api-version=2020-04-01').then((result)=> {this.incidencesData = result.data
                    })
                },
}
</script>
<template>
  <div>
   
  </div>
</template>
<style>
</style>