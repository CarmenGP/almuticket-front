<script>
let dataTable;
let dataTableIsInitialized = false;

const dataTableOptions = {
    lengthMenu: [5, 10, 15],
    columnDefs: [
        { className: "centered", targets: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
        { searchable: false, targets: [3] }
    ],
    pageLength: 5,
    destroy: true,
    language: {
        lengthMenu: "Mostrar _MENU_ registros por página",
        zeroRecords: "Ningún usuario encontrado",
        info: "Mostrando de _START_ a _END_ de un total de _TOTAL_ registros",
        infoEmpty: "Ningún usuario encontrado",
        infoFiltered: "(filtrados desde _MAX_ registros totales)",
        search: "Buscar:",
        loadingRecords: "Cargando...",
        paginate: {
            first: "Primero",
            last: "Último",
            next: "Siguiente",
            previous: "Anterior"
        }
    }
};

const initDataTable = async () => {
    if (dataTableIsInitialized) {
        dataTable.destroy();
    }

    await listUsers();

    dataTable = $("#datatable_users").DataTable(dataTableOptions);

    dataTableIsInitialized = true;
};

const listUsers = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();

        let content = ``;
        users.forEach((user, index) => {
            content += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${user.email}</td>
                    <td>${user.name}</td>
                    <td>${user.address.city}</td>
                    <td>${user.company.name}</td>
                    <td>${user.name}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.email}</td>
                    <td>${user.name}</td>
                    <td>
                        <button class="btn btn-sm btn-success"><i class="fa-solid fa-eye"></i></button>
                    </td>

                </tr>`;
        });
        tableBody_users.innerHTML = content;
    } catch (ex) {
        alert(ex);
    }
};

window.addEventListener("load", async () => {
    await initDataTable();
});
</script>
<template>
    <div class="container my-4">
            <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <table id="datatable_users" class="table table-striped">
                        <thead>
                            <tr>
                                <th class="centered">ID</th>
                                <th class="centered">Fecha</th>
                                <th class="centered">Usuario</th>
                                <th class="centered">Tipo de ticket</th>
                                <th class="centered">Categoria</th>
                                <th class="centered">Programa</th>
                                <th class="centered">Proyecto</th>
                                <th class="centered">Description</th>
                                <th class="centered">Sede</th>
                                <th class="centered">Estado</th>
                                <th class="centered">Options</th>
                            </tr>
                        </thead>
                        <tbody id="tableBody_users"></tbody>
                    </table>
                </div>
            </div>
    </div>
</template>
<style lang="css" scoped>
    .centered {
    background-color: #FEF7EF !important;
    border: 2px solid #F08419 !important;
    text-align: center !important;
    vertical-align: middle !important;
}
</style>