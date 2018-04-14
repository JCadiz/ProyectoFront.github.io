<template>
  <div class="conatiner-fluid characters">
      <div class="row">
        <div class="col-12 d-flex flex-wrap flex-row justify-content-around mx-1 mb-3">

      <!-- div de cards definitivo -->
        <div class="card mb-3 " style="width: 18rem; height:auto; box-sizing:border-box;" v-for="(per,index) in mispersonajes" :key="index">
          <img class="card-img-top img-thumbnail" :src="'personajes/'+per.name.split(' ').join('_').toLowerCase()+'.jpg'" 
            :alt="per.name">
          <div class="card-body">
            <h4 class="card-title text-center">{{ per.name }}</h4>
          </div>
          <ul class="list-group">
            <li>
               <esp :url=" per.species[0] "></esp>
            </li>
           <li>
              <pla :url=" per.homeworld "></pla>
           </li>
           
          <div class="accordion" id="accordion">
            <div class="card">
              <div class="card-header" id="headingOne">
                <h2 class="mb-0 displa-5 text-center">
                  <button class="btn btn-link" type="button" data-toggle="collapse" :data-target="'#collapseOne'+per.name.split(' ').join('_').toLowerCase()" aria-expanded="true" aria-controls="collapseOne">
                     Films
                  </button>
                </h2>
              </div>
              <div :id="'collapseOne'+per.name.split(' ').join('_').toLowerCase()" class="collapse hide" aria-labelledby="headingOne" data-parent="#accordion">
                <div class="card-body">
                    <films :url=" per.films "></films> 
                </div>
                </div>
            </div> 
             </div> 
          </ul>
      
    </div> 
  </div>
</div> 
    <!-- botones -->


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
      this.mispersonajes=[];
      axios.get(next).then(response =>{
      this.mispersonajes = response.data.results;
      this.next= response.data.next;
      this.previous= response.data.previous;
      
      
    }).catch(error => {
      console.log(error)
     });
    },
    previousV(previous){
      this.mispersonajes=[];
      axios.get(previous).then(response =>{
      this.mispersonajes = response.data.results;
      this.next= response.data.next;
      this.previous= response.data.previous;
    }).catch(error => {
      console.log(error)
     });
    },

    
  }
}
</script>
<style scoped>
img{
  width: 300px;
  height: 250px;
  
}

.characters{
   background-image: url("../assets/img/space.png");
   overflow: hidden;
}
.container-fluid{
  background-color: black;
}
</style>
