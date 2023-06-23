<script>
  import { page } from "$app/stores";
  import DashboardAside from "../../../../components/DashboardAside.svelte";
  import DashboardHeader from "../../../../components/DashboardHeader.svelte";

  function criado() {
    alert("Criado com sucesso");
  }
</script>

<main>
  <DashboardAside />
  <section>
    <DashboardHeader title="Cursos"/>
    <div class="content">
      <form>
        <h1>Cadastre um novo Curso</h1>
        <input
          id="nome"
          placeholder="Nome do Curso"
          name="nome"
          type="text"
        />
        <input
          id="sigla"
          placeholder="Sigla do Curso"
          name="sigla"
          type="text"
          minlength="3"
          maxlength="3"
        />
        <input
          id="num_periodos"
          placeholder="Número de Periodos"
          name="num_periodos"
          type="number"
          max="12"
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

  #sigla {
    text-transform: uppercase;
  }

  #nome {
    text-transform: capitalize;
  }
</style>
