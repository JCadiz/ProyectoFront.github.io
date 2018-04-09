<template>
<section class="container-fluid" id="movies">
  <div class="row ">
    <div class="col-12 m-0 p-0 ">
      <div class="jumbotron jumbotron-fluid p-4 imag mt-3"  v-for="peli2 in mispeliculas2" :key="peli2.episode_id">    
        <h1 class="display-4 text-sm">Episode {{ peli2.episode_id }}: {{ peli2.title }} </h1>
        <p class="lead text-sm">{{ peli2.opening_crawl }}</p>
        <hr class="my-4 text-sm">
        <p class="text-sm"> Director: {{ peli2.director }}</p> 
        <p class="text-sm">Productor: {{ peli2.producer }}</p>   
        <p class="text-sm">Fecha de Lanzamiento: {{ peli2.release_date }}</p>    
        <p class="lead">
          <button type="button" class="btn btn-primary btn-light" data-toggle="modal" :data-target="'#'+ peli2.episode_id ">
            More Info 
         </button>
        </p>
        
      </div>
    </div>    
  </div>
  

<div class="modal fade" id="episode_id" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" v-for="(peli2,index) in mispeliculas2" :key="index">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Characters pelicula 4</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <per :url="peli2.characters"></per>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>


</section>
</template>
<script>
import axios from 'axios'
import Per from './subcomponents/Per.vue'

export default {
  name: 'cfilm',
  props:['cfilm'],
  components:{
    'per': Per
  },
   mounted(){
    console.log('componente cargado movies')
    this.getPeliculas();
    
    console.log(this.mispeliculas2)
  },
  data(){
    return{
      mispeliculas2:[],
      personajes:[],
    }
  },
  methods:{
    getPeliculas(){
      axios.get('https://swapi.co/api/films').then(response =>{
      console.log(response.data)
      this.mispeliculas2 = response.data.results;
     
      
    }).catch(error => {
      console.log(error)
     });
    }
  }
}
</script>

<style scoped>
.imag {
  
  color: white;
  background-color: #616161

}
#movies{
  
  background-image: url("../assets/img/space.png");
}
</style>
