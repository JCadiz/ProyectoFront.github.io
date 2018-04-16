<template>
    <div class="foto d-flex flex-row flex-wrap justify-content-around">
      <figure class="" v-for="(film,index) in misFilms" :key="index">
            <img :src="'peliculas/'+film.title.split(' ').join('_').toLowerCase()+'.jpg'" 
            :alt="film.title" class="fotos">
          </figure> 
    </div>
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

 .foto{
   display: inline-block;
 }

 img{
   width: 200px;
   height: 200px;
  
 }

</style>
