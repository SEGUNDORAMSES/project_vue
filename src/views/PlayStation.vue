<template>

    <div class="nav" style="display: flex; flex-direction: column;">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <router-link to="/"
                    style="text-decoration: none; margin-bottom:15px; color: green;">Inicio</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link to="Noticias"
                                style="text-decoration: none; margin-left: 50px; color: green;">Noticias</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="Contacto"
                                style="text-decoration: none; margin-left: 50px; color: green;">Contacto</router-link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false"
                                style="margin-left: 50px; color: green; ">
                                VideoJuegos
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li> <router-link class="dropdown-item" to="/playstation">PlayStation</router-link>
                                </li>
                                <li> <router-link class="dropdown-item" to="/Nintendo">Nintendo</router-link> </li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li> <router-link class="dropdown-item" to="/Xbox">Xbox</router-link> </li>
                            </ul>
                        </li>

                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    </div>



    <h1 class="tittle">PLAYSTATION</h1>

    <main class="container">

        <div class="card">
            <img src="../assets/PLAYSTATION/CRASH.jpg" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">CRASH </h5>

            </div>
        </div>
        <div class="card">
            <img src="../assets/PLAYSTATION/GRAN TURISMO.jpg" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">GRAN TURISMO</h5>

            </div>
        </div>
        <div class="card">
            <img src="../assets/PLAYSTATION/LAST OF US.jpg" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">LAST OF US</h5>

            </div>
        </div>
        <div class="card">
            <img src="../assets/PLAYSTATION/ps5-games-ghost-of-tsushima-image-block-02-en-14oct21.webp"
                class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">GHOST OF TSUSHIMA</h5>
            </div>
        </div>
        <div class="card">
            <img src="../assets/PLAYSTATION/SPIDERMAN.jpg" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">SPIDERMAN</h5>

            </div>
        </div>
    </main>
</template>




<script>


</script>


<style scoped>
.container {
    display: flex;
    justify-content: space-between;
}


.card {
    height: 350px;
    width: 200px;
    transition: 0.80s;
}

.card img {
    height: 250px;
    width: 150px;
}

.card:hover {
    height: 400px;
    width: 250px;
    background-color: black;
    color: aqua;
}

.tittle {
    border: solid red;
    display: flex;
    justify-content: center;
    margin-left: 450px;
    background-color: blanchedalmond;
    border-radius: 15px;
    transition: 0.75s;
    width: 350px;
}

.tittle:hover {
    width: 400px;
    color: red;
    background-color: aqua
}
</style>