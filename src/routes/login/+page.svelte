<script>
    import { element } from "svelte/internal";
    import Header from "../../components/Header.svelte";
    import logoPortalWhite from "/src/images/logoPortalWhite.png";
    import { writable } from "svelte/store";

    /**
     * @type {any}
     */
    let inputValue;

    function handleInput() {
        console.log(inputValue);
    }
</script>

<header>
    <Header />
</header>
<main>
    <div class="container">
        <div class="container-left">
            <div class="img">
                <a href="/">
                    <img
                        class="img-logo"
                        id="logoNoJS"
                        src={logoPortalWhite}
                        alt="logo"
                    />
                </a>
            </div>
            <div class="texts">
                <h2>Bem vindo de volta &#128075</h2>
                <span>Entre para acessar suas informações!</span>
            </div>
            <div class="first-access">
                <a
                    href="/primeiro-acesso"
                    class="first-access-text-class"
                    id="first-access-text">Deseja realizar o primeiro acesso?</a
                >
            </div>
        </div>
        <div class="container-right">
            <div class="title">
                <h1>Faça o login!</h1>
                <div class="radios" style="display: flex; gap: 1rem;">
                    <div
                        style="display: flex; align-items: center; gap: 0.2rem;"
                    >
                        <input
                            type="radio"
                            value="aluno"
                            name="aluno"
                            bind:group={inputValue}
                            on:click={handleInput}
                        />
                        <label for="aluno">Aluno</label>
                    </div>
                    <div
                        style="display: flex; align-items: center; gap: 0.2rem;"
                    >
                        <input
                            type="radio"
                            value="professor"
                            name="administrador"
                            bind:group={inputValue}
                            on:click={handleInput}
                        />
                        <label for="administrador">Adm</label>
                    </div>
                </div>
            </div>
            <div class="forms">
                <form>
                    <div class="login-conjunt">
                        <label for="email">Email</label>
                        {#if inputValue == "aluno"}
                            <input
                                class="input"
                                type="text"
                                id="login"
                                name="email"
                                placeholder="Digite seu email"
                                value="aluno@email.com"
                            />
                        {:else}
                            <input
                                class="input"
                                type="text"
                                id="login"
                                name="email"
                                placeholder="Digite seu email"
                                value="adm@email.com"
                            />
                        {/if}
                    </div>
                    <div class="password-conjunt">
                        <div class="password-subconjunt">
                            <label for="password">Senha</label>
                            {#if inputValue === "aluno"}
                                <input
                                    class="input"
                                    type="password"
                                    id="password"
                                    name="senha"
                                    placeholder="Digite sua senha"
                                    value="aluno"
                                />
                            {:else}
                                <input
                                    class="input"
                                    type="password"
                                    id="password"
                                    name="senha"
                                    placeholder="Digite sua senha"
                                    value="administrador"
                                />
                            {/if}
                        </div>
                        <div class="esqueceu-password">
                            <a href="/esqueceu-senha" id="esq-password"
                                >Esqueceu a senha?</a
                            >
                        </div>
                    </div>
                    <button class="entrance">
                        {#if inputValue === 'aluno'}
                        <a href="/painel-aluno">Entrar</a>
                        {:else}
                        <a href="/dashboard-admin">Entrar</a>
                        {/if}
                    </button>
                </form>
            </div>
            <div class="hidden">
                <input type="hidden" />
            </div>
        </div>
    </div>
</main>

<style>
    main {
        display: flex;
        justify-content: center;
        padding: 2rem;
    }
    .container {
        background-color: #e4e4e4;
        display: flex;
        flex-direction: row;
        height: 25rem;
        width: 40rem;
        border-radius: 10px;
        border: 1px solid #cccccc;
        border-left: none;
    }

    .container-left {
        background-color: #3065ac;
        width: 28rem;
        display: grid;
        border-radius: 10px 0px 0px 10px;
        border: 1px solid #3065ac;
        border-right: none;
        padding: 1rem;
    }

    .img-logo {
        width: 70px;
    }

    .texts {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
        color: #fff;
    }

    .first-access {
        display: flex;
        flex-direction: column;
        justify-content: end;
        gap: 0.4rem;
    }

    #first-access-text {
        color: #fff;
        font-size: 12pt;
        text-decoration: none;
    }

    #first-access-text:hover {
        text-decoration: underline;
    }

    .container-right {
        width: 30rem;
        display: grid;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        padding-left: 3rem;
    }

    h1 {
        font-size: 24pt;
        font-weight: 700;
        color: #3065ac;
    }

    h2 {
        font-size: 18pt;
        font-weight: 600;
    }

    span {
        font-size: 12pt;
        font-weight: 400;
    }

    form {
        display: flex;
        flex-direction: column;
        max-width: 10rem;
        gap: 1rem;
        margin-bottom: 15px;
    }

    label {
        color: #3065ac;
        font-weight: 500;
        font-size: 14pt;
    }

    .login-conjunt {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
    }

    .password-conjunt {
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
    }

    .password-subconjunt {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
    }

    .esqueceu-password a {
        color: #3065ac;
        text-decoration: none;
    }

    .esqueceu-password a:hover {
        text-decoration: underline;
    }

    .input {
        border-radius: 10px;
        width: 15rem;
        height: 2rem;
        font-size: 11pt;
        background-color: #d9d9d9;
        color: #828282;
        border: 1px solid #cccccc;
        padding: 5px;
        transition: 0.1s ease;
    }

    .input:focus {
        border: 2px solid #1249e2;
        color: #000000;
        outline: none;
    }

    .entrance {
        padding: 8px;
        border-radius: 10px;
        border: none;
        width: 15rem;
        cursor: pointer;
        background-color: #3065ac;
        color: #fff;
        font-weight: 600;
        font-size: 14px;
        text-transform: uppercase;
        margin-top: 1rem;
        transition: 0.2s ease;
        text-align: center;
    }

    .entrance:hover {
        background-color: #072881;
        letter-spacing: 0.1rem;
    }

    @media (min-width: 1451px) {
        main {
            margin-top: 4rem;
        }
    }

    @media screen and (max-width: 768px) {
        img {
            display: none;
        }
        .container {
            width: 100%;
            height: 100%;
            flex-direction: column;
            background: none;
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 2rem;
        }

        .container-left {
            width: 100%;
            background: none;
            border: none;
            padding: 0;
            border-radius: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }

        .container-left h2,
        span {
            color: #3065ac;
        }

        #first-access-text {
            color: #3065ac;
        }

        .container-right {
            width: 100%;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .forms {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 4rem;
        }
        span {
            color: #252627;
            font-weight: 400;
            font-size: 14pt;
        }
    }
</style>
