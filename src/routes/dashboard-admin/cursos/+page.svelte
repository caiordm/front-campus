<script>
    import DashboardAside from "../../../components/DashboardAside.svelte";
    import DashboardHeader from "../../../components/DashboardHeader.svelte";

    let id = 1;

    let Cursos = [
        {
            id: id++,
            nome: "Ciência da Computação",
            num_periodos: "8",
            sigla: "CC",
        },
        {
            id: id++,
            nome: "Medicina",
            num_periodos: "12",
            sigla: "MED",
        },
        {
            id: id++,
            nome: "Administração",
            num_periodos: "8",
            sigla: "ADM",
        },
        {
            id: id++,
            nome: "Direito",
            num_periodos: "10",
            sigla: "DIR",
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
            title="Cursos"
            anchorDisplay="true"
            anchor="cursos/create/"
            anchor_content="cadastrar novo Curso"
        />
        <div class="content">
            <table>
                <tr>
                    <th>Id</th>
                    <th>Nome do Curso</th>
                    <th>Numero de Periodos</th>
                    <th>Sigla</th>
                    <th>Deletar</th>
                </tr>

                {#each Cursos as curso}
                    <tr>
                        <td>{curso.id}</td>
                        <td>{curso.nome}</td>
                        <td>{curso.num_periodos}</td>
                        <td>{curso.sigla}</td>
                        <!-- svelte-ignore a11y-invalid-attribute -->
                        <td><a on:click={deletar} href="#">Deletar</a></td>
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
