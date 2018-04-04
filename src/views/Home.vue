<template>
<div class="home">
  <video src="../assets/img/video.mp4" autoplay loop muted class="m-0 p-0">
  </video>

  <div class="containe-fluid">
    <div class="row">
      <div class="col-12">
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
       <helloWorld></helloWorld>
      </div>
    </div>

</div>
</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '../components/HelloWorld.vue'


export default {
  name: 'home',
  props:['home'],
  components: {
    'helloWorld':HelloWorld
  },
  
}
</script>
<style>
video{
  vh: 100%;
  vw: 100%;
  min-width: 100%;
  min-height: 100%;
  border: none;
}
.home{
   background:url("../assets/img/space.png");
   height: auto;
}
.imag {
  
  color: white;
  background-color: #616161

}
</style>
