<template>
  <div class="lastestreviews">
      <h2>Lastest Reviews
       <span class="icon" id="thumbs">
            <fa icon="thumbs-up" />
          </span>
          </h2>
      <hr>
      <div class="card-group">
         <div class="card" style="width: auto;">
                        <img src="@/assets/images/mcvoy.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                           <p class="card-title"><b>Indestructable Object</b></p>
                          <p class="card-subtitle"><b>Mary McCoy</b></p>
                          <p class="mb-0"><b>review</b></p>
                           <hr>
                           <div class="item-rating">
                              <fa icon="star"/>
                              <fa icon="star"/>
                              <fa icon="star"/>
                              <fa icon="star"/>
                              <fa icon="star"/>
                            </div>
                            <br>
                          <!-- <p class="card-text">Some quick example text to build on the
                               card title and make up the bulk of the card's content.</p> -->
                          <a href="login.html" class="btn btn-primary btn-color">Buy Now</a>
                        </div>
          </div>    
           <div class="card" style="width: auto;">
                        <img src="@/assets/images/black.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                           <p class="card-title"><b>Indestructable Object</b></p>
                          <p class="card-subtitle"><b>Mary McCoy</b></p>
                          <p class="mb-0"><b>review</b></p>
                           <hr>
                          <div class="item-rating">
                              <fa icon="star"/>
                              <fa icon="star"/>
                              <fa icon="star"/>
                              <fa icon="star"/>
                              <fa icon="star"/>
                            </div>
                             <br>
                          <!-- <p class="card-text">Some quick example text to build on the
                               card title and make up the bulk of the card's content.</p> -->
                          <a href="login.html" class="btn">Buy Now</a>
                        </div>
          </div> 
           <div class="card" style="width: auto;">
                        <img src="@/assets/images/ride.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                          <p class="card-title"><b>Indestructable Object</b></p>
                          <p class="card-subtitle"><b>Mary McCoy</b></p>
                          <p class="mb-0"><b>review</b></p>
                           <hr>
                           <div class="item-rating">
                              <fa icon="star"/>
                              <fa icon="star"/>
                              <fa icon="star"/>
                              <fa icon="star"/>
                              <fa icon="star"/>
                            </div>
                             <br>
                          <!-- <p class="card-text">Some quick example text to build on the
                               card title and make up the bulk of the card's content.</p> -->
                          <a href="login.html" class="btn">Buy Now</a>
                        </div>
          </div> 
           <div class="card" style="width: auto;">
                        <img src="@/assets/images/mcvoy.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                          <p class="card-title"><b>Indestructable Object</b></p>
                          <p class="card-subtitle"><b>Mary McCoy</b></p>
                          <p ><b>review</b></p>
                          <hr>
                           <div class="item-rating">
                              <fa icon="star"/>
                              <fa icon="star"/>
                              <fa icon="star"/>
                              <fa icon="star"/>
                              <fa icon="star"/>
                            </div>
                             <br>
                          <!-- <p class="card-text">Some quick example text to build on the
                               card title and make up the bulk of the card's content.</p> -->
                          <a href="#" class="btn">Buy Now</a>
                        </div>
          </div> 
          
          
          </div>
  </div>
</template>

<script>
export default {
  name: 'LastestReviews',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.lastestreviews{
    margin-top:10%;
}
.card {
  margin: 30px auto;
  width: 350px;
  height: 600px;
  border-radius: 5px;
  /* box-shadow: 5px 5px 30px 7px rgba(0,0,0,0.25), -5px -5px 30px 7px rgba(0,0,0,0.22); */
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: 0.4s;
  padding:1em;
}

.card:hover {
  transform: scale(0.9, 0.9);
  /* box-shadow: 5px 5px 30px 15px rgba(0,0,0,0.25), 
    -5px -5px 30px 15px rgba(0,0,0,0.22); */
     box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
}
.card-group{
    z-index: 0;
  width: auto;
  display: flex;
  justify-content: space-around;
   
}
.card-body{
    padding:0px;
}

.card-title{
    font-size:20px;
     margin-bottom: -6px;

}
.card-subtitle{
    font-size:14px;
     margin-bottom: -6px;
}
 
.card-body p{
  margin-bottom: -6px;
} 

.btn{
  background:#D59BF6;
  color:#ffffff;
  padding:5px;
}
a:link{
   text-decoration: none;

   margin-top:2px;
}
#thumbs{
  color:#068D68;;
  background-color: rgba(6,141,104,0.1);
}
.icon{
  font-size:20px;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  padding:2px;
}

.item-rating{
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 10px;
  color:orange;
}

@media screen and (max-width: 650px){

  .lastestreviews{
     align-items: center;
    justify-content: center;
    margin-left:35%;
  }

  .card-group{
    z-index: 0;
  width: auto;
  display: inline-block;
  justify-content: space-around;
   
}

}

</style>
