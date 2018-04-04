<template>
    <section class="container-fluid" id="helloworld">
        <div class="row ">
        <div class="col-12 ">
            <div class="jumbotron jumbotron-fluid p-4 imag"  v-for="peli in mispeliculas" :key="peli.episode_id">
              <div>
              <h1 class="display-4 text-sm">Episode {{ peli.episode_id }}: {{ peli.title }} </h1>
              <p class="lead text-sm">{{ peli.opening_crawl }}</p>
              <hr class="my-4 text-sm">
              <p class="text-sm"> Director: {{ peli.director }}</p> 
              <p class="text-sm">Productor: {{ peli.producer }}</p>   
              <p class="text-sm">Fecha de Lanzamiento: {{ peli.release_date }}</p>    
              </div>       
            </div>
        </div>
        </div>

      </section>
  
</template>

<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',
  props:['HelloWorld'],
  components:{
    
  },
   mounted(){
    console.log('componente cargado....')
    this.getPeliculas();
    console.log(this.mispeliculas)
  },
  data(){
    return{
      mispeliculas:[],
      
    }
  },
  methods:{
    getPeliculas(){
      axios.get('https://swapi.co/api/films').then(response =>{
      console.log(response.data)
      this.mispeliculas = response.data.results;
      
    }).catch(error => {
      console.log(error)
     });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section{
  position: relative;
}

.imag {
  
  color: white;
  background-color: #616161

}
#helloworld{
  background-image: url("../assets/img/space.png");
}

.imag1{
  

  padding: 100px;
  background: url("../assets/img/episodio1.jpg");
  background-position: 0 0;
  background-size: contain;
  background-attachment: fixed;
  background-repeat: no-repeat;
}
.imag2 {
  
  
  padding: 100px;
  background: url("../assets/img/episodio2.jpg");
  background-position: 0 0;
  background-size: contain;

  background-attachment: fixed;
  background-repeat: no-repeat;
}
.imag3 {
  
  
  padding: 100px;
  background: url("../assets/img/episodio3.jpg");
  background-position: 0 0;
  background-size: contain;
  background-attachment: fixed;
  background-repeat: no-repeat;
}
.imag4 {
  

  padding: 100px;
  background: url("../assets/img/episodio4.jpg");
  background-position: 0 0;
  background-size: contain;

  background-attachment: fixed;
  background-repeat: no-repeat;
}
.imag5 {
  
 
  padding: 100px;
  background: url("../assets/img/episodio5.jpg");
  background-position: 0 0;
  background-size: contain;

  background-attachment: fixed;
  background-repeat: no-repeat;
}
.imag1 {
  
 
  padding: 100px;
  background: url("../assets/img/episodio6.jpg");
  background-position: 0 0;
  background-size: contain;

  background-attachment: fixed;
  background-repeat: no-repeat;
}
.imag7 {
  
  
  padding: 100px;
  background: url("../assets/img/episodio7.jpg");
  background-position: 0 0;
  background-size: contain;

  background-attachment: fixed;
  background-repeat: no-repeat;
}
</style>
