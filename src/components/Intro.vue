<script setup></script>

<template>
  <div id="intro" class="content">
    <div class="section">
      <div class="number one">1</div>
      <div class="text">Full stack web developer, digital artist, and analog game designer living in Chicago.</div>
    </div>

    <div class="section">
      <div class="number two">2</div>
      <div class="text">Creating art with computers in it and art with people in it.</div>
    </div>

    <div class="section">
      <div class="number three">3</div>
      <div class="text">Award winning larpwright.</div>
    </div>
  </div>
</template>

<style scoped>
  #intro{
    font-size: 20px;
    font-weight: bold;
  }

  .section{
    align-items: center;
    display: flex;
    margin-top: 20px;
    width: 50%;
  }

  .section:nth-child(even){
    margin-left: 50%;
  }

  .number{
    font-size: 70px;
    display: inline-block;
    z-index: -10;
    margin-right: -30px;
  }

  .text{
    display: inline-block;
    z-index: 0;
  }

  .one{
    color: #add8e6;
  }

  .two{
    color: #ffc0cb;
  }

  .three{
    color: #90ee90;
  }
</style>
