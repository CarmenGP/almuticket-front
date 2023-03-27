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
window.JsZip = JsZip;
DataTable.use(DataTablesLib);
DataTable.use(pdfmake);
DataTable.use(ButtonsHtml5);
export default {
    components:{DataTable},
    data(){
        return {
            tickets:null,
            columns:[
                {data:null, render: function(data,type,row,meta)
                {return `${meta.row+1}`}},
                {data: 'name'},
                {data: 'ticket'},
                {data: 'email'},
                {data: 'phone'},
                {data: 'site'},
                {data: 'address'},
                {data: 'name'},
                {data: 'name'},
                {"defaultContent": "<div class='btn-group'><button class='btn btn-success'> <i class='fas fa-eye'></i></button><button class='btn btn-danger'> <i class='fas fa-trash'></i></button></div>"}
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
                    extend: 'print',
                    text: '<li class="fa-solid fa-print"></li> Imprimir',
                    className: 'btn btn-dark active'

                }
            ],
        }
    },
    mounted(){
        this.getticket();
    },

    methods:{
        getticket(){
            axios.get('https://jsonplaceholder.typicode.com/users').then(
                response=>(
                    this.tickets = response.data.map(ticket => ({
                        name: ticket.name ,
                        ticket: ticket.username,
                        email: ticket.email,
                        phone: ticket.phone,
                        site: ticket.website,
                        company: ticket.company.name,
                        address:ticket.address.street
                    }))
                )
            );
        }
    }
}
</script>

<template>
            <div class="myTickets table">
                <h1>Mis Tickets</h1>
                <div class="table-responsive">
                    <DataTable :data="tickets" :columns="columns" class="table table-striped display"  
                    :options="{response:true,autoWidth:false, dom:'Bfrtip', pageLength: 5, language:{
                            search:'Buscar', zeroRecords:'No hay registro para mostrar', info: 'Mostrando del _START_ a _END_ de _TOTAL_ registros',
                            infoFiltered: '(Filtrados de _MAX_ registros.)',
                            paginate:{ first: 'Primero', previous:'Anterior', next:'Siguiente', last:'Último'}
                            }, buttons:botones}">
                            <thead>
                                <tr>
                                    <th >Nº</th>
                                    <th >Fecha</th>
                                    <th >Usuario</th>
                                    <th >Tipo de ticket</th>
                                    <th >Categoría</th>
                                    <th >Área</th>
                                    <th >Descripción</th>
                                    <th >Sede</th>
                                    <th >Estado</th>
                                    <th >Acciones</th>
                                </tr>
                            </thead>
                    </DataTable>
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



</style>