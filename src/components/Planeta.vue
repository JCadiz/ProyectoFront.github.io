<template>
<section class="container-fluid" id="planeta">
  
    <div class="col-sm-12 col-md-12 d-flex flex-wrap  justify-content-around mx-1 mb-3">

      <div class="card mb-3 " style="width: 18rem; height:auto; box-sizing:border-box;" v-for="plane in misplanetas" :key="plane.name">
         <div class="card-body">
         <h3 class=" card-title display-5 "> {{ plane.name }}</h3>
         <p class="lead text-right">{{ plane.diameter }}</p>
         </div>
         <ul class="list-group list-group-flush">
           <li class="list-group-item">Climate: {{ plane.climate }}</li>
           <li class="list-group-item">Terrain: {{ plane.terrain }}</li>
           <li class="list-group-item">Surface Of Water: {{ plane.surface_water }}</li>
           <li class="list-group-item">Population: {{ plane.population }}</li>
         </ul>
      </div> 
      
    </div>                    

  <div class="row">
    
     <div class="col-12 d-flex justify-content-center">
            <button type="button" class="btn btn-primary btn-dark m-3 disabled " @click="previousP(previous)"
            v-if="previous == null">Previous</button>
             <button type="button" class="btn btn-primary btn-dark m-3 " @click="previousP(previous)"
            v-else>Previous</button>
            <button type="button" class="btn btn-primary btn-dark m-3 disabled" @click="nextP(next)"
             v-if="next == null">Next</button>
             <button type="button" class="btn btn-primary btn-dark m-3 " @click="nextP(next)"
             v-else>Next</button>
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
