<template>
        <div class="row">
            <div class="table">
            <div class="table-responsive">
                <DataTable :data="products" :columns="columns" class="table table-success table-striped table-bordered display"
                    :options="{response:true,autoWidth:false, dom:'Bfrtip', pageLength: 5, language:{
                        search:'Buscar', zeroRecords:'No hay registro para mostrar', info: 'Mostrando del _START_ a _END_ de _TOTAL_ registros',
                        infoFiltered: '(Filtrados de _MAX_ registros.)',
                        paginate:{ first: 'Primero', previous:'Anterior', next:'Siguiente', last:'Último'}
                    }}">
                        <thead>
                            <tr>
                                <th class="thead">#</th>
                                <th class="thead">Fecha</th>
                                <th class="thead">Usuario</th>
                                <th class="thead">Tipo de ticket</th>
                                <th class="thead">Categoría</th>
                                <th class="thead">Programa</th>
                                <th class="thead">Proyecto</th>
                                <th class="thead">Descripción</th>
                                <th class="thead">Sede</th>
                                <th class="thead">Estado</th>
                                <th class="thead">Option</th>
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
import 'datatables.net-responsive-bs5';
DataTable.use(DataTablesLib);
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
                {data: 'name'},
                {data: 'name'},
                {"defaultContent": "<button type='button' class='btn btn-outline-success'>Ver</button>"}
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

<style lang="css" scoped>
    @import 'datatables.net-bs5';
    .thead {
        background-color: #FBE6C6 !important;
        border: 2px solid #F08419;
    }
    div{
        background-color: #FBE6C6;
    }
    .table{
        margin: 0.5px;
    }

</style>