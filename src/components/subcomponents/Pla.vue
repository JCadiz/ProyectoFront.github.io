<template>
  <div>
     
       <li class="list-group-item">Homeland: {{ misPlaneta.name }}</li>
     
</div>
</template>
<script>
import axios from 'axios'

export default {
   name: 'pla',
  props:['url'],
  mounted(){ 
      this.getPlaneta();
  },
  data(){
    return {
      misPlaneta:{}
    }
  },
  methods:{
      getPlaneta(){
      axios.get(this.url).then(response =>{
        
      this.misPlaneta = response.data;
     
    }).catch(error => {
      console.log(error)
     });
    }
  }
}
</script>
