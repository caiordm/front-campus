<script>
    // Importando os componentes

    import HeaderUser from "../../components/HeaderUser.svelte";
    import CardAdmin from "../../components/CardAdmin.svelte";
    import DashboardAside from "../../components/DashboardAside.svelte";
    import DasboardHeader from "../../components/DashboardHeader.svelte";

    // Importando as imagens

    import usersWhite from "../../images/usersWhite.png";
    import turmasWhite from "../../images/turmasWhite.png";
    import disciplinasWhite from "../../images/disciplinasWhite.png";
    import logoPortal from "../../images/logoPortal.png";
    import registrar from "../../images/registrar.png";
    import controles from "../../images/controles-deslizantes.png"
    import disciplinas from "../../images/disciplinas.png";
    import users from "../../images/users.png";
    import turmas from "../../images/turmas.png";
    import curso from "../../images/curso.png";
    
</script>

<main>
    <DashboardAside />

    <section>
        <DasboardHeader title="Painel Administrativo" anchorDisplay="true"/>
        <div class="content">
            <CardAdmin
                href="dashboard-admin/users"
                img={users}
                imgAlt="Usuarios"
                title="Usuários"
                description="No momento temos: "
                numItens="34"
                textComplement="Usuários"
            />

            <CardAdmin
                href="dashboard-admin/disciplinas"
                img={disciplinas}
                imgAlt="Disciplinas"
                title="Disciplinas"
                description="No momento temos: "
                numItens="2"
                textComplement="Disciplinas"
            />

            <CardAdmin
                href="dashboard-admin/turmas"
                img={turmas}
                imgAlt="Turmas"
                title="Turmas"
                description="No momento temos: "
                numItens="32"
                textComplement="Turmas"
            />
            <CardAdmin
                href="dashboard-admin/cursos"
                img={curso}
                imgAlt="Cursos"
                title="Cursos"
                description="No momento temos: "
                numItens="32"
                textComplement="Cursos"
            />
            <CardAdmin
                img="{controles}"
                imgAlt="Controles"
                title="Noticias"
                description="Ajuste as notícias que você deseja que apareça no início"
            />
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
        gap: 2rem;
    }
    .content {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 2rem;
        position: relative;
    }
</style>
