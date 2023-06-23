<script>
    // Importando as imagens

    import usersWhite from "../images/usersWhite.png"
    import turmasWhite from "../images/turmasWhite.png"
    import disciplinasWhite from "../images/disciplinasWhite.png"
    import cursoWhite from "../images/cursoWhite.png"
    import logoPortal from "../images/logoPortal.png"
    import registrar from "../images/registrar.png"
    import disciplinas from "../images/disciplinas.png"
    import users from "../images/users.png"
    import turmas from "../images/turmas.png"
    import { count } from "../store";


</script>

<aside>
    <div class="header-aside">
        <h2>Olá</h2>
        <h3>Wesley!</h3>
    </div>
    <div class="anchors">
        <a href="/dashboard-admin/users"><img src="{usersWhite}" alt="">Usuarios</a>
        <a href="/dashboard-admin/turmas" id="card-center"><img src="{turmasWhite}" alt="">Turmas</a>
        <a href="/dashboard-admin/disciplinas"><img src="{disciplinasWhite}" alt="">Disciplinas</a>
        <a href="/dashboard-admin/cursos"><img src="{cursoWhite}" alt="">Cursos</a>
    </div>
</aside>

<style>
    aside {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 16rem;
        height: 100vh;
        padding-top: 1rem;
        background-color: #3065ac;
    }

    .header-aside {
        padding: 1rem 2rem;
    }

    #card-center {
        border: none;
    }

    h2 {
        color: #140D4F;
        font-size: 14pt;
        font-weight: 600;
    }
    
    h3 {
        color: #fff;
        font-size: 18pt;
        font-weight: 600;
    }

    .anchors {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
        align-items: center;
    }

    a {
        width: 100%;
        display: flex;
        gap: 0.6rem;
        align-items: center;
        color: #fff;
        font-weight: 500;
        font-size: 14pt;
        padding: 0.6rem 2rem;
    }

    a:focus {
        background-color: cornflowerblue;
        outline: none;
    }

    img {
        width: 24px;
    }
</style>