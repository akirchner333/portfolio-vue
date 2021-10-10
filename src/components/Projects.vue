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
        <button v-on:click="filter = 'generative'" v-bind:class="{active: filter == 'generative'}">Generative Art</button>
        <button v-on:click="filter = 'rpg'" v-bind:class="{active: filter == 'rpg'}">RPGs</button>

      </div>
      <ul>
        <li v-for="project in selected" v-bind:key="project.name">
          <a v-if="project.static" v-bind:href="project.url">{{project.name}}</a>
          <router-link v-else v-bind:to="'projects/' + project.url">{{project.name}}</router-link>
          <div class="description"><span v-html="project.description"></span></div>
        </li>
      </ul>
      <div>
        Other: 
        <span v-for="project in unselected" v-bind:key="project.name">
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
  {name: "Lazar.social", url: "lazar", tags: ["top", "internet", "programming"], description: "A series of experimental social media networks."},
  {name: "Taller Than Space Is Wide", url: "taller_than_space", tags: ["rpg", "top", "internet", "game"], description: "An epistolary time travel RPG played in google sheets."},
  {name: "The Court of Ferns", url: "court_of_ferns", tags: ["rpg", "top", "internet", "game"], description: "Arts and crafts in a surreal bureacracy. A LARP for 0 to many players. "},
  {name: "Top Chess", url: "top_chess", tags: ["programming", "bot", "top", "game", "internet"], description: "Chess centered twitter bots"},
  {name: "Tower, Tower, Tower", url: "ttt", tags: ["programming", "game", "top", "internet"], description: "Massively multiplayer browser game about building a tower to the heavens."},
  {name: "Maquisard", url: "maquisard", tags: ["programming", "game", "top"], description: "Charming game of snooping and investigation"},
  {name: "Object Get", url: "object_get", tags: ["game", "programming", "street game", "top"], description: "Street game with four teams one object"},
  {name: "Journey To the End of the Night", url: "journey", tags: ["game", "street game", "top"], description: "Massive scale urban street game"},

  {name: "Visual Art", url: "visual", tags: ["programming", "generative"], descriptions: "Things to look at from various projects"},

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

  {name: "Is This A Duck?", url: "isthisaduck.herokuapp.com", static: true, tags: ["game", "internet", "programming"], description: "A game about opinions on what is and isn't a duck made for the 2016 Global Game Jam."},
  // {name: "Prototype Showcase", url: "", static: true, tags: []},
  {name: "Spaceonaut Spacethousand", url: "/games/spaceonaut/index.html", static: true, tags: ["game", "internet", "programming"], description: "Pilot the Spaceonaut to Rescue to the Space Tree!"},
  {name: "Mystery Train", url: "/games/MysteryTrain/index.html", static: true, tags: [], description: "A point and click puzzle game. Navigate a mysterious train. Best played on Firefox. Built for the Unity web player, so it might not work anymore."},
  {name: "Endless City", url: "https://thejhyde.tumblr.com/tagged/endless-city", static: true, tags: ["game", "programming"], description: "A Minecraft mod that replaces Minecraft's natural world with an infinite city."},
  {name: "What To Expect When You're Expecting Hive Spiders", url: "/games/HiveSpiders.html", static: true, tags: ["game"], description: "A short twine game about feelings and spiders that live in your bloodstream. Warning for spiders and body horror."},
  {name: "Stag and Hare", url: "http://ludocity.org/wiki/Stag_and_Hare", static: true, tags: ["street game", "game"], description: "A variant of Soho Stag Hunt that introduces elements of cooperation or going alone. Made with Lauren DeSteno."},

  {name: "Twelve Thousand Fake Number With Normal Deviates", url: "https://github.com/TheJhyde/fake-numbers", static: true, tags: ["programming"], description: "Fake numbers generated by neural network. Made for NaNoGenMo 2018."},
  {name: "Twitter Algorithmic Timeline Extension", url: "https://github.com/TheJhyde/Algorithmic-timeline", static: true, tags: ["programming"], description: " A chrome extension that shuffled your twitter timeline at every increasing rates. Built for the Stupid Shit No One Needs And Terrible Ideas Hackathon."},
  {name: "The Dog and Fruit Podcast", url: "https://soundcloud.com/dog-and-fruit", static: true, tags: ["programming", "bot"], description: "An automated podcast about dogs and fruit. See all the special criterion collection."},
  {name: "Garfield Minus Garfield Plus Garfield", url: "https://thejhyde.tumblr.com/post/147205811411/garfield-minus-garfield-plus-garfield-i-wrote-a", static: true, tags: ["programming"], description: "<img src='images/digital/garfield.png'>"},
  {name: "Five By Five Bot", url: "https://twitter.com/fivebyfivebot", static: true, tags: ["bot", "programming"], description: " A twitter bot to post every single five by five grid of squares."},
  // {name: "Unplayable Resource Pack Series", url: "", static: true, tags: ["game", "programming"], description: ""},
  {name: "Bedtime Story Bot", url: "https://twitter.com/BedtimeStoryBot", static: true, tags: ["bot", "programming"], description: "A twitter bot which posted a section of The Man Who Was Thursday every evening. Ran from January to August 2014"},
  {name: "The Babylonian Parliament", url: "https://akirchner.itch.io/the-babylonian-parliament", static: true, tags: ["game", "rpg"], description: "A parlimentary procedure for constitutional direct theocracies"},
  {name: "The Dictionary Play Guide", url: "https://akirchner.itch.io/the-dictionary-play-guide", static: true, tags:  ["game", "rpg"], description: "How to Play Noah Webster's classic 1828 roleplaying game, The Dictionary"},
  {name: "The Artist's Choice", url: "https://akirchner.itch.io/the-artists-choice", static: true, tags:  ["game", "rpg"], description: "Make bad art and maybe send one of your friends to die on a hot air balloon"},
  {name: "Lamp RPG Pack", url: "https://akirchner.itch.io/lamp-rpg-pack", static: true, tags:  ["game", "rpg"], description: "11 games I wrote between August and November 2019"},
  {name: "Play the Great Game", url: "https://akirchner.itch.io/play-the-great-game", static: true, tags:  ["game", "rpg"], description: "A tarot poker secrets and powers LARP"},
  {name: "Sleep Game Jam", url: "https://itch.io/jam/sleepy-game-jam", static: true, tags:  ["game", "rpg"], description: "A game jam to for games to play while asleep"},
  {name: "The Parliamentary Procedure Jam", url: "https://itch.io/jam/parliamentary-procedure-jam", static: true, tags:  ["game", "rpg"], description: "A game jam for new and experimental parliamentary procedures"},

  // {name: "LARPs", url: "", tags: ["game"], description: "Live Action Roleplaying Games I have been involved with."},

  {name: "Home Access Health Corporation", url: "home_access", tags: ["work"]},
  {name: "Jokes4Miles", url: "jokes4miles", tags: ["work"]},
  // {name: "", url: "", static: true, tags: [], description: ""},
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
