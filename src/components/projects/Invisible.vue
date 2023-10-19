<template>
  <Project 
    header="Invisible Networks" 
    subheader="Pitch decks and epistolaries for fictional social networks"
    v-bind:links="links"
    v-bind:images="images"
  >
    <div>
      Every year <a href="https://twitter.com/ctrlcreep/">@ctrlcreep</a> does a microfiction event called Invisible Networks, with a set of prompts for fictional social networks. I've participated for the past 3 years and what I wrote is gathered here.
    </div>
    <details>
      <summary>Long Term Engagement Strategies: Invisible Networks 2021</summary>
      <InvisibleDetails title="Tiling Conversation Space" :images="[
        {url: '2021/Invisible Networks.png', title: ''},
        {url: '2021/Invisible Networks(1).png', title: 'one'},
        {url: '/2021/Invisible Networks(2).png', title: 'two'}
      ]">
        <div class="transcript">
          Traditional Comments are 0.5 Dimensional<br>
          (An image showing a timeline of comments)
        </div>
        <div class="transcript">
          Introducing Additional Dimensions Opens Up New Conversational Opportunities<br>
          (An image showing a 2d grid of comments, spreading out in different directions)<br>
          Users can communicate nuance through the positioning of their comments
        </div>
        <div class="transcript">
          No Reason to Stop at 2 Dimensions<br>
          Each additional dimension introduces new extra-textual cues for users to communicate with.<br>

          (A diagram displaying an array of dimensions. Are they labeled "Futured Focused -- Past Focused", "Series -- Joking", "True -- False", "Higher Status -- Lower Status", "Helpful -- Hostile", "Many People -- One Person", "Informed/Researched -- Uninformed/Intuitive", "Advice -- Sympathy". The diagram is labeled "Basic set of 8-dimensional conversational axes")<br>

          <strong>Benefits</strong><br>
          <ul>
            <li>Leverages human social cognition to develop an intuitive understand of higher dimensions</li>
            <li>Deeply incomprehensible to outsiders - attractive to children and teens</li>
            <li>Enables types of communication previously thought impossible</li>
          </ul>
        </div>
      </InvisibleDetails>
      <InvisibleDetails title="User Genesis" :images="[
        {url: '2021/genesis12.png', title: ''},
        {url: '2021/genesis3.png', title: 'one'},
        {url: '2021/genesis2.png', title: 'two'},
        {url: '2021/genesis1.png', title: 'three'},
      ]">
        PROBLEM: User growth cannot be sustained
        The rate of user growth will eventually run into certain fundamental limits, even with improvements to recruitment and retention.

        SOLUTION: Make More Users

        PHASE 1: Increased Access
        2021 Q2 - 2024 Q3   Investment in broadband and mobile infrastructure
        2021 Q4 - 2026 Q1   “Free Basics” program in emerging markets
        2023 Q2 - 2024 Q2   Acquisition of last mile network infrastructure
        2021 Q2 - 2030 Q1   Undersea cable expansions
        2023 Q3 - 2030 Q2   Project Loon
        2025 Q1 - 2030 Q1   Expansion of orbital infrastructure

        PHASE 2: User Genesis
        2026 Q3 - 2028 Q4   Roll-out of mandatory gene biometric authorization
        2025 Q1 - 2030 Q3   Bio-printer R&D 
        2029 Q2 - 2035 Q1   Minimum Viable Persons R&D
        2032 Q4 - 2050 Q2   Converting lunar surface into extended user dorms
        2045 Q3 - 2060 Q1   User Manufacturing and Fast Growth
        2030 Q1 - 2060 Q1   Crowd sourcing of new user extended orientation

        PHASE 3: Procedural User Generation
        2060 Q3 - 2062 Q4   Digitization of existing user base
        2050 Q2 - 2104 Q3   Conversion of remaining solar system into server space
        2061 Q1 - 2070 Q3   Remixing of existing user weights
        2064 Q3 - 2081 Q1   Use of evolutionary algorithms to create new user profiles (Project NToG)
        2081 Q1 - 2234 Q3   Switch to brute force generation
        2234 Q3             Estimated exhaustion of user combinatorial space
        2100 Q2 - ongoing   Launching deep space Von Neumann probes
      </InvisibleDetails>
      <InvisibleDetails title="Non-Fungible Temptations" :images="[
        {url: '2021/Temptations1.png', title: ''},
        {url: '2021/Temptations2.png', title: ''},
        {url: '2021/Temptations3.png', title: ''},
      ]"/>
      <InvisibleDetails title="Mindvirus Field Hospital" :images="[
        {url: '2021/hospital.png', title: ''},
        {url: '2021/hospital2.png', title: ''},
        {url: '2021/hospital3.png', title: ''},
        {url: '2021/hospital4.png', title: ''},
      ]"/>
      <InvisibleDetails title="Slow-motion Enmity" :images="[
        {url: '2021/rival.png', title: ''},
        {url: '2021/rival2.png', title: ''},
        {url: '2021/rival3.png', title: ''},
        {url: '2021/rival4.png', title: ''},
      ]"/>
      <InvisibleDetails title="Pair Woegramming" :images="[
        {url: '2021/pair.png', title: ''},
        {url: '2021/pair2.png', title: ''},
        {url: '2021/pair3.png', title: ''},
        {url: '2021/pair4.png', title: ''},
      ]"/>
      <InvisibleDetails title="Verification by Fire" :images="[
        {url: '2021/verification1.png', title: ''},
        {url: '2021/verification2.png', title: ''},
        {url: '2021/verification3.png', title: ''},
        {url: '2021/verification4.png', title: ''},
      ]"/>
      <InvisibleDetails title="Luminous Cave" :images="[
        {url: '2021/Cave1.png', title: ''},
        {url: '2021/Cave2.png', title: ''},
        {url: '2021/Cave3.png', title: ''},
        {url: '2021/Cave4.png', title: ''},
      ]"/>
      <InvisibleDetails title="Tamagotchi Husbandry" :images="[
        {url: '2021/monster1.png', title: ''},
        {url: '2021/monster2.png', title: ''},
        {url: '2021/monster3.png', title: ''},
      ]"/>
      <InvisibleDetails title="E-Pangaea" :images="[
        {url: '2021/toomany1.png', title: ''},
        {url: '2021/toomany2.png', title: ''},
        {url: '2021/toomany3.png', title: ''},
        {url: '2021/toomany4.png', title: ''},
      ]"/>
      <InvisibleDetails title="Mood-sniffing Fungus" :images="[
        {url: '2021/fungus1.png', title: ''},
        {url: '2021/fungus2.png', title: ''},
        {url: '2021/fungus3.png', title: ''},
        {url: '2021/fungus4.png', title: ''},
      ]"/>
      <InvisibleDetails title="Pop-up Book Society" :images="[
        {url: '2021/popup.png', title: ''},
        {url: '2021/popup2.png', title: ''},
        {url: '2021/popup3.png', title: ''},
        {url: '2021/popup4.png', title: ''},
      ]"/>
      <InvisibleDetails title="Metadating" :images="[
        {url: '2021/phantom1.png', title: ''},
        {url: '2021/phantom2.png', title: ''},
        {url: '2021/phantom3.png', title: ''},
      ]"/>
      <InvisibleDetails title="Communication as Memory" :images="[
        {url: '2021/memorial1.png', title: ''},
        {url: '2021/memorial2.png', title: ''},
        {url: '2021/memorial3.png', title: ''},
        {url: '2021/memorial4.png', title: ''},
      ]"/>
    </details>
    <details>
      <summary>Emerging Trends in Networked Engagement: Invisible Networks 2022</summary>
      <InvisibleDetails title="Slime Computation" :images="[
        {url: '2022/Slime_1.png', title: ''},
        {url: '2022/Slime_2.png', title: ''},
        {url: '2022/Slime_3.png', title: ''},
      ]"/>
      <InvisibleDetails title="Clippy’s Dreamtime" :images="[
        {url: '2022/Dreamtime1.png', title: ''},
        {url: '2022/Dreamtime2.png', title: ''},
        {url: '2022/Dreamtime3.png', title: ''},
        {url: '2022/Dreamtime4.png', title: ''},
      ]"/>
      <InvisibleDetails title="Psyche-Sort" :images="[
        {url: '2022/Sort_1.png', title: ''},
        {url: '2022/Sort_2.png', title: ''},
        {url: '2022/Sort_3.png', title: ''},
        {url: '2022/Sort_4.png', title: ''},
      ]"/>
      <InvisibleDetails title="Goblin Marketplace" :images="[
        {url: '2022/Market_1.png', title: ''},
        {url: '2022/Market_2.png', title: ''},
        {url: '2022/Market_3.png', title: ''},
        {url: '2022/Market_4.png', title: ''},
      ]"/>
      <InvisibleDetails title="Kafka’s Metaverse" :images="[
        {url: '2022/Meta_1.png', title: ''},
        {url: '2022/Meta_2.png', title: ''},
        {url: '2022/Meta_3.png', title: ''},
        {url: '2022/Meta_4.png', title: ''},
      ]"/>
      <InvisibleDetails title="Composite Memory Palace" :images="[
        {url: '2022/palace_1.png', title: ''},
        {url: '2022/palace_2.png', title: ''},
        {url: '2022/palace_3.png', title: ''},
        {url: '2022/palace_4.png', title: ''},
      ]"/>
      <InvisibleDetails title="Witch Hunter, Witch Gatherer" :images="[
        {url: '2022/witch_1.png', title: ''},
        {url: '2022/witch_2.png', title: ''},
        {url: '2022/witch_3.png', title: ''},
      ]"/>
      <InvisibleDetails title="Onion-based Design Framework" :images="[
        {url: '2022/Onion_1.png', title: ''},
        {url: '2022/Onion_2.png', title: ''},
        {url: '2022/Onion_3.png', title: ''},
      ]"/>
      <InvisibleDetails title="Keyboards in Unusual Places (+ Approval Miasma)" :images="[
        {url: '2022/Swamp_1.png', title: ''},
        {url: '2022/Swamp_2.png', title: ''},
        {url: '2022/Swamp_3.png', title: ''},
      ]"/>
      <InvisibleDetails title="Swordle" :images="[
        {url: '2022/Sword_1.png', title: ''},
        {url: '2022/Sword_2.png', title: ''},
        {url: '2022/Sword_3.png', title: ''},
      ]"/>
      <InvisibleDetails title="Friendweb" :images="[
        {url: '2022/net_1.png', title: ''},
        {url: '2022/Net_2.png', title: ''},
        {url: '2022/Net_3.png', title: ''},
        {url: '2022/Net_4.png', title: ''},
      ]"/>
      <InvisibleDetails title="Unskippable 30 Hour Advertisement" :images="[
        {url: '2022/Ad_1.png', title: ''},
        {url: '2022/Ad_2.png', title: ''},
        {url: '2022/Ad_3.png', title: ''},
        {url: '2022/Ad_4.png', title: ''},
      ]"/>
      <InvisibleDetails title="Online -> Oncube" :images="[
        {url: '2022/Cube_1.png', title: ''},
        {url: '2022/Cube_2.png', title: ''},
        {url: '2022/Cube_3.png', title: ''},
        {url: '2022/Cube_4.png', title: ''},
      ]"/>
      <InvisibleDetails title="Machine Yearning (+ Tamagotchi Soul)" :images="[
        {url: '2022/yearning_1.png', title: ''},
        {url: '2022/Yearning_2.png', title: ''},
        {url: '2022/Yearning_3.png', title: ''},
        {url: '2022/Yearning_4.png', title: ''},
      ]"/>
      <InvisibleDetails title="At the End of the Infinite Feed (+ 00mscrolling)" :images="[
        {url: '2022/scroll_1.png', title: ''},
        {url: '2022/scroll_2.png', title: ''},
        {url: '2022/scroll_3.png', title: ''},
        {url: '2022/scroll_4.png', title: ''},
      ]"/>
    </details>
    <details>
      <summary>Zip Zap Zoop: Invisible Networks 2023</summary>
      <InvisibleDetails title="A Machine in the Crowd" :images="[
        {url: '2023/crowd.png', title: ''},
      ]"/>
      <InvisibleDetails title="Wikinomicon" :images="[
        {url: '2023/wiki_1.png', title: ''},
        {url: '2023/wiki_2.png', title: ''},
        {url: '2023/wiki_3.png', title: ''},
      ]"/>
      <InvisibleDetails title="Haunted Hive Mind" :images="[
        {url: '2023/bees1.png', title: ''},
        {url: '2023/bees2.png', title: ''},
        {url: '2023/bees3.png', title: ''},
      ]"/>
      <InvisibleDetails title="Forest in Computer" :images="[
        {url: '2023/forest1.png', title: ''},
        {url: '2023/forest2.png', title: ''},
        {url: '2023/forest3.png', title: ''},
        {url: '2023/forest4.gif', title: ''},
      ]"/>
      <InvisibleDetails title="8-Bit Warmth" :images="[
        {url: '2023/8bit_1.png', title: ''},
        {url: '2023/8bit_2.png', title: ''},
        {url: '2023/8bit_3.png', title: ''},
        {url: '2023/8bit_4.png', title: ''},
      ]"/>
      <InvisibleDetails title="MUP, Multi User Paradise" :images="[
        {url: '2023/parade_1.png', title: ''},
        {url: '2023/paradise_2.png', title: ''},
        {url: '2023/paradise_3.png', title: ''},
        {url: '2023/paradise_4.png', title: ''},
      ]"/>
      <InvisibleDetails title="Anemonymity" :images="[
        {url: '2023/anonymy_1.png', title: ''},
        {url: '2023/anonymy_2.png', title: ''},
      ]"/>
      <InvisibleDetails title="Two Factor Divination" :images="[
        {url: '2023/two_factor_1.png', title: ''},
        {url: '2023/two_factor_2.png', title: ''},
        {url: '2023/two_factor_3.png', title: ''},
        {url: '2023/two_factor_4.png', title: ''},
      ]"/>
      <InvisibleDetails title="Mus Musculus Binarius" :images="[
        {url: '2023/mouse1.png', title: ''},
        {url: '2023/mouse2.png', title: ''},
        {url: '2023/mouse3.png', title: ''},
      ]"/>
      <InvisibleDetails title="Memory Emulator" :images="[
        {url: '2023/memory_1.png', title: ''},
        {url: '2023/memory_2.png', title: ''},
      ]"/>
      <InvisibleDetails title="Snail Dream Mail" :images="[
        {url: '2023/mail_1.png', title: ''},
        {url: '2023/mail_2.png', title: ''},
        {url: '2023/mail_3.png', title: ''},
        {url: '2023/mail_4.png', title: ''},
      ]"/>
      <InvisibleDetails title="Emojinetics" :images="[
        {url: '2023/emoji1.png', title: ''},
        {url: '2023/emoji2.png', title: ''},
        {url: '2023/emoji3.png', title: ''},
      ]"/>
      <InvisibleDetails title="The Old Roman Databases" :images="[
        {url: '2023/roman_1.png', title: ''},
        {url: '2023/roman_2.png', title: ''},
        {url: '2023/roman_3.png', title: ''},
        {url: '2023/roman_4.png', title: ''},
      ]"/>
      <InvisibleDetails title="AI Death Poem" :images="[
        {url: '2023/poem1.png', title: ''},
        {url: '2023/poem2.png', title: ''},
      ]"/>
    </details>
  </project>
</template>

<script>
import Project from "./Project.vue"
import InvisibleDetails from "../InvisibleDetails.vue"

var links = [
  {url: "https://akirchner.itch.io/in-pursuit-of-long-term-engagement", text: "The collected posts from 2021"},
  {url: "https://akirchner.itch.io/emerging-trends-in-networked-engagement", text: "The collected posts from 2021"},
]

var images = false;

export default {
  name: 'ObjectGet',
  components: {
    Project,
    InvisibleDetails,
  },
  data: function(){
    return {links, images}
  }
}
</script>

<style>
  details {
    margin-left: 30px;
  }

  summary {
    margin-left: -10px;
    padding: 5px;
  }

  .transcript {
    margin-bottom: 15px;
  }
</style>
