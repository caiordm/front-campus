<script>
    import DashboardAside from "../../../components/DashboardAside.svelte";
    import DashboardHeader from "../../../components/DashboardHeader.svelte";

    let id = 1;

    let Users = [
        {
            id: id++,
            nome: "Wesley Henrique",
            curso: "Ciência da Computação",
            email: "pipico@email.com",
            cpf: "123345456",
            funcao: "Professor",
        },
        {
            id: id++,
            nome: "Italo Melo",
            curso: "Direito",
            email: "italo@email.com",
            cpf: "576334765",
            funcao: "Aluno",
        },
        {
            id: id++,
            nome: "Francisco Anderson",
            curso: "Administração",
            email: "andersonpaulisa@email.com",
            cpf: "326586523",
            funcao: "Aluno",
        },
        {
            id: id++,
            nome: "Emerson Mendes",
            curso: "Ciência da Computação",
            email: "emersongalego@email.com",
            cpf: "123145325",
            funcao: "Aluno",
        },
        {
            id: id++,
            nome: "Francisco Souza",
            curso: "Administração",
            email: "chiquinho@email.com",
            cpf: "100000000",
            funcao: "Professor",
        },
        {
            id: id++,
            nome: "Daniel Paulista",
            curso: "Medicina",
            email: "danielpaulista@email.com",
            cpf: "436733231",
            funcao: "Professor",
        },
        {
            id: id++,
            nome: "Luiz Wagner",
            curso: "Direito",
            email: "wagninho@email.com",
            cpf: "787847434",
            funcao: "Professor",
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
            title="Usuários"
            anchorDisplay="true"
            anchor="users/create/"
            anchor_content="cadastrar novo usuario"
        />
        <div class="content">
            <table>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>Email</th>
                    <th>Curso</th>
                    <th>Função</th>
                    <th>Deletar</th>
                </tr>

                {#each Users as user}
                    <tr>
                        <td>{user.id}</td>
                        <td>{user.nome}</td>
                        <td>{user.cpf}</td>
                        <td>{user.email}</td>
                        <td>{user.curso}</td>
                        <td>{user.funcao}</td>
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
