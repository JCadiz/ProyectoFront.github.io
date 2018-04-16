<template>
  <div class="container-fluid">
    <div class="col-12 d-flex flex-wrap flex-row justify-content-around m-2 mb-3">
        <div class="card mb-3 mt-4" style="width: 18rem;" v-for="(nav,index) in Naves" :key="index">
           <div class="card-body">
            <h3 class="card-title">{{ nav.name}}</h3><b></b>
           </div>
           <ul class="list-group list-group-flush">
             <li class="list-group-item"><b>Model:</b> {{ nav.model}}.</li>
             <li class="list-group-item"><b>Manufacturer:</b> {{ nav.manufacturer }}.</li>
             <li class="list-group-item"><b>Crew:</b> {{ nav.crew }}.</li>
             <li class="list-group-item"><b>Passengers:</b> {{ nav.passengers }}.</li>
           </ul>
         </div>
      </div>
    <div class="row">
        <div class="col-12 d-flex justify-content-center">
             <button type="button" class="btn btn-primary btn-dark m-3 disabled " @click="previousV(previous)"
            v-if="previous == null">Previous</button>
             <button type="button" class="btn btn-primary btn-dark m-3 " @click="previousV(previous)"
            v-else>Previous</button>
            <button type="button" class="btn btn-primary btn-dark m-3 disabled" @click="nextV(next)"
             v-if="next == null">Next</button>
             <button type="button" class="btn btn-primary btn-dark m-3 " @click="nextV(next)"
             v-else>Next</button>
        </div>  
    </div>
</div>
</template>
<script>
import axios from 'axios'

export default {
  name:'naves',
  props:['naves'],
  mounted(){
    console.log('componente cargado de naves')
    this.getVehicles();
    console.log(this.Naves)
    console.log(this.next)
    console.log(this.previous)
  },
  data(){
      return{
          Naves:[],
          next:[],
          previous:[],
      }
  },
  methods:{
    getVehicles(){
      axios.get('https://swapi.co/api/starships/?page=1').then(response =>{
      console.log(response.data)
      this.Naves = response.data.results;
      this.next= response.data.next;
      this.previous= response.data.previous;
    }).catch(error => {
      console.log(error)
     });
    },
    nextV(next){
      axios.get(next).then(response =>{
      console.log(response.data)
      this.Naves = response.data.results;
      this.next= response.data.next;
      this.previous= response.data.previous;
    }).catch(error => {
      console.log(error)
     });
    },
    previousV(previous){
      axios.get(previous).then(response =>{
      console.log(response.data)
      this.Naves = response.data.results;
      this.next= response.data.next;
       this.previous= response.data.previous;
    }).catch(error => {
      console.log(error)
     });
    }
  }
}
</script>
