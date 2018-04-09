<template>
  <div>
     <ul class="list-group list-group-flush" >
       <li class="list-group-item">Homeland: {{ misPlaneta.name }}</li>
     </ul>
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
