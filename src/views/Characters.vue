<template>
  <div class="characters">
     <div class="container-fluid m-0 p-0">
        <div class="row ">
            <div class="col-12 sin">
                <div class="jumbotron jumbotron-fluid imag ">
                    <h1 class="display-4">Bienvenidos Aqui encontraras nuestros Alquileres!</h1>
                    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr class="my-4">
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    
                </div>
            </div>
        </div>
    <div class="row">
     <div class="col-md-12">
       <personajes></personajes>
     </div> 
    </div> 

     </div> 
  </div>
</template>
<script>
import Personajes from '../components/Personajes.vue'

export default {
  name: 'characters',
   props:['characters'],
   components:{
     'personajes':Personajes
   }
}
</script>
<style scoped>
.sin {
  padding-left: -15px;
  padding-right: -15px;
}

.imag {
  
  color: white;
  padding: 130px;
  background: url("../assets/img/jumbotron.jpg");
  background-position: 0 0;
  background-size: contain;

 
  background-repeat: no-repeat;
}
</style>

