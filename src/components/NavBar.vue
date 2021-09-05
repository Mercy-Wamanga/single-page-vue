<template>
 <div class="header">

     <div class="logo">
       <a href="#"><img src="@/assets/images/open-book.svg" class="change-my-color"/></a> 
    </div>


  <div class="nav-container">
     
    
   
    <div class="nav-links">
       <ul>
        <li><a href="#" class="link">home</a></li>
        <li><a href="#" class="link">Discounts</a>  </li>
        <li><a href="#" class="link">Lastest Reviews</a></li>
      </ul>
    </div>

       <div class="buttons">
          <ul>
            <li><a href="#" id="link-btn">register</a> </li>
            <li><a href="#" id="link-btn">login</a>  </li>
          </ul>
       </div>
  </div>

      <span class="hamburger-menu">
         <fa icon="bars" />
      </span>
  </div>
    
  
</template>

<script>

export default {
  name: 'NavBar',
  props: {
    
  },
  data(){
    return{
      //image: image;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.change-my-color{
    filter: invert(60%) sepia(65%) saturate(514%) hue-rotate(202deg) brightness(93%) contrast(103%);
    width:90px;
    height:70px;
}

.logo{
 float:left;
   margin-top:-20px;
    margin-left: 10%;
}

.buttons{
  float:right;
}

.header{
  display:flex;
  flex-direction: row;
  position:relative;
  padding-top:30px;
  /* border: 1px solid green; */
}

.nav-container{
  width:480px;
  display: flex;
  flex-direction: row;
  margin-left: auto;
  margin-right: auto;
  height:30px;
  z-index:1;
  /* border: 1px solid green; */
}
.hamburger-menu{
  display: none;
  align-items: center;
  z-index:1;
  font-size: 110%;
}
.hamburger-menu:hover{
  cursor: pointer;
  transform: scale(1.2);
}

@media screen and (max-width: 650px){
  .hamburger-menu{
    display: flex;
    position:absolute;
    right:10%;
  }
  .nav-container{
    display: none;
  }

  .logo{
    display: none;
  }
}


.nav-container ul{
  display:flex;
  flex-direction: row;
  width:100%;
  margin:0;
  padding:0;
}
.nav-container li{
  text-decoration: none;
  list-style-type: none;
  height: 30px;
  width:120px;
  display: flex;
  align-items: center;
  text-align: center;
  margin-left:1%;
}


.nav-container  a{
  display:flex;
  width:100%;
  height:100%;
  text-decoration: none;
  color:#8AACFF;
  align-items: center;
  justify-content: center;
}
.nav-container  a:hover,
.nav-container a:active
{
  /* background-color:  */
    color:#D59BF6;
    border-bottom: 3px solid #D59BF6;

}

#link-btn {
  background: #D59BF6;
  color:white;
  border:1px solid #D59BF6;
  padding:1px;
 margin:5px;
 border-radius:5px;

}

#link-btn:hover{
   background: #8AACFF;
    border:1px solid #8AACFF;
}

.icon span{
 float:right;
 font-size:20px;
}
.icon span:hover{
  cursor:pointer;
}

.nav-links{
  margin-left:-150px;
}

.buttons{
  margin-left:25%;
}

</style>
