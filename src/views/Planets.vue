<template>
  <div class="planets">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 mt-3">
          <div class="jumbotron jumbotron-fluid ">
            <h1 class="display-4">Bienvenidos Aqui encontraras nuestros Alquileres!</h1>
            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr class="my-4">
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <planeta></planeta>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import Planeta from '../components/Planeta.vue'

export default {
  name: 'planets',
  props:['planets'],
  components: {
    'planeta': Planeta
  },

}
</script>
