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
		<!--Card-->
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

<style scoped>

</style>