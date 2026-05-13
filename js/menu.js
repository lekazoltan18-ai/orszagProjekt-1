document.getElementById("menu").innerHTML = `
<nav class="navbar navbar-expand-lg nemet-menu">
    <div class="container-fluid">
        <a class="navbar-brand nemet-logo" href="index.html">
            <span class="zaszlo-csikok">
                <span class="csik fekete"></span>
                <span class="csik piros"></span>
                <span class="csik sarga"></span>
            </span>
            <span class="logo-szoveg">Németország</span>
        </a>

        <button class="navbar-toggler nemet-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav ms-auto menu-lista">
                <li class="nav-item">
                    <a class="nav-link nemet-link" href="index.html">Nyitólap</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link nemet-link" href="nevezetessegek.html">Stadionok</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link nemet-link" href="autoipar.html">Autóipar</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link nemet-link" href="cegek.html">Német cégek</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link nemet-link" href="foci.html">Német football</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link nemet-link" href="euro.html">UEFA Euro 2024</a>
                </li>
            </ul>
        </div>
    </div>
</nav>`;