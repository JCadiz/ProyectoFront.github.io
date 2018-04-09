<template>
  <div class="conatiner-fluid">
      <div class="row">
        <div class="col-12 d-flex flex-wrap flex-row justify-content-around mx-1 mb-3">
        <div class="card mb-3" style="width: 18rem;" v-for="(per,index) in mispersonajes" :key="index">
           <div class="card-body">
            <h3 class="card-title d-flex justify-content-center">{{ per.name }}</h3>
           </div>
           <ul class="list-group list-group-flush" >
             <esp :url=" per.species[0] "></esp>
             <pla :url=" per.homeworld "></pla>
             <h2 class="displa-5 text-center"> Films </h2>
             <films :url=" per.films "></films> 
           </ul>
         </div>
      </div>
    </div> 
    <div class="row">
        <div class="col-12 d-flex justify-content-center">
            <button type="button" class="btn btn-primary btn-dark m-3 " @click="previousV(previous)">Previous</button>
            <button type="button" class="btn btn-primary btn-dark m-3 " @click="nextV(next)">Next</button>
        </div>  
    </div>
      
  </div>
</template>
<script>
import axios from 'axios'
import Pla from './subcomponents/Pla.vue'
import Esp from './subcomponents/Esp.vue'
import Films from './subcomponents/Films.vue'

export default {
  name:  'personajes',
  props:['personajes'],
  components:{
    'pla': Pla,
    'esp': Esp,
    'films': Films 
  },
  mounted(){
    console.log('componente cargado de personajes')
    this.getPersonaje();
    
    
  },
  data(){
      return{
        mispersonajes:[],
        next:[],
        previous:[],
      }
  },
  methods:{
    getPersonaje(){
      axios.get('https://swapi.co/api/people/?page=1').then(response =>{
      this.mispersonajes = response.data.results;
      this.next= response.data.next;
      this.previous= response.data.previous;
    }).catch(error => {
      console.log(error)
     });
    },
    nextV(next){
      axios.get(next).then(response =>{
      this.mispersonajes = response.data.results;
      this.next= response.data.next;
      this.previous= response.data.previous;
    }).catch(error => {
      console.log(error)
     });
    },
    previousV(previous){
      axios.get(previous).then(response =>{
      this.mispersonajes = response.data.results;
      this.next= response.data.next;
      this.previous= response.data.previous;
    }).catch(error => {
      console.log(error)
     });
    }  
  }
}
</script>
<style scoped>

</style>
