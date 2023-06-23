<script>
    import Header from "../components/Header.svelte";
    import Carousel from "../components/Carousel.svelte";
</script>

<header>
    <Header />
</header>
<main>
    <section class="content max-w-xs md:max-w-xl">
        <h1>Campus Virtual</h1>
        <div class="subtitle">
            <h3>Ajudando estudantes a</h3>
            <h2>Gerenciar seus estudos</h2>
        </div>
        <p>
            Bem vindo ao Campus Virtual, um site que irá lhe ajudar a gerenciar
            os estudos!
        </p>
        <a href="/login" class="entrar">Entrar</a>
    </section>
    <Carousel />
</main>

<style>
    :root {
        --main-blue: #3065ac;
        --white: #fff;
        --mid-black: #252627;
    }

    :global(body) {
        background-image: url("../images/background.svg");
        background-repeat: no-repeat;
        background-position: bottom;
        background-attachment: fixed;
        display: flex;
        flex-direction: column;
    }

    main {
        margin-right: 2rem;
        margin-left: 2rem;
        height: 80vh;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 2rem;
    }

    /* body {
        min-height: 100vh;
        background-image: url("../images/background.svg");
        background-repeat: no-repeat;
        background-position: bottom;
        background-attachment: fixed;
    } */

    h1 {
        font-size: 40pt;
        font-weight: 700;
        color: var(--main-blue);
    }

    h3 {
        font-size: 28pt;
        font-weight: 500;
        color: var(--mid-black);
    }

    h2 {
        font-size: 30pt;
        color: #000;
    }

    p {
        font-size: 16pt;
        margin-top: 1rem;
    }

    .content {
        display: grid;
    }

    .subtitle {
        line-height: 2.4rem;
    }

    .entrar {
        background-color: var(--main-blue);
        text-align: center;
        font-size: 16pt;
        font-weight: 600;
        color: var(--white);
        border-radius: 6px;
        padding: 0.4rem;
        width: 10rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
        transition: all 0.2s;
    }

    .entrar:hover {
        background-color: #1d1d96;
        -webkit-transform: translateY(-7px);
        -moz-transform: translateY(-7px);
        -ms-transform: translateY(-7px);
        -o-transform: translateY(-7px);
        transform: translateY(-7px);
        border: none;
    }

    @media (max-width: 768px) {
        main {
            flex-direction: column;
            margin-left: 0;
            margin-right: 0;
            height: 100vh;
        }

        body {
            background-attachment: none;
        }

        h1 {
            font-size: 28pt;
            line-height: 3rem;
        }

        h3 {
            font-size: 20pt;
        }

        h2 {
            font-size: 20pt;
        }

        .subtitle {
            line-height: 2rem;
        }

        .entrar {
            width: 100%;
        }
    }
</style>
