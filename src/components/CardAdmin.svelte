<script>
    export let img = '';
    export let imgAlt = '';
    export let title = '';
    export let description = '';
    export let numItens = '';
    export let textComplement = '';
    export let href = '';
</script>

<a href="{href}">
    <div class="headLink">
        <img src="{img}" alt="{imgAlt}">
        <h2>{title}</h2>
    </div>
    <div class="texts">
        <span>{description}</span>
        <b>{numItens} {textComplement}</b>
    </div>
</a>

<style>
    a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        width: 220px;
        height: 220px;
        background-color: #f2f2f2;
        border: 1px solid #cccccc;
        border-radius: 12px;
        padding: 1rem;
    }

    .headLink {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    img {
        width: 40px;
    }

    h2 {
        font-size: 18pt;
        font-weight: 600;
        color: #3065ac;
    }

    .texts {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        height: 120px;
        padding: 0.2rem;
        font-weight: 500;
        font-size: 12pt;
        color: #252627;
    }

    b {
        color: #3065ac;
        font-size: 18pt;
    }
</style>