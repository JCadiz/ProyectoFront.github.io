<template>
  <div class="">
     <div class="container-fluid m-0 p-0">
        <div class="row sin ">
            <div class="col-12 mt-3">
                <div class="jumbotron jumbotron-fluid imag">
                    <h1 class="display-4">Bienvenidos Aqui encontraras nuestros Alquileres!</h1>
                    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr class="my-4">
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    
                </div>
            </div>
        </div>

     <personajes :personajes="misPersonajes"></personajes>
     </div> 
  </div>
</template>
<script>
import axios from 'axios'
import Personajes from '../components/Personajes.vue'

export default {
  name: 'characters',
   props:['characters'],
  components: {
    'personajes':Personajes
  },
  mounted(){
    console.log('componente cargado de personajes')
    this.getPersonajes();
  },
  data(){
    return{
      misPersonajes:[{
        results:[{
         name:[],
         height: [],
			   mass:[],
			   hair_color: [],
		 	   skin_color:[],
			   eye_color:[],
			   birth_year: [],
			   gender:[],
			   homeworld:[],
         films:[],
         species:[],
         vehicles:[],
         starships:[],
         created:[],
         edited:[],
         url:[]
        }]
      }]
    }
  },
  methods:{
    getPersonajes(){
      axios.get('https://swapi.co/api/films').then(response =>{
      console.log(response.data)
      this.misPersonajes = response.data.datos
    }).catch(error => {
      console.log(error)
     });
    }
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
  padding: 100px;
  background: url("../assets/img/jumbotron.jpg");
  background-position: 0 0;
  background-size: contain;

  background-attachment: fixed;
  background-repeat: no-repeat;
}
</style>

