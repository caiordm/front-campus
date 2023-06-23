<script>
    function criado() {
    alert("Criado com sucesso");
  }
</script>

<main>
    <h1>Cadastre uma nova disciplina</h1>
    <form>
        <input
            id="nome"
            placeholder="digite o nome do usuario"
            name="nome"
            type="text"
        />
        <input
            id="email"
            placeholder="digite o email do usuario"
            name="email"
            type="email"
        />
        <select
            id="posicao"
            placeholder="digite a posicao do usuario"
            name="posicao"
        >
            <option value="adm">Administrador</option>
            <option value="professor">Professor</option>
            <option value="aluno">Aluno</option>
        </select>
        <input
            id="senha"
            placeholder="digite a senha temporaria "
            name="senha"
            type="password"
        />
        <input
            id="confirma_senha"
            placeholder="confirme a senha "
            name="senha"
            type="password"
        />
        <div id="result-passwd" />
        <button on:click={criado}>Enviar</button>
    </form>
</main>

<style>
    main {
        height: 80vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }

    h1 {
        font-weight: 600;
        font-size: 22pt;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
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
