<template>
<div>
       <p class="list-group-item "><b>Name:</b> {{misEspecies.name}}.</p>
       <p class="list-group-item "><b>Classification:</b> {{misEspecies.classification}}.</p>
       <p class="list-group-item "><b>Language:</b> {{misEspecies.language}}.</p>
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
<style >

</style>
