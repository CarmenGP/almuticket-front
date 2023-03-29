<template>
    <table id="datatable_users">
            <thead>
                <tr>
                <th>#</th>
                <th>Email</th>
                <th>Nombre</th>
                <th>Ciudad</th>
                <th>Compañía</th>
                <th>Nombre</th>
                <th>Nombre</th>
                <th>Email</th>
                <th>Email</th>
                <th>Nombre</th>
                <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, index) in users" v-bind:key="user.id">
                <td>{{ index + 1 }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.address.city }}</td>
                <td>{{ user.company.name }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.name }}</td>
                <td>
                    <button class="btn btn-sm btn-success"><i class="fa-solid fa-eye"></i></button>
                </td>
                </tr>
            </tbody>
            </table>
        </template>
        
        <script>
        export default {
            data() {
            return {
                users: []
            };
            },
            methods: {
            apiUser(){
                axios.get("https://jsonplaceholder.typicode.com/users",{
                    params: {
                        'per_page': 5
                    }
                }).then(response =>{
                    console.log(response)
                }).catch(error =>{
                    console.log(error)
                })
            }
        }
    }
</script>

        
<style lang="css" scoped>

</style>