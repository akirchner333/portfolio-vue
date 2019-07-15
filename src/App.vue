<template>
  <div id="app">
    <SiteHeader v-bind:firstName="firstName" v-bind:lastName="lastName"/>
    <main>
      <router-view></router-view>   
    </main>
  </div>
</template>

<script>
import Vue from 'vue';
import VueRouter from "vue-router";

import SiteHeader from "./components/SiteHeader.vue";
import Root from "./components/Root.vue";

import TopChess from "./components/projects/TopChess.vue";
import TowerTower from "./components/projects/TowerTower.vue";
import Maquisard from "./components/projects/Maquisard.vue";
import ObjectGet from "./components/projects/ObjectGet.vue";
import Journey from "./components/projects/Journey.vue";
import HomeAccess from "./components/projects/HomeAccess.vue";
import Jokes from "./components/projects/Jokes.vue"
import Construction from "./components/projects/Construction.vue";

Vue.use(VueRouter);

const personalInfo = {
  firstName: "Alexa",
  lastName: "Kirchner",
  email: "akirchner333+inquiry@gmail.com",
  github: "akirchner333",
  mastodon: "crime_crab",
  twitter: "crime_crab",
  itch: 'akirchner',
  tumblr: 'thejhyde',
  location: "Chicago"
}

const router = new VueRouter({
  routes: [
    {path: "/", component: Root, props: {personalInfo}},
    {path: "/projects/top_chess", component: TopChess},
    {path: "/projects/ttt", component: TowerTower},
    {path: "/projects/maquisard", component: Maquisard},
    {path: "/projects/object_get", component: ObjectGet},
    {path: "/projects/journey", component: Journey},
    {path: "/projects/home_access", component: HomeAccess},
    {path: "/projects/jokes4miles", component: Jokes},
    {path: "/projects/:id", component: Construction},
  ]
})

export default {
  name: 'app',
  components: {
    SiteHeader
  },
  data: function(){
    return personalInfo;
  },
  router
}
</script>

<style>
body{
  background-color: #EEE;
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main{
  /*margin: 50px;*/
}

#content{
  margin-left: 30px;
}

.content{
  margin: 50px;
}

a:hover{
  font-weight: bold;
  text-decoration: none;
}

a:visited, a{
  color: #d1001c;
}

h1{
  text-align: center;
  font-style: italic;
  background-color: white;
  margin: 4px 0;
  font-size: 50px;
}
</style>
