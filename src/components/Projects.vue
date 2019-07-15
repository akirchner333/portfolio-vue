<template>
  <div id="projects">
    <h1>My Projects</h1>
    <div id="project-list" class="content">
      <div id="filters">
        Filter: 
        <button v-on:click="filter = 'top'" v-bind:class="{active: filter == 'top'}">Major Projects</button>
        <button v-on:click="filter = 'work'" v-bind:class="{active: filter == 'work'}">Jobs</button>
        <button v-on:click="filter = 'internet'" v-bind:class="{active: filter == 'internet'}">Internet</button>
        <button v-on:click="filter = 'game'" v-bind:class="{active: filter == 'game'}">Games</button>
        <button v-on:click="filter = 'bot'" v-bind:class="{active: filter == 'bot'}">Bots</button>
        <button v-on:click="filter = 'programming'" v-bind:class="{active: filter == 'programming'}">Computer Stuff</button>
        <button v-on:click="filter = 'street game'" v-bind:class="{active: filter == 'street game'}">Street Games</button>
        <button v-on:click="filter = 'generative'" v-bind:class="{active: filter == 'programming'}">Generative Art</button>

      </div>
      <ul>
        <li v-for="project in selected">
          <a v-if="project.static" v-bind:href="project.url">{{project.name}}</a>
          <router-link v-else v-bind:to="'projects/' + project.url">{{project.name}}</router-link>
          <div class="description"><span v-html="project.description"></span></div>
        </li>
      </ul>
      <div>
        Other: 
        <span v-for="project in unselected">
          <a v-if="project.static" v-bind:href="project.url">{{project.name}}</a>
          <router-link v-else v-bind:to="'projects/' + project.url">{{project.name}}</router-link>
          &nbsp;
        </span>
      </div>
    </div>
  </div>
</template>

<script>

const projects = [
  {name: "Top Chess", url: "top_chess", tags: ["programming", "bot", "top", "game", "internet"], description: "Chess centered twitter bots"},
  {name: "Tower, Tower, Tower", url: "ttt", tags: ["programming", "game", "top", "internet"], description: "Massively multiplayer browser game about building a tower to the heavens."},
  {name: "Maquisard", url: "maquisard", tags: ["programming", "game", "top"], description: "Charming game of snooping and investigation"},
  {name: "Object Get", url: "object_get", tags: ["game", "programming", "street game", "top"], description: "Street game with four teams one object"},
  {name: "Journey To the End of the Night", url: "journey", tags: ["game", "street game", "top"], description: "Massive scale urban street game"},


  {name: "I Need A Picture of A Lobster", url: "https://pictureofalobster.herokuapp.com", static: true, tags: ["programming", "internet", "generative"], description: "Collaborative generative art tool."},
  {name: "The Number", url: "/internet/number.html", static: true, tags: ["programming", "internet", "generative"], description: "There is only one number and we all have to share it"},
  {name: "What Is A Game?", url: "/internet/whatisagame.html", static: true, tags: ["programming", "internet", "generative"], description: "Bernad Suits' classic essay but a bunch of wiley crows set up shop in it. Darn it!"},
  {name: "Is It Gonna Rain?", url: "https://isitgonnarain.herokuapp.com/", static: true, tags: ["programming", "internet", "generative"], description: "Weather service for fans of Steve Reich"},
  {name: "Lines and Colors", url: "/internet/colors.html", static: true, tags: ["programming", "internet", "generative"], description: "<img src='images/internet/internet_lines.png' height='200px'>"},
  {name: "A Vast Cave", url: "/internet/vastcave.html", static: true, tags: ["programming", "internet", "generative"], description: "Have you ever thought, what if there was a site like twitter except instead of a social network it was a vast cave, returning your own words back to you warped and echoed? Well, now there is."},
  {name: "If You See Another Person You Will Exploded", url: "/internet/explode.html", static: true, tags: ["programming", "internet", "generative"], description: "Self explanatory, I think"},
  {name: "Shark", url: "/internet/shark.html", static: true, tags: ["programming", "internet", "generative"], description: "Hungry shark here to eat vowels"},
  {name: "The Sun", url: "/internet/checkers.html", static: true, tags: ["programming", "internet", "generative"], description: "Experiment in using Perlin Noise to alter text."},
  {name: "Snake", url: "/internet/snake.html", static: true, tags: ["programming", "internet", "generative"], description: "It's a snake!"},

  {name: "Home Access Health Corporation", url: "home_access", tags: ["work"]},
  {name: "Jokes4Miles", url: "jokes4miles", tags: ["work"]},
]

export default {
  name: 'Projects',
  data: function(){
    return {
      projects,
      filter: "top"
    }
  },
  computed: {
    selected: function(){
      return this.projects.filter((p) => p.tags.includes(this.filter));
    },
    unselected: function(){
      return this.projects.filter((p) => !p.tags.includes(this.filter));
    }
  }
}
</script>

<style>
  #projects ul{
    list-style: none;
  }

  #projects li{
    margin-bottom: 5px;
    border-bottom: 1px solid grey;
  }

  #projects li:last-child{
    border: 0;
  }

  #projects li a{
    font-size: 50px;
  }

  #projects button{
    background-color: #EEE;
    border-radius: 0;
    border: 1px solid black;
    font-size: 14px;
    margin: 0 2px;
    padding: 2px 8px;
  }

  #project-list{
    min-height: 500px;
  }

  #projects .active{
    border-width: 2px;
  }

  #projects button:nth-child(3n).active{
    background-color: #add8e6;
  }

  #projects button:nth-child(3n+1).active{
    background-color: #ffc0cb;
  }

  #projects button:nth-child(3n+2).active{
    background-color: #90ee90;
  }

  .description{
    display: none;
    font-size: 12;
    font-weight: bold;
  }

  a:hover + .description{
    display: block;
  }

  @media only screen and (max-width: 600px){
    #projects li{
      margin-bottom: 5px;
      border-bottom: 1px solid grey;
    }

    #projects li:last-child{
      border: 0;
    }

    #projects li a{
      font-size: 30px;
    }
  }
</style>
