<template>
<div class="container-fluid">
    <div class="col-12 d-flex flex-wrap flex-row justify-content-around m-2 mb-3">
        <div class="card mb-3" style="width: 18rem;" v-for="(vehi,index) in vehiculos" :key="index">
           <div class="card-body">
            <h3 class="card-title">{{ vehi.name}}</h3>
            <p class="card-text">{{ vehi.model}}</p>
           </div>
           <ul class="list-group list-group-flush">
             <li class="list-group-item">{{ vehi.length }}</li>
             <li class="list-group-item">{{ vehi.crew }}</li>
             <li class="list-group-item">{{ vehi.passengers }}</li>
             <li class="list-group-item">{{ vehi.vehicle_class }}</li>
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
  name:'vehicles',
  props:['vehicles'],
  mounted(){
    console.log('componente cargado de vehiculos')
    this.getVehicles();
    console.log(this.vehiculos)
    console.log(this.next)
    console.log(this.previous)
  },
  data(){
      return{
          vehiculos:[],
          next:[],
          previous:[],
      }
  },
  methods:{
    getVehicles(){
      axios.get('https://swapi.co/api/vehicles/?page=1').then(response =>{
      console.log(response.data)
      this.vehiculos = response.data.results;
      this.next= response.data.next;
      this.previous= response.data.previous;
    }).catch(error => {
      console.log(error)
     });
    },
    nextV(next){
      axios.get(next).then(response =>{
      console.log(response.data)
      this.vehiculos = response.data.results;
      this.next= response.data.next;
      this.previous= response.data.previous;
    }).catch(error => {
      console.log(error)
     });
    },
    previousV(previous){
      axios.get(previous).then(response =>{
      console.log(response.data)
      this.vehiculos = response.data.results;
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
