<template>
  <div class="views">
    <div class="container-fluid ">
    <div class="row  ">
    <div class="col-12 m-0 p-0">
      <div id="carouselExampleIndicators" class="carousel slide m-0 p-0 cover" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner  ">
            <div class="carousel-item active">
                <div class="carousel-caption flexbox-container  ">
                  <h1>Encuentra tus Mejores Lugares para Vivir.</h1>
                </div>
                <img class="d-block w-100 m-0 p-0" src="../assets/img/carrusel3.jpg" alt="First slide">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100 m-0 p-0" src="../assets/img/carusel2.jpg" alt="Second slide">
                <div class="carousel-caption flexbox-container">
                  <h1>A un Increible Precio</h1>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100 m-0 p-0" src="../assets/img/carusel1.jpg" alt="Third slide">
                <div class="carousel-caption flexbox-container">
                    <h1>Registrate y Mantente al Dia con Nuestras Promociones</h1>
                </div>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div> 
  <div class="row">
      <div class="col-md-12">
       <vehicles></vehicles>
    </div>
    </div>


  </div>
  </div>
</template>
<script>
import Vehicles from '../components/Vehicles.vue'

export default {
  name:'ships',
  props:['ships'],
  components:{
    'vehicles': Vehicles
  }
}
</script>
<style scoped>
.flexbox-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
img{
  height: 100vh;
}
.movies{
 background-color: black;
}
</style>
