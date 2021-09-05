<template>
  <div class="hero-section" id="home">
      <div class="left" id="info">
           <p>
            Only the weak-minded refuse to be influenced by literature and poetry-
           </p>
      </div>
       <div class="right">
            <img src="@/assets/images/tempsnip.png" width="800px" height="600px" alt="">
       </div>
    
  </div>
</template>

<script>
export default {
  name: 'HeroSection',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hero-section{
    width:auto;
    height:auto;
    display:flex;
}

.right img{
    width:800px;
    height:600px;
    float:right;
} 
.right{
    /* border:1px solid blue; */
    width:800px;
    height:600px;
     margin-left: 30%;
      margin-top: 2%;
     
}


#info{
    /* border:1px solid blue; */
    justify-content: center;
    width:500px;
    position: absolute;
    top: 20%;
        left: 20%;
        margin-top: -147px;
        margin-left: -150px;
}
#info p{
    font-weight: 200px;
    font-size: 50px;
}

@media screen and (max-width: 650px){

  .hero-section{
    display:inline-block;
  }

  .left{
    width:100%;
  }
   .right{
    width:100%;
  }

  #info{
    /* border:1px solid blue; */
    justify-content: center;
    width:500px;
    
    top: 9%;
        left: 10%;
        margin-top: -400px;
        margin-left: 150px;
}

.right img{
  margin-top:55%;
   margin-right:20%;
    width:600px;
    height:600px;
} 
  
}


</style>
