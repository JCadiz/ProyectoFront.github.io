<template>
 <div>
     <p v-for="(pers,index) in misPer" :key="index" class=" text-center color">
         {{pers.name}}
     </p>
 </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'per',
  props:['url'],
  mounted(){
      this.getPersonaje();
  },
  data(){
      return{
          misPer:[],
      }
  },
  methods:{
      getPersonaje(){
           for( var i=0; i < this.url.length; i++){

            axios.get(this.url[i]).then(response =>{
            this.misPer.push(response.data);
           }).catch(error => {
             console.log(error)
           });
        }
    }
  }
  
}
</script>

<style scoped>
.color{
  color:black;
  /* font-family: 'Gugi', cursive; */
  font-family: 'Do Hyeon', sans-serif;
  font-size: 1.2em;
}

</style>

