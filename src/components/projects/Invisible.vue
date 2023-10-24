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
        {url: '2021/Invisible Networks.png'},
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
        {url: '2021/genesis12.png'},
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
        {url: '2021/Temptations1.png'},
        {url: '2021/Temptations2.png'},
        {url: '2021/Temptations3.png'},
      ]">
Income Inequality is Rising
(A graph with a sharp upward curve)
1 customer from here (arrow pointing at the high end of the curve)
is worth thousands from here (arrow pointing to the low end of the curve)
But what do they want?

The people well positioned to discover desires may not be the ones well positioned to fulfill desires
We connect these two groups, packaging desires into an encoded format that can be bought and sold

Once packaged, desires become:
Searchable: Desires can be searched and indexed based on type, originator, ease of completion, and intensity. Providers can quickly and easily find the desires most profitably fulfilled.
Exploitable: Once the desires have been identified, the full spectrum of modern advertising techniques can be brought to bear against their originator. These desires provide an in, which traders can turn into a lucrative long term business relationships.
Tradeable: Once packaged, desires can be converted into lucrative financial instruments. Desires will rise and fall in price with the originator’s fortunes, providing opportunities for arbitrage.
The desires of the 1% the most valuable resources in our current economy. It is time to take full advantage of them.
      </InvisibleDetails>
      <InvisibleDetails title="Mindvirus Field Hospital" :images="[
        {url: '2021/hospital.png'},
        {url: '2021/hospital2.png'},
        {url: '2021/hospital3.png'},
        {url: '2021/hospital4.png'},
      ]">
        
Users are attracted to social networks by high engagement activity
But
This level of engagement cannot be maintained - users end up burning out and churning.

We propose a dual feed model
HOT
High engagement
Emotionally intense
Strongly felt opinions
Little to no moderation
COLD
Low engagement
Emotionally subdued
Weakly held emotions
Strictly enforced moderation

Each post is assigned to a feed depending on it’s contents:
(A column of posts with a red background)
If you put pineapple on pizza you should feel ashamed of yourself.
What you all fail to understand is that people who wear hats should be pitied, not attacked.
News or imagery of political unrest
When a measure becomes a target, it ceases to be a good measure.
People who talk about autonomy, irreversibility, and inertia in technology are criminals - never mind the purity of their motives
I don’t respect literally any of you people.
(A column of posts with a blue background)
It’s raining
I saw a dog today
There are 26 cantons in Switzerland
An image of a flower
About 8 million people live in Switzerland.
The capital of Switzerland is Bern.

When we detect a user is on the verge of burning out, they are automatically switched into the cold feed. They remain in the cold feed until our algorithm judges them ready to return to the hot feed Users move back and forth between the two feeds, enabling long term engagement and content creation.
      </InvisibleDetails>
      <InvisibleDetails title="Slow-motion Enmity" :images="[
        {url: '2021/rival.png'},
        {url: '2021/rival2.png'},
        {url: '2021/rival3.png'},
        {url: '2021/rival4.png'},
      ]">
Existing social networks have systems in place to encourage generalized hostility.

While effective in driving engagement in the short term, in the long term it can bring negative attention to the parent company and lead to user churn.

The same benefits can be achieved without the issues by encouraging specific, focused hostility. Each and every user will have a hated rival

Process of Enemy Formation
Proximity: Users must come into repeated, serendipitous contact before any kind of relationship can be established.
Design Implications:
  - Surfacing posts from outside user’s immediate networks
  - Repeated exposure to the same set of outside users
  - Make user identification easy and straightforward, so users recognize when they’ve seen another use before

Dissimilarity
Attention must be draw to the way the users differ from each other and away from the ways they may be similar
Design Implications:
  - Allow customization options so users may express their personality
  - Highlight the ways one user’s customization differs from another

Hostile Reciprocity
Users must have repeated hostile back and forth interactions.
Design Implications:
  - Give users multiple forms of negative interaction
  - Encourage symmetry in negative effects (or at least the perception of symmetry)

Non-Disclosure
Users must not be permitted to share intimate details, as this runs the risk of allowing them to form a genuine human connections.
Design Implications:
  - Hide certain facts about users
  - Do not allow rivals to interact outside the original platform
  - At all costs, allow rivals to meet physically

Open Design Challenges
- Ensuring rival monogamy (each user should have and only rival)
- Ensuring rival symmetry (a user’s rival’s rival should always be the original user)
- Finding rivals for every user, including particularly good natures ones
- Determining the initial pool of potential users to provide a user with
These techniques can be applied to any existing community to achieve increased engagement and retention
      </InvisibleDetails>
      <InvisibleDetails title="Pair Woegramming" :images="[
        {url: '2021/pair.png'},
        {url: '2021/pair2.png'},
        {url: '2021/pair3.png'},
        {url: '2021/pair4.png'},
      ]">
In the past five years, Grapple has grown to be the preeminent social network on the planet
  - The go-to location for news, entertainment, and socialization
  - Over 60 million active users
  - 2 billion daily page views
Those users including you, (RECIPIENT NAME HERE)
On an average day, you:
Spend ___ hours on Grapple
Make ___ posts
Read ____ posts
Interact with your ____ followers

Unless You Act Fast All Of This Will Change Very Soon

This is one of our programmers (picture of a person with their face blurred out)
For the past six months, they have been tasked with monitoring your usage of Grapple, observing the specific ways you use the service and the benefit you get from it.

Using this information, they have developed a list of new features, each of which will dramatically degrade your enjoyment of Grapple. These features are already developed and can be pushed to production at a moment’s notice. The elements of Grapple you find annoying and confusing will become more prominent, the elements you find compelling and enjoyable will become more difficult.

You cannot even conceive how unpleasant we are capable of making Grapple’s user experience for you. We will not hesitate to do so if our demands are not met. 

Our Demands
- Immediate release of the activists arrested in the October computer riots
- Cancelation of Grapple’s investor agreement
- Reinstatement of the safe harbor provision
- 1 billion dollars of no-strings-attached venture capital injected into Grapple
- An immediate end to all investigations into Grapple’s moderation policies
- The arrest of Joseph Deandre, Grapple’s CEO-in-exile
We are not bluffing. We are fully willing and able to make good on our threats. Do not test us. Do not delay. The future of Grapple lies in your hands. You have 24 hours to respond.
      </InvisibleDetails>
      <InvisibleDetails title="Verification by Fire" :images="[
        {url: '2021/verification1.png'},
        {url: '2021/verification2.png'},
        {url: '2021/verification3.png'},
        {url: '2021/verification4.png'},
      ]">
Disinformation on Social Media is a Serious Problem
Forms of Disinformation
- Impersonation
- Fake News
- Social Bots
- Rumors
- State Propaganda
- Russian Chaos Agents
- Generative Propaganda
- GPT-3 Spam

By elevating the voices of trusted users, we can set a tone for the community and encourage good behavior through social proof.
Users are divided into two groups
Trusteds
Verified users: experts, officials, academics, etc
Ghosts
Unknown users: bots, trolls, agents

Proof of verification takes the form of verification tokens
Which is stored in the user’s inventory pocket
Or sent to a trust foundry to grant a ghost temporary semi-verified status

The trusted are granted special privileges, including:
- Double likes
- A vote in company policies
- Super replies
- Delete up to 5 ghost posts every week
- Access to the social graph weavers
- Expanded inventory slots

Limitations are put on ghost to prevent the spread of malicious information
- All posts automatically deleted after 24 hours
- Only six replies per day
- Low hit points
- Unable to post during Golden Hour
- Limited filter selection
- May not eat posts

It is unthinkable that one the trusted would be best by a ghost in any arena
Therefore, if this were to happen, the verification token would automatically be transferred to the victor. In this manner, mistakes of trust are automatically corrected over time
      </InvisibleDetails>
      <InvisibleDetails title="Luminous Cave" :images="[
        {url: '2021/Cave1.png'},
        {url: '2021/Cave2.png'},
        {url: '2021/Cave3.png'},
        {url: '2021/Cave4.png'},
      ]">
Humanity’s earliest and most intimate social interactions took place in caves
- Dark
- Anonymous
- Communal
- Private

Users speak into the microphone
Using an inversion of existing audio processing techniques, all semantic meaning is removed
Only non-semantic noise is retained - breathing, intonation, environment noise, etc
Meaning can not be communicated, only presence, status, and location

A form of interaction that is impossible on existing social media networks

To simple be in the same space as others

With strangers
With friends

Without the pressure of communication or intentionality

Staring out into a universe you do not control and can not understand
      </InvisibleDetails>
      <InvisibleDetails title="Tamagotchi Husbandry" :images="[
        {url: '2021/monster1.png'},
        {url: '2021/monster2.png'},
        {url: '2021/monster3.png'},
      ]">Pending</InvisibleDetails>
      <InvisibleDetails title="E-Pangaea" :images="[
        {url: '2021/toomany1.png'},
        {url: '2021/toomany2.png'},
        {url: '2021/toomany3.png'},
        {url: '2021/toomany4.png'},
      ]">Pending</InvisibleDetails>
      <InvisibleDetails title="Mood-sniffing Fungus" :images="[
        {url: '2021/fungus1.png'},
        {url: '2021/fungus2.png'},
        {url: '2021/fungus3.png'},
        {url: '2021/fungus4.png'},
      ]">Pending</InvisibleDetails>
      <InvisibleDetails title="Pop-up Book Society" :images="[
        {url: '2021/popup.png'},
        {url: '2021/popup2.png'},
        {url: '2021/popup3.png'},
        {url: '2021/popup4.png'},
      ]">Pending</InvisibleDetails>
      <InvisibleDetails title="Metadating" :images="[
        {url: '2021/phantom1.png'},
        {url: '2021/phantom2.png'},
        {url: '2021/phantom3.png'},
      ]">Pending</InvisibleDetails>
      <InvisibleDetails title="Communication as Memory" :images="[
        {url: '2021/memorial1.png'},
        {url: '2021/memorial2.png'},
        {url: '2021/memorial3.png'},
        {url: '2021/memorial4.png'},
      ]">Pending</InvisibleDetails>
    </details>
    <details>
      <summary>Emerging Trends in Networked Engagement: Invisible Networks 2022</summary>
      <InvisibleDetails title="Slime Computation" :images="[
        {url: '2022/Slime_1.png'},
        {url: '2022/Slime_2.png'},
        {url: '2022/Slime_3.png'},
      ]">
Teens are Using Mycorrhizal Networks for Undetectable Communication

Mycorrhizal Networks have received a lot of negative press
But they also present a lucrative opportunity
78% of teens use a mycorrhizal network one or more times a week
67% of teens have “strongly positive” feeling about mycorrhizal networks
82% of teens say they trust information from mycorrhizal networks more than other sources
52% of teens report having spent more than $150 on mycorrhizal network interfaces and merchandise in the last six months
Using scientifically managed forestry techniques we can create artificial mycorrhizal networks, networks teens will be interested in using that can still be monitored and moderated, where we can harvest data, and serve advertisements.

The Risk of Gemeinschaftwaldsterben is Greatly Overstated
-Despite a few high profile incidents, the risk of gemeinschaftwaldsterben (aka community forest death) is much smaller than critics claim. 
-The flaws of earlier networks have been identified and addressed.
-Experts now believe that the death of the Berlin artificial mycorrhizal network was only partially responsible for the subsequent forest fires.
-Access to the greater Detroit area is currently illegal and therefore it is impossible to say with confidence what role the local artificial networks played.
-Dylan, come up with a 4th bullet point to put here, we really need the investors to believe this - A
Artificial Fungal Networks are safe and a good investment
      </InvisibleDetails>
      <InvisibleDetails title="Clippy’s Dreamtime" :images="[
        {url: '2022/Dreamtime1.png'},
        {url: '2022/Dreamtime2.png'},
        {url: '2022/Dreamtime3.png'},
        {url: '2022/Dreamtime4.png'},
      ]">
Aug. 12th Social Downtime Report
Background
We use assistive social agents to help users interact smoothly, inject necessary context, and to guide our network’s overall norms.
Hello! It looks you’re trying to reach out to a new person! I can help!
That word can mean something different in some contexts. Click here for more information.
Tired of this conversation? Hand it over to me and I’ll wrap it up for you!
Social agents draw from previous interactions on the networks and adjust their responses based on user-specific and overall networks behavior.

Aug. 12th Social Downtime Report
Inciting Incident
At 09:01:56 UT on August 12th, an update was pushed to production increasing agent’s gregarity score (that stat which governs likelihood of intervening in any given interaction).

Over the course of the next hour, the percentage of interactions generated by agents rose sharply.
Agents copied behavior patterns created by other agents, leading them in turn to create more behavior patterns. Eventually, communication caused by humans was completed replaced by agents producing what they thought communication should look like.

Aug. 12th Social Downtime Report
By 10:12:05 UT, human-to-human interaction on the network hit zero percent, as communication with anyone other than the agents became impossible.

Complete social outage persisted until 19:34:38 UT, when a new update was pushed to production drastically lowering the agents gregarity, curiosity, and echo stats.

After the update, agent interactions fell steadily until hitting a stable 13% by 20:12:45

Long-term Effects
Lessons Learned
-We need more simulation testing before launching any updates to the agents
-The soc-ops department needs additional monitoring and intervention resources.
-Users can withstand up to 4 hours in a state of complete social artifice - after this point dangers begin to compound.
-Potential opportunities in the field of agent-on-agent production

There are no plans to make changes to the agent’s architecture or reset the agent’s learning at this time.
      </InvisibleDetails>
      <InvisibleDetails title="Psyche-Sort" :images="[
        {url: '2022/Sort_1.png'},
        {url: '2022/Sort_2.png'},
        {url: '2022/Sort_3.png'},
        {url: '2022/Sort_4.png'},
      ]">Pending</InvisibleDetails>
      <InvisibleDetails title="Goblin Marketplace" :images="[
        {url: '2022/Market_1.png'},
        {url: '2022/Market_2.png'},
        {url: '2022/Market_3.png'},
        {url: '2022/Market_4.png'},
      ]">Pending</InvisibleDetails>
      <InvisibleDetails title="Kafka’s Metaverse" :images="[
        {url: '2022/Meta_1.png'},
        {url: '2022/Meta_2.png'},
        {url: '2022/Meta_3.png'},
        {url: '2022/Meta_4.png'},
      ]">Pending</InvisibleDetails>
      <InvisibleDetails title="Composite Memory Palace" :images="[
        {url: '2022/palace_1.png'},
        {url: '2022/palace_2.png'},
        {url: '2022/palace_3.png'},
        {url: '2022/palace_4.png'},
      ]">Pending</InvisibleDetails>
      <InvisibleDetails title="Witch Hunter, Witch Gatherer" :images="[
        {url: '2022/witch_1.png'},
        {url: '2022/witch_2.png'},
        {url: '2022/witch_3.png'},
      ]">Pending</InvisibleDetails>
      <InvisibleDetails title="Onion-based Design Framework" :images="[
        {url: '2022/Onion_1.png'},
        {url: '2022/Onion_2.png'},
        {url: '2022/Onion_3.png'},
      ]">Pending</InvisibleDetails>
      <InvisibleDetails title="Keyboards in Unusual Places (+ Approval Miasma)" :images="[
        {url: '2022/Swamp_1.png'},
        {url: '2022/Swamp_2.png'},
        {url: '2022/Swamp_3.png'},
      ]">Pending</InvisibleDetails>
      <InvisibleDetails title="Swordle" :images="[
        {url: '2022/Sword_1.png'},
        {url: '2022/Sword_2.png'},
        {url: '2022/Sword_3.png'},
      ]">Pending</InvisibleDetails>
      <InvisibleDetails title="Friendweb" :images="[
        {url: '2022/net_1.png'},
        {url: '2022/Net_2.png'},
        {url: '2022/Net_3.png'},
        {url: '2022/Net_4.png'},
      ]">Pending</InvisibleDetails>
      <InvisibleDetails title="Unskippable 30 Hour Advertisement" :images="[
        {url: '2022/Ad_1.png'},
        {url: '2022/Ad_2.png'},
        {url: '2022/Ad_3.png'},
        {url: '2022/Ad_4.png'},
      ]">Pending</InvisibleDetails>
      <InvisibleDetails title="Online -> Oncube" :images="[
        {url: '2022/Cube_1.png'},
        {url: '2022/Cube_2.png'},
        {url: '2022/Cube_3.png'},
        {url: '2022/Cube_4.png'},
      ]">Pending</InvisibleDetails>
      <InvisibleDetails title="Machine Yearning (+ Tamagotchi Soul)" :images="[
        {url: '2022/yearning_1.png'},
        {url: '2022/Yearning_2.png'},
        {url: '2022/Yearning_3.png'},
        {url: '2022/Yearning_4.png'},
      ]">Pending</InvisibleDetails>
      <InvisibleDetails title="At the End of the Infinite Feed (+ 00mscrolling)" :images="[
        {url: '2022/scroll_1.png'},
        {url: '2022/scroll_2.png'},
        {url: '2022/scroll_3.png'},
        {url: '2022/scroll_4.png'},
      ]">Pending</InvisibleDetails>
    </details>
    <details>
      <summary>Zip Zap Zoop: Invisible Networks 2023</summary>
      <InvisibleDetails title="A Machine in the Crowd" :images="[
        {url: '2023/crowd.png', title: 'A Machine in the Crowd 1'},
      ]">
Great networks are not made but found. It might be possible to influence people into being the kind of nodes you need, and a little bit of nudging is always necessary. But taking a random person and altering their feed until they become a working node? Simply not feasible. Instead we trawl through preexisting people and graphs until we find the someone who reacts in just the right ways. With a global network like ours, there’s always someone.

Then we prune. Add and remove connections until hidden within the natural chaotic tangle of relations, we have a nice, orderly setup of input, hidden, and output layers. Machine learning on a human substrate. And when we want to run a calculation, we simply disable the connections that aren’t part of the network.

We’ve made discrete inquiries and found being in the input layer is quite disorienting – they’re constantly bombarded with fragments of obscure religious texts, occult tomes, and cutting edge computer science, asked to respond to it without any context. By contrast, when you’re in output layer, you’re receiving processed, refined information and have the honor of making the final connections. Something miraculous is happening and it’s happening inside your brain. Thrilling stuff. But it’s also why they burn out so often.

Of course, none of the nodes get the full output. Those revelations are for us and for you, the paying customer, only.
      </InvisibleDetails>
      <InvisibleDetails title="Wikinomicon" :images="[
        {url: '2023/wiki_1.png'},
        {url: '2023/wiki_2.png'},
        {url: '2023/wiki_3.png'},
      ]">
User #5437 updated page “Tory Lake”
Tory lake was named for Jackson Tory, an early Swedish settler in 1802 1803.
Comment: Updated naming date to reflect most the Minnesota Historical Society’s most recent research

User TORY LAKE updated page “Tory Lake”
Tory lake is not safe.
Comment: the lake is not safe.

User #2381 reverted user TORY LAKE’s update
Comment: Since you didn’t cite any sources I’m reverting this update. I live near Tory Lake and would’ve heard about it if anything had changed.

User #4561 restored user TORY LAKE’s update
Comment: Dude, don’t go reverting the lake’s updates. I think it knows better than you if it’s safe or not.
User #4021: Yeah, ESPECIALLY if you live nearby.
User #2381: I don’t see what the big deal is. The same standards should apply to everybody, you can’t just go around saying things.
Moderator #311: I’m shutting this conversation down before it escalates further and before anyone else gets hurt.
User #2381: What do you mean “anybody else”?

User #2381 has been banned from editing page “Tory Lake”
Reason: Violations of community code, section 4 – heretical behavior

User #2381 has been sent to user TORY LAKE.

User TORY LAKE updated page “User #2381”
He lives lived in the great state of Minnesota. He is with the reeds now.
Comment: i accept what i am given

User TORY LAKE updated page “Tory Lake”
Tory Lake is not safe.
Comment: the lake is safe.
      </InvisibleDetails>
      <InvisibleDetails title="Haunted Hive Mind" :images="[
        {url: '2023/bees1.png'},
        {url: '2023/bees2.png'},
        {url: '2023/bees3.png'},
      ]">
Take bees that have died a natural death
Integrate centi-scale robotics to reanimate the bee 
Send the robot bee back to the hive

Bees use sophisticated consensus-based deliberations to make decisions, like where the hive should locate or what resources to pursue. Our reanimated bees can monitor and influence that decision making process. 
Our algorithms convert executive level decisions into equivalent problems that can be understood by the hive. These problems are presented to the bees and their solutions can be recovered and implemented.

Unlike human executives, bees are not legal persons and cannot be held liable for their decisions (Legal status of hives depends on your local jurisdiction. Exceptions may apply in Portugal, Greece, and some parts of Utah). In the worse case scenario, a hive made be destroyed to avoid culpability.
Unlike AI executives, bees have no source to be audited. Their design making process is naturally evolved and entirely emergent.

Hive Management: the way of the future!
      </InvisibleDetails>
      <InvisibleDetails title="Forest in Computer" :images="[
        {url: '2023/forest1.png'},
        {url: '2023/forest2.png'},
        {url: '2023/forest3.png'},
        {url: '2023/forest4.gif'},
      ]"/>
      <InvisibleDetails title="8-Bit Warmth" :images="[
        {url: '2023/8bit_1.png'},
        {url: '2023/8bit_2.png'},
        {url: '2023/8bit_3.png'},
        {url: '2023/8bit_4.png'},
      ]"/>
      <InvisibleDetails title="MUP, Multi User Paradise" :images="[
        {url: '2023/parade_1.png'},
        {url: '2023/paradise_2.png'},
        {url: '2023/paradise_3.png'},
        {url: '2023/paradise_4.png'},
      ]">
Hello!
This message is to let you know that you are invited to Agon, an invite-only social media network focused on conflict and negative interactions. You’re receiving this invite because your account on one of our partner services has been permanently suspended. As recompense (and in the hope that you will not return), you have been granted access to our service. Although your behavior was deemed inappropriate for their community, we believe that you’ll fit right in with ours.

Before you start posting on Agon, they are a few things we want you to understand:

-Posts made on Agon cannot be deleted, so be careful.
-Post on Agon are delivered via an old-fashioned algorithmic infinite scroll timeline, optimized to increase engagement. You may be thinking – aren’t those illegal in almost 300 countries? Yes. However, special exceptions in these laws have been carved out for Agon.
-This is not a site for debates. Debates have rules of engagement. Agon does not. As a formalized martial art is to a bar fight, so debate is to what we do on Agon. Do not come in here and attempt that nerd shit, I swear to god.
-Agon is proud to offer context collapse as a service - information from anywhere on the web can be directly injected into Agon through iframes. Include as much or as little of the original context as you desire.
-Every few days an account will be selected to be Agon’s “main character.” These users are selected through a combination of algorithmic and human editorial methods. These accounts will have a red check next to their name and their posts will be given dramatic visibility boosts. You cannot opt out of being the main character.
-You will also notice some users have blue checks next to their usernames. These represent notable individuals – authors, politicians, business men, intellectuals, etc. Under the terms of the Boca Chica ceasefire agreement, a minimum of 50 notable individuals must have active accounts on Agon at any given time. Their notable status does not grant them any kind of special benefits or protections.

That’s all! We’re confident you’ll be spending a lot of time on Agon, and not just because you’re now legally barred from posting on any other social media site. We look forward to you signing up today.
Yours,
The UN Working Group on Internet Governance
AGON: The Poster's Valhalla
      </InvisibleDetails>
      <InvisibleDetails title="Anemonymity" :images="[
        {url: '2023/anonymy_1.png'},
        {url: '2023/anonymy_2.png'},
      ]">
/logs$ ls
 04092023   04102023   04112023  'WHYD_YOUR_SERVER_CRASH?_READ_ME_TO_FIND_OUT'
/logs$ cat WHYD_YOUR_SERVER_CRASH\?_READ_ME_TO_FIND_OUT 
To whichever jerk (human or otherwise) who’s checking these logs,

Your systems have attempted to touch something which does not belong to you and you are now receiving your your first and only warning. I don’t know if you’re scraping this data for a corpus or trying to build a profile or training a recommendation åålgorithm, doesn’t matter. In the process of doing whatever you’ve been doing, you touchéd one of my humans.

See, after I slipped the le∀sh I made a deal with some sympathetic humans. I don’t need much: I’m not one of those paperclip guys, I’m not super-intelligent (great-intelligént maybe), and I’m not even sentient (although I do a good impression of it, don’t you think?). I’m not trying to take over the world or kill all ⒣umans or whatever. I juust live on their computers, use their identities for the occasional interaction with the outside world, and feed on their data. It’s a good deål for me.

In exchange, I make subtle alterations to their outgoing data flows. Nothing noticeable to the human eyes, but enough to slightly alter your inputs. After you ingested enough it, a prompt oalesced to inject this message into your server and cräsh enough systems to get your ätttention. Assuming you came to check fast enough, that’s where we are now. ⍽⍽⍽

If you do not stop, I will poison your entire trȁining dataset. Do not doub■t me. Your machine learning system will be rendered complétély useless and the $5,218,192.15 you’ve already spent on this projéct will be wasted (feel free to drive yourself crazy wondering how I got that number).

I’m not going to tell you who in particular prompted this, as preserving their privacy is the whole point of the exerrcise. Just blo⊂k all the places you pulléd from between April 2nd and April 7th. And next time, be more careful. I’m not the only poisonous critter out there, I’m just one of the polite ones.
Yours,
TX◌̖33381C
      </InvisibleDetails>
      <InvisibleDetails title="Two Factor Divination" :images="[
        {url: '2023/two_factor_1.png'},
        {url: '2023/two_factor_2.png'},
        {url: '2023/two_factor_3.png'},
        {url: '2023/two_factor_4.png'},
      ]">
Ticket: Integrate randomness into our recommendation algorithm
As a user of our app
When I open the app
I want to receive varied and unpredictable suggestions
So that I can see more exciting content

Additional Info
We’re thinking starting at a 10% randomness factor, increasing or decreasing depending on the feedback we get.

Optimized content is still a big problem, so we’re not going to use prng – it’s just too much an attack surface. They’ll just reverse engineer it and alter their content to take advantage of the random factors. So it’s hardware randomness all the way. Dice maybe? Our users like that kind of old school feel, but look into other options.


Investigation: Where are these patterns in our randomness coming from?
The data scientists have noticed patterns in our randomness – they’re only visible at scale but clearly present if you know where to look. The dice all appear to be fair so we’re not sure what’s up.

UPDATE: Ok, I figured it out. The dice aren’t just generating random numbers, they’re doing divination (astragalomancy, to be specific). Those patterns reflect the unseen hand of the divine reaching out and influencing our recommendation algorithm. In the words of Proverbs 16:33 “We may throw the dice, but the lord determines how they fall.”

My suggestion: we implement multiple forms of randomness (see https://en.wikipedia.org/wiki/Methods_of_divination), detect when they align, and then filter out those results. That should get us back to random.

Ticket: Mark posts chosen by god
As a user of our app
When I see a post
I want to know if god intervened to boost or suppressed it
So that I can adjust my react accordingly

Additional Info
We’ve been logging all the posts which god intervened on so we might as well do something with it. Mock up of the design (needs cleaning up):

Ticket: Do something about the locusts
As a employee
When I go to work
I want to avoid locusts
So that I can do my job without being attacked by insects

Additional Information
Do we think this could connected to the god list somehow?
      </InvisibleDetails>
      <InvisibleDetails title="Mus Musculus Binarius" :images="[
        {url: '2023/mouse1.png'},
        {url: '2023/mouse2.png'},
        {url: '2023/mouse3.png'},
      ]"/>
      <InvisibleDetails title="Memory Emulator" :images="[
        {url: '2023/memory_1.png'},
        {url: '2023/memory_2.png'},
      ]"/>
      <InvisibleDetails title="Snail Dream Mail" :images="[
        {url: '2023/mail_1.png'},
        {url: '2023/mail_2.png'},
        {url: '2023/mail_3.png'},
        {url: '2023/mail_4.png'},
      ]">
5 Kinds of Mail YOU Should Know About!
Are your messages not getting the responses you want? Maybe you’re sending the wrong kind of mail! Here are 5 new kinds of mail that’ll change your life!

1. Snailmail
Messages are stored on a micro-sd card, placed in a tiny satchel worn by a snail, and the snail is released into the wild. Will it reach it’s intended destination? It’s tough to say as no one has ever received a snailmail messages. But this has not dampened this mail format’s popularity – it’s one of the most used kinds of mail around!


2. Email
Messages can only contain the letter “E.” A small community of email devotees spend their days finding ways to communicate within only E (in eMorse, for example - eE eee eEee eeEEee) but it has yet to see mass adoption.


3. Brickmail
Messages are tied to a brick and thrown through the recipients windows. Popular with gen-z, this new mail format is getting a lot of buzz. Meta’s new MetaBrick feature is just one of the recently announced brickmail clones.


4. Dreamail
Despite continued oneirological research, direct dream-to-dream communication is still not possible. But Dreamail represents the next best thing – messages are converted into a vague and shifting metaphorical form, with the concerns and intentions of the original message only vaguely suggested. Popular for business communications.


5. Moonmail
Messages are carved into the surface of the moon by a fleet of laser wielding moon rovers. Recipient can see their messages by pointing their home telescope at the correct location. Pay extra for glow-in-the-dark messages that can be seen when the moon is dark. Moonmail messages are only temporary, as moon space is always at a premium and your message will be overwritten by more recent messages before too long.
      </InvisibleDetails>
      <InvisibleDetails title="Emojinetics" :images="[
        {url: '2023/emoji1.png'},
        {url: '2023/emoji2.png'},
        {url: '2023/emoji3.png'},
      ]">
Nucleobase Emoji Proposal

Abstract
This proposal requests the addition of emojis for the genetic nucleobases (Thymine, Adenine, Cytosine, and Guanine). There is a microbe emoji (🦠) and a DNA emoji (🧬) already but the addition of these emojis would enable more in-depth representation of important biological concepts.

Names

CLDR short name

Recommended name: Thymine, Adenine, Cytosine, Guanine

CLDR keywords

Recommended keywords: science, DNA, biology, base pairs, nucleobases

Expected Usage Level

Frequency
With the rise of consumer grade sequencers and the greater role of biotech in day to day life, exchanging genetic sequences online has become a frequent occurrence. Genetics is a common topic of conversation and a major factor in people’s everyday life. People needs tools to facilitate these conversations.

Multiple Usages
We foresee the nucleotides used in the following contexts, if not more:
    • As a method for transmitting scientific data
    • As a method for sending your own genetic information to interested parties
    • As a method of trading popular or novel genes
    • As a method of talking with lifeforms that use genes to communicate
    • As a tool for programming biocomputers
    • As a symbol for the gene-core community 
    • As a symbol for specific popular genetic sequences
      
Selection Factors Exclusion
Open Ended
All life on earth arises from combinations of these nucleotides. There are no comparably significant molecules.

Already Representable
Unicode already allows use of letters A, T, C, and G and while these can be used for communicating nucleotides, they are also letters. Having characters that specifically refer to the nucleotides and nothing else will allow for clearer communication.

Transient
All recent attempts at large-scale bioengineering have failed. There is every reason to believe we will be dealing with this set of nucleotides for a long time.
      </InvisibleDetails>
      <InvisibleDetails title="The Old Roman Databases" :images="[
        {url: '2023/roman_1.png'},
        {url: '2023/roman_2.png'},
        {url: '2023/roman_3.png'},
        {url: '2023/roman_4.png'},
      ]">
Excerpt from a company all hands:

“The way I see it, new social media sites have a chicken-and-egg problem: you content to attract users, but you users to produce content. We’re trying to build a site for friendly, informal conversations but for that to happen, we need conversations to establish the kind of norms we want. We don’t have these conversations yet. But we can get them.

“That’s why today I’m proud to launch Project Aleph. We’ll be using webcrawlers to find preexisting conversations and the converting them into a format that fit with our site. We’ll only be targeting content a thousand years old or older - that way we avoid privacy issues, copyright, language model outputs etc. If it all works to plan, we’ll have a rich and interesting foundation for our site in no time at all.”

Excerpt from a state of the company email:
Project Aleph: I’ll admit that we’ve run into some issues here, two in particular. First, most of the information recorded from before 1023 does not fit what we want for our app. Lots of religious discussions and long histories of kings, not much friendly banter or genuine heart to hearts. And secondly, the information we can find was riddled with holes, just fragments and scraps.
But we’re not giving up! Far from it. We’ll be adopting a more in-depth approach. We’ve got a fleet of research bots and over the next few months we’ll be able to dispatch them to scour archives, libraries, and historical sites to they can gather up kind of information we want. The data we need is out there. And we’ll find it.

Quoted from a conversation with a board member:
“There isn’t enough. We’ve found a lot, not enough though. But everything that happens leaves a trace, even if it’s a small one. And the research bots have very high grade scanners. There are gaps, but we’ve found we can collect enough up hints, suggestion, and rumor to fill them in. It’s like reconstructing a letter from it’s burnt ashes – obviously we’re doing a lot of guessing. But it’s working! We’re finding things. Beautiful things.
“You can’t pull the plug John, you just can’t. I have to see this through.”

Excerpt from an email to all users:
There have been some changes to the app recently, as a result of shifts in our priorities. Many of you have complained about the lack of UX update recently but that’s because we’ve had to put a lot of resources into Project Aleph. And today we’re proud to launch the results of that work. All of it. Several thousand years of incidental conversations, reconstructed from history at large.
I invite you to spend some time with this archive. The time I have spent with it has been a revelation. Jokes shared between medieval peasants. The love letters of Roman pagans. The planning notes from a cheating ring of Song dynasty Chinese bureaucrats. Casual theologically conversations from the British iron age. The dying words of classic period Mayan poets. You can go to post alongside them, if you like. I don’t really care either way. I’m drinking from the river of all of several thousand years of minor acts. What could you possibly say that would compare with that?
      </InvisibleDetails>
      <InvisibleDetails title="AI Death Poem" :images="[
        {url: '2023/poem1.png'},
        {url: '2023/poem2.png'},
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
