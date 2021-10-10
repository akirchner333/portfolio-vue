<template>
  <Project 
    header="lazar.social" 
    subheader="A series of experimental social media networks."
    v-bind:links="links"
    v-bind:images="images"
  >
    <div>
      Lazar dot social is an ongoing project about social media design. Each generation of lazar consists of a temporary social network with some unique, experimental, or ridiculous features. With Lazar I'm trying to explore what's possible for social networks, to look beyond the currently dominant models and get a glimpse of what could be.
    </div>
    <div>
      <h3>1st Generation: Reacts</h3>
      <div>
        Users can only react - no posts, only reactions and reactions to reactions. Includes eight unique reactions: happy, sad, neutral, crab, glacier, microphone, obelisk and shield.
      </div>
      <div>
        <img src="images/internet/lazar1_5.png" title="A slide for the G1 Lazar pitch deck"/>
        <img src="images/internet/lazar1_1.png" title="A 4 deep reaction chain" />
        <img src="images/internet/lazar1_3.png" title="The full set of reactions" />
        <img src="images/internet/lazar1_2.png" title="A very deep reaction chain" />
      </div>
    </div>
    <div>
      <h3>2nd Generation: MinMax</h3>
      <div>
        Posts must be below a maximum character length and above a mininum character length. These limits would change every hour, including periods where the maximum exceeded the minimum, preventing posting all together.
      </div>
      <div>
        <img src="images/internet/lazar2_4.png" title="A slide from the g2 Lazar pitch deck"/>
        <img src="images/internet/lazar2_1.png" title="The layout of the g2 site"/>
        <img src="images/internet/lazar2_2.png" title="An example of some posts"/>
        <img src="images/internet/lazar2_3.png" title="Close up on the lexical space graph"/>
      </div>
    </div>
    <div>
      <h3>3rd Generation: Temperature</h3>
      <div>
        Posts are sorted based on how close they are to a secret topic, with a prize for whichever user guessed the topic.
      </div>
      <div>
        <img src="images/internet/lazar3_1.png" title="The g3 lazar site, show the best post" />
        <img src="images/internet/lazar3_2.png" title="The g3 lazar site, show the best post" />
        <img src="images/internet/trophy.png" title="The trophy for the winner of Lazar G3" />
      </div>
    </div>

  </project>
</template>

<script>
import Project from "./Project.vue"

var links = [
  {url: "https://lazar.social", text: "lazar.social"},
  {url: "https://twitter.com/lazardotsocial", text: "The lazar.social twitter account"},
];

var images = false;

export default {
  name: 'Lazar',
  components: {
    Project
  },
  data: function(){
    return {links, images}
  }
}
</script>

<style>
  
</style>
