<script>
    import logoPortal from "/src/images/logoPortal.png";
</script>

<link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
/>
<header>
    <div class="header-left">
        <div class="circle">
        </div>
        <div>
            <span
                >Olá, <span style="color: #3065ac; font-weight:500;"
                    >Emerson Galego</span
                ></span
            >
        </div>
    </div>
    <div class="box">
        <form name="search">
            <input type="text" class="input" name="txt" />
        </form>
        <i class="bi bi-search" />
    </div>
    <div class="buttons">
        <i class="bi bi-bell-fill notification-icon" />
        <button class="button-select">
            <i class="bi bi-caret-down" />
        </button>

        <a href="/"><i class="bi bi-box-arrow-left fs-1" /></a>
    </div>
    <div class="select-wrapper" />
</header>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
    }

    header {
        display: flex;
        align-items: center;
        width: 100vw;
        height: 100px;
        justify-content: space-between;
    }

    .header-left {
        display: flex;
        align-items: center;
        margin-left: 5%;
    }

    .circle {
        background-image: url("https://cdn.folhape.com.br/img/pc/1100/1/dn_arquivo/2023/04/galego.jpg");
        background-size: cover;
        background-position: center;
        border-radius: 50%;
        width: 70px;
        height: 70px;
        overflow: hidden;
        position: relative;
        margin-right: 1rem;
    }

    .buttons {
        margin-right: 5%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }

    .box {
        position: relative;
    }

    .input {
        padding: 10px;
        width: 70px;
        height: 40px;
        background: none;
        border: 2px solid #3065ac;
        border-radius: 50px;
        box-sizing: border-box;
        font-weight: 400;
        font-size: 12pt;
        color: #000000;
        outline: none;
        transition: 0.6s;
    }

    .box:hover input {
        width: 350px;
        background: #ffffff;
        border-radius: 10px;
    }

    input:focus {
        width: 350px;
        background: #ffffff;
        border-radius: 10px;
    }

    .box i {
        position: absolute;
        top: 50%;
        right: 15px;
        transform: translate(-50%, -50%);
        font-size: 20px;
        color: #3065ac;
        transition: 0.2s;
    }

    .box:hover i {
        opacity: 0;
        z-index: -1;
    }

    .notification-icon {
        color: #3065ac;
    }

    .notification-icon::after {
        content: "";
        position: absolute;
        top: 0px;
        left: 0px;
        width: 10px;
        height: 10px;
        background-color: red;
        border-radius: 50%;
    }

    i {
        padding: 5px;
        font-size: 25px;
        color: #000;
        cursor: pointer;
    }
    i:hover {
        color: #555555;
    }
    .bi-caret-down {
        font-size: 30px;
        color: #3065ac;
    }
    .buttons {
        position: relative;
    }

    .select-wrapper {
        position: absolute;
        top: 100%;
        left: 0;
        display: none;
        text-align: center;
    }

    .button-select {
        background-color: transparent;
        border: none;
    }

    .bi-box-arrow-left {
        color: #3065ac;
    }

    span {
        font-size: 16pt;
    }

    /* select {
    background-color: #eeeeee;
    border: none;
    padding: 2px;
    margin-top: 5px;
    border-radius: 5px;
    font-weight: 600;
} */
</style>
