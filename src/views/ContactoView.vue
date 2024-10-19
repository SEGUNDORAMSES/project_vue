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



    <main class="container">

        <form class="row g-3 needs-validation">
            <div class="col-md-4">
                <label for="validationCustom01" class="form-label">FIRST NAME</label>
                <input type="text" class="form-control" id="validationCustom01" v-model="valor1" value="" required>
                <div class="valid-feedback"></div>
            </div>
            <div class="col-md-4">
                <label for="validationCustom02" class="form-label">LAST NAME</label>
                <input type="text" class="form-control" id="validationCustom02" v-model="valor2" value="" required>
                <div class="valid-feedback">
                    Looks good!
                </div>
            </div>
            <div class="col-md-4">
                <label class="form-label">TELEPHONE NUMBER</label>
                <div class="input-group has-validation">
                    <input type="number" class="form-control" v-model="valor3" required>
                </div>
            </div>
            <div class="col-md-6">
                <label for="validationCustom03" class="form-label">EMAIL</label>
                <input type="email" class="form-control" v-model="valor4" required>
                <div class="invalid-feedback">
                </div>
            </div>

            <div class="col-md-3">
                <label for="validationCustom05" class="form-label">FEEDBACK</label>
                <input type="text" class="form-control" id="validationCustom05" v-model="valor5" required>
                <div class="invalid-feedback">

                </div>
            </div>
          
            <div class="col-12">
                <button class="btn btn-primary" type="submit" @click="accion">Submit form</button>
            </div>
        </form>
    </main>


</template>




<script>

export default({
data(){

return{
valor1:0,
valor2:0,
valor3:0,
valor4:0,
valor5:0}},

methods:{
accion(){

    if (this.valor1=="GEIREL" && this.valor2=="CANO SOTO" && this.valor3=="61752018" && this.valor4=="REALMADRID@GMAIL.COM" && this.valor5=="TODO ESTÁ EXCELENTE") {
        alert("LA INFORMACIÓN HA SIDO SUMINISTRADA Y SERÁ CONTACTADO EN 2 DÍAS LABORALES")
    } 
    else {
        alert("no working")
    }
}

}

})

</script>





<style scoped>
.container {
    display: flex;
    margin-top: 50px;
}






</style>