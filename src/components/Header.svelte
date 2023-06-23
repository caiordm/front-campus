<script>
    import {
        Navbar,
        NavBrand,
        NavLi,
        NavUl,
        NavHamburger,
        Button,
        Input,
    } from "flowbite-svelte";

    import logoPortal from "/src/images/logoPortal.png";
</script>

<Navbar navDivClass="mx-auto flex flex-wrap justify-between items-center" class="navbar" let:hidden let:toggle>


    <!-- Logo -->
    <NavBrand href="/">
        <img src={logoPortal} class="sm:h-9" alt="Campus Virtual Logo" />
    </NavBrand>

    <!-- Entrar -->
    <div class="mx-2 flex md:order-2">
        <a href="/login">Entrar</a>
        <NavHamburger on:click={toggle} />
    </div>

    <!-- Lista -->
    <NavUl {hidden} class="order-1">
        <NavLi href="/sobre-nos" active={false}><li>Sobre Nós<ion-icon name="information-circle-outline"></ion-icon></li></NavLi>
        <NavLi href="/ajuda"><li>Ajuda<ion-icon name="help-circle-outline"></ion-icon></li></NavLi>
        <NavLi href="/contato"><li>Contato<ion-icon name="construct-outline"></ion-icon></li></NavLi>
    </NavUl>
</Navbar>


<style>

    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

    :root {
        --main-blue: #3065ac;
        --white: #fff;
        --mid-black: #252627;
    }

    a {
        font-size: 14pt;
        font-weight: 600;
        color: var(--main-blue);
        padding: 0.4rem 1.6rem;
        border-radius: 6px;
        border: solid 1px var(--main-blue);
        transition: all 0.2s;
        cursor: pointer;
    }

    a:hover {
        background-color: var(--main-blue);
        color: var(--white);
    }

    .navbar {
        margin-top: 10rem;
    }

    img {
        margin-right: 1rem;
        width: 4.2rem;
        height: 4.2rem;
    }

    li {
        display: flex;
        gap: 0.4rem;
        align-items: center;
        font-size: 14pt;
        font-family: 'Inter', sans-serif;
        font-weight: 500;
        color: var(--mid-black);
        transition: all 0.1s;
    }

    li:hover {
        color: var(--main-blue);
        font-weight: 600;
    }

    ion-icon {
        font-size: 20px;
    }
</style>
