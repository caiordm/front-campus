<script>
    import logoPortal from "../images/logoPortal.png";

    export let title = "";
    export let anchor = "/";
    export let anchorDisplay = "";
    export let anchor_content = "sair";
</script>

<div class="header-section">
    <h1>{title}</h1>
    <div class="anchor-logo">
        {#if anchorDisplay == "true"}
            <a id="anchor" href={anchor}>{anchor_content}</a>
        {/if}
        <a href="/dashboard-admin">
            <img class="img-section" src={logoPortal} alt="Logo Campus Virtual" />
        </a>
    </div>
</div>

<style>
    .header-section {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
    }

    h1 {
        font-size: 24pt;
        font-weight: 700;
        color: #3065ac;
    }

    .img-section {
        max-width: 80px;
    }

    .anchor-logo {
        display: flex;
        gap: 2rem;
        align-items: center;
    }

    .anchor-logo #anchor {
        font-size: 14pt;
        color: #3065ac;
        text-transform: capitalize;
        font-weight: 500;
        padding: 0.4rem 2rem;
        border-radius: 8px;
        border: 2px solid #3065ac;
        transition: all 0.2s;
    }

    .anchor-logo #anchor:hover {
        background-color: #3065ac;
        color: #fff;
    }
</style>
