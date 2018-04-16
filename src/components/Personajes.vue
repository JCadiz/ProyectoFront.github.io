<template>
<div>
<div class="conatiner-fluid characters">
      <div class="row">
        <div class="col-12 d-flex flex-wrap flex-row justify-content-around mx-1 mb-3">

      <!-- div de cards definitivo -->
        <div class="card mb-3 mx-3 mt-3" style="width: 18rem; height:auto; box-sizing:border-box;" v-for="(per,index) in mispersonajes" :key="index">
          <img class="card-img-top img-thumbnail" :src="'personajes/'+per.name.split(' ').join('_').toLowerCase()+'.jpg'" 
            :alt="per.name">
          <div class="card-body">
            <h4 class="card-title text-center">{{ per.name.toLowerCase() }}</h4>
          </div>
          <ul class="list-group">
            <li>
               <esp :url=" per.species[0] "></esp>
            </li>
           <li>
              <pla :url=" per.homeworld "></pla>
           </li>
          </ul>  
            <button class="btn btn-link p5" data-toggle="modal" :data-target="'#portafoliomodal'+per.name.split(' ').join('_').toLowerCase()">
                Films
            </button>  
          
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



  <!-- modal -->
<div class="modal fade" :id="'portafoliomodal'+per.name.split(' ').join('_').toLowerCase()" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" v-for="(per,index) in mispersonajes" :key="index">
          <div class="modal-dialog" role="document">
            <div class="modal-content w-100">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"> Participation of {{ per.name }}:</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <films :url=" per.films"></films> 
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary " data-dismiss="modal">Close </button>
              </div>
            </div>
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
@import url('https://fonts.googleapis.com/css?family=Gugi');
@import url('https://fonts.googleapis.com/css?family=Do+Hyeon');

.p5{
  color:rgb(84, 82, 236);
  /* font-family: 'Gugi', cursive; */
  font-family: starjedi;
  font-size: 1.1em;
}

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
