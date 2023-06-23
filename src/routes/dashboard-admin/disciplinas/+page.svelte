<script>
    import DashboardAside from "../../../components/DashboardAside.svelte";
    import DashboardHeader from "../../../components/DashboardHeader.svelte";

    let id = 1;

    let Disciplinas = [
        {
            id: id++,
            nome: "Banco de Dados",
            curso: "Ciência da Computação",
            carga_horaria: "45",
        },
        {
            id: id++,
            nome: "Anatomia",
            curso: "Medicina",
            carga_horaria: "60",
        },
        {
            id: id++,
            nome: "Direito Criminal",
            curso: "Direito",
            carga_horaria: "90",
        },
        {
            id: id++,
            nome: "Inglês Instrumental",
            curso: "Administração",
            carga_horaria: "45",
        },
    ];

    function deletar() {
        alert("Deletado");
    }
</script>

<main>
    <DashboardAside />

    <section>
        <DashboardHeader
            title="Disciplinas"
            anchorDisplay="true"
            anchor="disciplinas/create/"
            anchor_content="cadastrar nova disicplina"
        />
        <div class="content">
            <table>
                <tr>
                    <th>Código da Disciplina</th>
                    <th>Nome</th>
                    <th>Curso Pertencente</th>
                    <th>Carga Horária</th>
                    <th>Deletar</th>
                </tr>

                {#each Disciplinas as disciplina}
                    <tr>
                        <td>{disciplina.id}</td>
                        <td>{disciplina.nome}</td>
                        <td>{disciplina.curso}</td>
                        <td>{disciplina.carga_horaria}</td>
                        <!-- svelte-ignore a11y-invalid-attribute -->
                        <td><a href="#" on:click={deletar}>Deletar</a></td>
                    </tr>
                {/each}
            </table>
        </div>
    </section>
</main>

<style>
    main {
        display: flex;
    }

    section {
        display: flex;
        flex-direction: column;
        padding: 2rem;
        width: 100%;
        gap: 2rem;
    }

    table {
        width: 100%;
        border: 1px solid black;
    }

    tr,
    td,
    th {
        border: 1px solid black;
        text-align: center;
    }

    th {
        padding: 0.4rem;
        background-color: #3065ac;
        color: #ffffff;
        font-size: 14pt;
    }

    a {
        color: #3065ac;
        font-weight: 500;
        text-decoration: underline;
    }
</style>
