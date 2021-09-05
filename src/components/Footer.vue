<template>
  <div class="footer">
    <hr>
    <div class="content">
      <p> copyright&#169;2021</p>
      <p>developed by Mercy Wamanga</p>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer{
  width:100%;
  height:20vh;
  color: #8AACFF;
    margin-top: 5%;
    justify-content: center;
}

.content{
  justify-content: center;
  text-align:center;
  
}

@media screen and (max-width: 650px){
.footer{
  width:100%;
  height:20vh;
  color: #8AACFF;
    margin-top: 5%;
    justify-content: center;
}

.content{
  justify-content: center;
  text-align:center;
  
}

  
}

</style>
