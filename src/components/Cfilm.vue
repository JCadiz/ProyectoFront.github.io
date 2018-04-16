<template>
<div>
<section class="container-fluid" id="movies">
  <div class="row ">
    <div class="col-12 m-0 p-0 ">
      <div class="jumbotron jumbotron-fluid p-3 imag mt-3 w-100"  v-for="peli2 in mispeliculas2" :key="peli2.episode_id"> 
      
       <div class="col-sm-12 d-flex flex-row flex-wrap justify-content-around ">
         <div class="col-md-6 col-sm-12 d-flex flex-column w-50" id='#bloque'>
           <h1 class="display-5 text-sm mb-4 ">Episode {{ peli2.episode_id }}: {{ peli2.title }} </h1>
           <p class="lead text-sm text-justify p">{{ peli2.opening_crawl }}</p>
           <p class="text-sm p">Director: {{ peli2.director }}</p> 
           <p class="text-sm p">Productor: {{ peli2.producer }}</p>   
           <p class="text-sm p">Fecha de Lanzamiento: {{ peli2.release_date }} </p> 
          <p class="lead">
          <button type="button" class="btn btn-primary btn-light p2" data-toggle="modal" :data-target="'#portafoliomodal'+ peli2.episode_id">
            More Info 
          </button>
          </p>
         </div>
         
          <figure class="">
            <img :src="'peliculas/'+peli2.title.split(' ').join('_').toLowerCase()+'.jpg'" 
            :alt="peli2.title" class=" col-md fotos img-fluid mt-5" >
          </figure> 
       </div>   
    
      </div>
    </div>    
  </div>
  
</section>

<!-- modal -->
<div class="modal fade" :id="'portafoliomodal'+peli2.episode_id" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" v-for="peli2 in mispeliculas2" :key="peli2.episode_id">
          <div class="modal-dialog" role="document">
            <div class="modal-content bloquemodal ">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"> Charcters of Episode {{peli2.episode_id}}: {{peli2.title}}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <per :url="peli2.characters"></per>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
</div>

</div>
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
  background-color: rgba(36, 34, 34, 0.1)
}

.p2{
  font-family: 'Do Hyeon', sans-serif;
  font-size: 1.1em;
}

.p{
  color:white;
  /* font-family: 'Gugi', cursive; */
  font-family: 'Do Hyeon', sans-serif;
  font-size: 1.2em;
}
#movies{
  
  background-image: url("../assets/img/space.png");
}

.fotos{
  width: 300px;
  height: auto;
}
.bloquemodal{
  width: 100%;
  height: auto;
}

@media only screen and (max-width: 768px)  {
  img{
    visibility: hidden;
    width: 0px;
    height: 0px;
  }
  h1{
    font-size: 22px;
  }
  p{
    font-size: 15px;
  }
}

@media only screen and (max-width: 640px) {
  img{
    visibility: hidden;
    width: 0px;
    height: 0px;
  }
}


</style>
