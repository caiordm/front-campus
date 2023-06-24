<script>
    import HeaderUser from "../../components/HeaderUser.svelte";

    let chatVisible = false;
    function toggleChat() {
        chatVisible = !chatVisible;
    }

    let message = "";
    /**
     * @type {any[]}
     */
    let messages = [];

    function sendMessage() {
        if (message) {
            messages = [...messages, message];
            message = "";
        }
    }

    /**
     * @param {{ key: string; }} e
     */
    function onKeyDown(e) {
        if (e.key === "Enter") {
            sendMessage();
        }
    }
</script>

<header>
    <HeaderUser />
</header>

<section>
    <a href="/painel-aluno/avisos">
        <button class="button-section">
            <i class="bi bi-app-indicator img-section" />
            <p>
                <span>Avisos</span>
                Veja aqui os avisos mais recentes publicados pelos professores.
            </p>
        </button>
    </a>
    <a href="/painel-aluno/boletim">
        <button class="button-section">
            <i class="bi bi-receipt img-section" />
            <p>
                <span>Boletim</span>
                Notas e faltas do semestre aparecerão aqui.
            </p>
        </button>
    </a>
    <a href="/painel-aluno/diarios">
        <button class="button-section">
            <i class="bi bi-layout-text-window img-section" />
            <p>
                <span>Diários</span>
                Aqui estão notas de atividades, trabalhos e etc.
            </p>
        </button>
    </a>
    <a href="/painel-aluno/registros">
        <button class="button-section">
            <i class="bi bi-check-square img-section" />
            <p>
                <span>Registros</span>
                Seus registros estão aqui.
            </p>
        </button>
    </a>
    <a href="/painel-aluno/requerimentos">
        <button class="button-section">
            <i class="bi bi-pencil-square img-section" />
            <p>
                <span>Requerimentos</span>
                Faça seus requerimentos pro bloco administrativo.
            </p>
        </button>
    </a>
</section>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<i class="bi bi-chat chat-icon" on:click={toggleChat} />

{#if chatVisible}
    <div id="chat-container">
        <div id="chat-messages">
            {#each messages as msg, msgIndex}
                <p style="border-bottom: 1px solid #cccccc; padding: 0.2rem">
                    {msgIndex}: {msg}
                </p>
            {/each}
        </div>
        <div class="actions-chat">
            <input
                type="text"
                bind:value={message}
                placeholder="Digite sua mensagem..."
                class="input-chat"
                on:keydown={onKeyDown}
            />
            <button on:click={sendMessage}>Enviar</button>
        </div>
    </div>
{/if}

<style>
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }

    .button-section {
        display: flex;
        min-height: 5rem;
        align-items: center;
        width: 100%;
        padding: 1rem;
        cursor: pointer;
        border-radius: 5px;
        border: none;
        border: 2px #dfdfdf solid;
        background-color: #fafafa;
        border-radius: 10px;
    }

    .button-section:hover {
        background-color: #e9e9e9;
    }

    a {
        text-decoration: none;
        display: flex;
        align-items: center;
        width: 55%;
    }

    p {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        text-align: start;
        margin-left: 10px;
        color: #646464;
        font-size: 16px;
        font-weight: 500;
        line-height: 1.5rem;
    }
    span {
        color: #3065ac;
        font-size: 25px;
        font-weight: 600;
    }
    .img-section {
        font-size: 2.4rem;
        margin-left: 10px;
        color: #3065ac;
    }
    .bi-chat {
        font-size: 2.6rem;
        cursor: pointer;
        right: 10px;
        bottom: 0px;
        padding: 0px 8px 0px 8px;
        background-color: #fafafa;
        border: 2px solid #e9e9e9;
        border-radius: 10px;
    }

    .bi-chat:hover {
        background-color: #e9e9e9;
    }

    .chat-icon {
        position: fixed;
        right: 20px;
        transform: translateY(-50%);
        cursor: pointer;
        font-size: 28pt;
        color: #3065ac;
    }

    #chat-container {
        position: fixed;
        top: 57%;
        right: 10px;
        transform: translateY(-50%);
        width: 250px;
        height: 350px;
        background-color: #ebebeb;
        border: 1px solid #ccc;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-top: 0.4rem;
    }
    #chat-container button {
        background-color: #3065ac;
        color: #fff;
        padding: 3px;
        border-radius: 0px 0px 10px 10px;
        margin-top: 2px;
        font-weight: 600;
    }

    #chat-container input {
        max-width: 100%;
    }

    .actions-chat {
        display: flex;
        flex-direction: column;
    }

    @media (max-width: 600px) {
        span {
            font-size: 1rem;
        }

        p {
            font-size: 0.9rem;
        }

        i {
            font-size: 1rem;
        }
    }
</style>
