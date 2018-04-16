<template>
  <div class="characters page">
     <div class="container-fluid p-0">
        <div class="row ">
            <div class="col-12 ">
                <div class="jumbotron jumbotron-fluid imag p-5">
                    <p><br></p>
                    <h1 class="mt-5 pt-3 text-sm text-center">Find More Details About your Favorite Characters.</h1>  
                    <p><br></p>
                    <p><br></p>
                </div>
            </div>
        </div>
    <div class="row">
     <div class="col-md-12">
       <personajes></personajes>
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
import Personajes from '../components/Personajes.vue'

export default {
  name: 'characters',
   props:['characters'],
   components:{
     'personajes':Personajes
   }
}
</script>
<style scoped>

.p3{
  color:white;
  text-align: center;
}

.p{
  color:white;
  /* font-family: 'Gugi', cursive; */
  font-family: 'Do Hyeon', sans-serif;
  font-size: 1.2em;
}

.imag {
  
  color: white;
  
  background: url("../assets/img/jumbotron.jpg");
  background-position: 0 0;
  background-size:cover;
  height: auto;
  
}
.characters{
   background-image: url("../assets/img/space.png");
   overflow: hidden;
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

h1:hover{
    color:white;
}

</style>

