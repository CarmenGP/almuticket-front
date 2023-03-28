<script>

import axios from 'axios';
export default{
	data() {
		return {
			users: []
		}
	},
	created() {
		axios.get('https://jsonplaceholder.typicode.com/users')
		.then(response => {
			this.users = response.data.map(user => ({
				name: user.name ,
				ticket: user.username,
				email: user.email,
				phone: user.phone,
				site: user.website,
				company: user.company.name,
				address:user.address.street
		}))
    		})
	}
}
</script>

<template>
    <div>     
		<div id='recipients' class="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
			<table id="example" class="stripe hover" style="width:100%; padding-top: 1em;  padding-bottom: 1em;">
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
				<tbody>
					<tr v-for="user in users" :key="user.id">
						<td>2023/03/01</td>
						<td>{{ user.name  }}</td>
						<td>{{ user.ticket  }}</td>
						<td>{{ user.name  }}</td>
						<td>{{ user.email  }}</td>
						<td>{{ user.company  }}</td>
						<td>{{ user.name  }}</td>
						<td>{{ user.address  }}</td>
						<td>{{ user.name  }}</td>
					</tr>
				</tbody>
			</table>
		</div>
    </div>
</template>

<style lang="css" scoped>
		.dataTables_wrapper select,
		.dataTables_wrapper .dataTables_filter input {
			color: #4a5568;
			padding-left: 1rem;
			padding-right: 1rem;
			padding-top: .5rem;
			padding-bottom: .5rem;
			line-height: 1.25;
			border-width: 2px;
			border-radius: .25rem;
			border-color: #edf2f7;
			background-color: #edf2f7;
		}
		table.dataTable.hover tbody tr:hover,
		table.dataTable.display tbody tr:hover {
			background-color: #ebf4ff;
		}
		.dataTables_wrapper .dataTables_paginate .paginate_button {
			font-weight: 700;
			border-radius: .25rem;
			border: 1px solid transparent;
		}
		.dataTables_wrapper .dataTables_paginate .paginate_button.current {
			color: #fff !important;
			box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06);
			font-weight: 700;
			border-radius: .25rem;
			background: #667eea !important;
			border: 1px solid transparent;
		}
		.dataTables_wrapper .dataTables_paginate .paginate_button:hover {
			color: #fff !important;
			box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06);
			font-weight: 700;
			border-radius: .25rem;
			background: #667eea !important;
			border: 1px solid transparent;
		}
		table.dataTable.no-footer {
			border-bottom: 1px solid #e2e8f0;
			margin-top: 0.75em;
			margin-bottom: 0.75em;
		}
		table.dataTable.dtr-inline.collapsed>tbody>tr>td:first-child:before,
		table.dataTable.dtr-inline.collapsed>tbody>tr>th:first-child:before {
			background-color: #667eea !important;
		}
	</style>
