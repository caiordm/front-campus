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

</script>

<header>
    <HeaderUser />
</header>

<section>
    <button class="button-section">
        <i class="bi bi-app-indicator img-section" />

        <a href="/aviso">
            <p>
                <span>Avisos</span>
                Veja aqui os avisos mais recentes publicados pelos professores.
            </p>
        </a>
    </button>
    <button class="button-section">
        <i class="bi bi-layout-text-window img-section" />
        <a href="disciplina">
            <p>
                <span>Diários</span>
                Aqui estão notas de atividades, trabalhos e etc.
            </p>
        </a>
    </button>
    <button class="button-section">
        <i class="bi bi-receipt img-section" />
        <a href="boletim">
            <p>
                <span>Boletim</span>
                Notas e faltas do semestre aparecerão aqui.
            </p>
        </a>
    </button>
    <button class="button-section">
        <i class="bi bi-check-square img-section" />
        <a href="register">
            <p>
                <span>Registros</span>
                Seus registros estão aqui.
            </p>
        </a>
    </button>
    <button class="button-section">
        <i class="bi bi-pencil-square img-section" />
        <a href="requeriments.html">
            <p>
                <span>Requerimentos</span>
                Faça seus requerimentos pro bloco administrativo.
            </p>
        </a>
    </button>
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
        width: 55%;
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
    }

    p {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
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
        /* width: 50px; */
        font-size: 2.2rem;
        margin-left: 10px;
        color: #3065ac;
        /* margin: 0; */
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
</style>
