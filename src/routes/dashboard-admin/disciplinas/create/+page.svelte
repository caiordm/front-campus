<script>
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import DashboardAside from "../../../../components/DashboardAside.svelte";
  import DashboardHeader from "../../../../components/DashboardHeader.svelte";
  

  function criado() {
    alert("Criado com sucesso");
  }
</script>

<main>
  <DashboardAside />
  <section>
    <DashboardHeader title="Disciplinas" />
    <div class="content">
      <form>
        <h1>Cadastre uma nova Disciplina</h1>
        <input
          id="nome"
          placeholder="Nome da Disciplina"
          name="nome"
          type="text"
        />
        <select id="curso_pertenc" placeholder="Curso" name="curso_pertenc">
          <option value="Ciência da Computação">Ciência da Computação</option>
          <option value="Administração">Administração</option>
          <option value="Medicina">Medicina</option>
          <option value="Direito">Direito</option>
        </select>
        <input
          id="carga_horaria"
          placeholder="Carga Horária"
          name="carga_horaria"
          type="number"
          min="20"
          max="120"
        />

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
