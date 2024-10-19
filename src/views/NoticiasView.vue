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
                                <li> <router-link class="dropdown-item" to="/playstation">PlayStation</router-link> </li>
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
<NoticiasComponent
titulo="Noticias Actuales" imagen="Dragonball.png" parrafo="
Dragon Ball: Sparking Zero surpasses 3 million sales worldwide in just 24 hours after release"
></NoticiasComponent>
<NoticiasComponent titulo="Noticias Actuales" imagen="Fantasy.png" parrafo="Nobuo Utmensu confirma que FANTASIAN NEO DIMENSION es su último proyecto como desarrollador de videojuegos"></NoticiasComponent>
<NoticiasComponent titulo="Noticias Actuales" imagen="Image1.png" parrafo="Microsoft has confirmed the next wave of titles coming to Xbox Game Pass for console, PC and Xbox Cloud Gaming."></NoticiasComponent>
</template>




<script>
import NoticiasComponent from '@/components/NoticiasComponent.vue';

export default({

components:{
NoticiasComponent

}

})


</script>


