<template>
<div class="home">
  

  <div class="containe-fluid">
    <div class="row">
      <div class="col-12">
         <video src="../assets/img/video.mp4" autoplay loop muted class="m-0 p-0">
         </video>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 bg-dark">
        <div class="col-12 bloque ">
           <h1 class="text-center heading display-5">Coming Soon </h1> 
        </div>
      </div>
    </div>
    <div class="row ">
       <div class="col-11 d-flex flex-row flex-nowrap justify-content-center mx-5 my-3 back">
         <div class="col-6">
            <h1 class="heading">Rogue ne: A Star Wars History</h1>
            <p class="text-justify p p-2">From Lucasfilm comes the first of the Star Wars standalone films, “Rogue One: A Star Wars Story,” an all-new epic adventure. In a time of conflict, a group of unlikely heroes band together on a mission to steal the plans to the Death Star, the Empire’s ultimate weapon of destruction. This key event in the Star Wars timeline brings together ordinary people who choose to do extraordinary things, and in doing so, become part of something greater than themselves.</p>
            <button type="button" class="btn btn-primary btn-light m-3 p2" data-toggle="modal" data-target="#RogueOne">
             See Trailer!
            </button>
         </div>
        <div>
           <img src="../assets/img/rogue_one.jpg" class="img1" alt="rogue">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-11 d-flex flex-row flex-nowrap justify-content-center mx-5 my-3 back altura">
        <div >
          <img src="../assets/img/espisodio8.jpg" class="img2" alt="last_jedi">
        </div>
        <div class="col-6">
            <h1 class="heading">Episode 8: The Last Jedi</h1>
            <p class="text-justify p p-2">With the destruction of the Republic, the evil First Order reigns. Now, Supreme Leader Snoke looks to crush what's left of the Resistance and cement his grip on the galaxy. But hope survives: Rey has found Luke Skywalker, a legendary Jedi Master who can change the tide of war.</p>
            <button type="button" class="btn btn-primary btn-light p2 boton mt-2" data-toggle="modal" data-target="#Last">
             See Trailer!
            </button>
         </div>
      </div>
    </div>
    <div class="row">
      <div class="col-11 d-flex flex-row flex-nowrap justify-content-center mx-5 my-3 back altura">
        <div class="col-6 solo ">
            <h1 class="heading text-left">Solo: A Star Wars History</h1>
            <p class="text-justify p p-2">Board the Millennium Falcon and journey to a galaxy far, far away in Solo: A Star Wars Story, an all-new adventure with the most beloved scoundrel in the galaxy. Through a series of daring escapades deep within a dark and dangerous criminal underworld, Han Solo meets his mighty future copilot Chewbacca and encounters the notorious gambler Lando Calrissian, in a journey that will set the course of one of the Star Wars saga’s most unlikely heroes.</p>
            <button type="button" class="btn btn-primary btn-light m-3 p2" data-toggle="modal" data-target="#Solo">
             See Trailer!
            </button>
         </div>
        <div >
         <img src="../assets/img/solo.jpeg" class="img3" alt="solo">
        </div>
      </div> 
    </div>
       
      
    

</div>
                            <!-- Modales -->

<div class="modal fade " id="RogueOne" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content modal2">
              <div class="modal-header">
                <h5 class="modal-title text-center" id="exampleModalLabel">Trailer</h5>
                
              </div>
              <div class="modal-body d-flex flex-column">
                <img src="../assets/img/Rogue_logo.png" alt="Rogue">
                <video src="../assets/video/Rogue_One.mp4" preload controls  ></video>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary p2" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
</div>

<div class="modal fade" id="Last" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content modal2 bg-dark">
              <div class="modal-header">
                <h5 class="modal-title text-center p3" id="exampleModalLabel">Trailer</h5>
                
              </div>
              <div class="modal-body d-flex flex-column">
                <img src="../assets/img/LAST_logo.png" alt="Last">
                <video src="../assets/video/The_Last_Jedi.mp4"  preload controls ></video>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary p2" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
</div>

<div class="modal fade" id="Solo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content modal2 bg-dark">
              <div class="modal-header">
                <h5 class="modal-title text-center p3" id="exampleModalLabel">Trailer</h5>
              </div>
              <div class="modal-body d-flex flex-column">
                <img src="../assets/img/solo_logo.png" alt="solo">
                <video src="../assets/video/Solo.mp4"  preload controls id="#video3"></video>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary p2" data-dismiss="modal" @click="detener">Close</button>
              </div>
            </div>
          </div>
</div>
</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  props:['home'],
  methods:{
    detener3(){
      var vid = document.getElementById('#video3');
      vid.pause();
    },
    detener2(){
      var vid = document.getElementById('#video2');
      vid.pause();
    },

  }
}
</script>
<style >
@import url('https://fonts.googleapis.com/css?family=Gugi');
@import url('https://fonts.googleapis.com/css?family=Do+Hyeon');

video{
  vh: 100%;
  vw: 100%;
  min-width: 100%;
  min-height: 100%;
  border: none;
 
}

.modal2{
 width: 75%;
 height: 100vh;
}

.p3{
  color:white;
  text-align: center;
}

.home{
   background:url("../assets/img/space.png");
   overflow: hidden;
}
.imag {
  
  color: white;
  background-color: #616161

}
.heading{
  color: floralwhite;
}

.back{
  background-color: rgba(78, 77, 77, 0.164);
}

.altura{
  height: 80vh;
}
h1:hover{
 color:rgb(255, 230, 0);
 -webkit-transition: all 0.3s ease;
-moz-transition: all 0.3s ease;
-ms-transition: all 0.3s ease;
-o-transition: all 0.3s ease;
transition: all 0.3s ease;
}

.p{
  color:white;
  /* font-family: 'Gugi', cursive; */
  font-family: 'Do Hyeon', sans-serif;
  font-size: 1.2em;
}

.p2{
  font-family: 'Do Hyeon', sans-serif;
  font-size: 1.1em;
}

.boton{
  margin-left: 80%;
}

.img2{
  width: 80%;
height: 100%;
display: flex;
align-items: flex-start;
justify-content: flex-start;

border-right: 3px solid rgb(255, 230, 0);
}

.img1{
width: 80%;
height: 100%;
display: flex;
align-items: flex-end;
justify-content: flex-end;
margin-left: 22%; 
border-left: 3px solid rgb(255, 230, 0);
}

.img3{
  width: 100%;
height: 100%;
display: flex;
align-items: flex-end;
justify-content: flex-end;
margin-left: 25%; 
border-left: 3px solid rgb(255, 230, 0);
}

.solo{
  margin-left: -11%;
}


</style>
