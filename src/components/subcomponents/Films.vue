<template>
   <ul class="list-group list-group-flush" >
       <li v-for="(film,index) in misFilms" :key="index" class=" text-center " >Episode {{ film.episode_id }}: {{ film.title }}  </li>
    </ul>
</template>
<script>
import axios from 'axios'

export default {
  name: 'films',
  props:['url'],
  mounted(){ 
      this.getFilms();
  },
  data(){
    return {
      misFilms:[]
    }
  },
  methods:{
      getFilms(){
          for( var i=0; i < this.url.length; i++){

            axios.get(this.url[i]).then(response =>{
            this.misFilms.push(response.data);
           }).catch(error => {
             console.log(error)
           });
        }
    }
  }
}
</script>
<style scoped>
 ul > li {
     display: inline-block;
     list-style: none;
 }
</style>
