<template>
  <div class="characters">
     <div class="container-fluid p-0">
        <div class="row ">
            <div class="col-12 ">
                <div class="jumbotron jumbotron-fluid imag p-5">
                    <h1 class=" pt-3 text-sm">Bienvenidos Aqui encontraras nuestros Alquileres!</h1>
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


.imag {
  
  color: white;
  
  background: url("../assets/img/jumbotron.jpg");
  background-position: 0 0;
  background-size:cover;

  height: auto;
  
}
.characters{
   background-image: url("../assets/img/space.png");
   overflow: hidden;
}


</style>

