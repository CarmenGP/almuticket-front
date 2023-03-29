<script>
import axios from 'axios';
import DataTable from 'datatables.net-vue3' ;
import DataTablesLib from 'dataTables.net-bs5';
import Buttons from 'datatables.net-buttons-bs5' ;
import ButtonsHtml5 from 'datatables.net-buttons/js/buttons.html5';
import print from 'datatables.net-buttons/js/buttons.print'
import pdfmake from 'pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfmake.vfs =pdfFonts.pdfMake.vfs;
import 'datatables.net-responsive-bs5';
import JsZip from 'jszip';
window.JSZip = JsZip;
DataTable.use(DataTablesLib);
DataTable.use(pdfmake);
DataTable.use(ButtonsHtml5);
export default {
    components:{DataTable},
    data(){
        return {
            incidences:null,
            columns:[
                {data:null, render: function(data,type,row,meta)
                {return `${meta.row+1}`}},
                {data: 'created_at'},
                {data: 'user_name'},
                {data: 'area_name'},
                {data: 'location_name'},
                {data: 'title'},
                {data: 'state_name'},
            ],
            botones: [
                {
                    title: 'Reporte de tickets',
                    extend: 'pdfHtml5',
                    text: '<li class="fa-solid fa-file-pdf"></li> PDF',
                    className: 'btn btn-danger active'
                },
                {
                    title: 'Reporte de tickets',
                    extend: 'excelHtml5',
                    text: '<li class="fa-solid fa-file-excel"></li> Excel',
                    className: 'btn btn-success active'

                },
                {
                    title: 'Reporte de tickets',
                    extend: 'print',
                    text: '<li class="fa-solid fa-print"></li> Imprimir',
                    className: 'btn btn-dark active'

                }
            ],
        }
    },
    mounted(){
        this.getincidence();

    },

    methods:{
        getincidence(){
            axios.get('http://127.0.0.1:8000/api/incidences', {
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                        }
                        }).then(
                response=>(
                    this.incidences = response.data.map(incidence => ({
                        created_at: incidence.created_at,
                        user_name: incidence.user_name,
                        title: incidence.title,
                        area_name: incidence.area_name,
                        location_name: incidence.location_name,
                        state_name: incidence.state_name,
                    }))
                )
            );
        }
    }
}
</script>

<template>
            <div class="myTickets table">
                <h1>Tickets</h1>
                <div class="table-responsive">
                    <DataTable :data="incidences" :columns="columns" class="table table-striped display"  
                    :options="{response:true,autoWidth:false, dom:'Bfrtip', pageLength: 5, language:{
                            search:'Buscar', zeroRecords:'No hay registro para mostrar', info: 'Mostrando del _START_ a _END_ de _TOTAL_ registros',
                            infoFiltered: '(Filtrados de _MAX_ registros.)',
                            paginate:{ first: 'Primero', previous:'Anterior', next:'Siguiente', last:'Último'}
                            }, buttons:botones}">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Fecha</th>
                                    <th>Usuario</th>
                                    <th>Área</th>
                                    <th>Sede</th>
                                    <th>Asunto</th>
                                    <th>Estado</th>
                                    
                                </tr>
                            </thead>
                    </DataTable>
                </div>
                <div class="containerBack">
                    <router-link to="/" class="back-btn">← Volver</router-link>
                </div>
        </div>
</template>

<style lang="css" scoped>
@import 'datatables.net-bs5';

h1{
    color:#F08419;
    text-align:center;
    font-weight:800;
    font-size: 1.5rem;  
    text-shadow: -1px -1px 0 #402306, 1px -1px 0 #402306, -1px 1px 0 #402306, 1px 1px 0 #402306;
}
.myTickets{
    border-color:#F08419;
    border-width: 5px;
    margin: 5%!important;
    border-radius: 10px;
    background-color: #fffcfc;
}
.table{
    width:90%;
    margin: auto;    
}
thead {
    margin-top:5%!important;
    background-color:#FFF3D6!important;
    border: 3px solid #F08419;   
}
.my-pdf-button{
    background-color: red !important;
}
.back-btn {
    background-color: transparent;
    border: none;
    font-weight: 600;
    color: #F08419;
    font-size: 1.2rem;
    cursor: pointer;
    }
.containerBack{
    margin-bottom: 20px;
    margin-left: 10px;
}
</style>