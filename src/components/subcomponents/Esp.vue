<template>
<div>
     <ul class="list-group list-group-flush" >
       <li class="list-group-item">Nombre: {{misEspecies.name}}</li>
       <li class="list-group-item">Classification: {{misEspecies.classification}}</li>
       <li class="list-group-item">Language: {{misEspecies.language}}</li>
     </ul>
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