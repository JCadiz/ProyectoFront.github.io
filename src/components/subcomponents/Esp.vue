<template>
<div>
     
       <p class="list-group-item">Nombre: {{misEspecies.name}}</p>
       <p class="list-group-item">Classification: {{misEspecies.classification}}</p>
       <p class="list-group-item">Language: {{misEspecies.language}}</p>
    
</div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'esp',
  props:['url'],
  mounted(){ 
      this.getSpecie();
  },
  data(){
    return {
      misEspecies:{}
    }
  },
  methods:{
      getSpecie(){
      axios.get(this.url).then(response =>{
        
      this.misEspecies = response.data;
     
    }).catch(error => {
      console.log(error)
     });
    }
  }
  
}
</script>