<script setup>
import Project from "./Project.vue"

const links = [
  {url: "https://lazar.social", text: "lazar.social"},
  {url: "https://lazardotsocial.tumblr.com/", text: "The lazar official tumblr", comment: "essays about and inspiration for lazar."},
  {url: "https://twitter.com/lazardotsocial", text: "The lazar official twitter", comment: "news and announcements for lazar."},
];
</script>

<template>
  <Project 
    header="lazar.social" 
    subheader="A series of experimental social media networks."
    v-bind:links="links"
  >
    <div>
      Lazar dot social is an ongoing project about social media design. Each generation of lazar consists of a temporary social network with some unique, experimental, or ridiculous features. With Lazar I'm trying to explore what's possible for social networks, to look beyond the currently dominant models and get a glimpse of what could be.
    </div>
    <div>
      <h3>1st Generation: Reacts (Aug 3rd - Aug 6th, 2021)</h3>
      <div>
        Users can only react - no posts, only reactions and reactions to reactions. Includes eight unique reactions: happy, sad, neutral, crab, glacier, microphone, obelisk and shield.
      </div>
      <div>
        <img src="/images/internet/lazar1_5.png" title="A slide for the G1 Lazar pitch deck"/>
        <img src="/images/internet/lazar1_1.png" title="A 4 deep reaction chain" />
        <img src="/images/internet/lazar1_3.png" title="The full set of reactions" />
        <img src="/images/internet/lazar1_2.png" title="A very deep reaction chain" />
      </div>
    </div>
    <div>
      <h3>2nd Generation: MinMax (Sep 3rd - Sep 6th, 2021)</h3>
      <div>
        Posts must be below a maximum character length and above a mininum character length. These limits would change every hour, including periods where the maximum exceeded the minimum, preventing posting all together.
      </div>
      <div>
        <img src="/images/internet/lazar2_4.png" title="A slide from the g2 Lazar pitch deck"/>
        <img src="/images/internet/lazar2_1.png" title="The layout of the g2 site"/>
        <img src="/images/internet/lazar2_2.png" title="An example of some posts"/>
        <img src="/images/internet/lazar2_3.png" title="Close up on the lexical space graph"/>
      </div>
    </div>
    <div>
      <h3>3rd Generation: Temperature (Oct 4th, 2021)</h3>
      <div>
        Posts are sorted based on how close they are to a secret topic, with a prize for whichever user guessed the topic.
      </div>
      <div>
        <img src="/images/internet/lazar3_1.png" title="The g3 lazar site, show the best post" />
        <img src="/images/internet/lazar3_2.png" title="The g3 lazar site, show the best post" />
        <img src="/images/internet/trophy.png" title="The trophy for the winner of Lazar G3" />
      </div>
    </div>
    <div>
      <h3>4rd Generation: Topics (Jan 29th - Feb 1st, 2022)</h3>
      <div>
        Every hour a random topic is selected and only posts judged sufficiently on-topic are displayed.
      </div>
      <div>
        <img src="/images/internet/lazar4_2.png" title="The layout of lazar gen 4" />
        <img src="/images/internet/lazar4_1.jpeg" title="A topic and relevance threshold" />
      </div>
    </div>
    <div>
      <h3>5th Generation: Rotation (July 17th - July 23rd, 2022)</h3>
      <div>
        Users are given full control over their posts background color, rotation, and positioning on the page. <a href="/lazar/LA2AR.html">View the state of the site at time of close here</a>. You can read an in-depth essay on gen 5 on <a href="https://at.tumblr.com/lazardotsocial/lazar-dot-social-gen-5-rotate/yn45b9h754e7">the lazar tumblr</a>.
      </div>
      <div>
        <img src="/images/internet/lazar5_1.png" title="The g5 lazar site" />
        <img src="/images/internet/lazar5_3.png" title="Another image of the g5 lazar site" />
        <img src="/images/internet/lazar5_2.png" title="Some advice on how to post, rendered completely illegible" />
      </div>
    </div>
    <div>
      <h3>6th Generation: Ply and Reply (October 9th - October 15th, 2022)</h3>
      <div>
        Users can "ply" posts, making an older post a reply of their new post. This allows conversations to move both up and down and for disparate threads to be linked together. Lazar gen 6 also featured the complete scripts of Macbeth and the Tempest, converted into a social media feed. You can read an in-depth essay on gen 6 on <a href="https://at.tumblr.com/lazardotsocial/lazar-gen-6-plies-and-replies/k2mgxb2n6wit">the lazar tumblr</a>.
      </div>
      <div>
        <img src="/images/internet/lazar6_3.png" title="An exchange on lazar between ORCHID_MAID and STAGE DIRECTIONS" />
        <img src="/images/internet/lazar6_2.png" title="The posts of the stage directions user" />
        <img src="/images/internet/lazar6_4.png" title="A slide from the lazar gen 6 introduction, depicting two visual metaphors for plies and replies" />
      </div>
    </div>
    <div>
      <h3>7th Generation: Variance (June 17 - July 1st 2024)</h3>
      <div>
        Posts can only be made by editing existing posts, with a limit of seven changes allowed per post. The total number of changes and the distance between the original, root posts and the most recent posts were tracked and displayed. Gen 7 also included limited ActivityPub integration - the account @lazar@lazar.social could be followed to receive a feed of all posts. More information on <a href="https://www.tumblr.com/lazardotsocial/753643246470758400/lazar-gen-7-variance">the lazar tumblr</a>.
      </div>
      <div>
        <img src="/images/internet/lazar7_1.png" title="The method of displaying text diffs while making a new post" />
        <img src="/images/internet/lazar7_2.png" title="The method of displaying text diffs while making a new post" />
        <img src="/images/internet/lazar7_3.png" title="The method of displaying text diffs while making a new post" />
        <img src="/images/internet/lazar7_4.png" title="The lazar firehouse account on Mastodon" />
      </div>
    </div>
  </project>
</template>

<style>
  
</style>
