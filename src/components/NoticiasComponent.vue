<template>


    <main>
        <div class="card" >
            <img :src="require(`../assets/${imagen}`)" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">{{ titulo }}</h5>
                <p class="card-text">{{ parrafo }}
                </p>
            </div>
        </div>
    </main>




</template>




<script>
export default ({
    props: {
titulo:String,
parrafo:String,
imagen:String}

})


</script>


<style scoped>

.card{float: left; margin-left: 100px;
    height: 400px;
    transition: 0.5s;
    width: 300px;
    margin-top: 50px;
}


.card:hover{width: 350px;
background-color:tomato;
color: blue;}


</style>