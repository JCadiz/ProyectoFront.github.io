<template>
<div class="movies page">
<div class="container-fluid ">
    <div class="row  ">
    <div class="col-12 m-0 p-0">
      <div id="carouselExampleIndicators" class="carousel slide m-0 p-0 cover" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner  ">
            <div class="carousel-item active">
                <div class="carousel-caption flexbox-container ">
                  <h2 class="display-5">Find the Synopsis of your Favorite Star War Movie</h2>
                </div>
                <img class="d-block w-100 m-0 p-0" src="../assets/img/carrusel3.jpg" alt="First slide">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100 m-0 p-0" src="../assets/img/carusel2.jpg" alt="Second slide">
                <div class="carousel-caption flexbox-container">
                  <h2 class="display-5">be a big fan of Star Wars just here</h2>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100 m-0 p-0" src="../assets/img/carusel1.jpg" alt="Third slide">
                <div class="carousel-caption flexbox-container">
                  <h2 class="display-5">learn, discover everything on our Website .</h2>
                </div>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div> 
  <div class="row">
      <div class="col-md-12">
       <cfilm></cfilm>
    </div>
    </div>

  <section>
  <div class="row">
    <div class="col-12 d-flex flex-row flex-column bg-dark footer">
      <div class="d-flex flex-row justify-content-center align-content-center">
        <h3 class="mt-5 text-center p3"> Follow Star Wars:</h3>
      </div>
    
         <div class="social d-flex justify-content-center ">
            <ul>
                <li>
                    <a href="https://www.facebook.com/StarWars" target="_blank" class="fa fa-facebook"></a>
                </li>
                <li>
                    <a href="https://twitter.com/starwars" target="_blank" class="fa fa-twitter"></a>
                </li>
                <li>
                    <a href="https://starwars.tumblr.com" target="_blank" class="fa fa-tumblr"></a>
                </li>
                <li>
                    <a href="https://plus.google.com/+StarWars" target="_blank" class="fa fa-google-plus"></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/starwars/" target="_blank" class="fa fa-instagram"></a>
                </li>
                <li>
                    <a href="https://www.youtube.com/user/starwars" target="_blank" class="fa fa-youtube"></a>
                </li>
            </ul>
              </div>
      </div>
  </div>
</section> 
  </div>
</div>
</template>
<script>

import Cfilm from '../components/Cfilm.vue'


export default {
  name: 'movies',
   props:['movies'],
  components: {
    'cfilm': Cfilm
  }
}
</script>

<style scoped>
.flexbox-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

h2 {
    background: rgba(0, 0, 0, 0.11);
}

img{
  height: 100vh;
}
.movies{
 background-color: black;
}

.social ul {
    display: inline;
  
}

.social li {
    list-style: none;
    display: inline;
    margin:1em;
}

.social ul li a {
    padding: 10px 15px;
    font-size: 1.8em;
    color: rgb(167, 160, 160);
    display: inline-block;
    background: rgba(44, 44, 44, 0);
    text-decoration: none;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
}
.social ul li a:hover{
  color:white;
}

.footer{
  background-image: url('../assets/video/footer.jpg');
  background-position-y: -90px;
  background-position-x: center;
  opacity: 0.85;
  line-height: 10vh;
}
</style>
