<template>
<div id="app">
    <div class="container-fluid">
      <div class="row position-relative">
        <div class="col-12">
          <nav class="navbar navbar-expand-md navbar-dark navbar-toggler bg-dark fixed-top" style="border-radius:0">
         <a class="navbar-brand ml-0" href="/">
           <img src="./assets/img/star.svg" class="ml-0" width="50" height="45" alt="">
         </a>
         <button class="navbar-toggler mr-0" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse justify-content-end " id="navbarTogglerDemo01">
         <ul class="navbar-nav mr-0">
           <li class="nav-item "><router-link to="/" class="nav-link  fuente " >Home</router-link> </li>
           <li class="nav-item "><router-link to="/Movies" class="nav-link fuente"> Movies</router-link> </li>
           <li class="nav-item"><router-link to="/Characters" class="nav-link fuente"> Characters</router-link></li>
           <li class="nav-item "><router-link to="/Planets" class="nav-link fuente"> Planets</router-link></li>
           <li class="nav-item "><router-link to="/StarShips" class="nav-link fuente"> StarShips</router-link></li>
           <li class="nav-item"><router-link to="/Ships" class="nav-link fuente"> Ships</router-link></li>
         </ul> 
         </div>
         </nav>
        </div>
    </div>
  </div>   
 <router-view/>
</div>
</template>

<script>

export default {
  name: 'app',
  
  
}

</script>

<style >
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css";

.fuente{
  font-family: starjedi;
}

 h1, h3,h4, h5{
   font-family: starjedi;
 }

@font-face {
    font-family: "starjedi";
    font-style: normal;
    font-weight: normal;
    src: local("?"), url("../public/fonts/Starjedi.eot") format("eot"), url("../public/fonts/Starjedi.ttf") format("truetype");
}

::-webkit-scrollbar {
  width: 0;
}
</style>
