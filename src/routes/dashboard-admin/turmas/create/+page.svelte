<script>
  import DashboardAside from "../../../../components/DashboardAside.svelte";
  import DashboardHeader from "../../../../components/DashboardHeader.svelte";

  let id = 0;

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
    {
      id: id++,
      nome: "Francisco Souza",
      curso: "Administração",
      email: "chiquinho@email.com",
      cpf: "100000000",
      funcao: "Professor",
    },
  ];

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

  function criado() {
    alert("Criado com sucesso");
  }
</script>

<main>
  <DashboardAside />
  <section>
    <DashboardHeader title="Turmas" />
    <div class="content">
      <form>
        <h1>Cadastre uma nova turma</h1>
        <input
          id="nome_turma"
          placeholder="Nome da Turma"
          name="nome"
          type="text"
        />
        <input
          id="periodo"
          placeholder="Periodo"
          name="periodo"
          type="number"
        />
        <input id="horario" placeholder="Horario" name="horario" type="text" />
        <select id="turno" placeholder="turno" name="turno">
          <option value="Manhã">Manhã</option>
          <option value="Tarde">Tarde</option>
          <option value="Noite">Noite</option>
        </select>
        <select id="disciplina" placeholder="disciplina" name="disciplina">
          {#each Disciplinas as disciplina}
            <option value={disciplina.id}>{disciplina.nome}</option>
          {/each}
        </select>
        <select id="curso" placeholder="Curso" name="curso">
          {#each Cursos as curso}
            <option value={curso.id}>{curso.nome}</option>
          {/each}
        </select>

        <select id="professor" placeholder="professor" name="professor">
          {#each Users as user}
            {#if user.funcao == "Professor"}
              <option value={user.id}>{user.nome}</option>
            {/if}
          {/each}
        </select>
        <button on:click={criado}>Enviar</button>
      </form>
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
    width: 100%;
    padding: 2rem;
    gap: 4rem;
  }

  .content {
    display: flex;
    width: 100%;
    margin-top: -4rem;
    justify-content: center;
  }
  h1 {
    font-weight: 600;
    font-size: 22pt;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 30rem;
  }

  input {
    border-radius: 6px;
  }

  button {
    background-color: #3065ac;
    color: #fff;
    font-weight: 600;
    font-size: 14pt;
    padding: 0.4rem;
    border-radius: 12px;
    transition: all 0.2s;
  }

  button:hover {
    border-radius: 6px;
    background-color: #0447a0;
  }
</style>
