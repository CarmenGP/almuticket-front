<template>
    <div class="row">
        <div class="col-lg-8 offset-lg-2">
            <div class="table-responsive">
                <DataTable :data="products" :columns="columns" class="table table-striped table-bordered display"
                :options="{response:true,autoWidth:false, dom:'Bfrtip', language:{
                    search:'Buscar', zeroRecords:'No hay registro para mostrar', info: 'Mostrando del _START_ a _END_ de _TOTAL_ registros',
                    infoFiltered: '(Filtrados de _MAX_ registros.)',
                    paginate:{ first: 'Primero', previous:'Anterior', next:'Siguiente', last:'Último'}
                }}">
                    <thead>
                        <tr>
						<th data-priority="1">Fecha</th>
						<th data-priority="2">Usuario</th>
						<th data-priority="3">Tipo de ticket</th>
						<th data-priority="4">Categoría</th>
						<th data-priority="5">Programa</th>
						<th data-priority="6">Proyecto</th>
						<th data-priority="7">Descripción</th>
						<th data-priority="8">Sede</th>
						<th data-priority="9">Estado</th>
					</tr>
                    </thead>                    
            </DataTable>
            </div>
        </div>
    </div>
</template>
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
            products:null,
            columns:[
                {data:null, render: function(data,type,row,meta)
                {return `${meta.row+1}`}},
                {data: 'name'},
                {data: 'ticket'},
                {data: 'email'},
                {data: 'phone'},
                {data: 'site'},
                {data: 'company'},
                {data: 'address'},
                {data: ''},


            ],
        }
    },
    mounted(){
        this.getProduct();
    },
    methods:{
        getProduct(){
            axios.get('https://jsonplaceholder.typicode.com/users').then(
                response=>(
                    this.products = response.data.map(product => ({
                        name: product.name ,
                        ticket: product.username,
                        email: product.email,
                        phone: product.phone,
                        site: product.website,
                        company: product.company.name,
                        address:product.address.street
                    }))
                )
            );
        }
    }
}
</script>

<style>
    @import 'datatables.net-bs5';
</style>