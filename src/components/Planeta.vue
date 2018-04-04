<template>
<section class="container-fluid" id="planeta">
  
    <div class="col-12 d-flex flex-wrap flex-row justify-content-around p-2">
      <div class="jumbotron jumbotron-fluid p-4"  v-for="plane in misplanetas" :key="plane.name">
        <h1 class="display-4 text-sm"> {{ plane.name }} </h1>
        <p class="lead text-sm">{{ plane.diameter }}</p>
        <hr class="my-4 text-sm">
        <p class="text-sm"> clima: {{ plane.climate }}</p> 
        <p class="text-sm">terrenos: {{ plane.terrain }}</p>   
        <p class="text-sm">superficie de agua: {{ plane.surface_water }}</p>  
        <p class="text-sm">poblacion: {{ plane.population }}</p>    
      </div>
      
    </div>                    

  <div class="row">
    <div class="col-12 d-flex justify-content-center">
      <button type="button" class="btn btn-primary btn-dark m-3 " @click="previousP(previous)">Previous</button>
       <button type="button" class="btn btn-primary btn-dark m-3 " @click="nextP(next)">Next</button>
    </div>
  </div>
</section>
</template>
<script>
import axios from 'axios'
export default {
  name:'planeta',
  props:['planeta'],
  mounted(){
    console.log('componente cargado de planetas')
    this.getPeliculas();
    console.log(this.misplanetas)
    console.log(this.next)
    console.log(this.previous)
  },
 
  data(){
    return{
      misplanetas:[],
      next:"",
      previous:"",
    }
  },
  methods:{
    getPeliculas(){
      axios.get('https://swapi.co/api/planets/?page=1').then(response =>{
      console.log(response.data)
      this.misplanetas = response.data.results;
      this.next= response.data.next;
      this.previous= response.data.previous;
    }).catch(error => {
      console.log(error)
     });
    },
    nextP(next){
      axios.get(next).then(response =>{
      console.log(response.data)
      this.misplanetas = response.data.results;
      this.next= response.data.next;
      this.previous= response.data.previous;
    }).catch(error => {
      console.log(error)
     });
    },
    previousP(previous){
      axios.get(previous).then(response =>{
      console.log(response.data)
      this.misplanetas = response.data.results;
      this.next= response.data.next;
       this.previous= response.data.previous;
    }).catch(error => {
      console.log(error)
     });
    }
  }
}
</script>
