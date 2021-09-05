<template>
  <div class="discounts">
    <h2>Discounts
     <span class="icon" id="handshake">
            <fa icon="handshake" />
          </span>

          </h2>
      <hr>
     <div class="content">
         <div class="info2">
            <p>
            Get 50% off on your first 2 books. Your great reading journey starts here and now...
            </p>
            
                <a type="button" class="btn" id="button">register with us</a>
        </div>
        <div class="shelf" id="shelf">
            <img src="@/assets/images/tree.jpg">
        </div>
         <div class="empty" id="empty">
            <!-- <img src="@/assets/images/white.jpg"> -->
        </div>

        <div class="books" id="books">
             <img src="@/assets/images/books.jpg">
        </div>
        
     </div>
  </div>
</template>

<script>
export default {
  name: 'Discounts',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.discounts{
    margin-top:8%;
    width:auto;
    height:auto;
    /* border:1px solid blue; */
    
}

.content{
  display:flex;
  width:auto;
  height:auto;
  margin-left:2%;
  margin-top:5%;
}

.info2{
/* border:1px solid blue; */
width:290px;
background:#f8f8f8;
 padding:10px;
}

.info2 p{
    font-size: 33px;
     height: 40vh;
    
    
}

.btn {
  background:#8AACFF;
  color:#ffffff;
  padding:10px;
  

}
#button{

        top: 5%;
        left: 10%;
     
        margin-left: 60px;
        border-radius:5px;
}


#shelf{
  width:300px;
  height: 40vh;
}

.empty{
  width:80px;
  height: 40vh;

}


#handshake{
  color:#FCA705;
  background-color: rgba(252, 167, 5, 0.1);
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

@media screen and (max-width: 650px){

  .discounts{
     align-items: center;
    justify-content: center;
    margin-left:35%;
  }
.content{
  display:inline-block;
  width:auto;
  height:auto;
  margin-left:2%;
  margin-top:5%;
}
#shelf{
  
  height: 20vh;
}

.empty{
  
  height: 20vh;

}
.info2 p{
    font-size: 33px;
     height: 20vh;
    
    
}
  
}



</style>
