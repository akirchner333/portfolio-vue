<script setup>
</script>

<template>
  <header id="header">
    <div class="left name">
      <router-link to="/">
        <span id="first">Alexa</span><br/>
        <span id="last">&nbsp;&nbsp;Kirchner</span>
      </router-link>
    </div>
    <div class="right name">
      <router-link to="/">
        <span id="first">Alexa</span><br/>
        <span id="last">&nbsp;&nbsp;Kirchner</span>
      </router-link>
    </div>
  </header>
</template>

<style scoped>
  #header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: lavender;
    padding: 10px 10%;
  }

  #header .name{
    background-color: transparent;
    display: inline-block;
    font-style: italic;
    font-weight: bolder;
    font-size: 50px;
    text-decoration: italic;
    text-align: left;
  }

  header .right{
    -webkit-transform:rotateY(180deg);
    -moz-transform:rotateY(180deg);
    -o-transform:rotateY(180deg);
    -ms-transform:rotateY(180deg);
  }

  #header .name a{
    text-decoration: none;
    color: black;
  }

  @media only screen and (max-width: 600px){
    #header .name{
      font-size: 30px;
    }
  }
</style>