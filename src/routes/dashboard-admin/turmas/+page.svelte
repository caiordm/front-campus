<script>
    import DashboardAside from "../../../components/DashboardAside.svelte";
    import DashboardHeader from "../../../components/DashboardHeader.svelte";
    import { count } from "../../../store";

    let id = 1;

    let Turmas = [
        {
            id: id++,
            nome: "CCBD2023.2",
            periodo: "2",
            horario: "13h-14h",
            turno: "Tarde",
            disciplina: "Banco de Dados",
            curso: "Ciência da Computação",
            professor: "Wesley Henrique",
        },
        {
            id: id++,
            nome: "MEDANAT2023.2",
            periodo: "4",
            horario: "10h-12h",
            turno: "Manhã",
            disciplina: "Anatomia",
            curso: "Medicina",
            professor: "Daniel Paulista",
        },
        {
            id: id++,
            nome: "ADMINGIT2023.2",
            periodo: "1",
            horario: "9h-11h",
            turno: "Manhã",
            disciplina: "Inglês Instrumental",
            curso: "Administração",
            professor: "Italo Melo",
        },
        {
            id: id++,
            nome: "DIRDCR2023.2",
            periodo: "10",
            horario: "14h-17H",
            turno: "Tarde",
            disciplina: "Direito Criminal",
            curso: "Direito",
            professor: "Italo Melo",
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
            title="Turmas"
            anchorDisplay="true"
            anchor="turmas/create"
            anchor_content="cadastrar nova turma"
        />
        <div class="content">
            <table>
                <tr>
                    <th>Código</th>
                    <th>Nome</th>
                    <th>Período</th>
                    <th>Horário</th>
                    <th>Turno</th>
                    <th>Disciplina</th>
                    <th>Curso</th>
                    <th>Professor</th>
                    <th>Deletar</th>
                </tr>

                {#each Turmas as turmas}
                    <tr>
                        <td>{turmas.id}</td>
                        <td>{turmas.nome}</td>
                        <td>{turmas.periodo}</td>
                        <td>{turmas.horario}</td>
                        <td>{turmas.turno}</td>
                        <td>{turmas.disciplina}</td>
                        <td>{turmas.curso}</td>
                        <td>{turmas.professor}</td>
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
