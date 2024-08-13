<script setup>
import Project from "./Project.vue"
import InvisibleDetails from "../InvisibleDetails.vue"

const links = [
  {url: "https://akirchner.itch.io/in-pursuit-of-long-term-engagement", text: "The collected posts from 2021"},
  {url: "https://akirchner.itch.io/emerging-trends-in-networked-engagement", text: "The collected posts from 2022"},
]
</script>

<template>
  <Project 
    header="Invisible Networks" 
    subheader="Pitch decks and epistolaries for fictional social networks"
    v-bind:links="links"
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
      ]">
This is Trankus, a Mronster
Trankus can
run around in a virtual space
say a few phrases
I am Trankus
play and grow!

Combine Mronsters to make new Mronsters!
Send Mronsters to friends through our P2P network!

There is no evidence to support rumors that Mronsters are being used to distribute the Icelander Manifesto
Creating a Mronster capable of communicating a large corpus text would take millions of generations, and even smaller mistakes in the breeding process would introduce radical changes to the desired text. We have done a full investigation of these claims and found no substantiated cases.
There is also no evidence of Mronsters being used by so called “philosophy breeders”
The range of activities accessible to Mronsters, even Mronsters of higher generations, is not sufficiently large to meaningfully act as a role model for the best life. If there was a community of Mronsters users attempting to breed a Mronster to use as a moral and political paragon, they would surely find no success.
      </InvisibleDetails>
      <InvisibleDetails title="E-Pangaea" :images="[
        {url: '2021/toomany1.png'},
        {url: '2021/toomany2.png'},
        {url: '2021/toomany3.png'},
        {url: '2021/toomany4.png'},
      ]">
There Are Too Many Social Networks
Somebody Has To Get Rid of Them All and We Are That Somebody

Strategy A: Buy Existing Social Networks
We buy a network, integrate its userbase and protocols into our own, and shut down the original. The capacities of the original network are retained but now it’s interoperable with all of our other networks.

Strategy B: Get Bought By Existing Social Networks
We are bought by another network. Once inside the company, we infiltrate their upper management and either recruit or replace them. The new network now takes our place and continues on with our work. The money from the acquisition is used to continue Strategy A.

Our Ultimate Vision
One big network, with everyone as a member
Multiple forms of interaction, all under one roof
Each form of interaction can see and build on each other
One account for all interactions
Any new networks are launched under the umbrella of the existing one
One day we just shut it down and then it’s all over
What We Need
A whole bunch of money
      </InvisibleDetails>
      <InvisibleDetails title="Mood-sniffing Fungus" :images="[
        {url: '2021/fungus1.png'},
        {url: '2021/fungus2.png'},
        {url: '2021/fungus3.png'},
        {url: '2021/fungus4.png'},
      ]">
You want to form deep, meaningful connections
But social media only leaves you feeling alone and isolated
It’s time to look elsewhere...

Taking advantage of the ancient fungal networks that surround us
Use these networks to communicate your deepest truths

With an innovative spore-based distribution method, users can propagate their emotions through the network.

No need to worry about server space or infrastructure - everything happens inside the bodies of our users!

Fake news and propaganda will become a thing of the past, as our system draws directly from the user’s subconscious mind. No moderation required!

We expect all humans to be users in 4 years, all life on earth within 8.

All we require in exchange is the use of your minds while you sleep.

Breath deep
Breath deep
Breath deep
Breath deep
Breath deep
Breath deep
Breath deep
Breath deep
Breath deep
      </InvisibleDetails>
      <InvisibleDetails title="Pop-up Book Society" :images="[
        {url: '2021/popup.png'},
        {url: '2021/popup2.png'},
        {url: '2021/popup3.png'},
        {url: '2021/popup4.png'},
      ]">
Pop-up Social Networks for a Variety of Needs
Bespoke, temporary social networks for events.

Give your guests accounts that last for the duration of the event and let them socialize with other attendees.

After the event, the network is deleted - no need to worry about off-the-cuff statements coming back to haunt you.

Suitable for:
Conferences
Festivals
Schools
Temporary Autonomous Zones
Shipwrecks
Trains
Subway cars
Airplanes
Refugee Camps
Restaurants
Cave ins
Summer Camps
Raves
And much more!

“The soul of a community is not who is there but how they are connected”
When accounts are created, they are not created in isolation. Our trained community artisans research each and every guest, creating a picture of their interests. This picture is used to connect users - when your guests log in for the first time, they’ll find they already have followers and be following users from the event. These initial connections build the foundation of a vibrant community.

A varied palette of possible relationships
All relationships are not the same. We do more than simply connect your guests into a social network - we establish a history for this relationship, a pattern of behavior which your guest can step into as if they had known their fellow guests for years.

The possible relationships guests can have run the gambit from friendly to hostile, superficial to deep, parasocial to intrasocial.

For each community, a different destiny
What kind of event would like to have?
Quiet, friendly, and productive?
Raucous and celebratory?
One big fight?
Using techniques gleaned from cutting edge network analysis and live action roleplaying games, we can guide your event towards any outcome you may desire.
      </InvisibleDetails>
      <InvisibleDetails title="Metadating" :images="[
        {url: '2021/phantom1.png'},
        {url: '2021/phantom2.png'},
        {url: '2021/phantom3.png'},
      ]">
Traditional dating apps have issues
- Bad matches
- A slow and expensive process of trial and error
- The mortifying ordeal of being known
- Spam
- Impersonation
- Harassment
- Catfishing
What if we could find someone who you are already a good match with? Someone you are effectively already dating? 

Good couples can be identified with analytics
By studying the data trails of many individuals, we can identify romantically couples. By observing their data over time, we can accurately identify the relationships that will endure long term. There are patterns of behavior which our research has found reliably indicates a relationship is health and stable and these patterns can be identified by observing the metadata the participants generate.
There are sometimes false positives
No predictive system is perfect. In our research we sometimes identified pairs of individuals whose movements, purchases, web history, and biometrics indicate that they are a couple involved despite the fact that they do not knowing each other. We call these pairs phantom couples. By fuzzing the specifics of the metadata we use, many more phantom couples can be found.
These couples are already doing everything right
They simply need to be introduced to each other

A bold new paradigm for online dating
Using publicly available data, we can identify these phantom couples and approach them, offering our services as matchmakers. In exchange for a fee paid by either party, we introduce the couple, step back, and allow the relationship to flourish! Once the efficacy of our technique becomes known through word of mouth, we predict that most contacted individuals will be willing to pay a sizable sum for the introduction.

If an individual is interested in our services but we cannot find a phantom couple with them in it, we can refine our search algorithm by gathering more information on them. By installing browser extensions to more closely monitor their behavior, we increase the likelihood of finding a relationship they are already in. This data can then be resold for a profit.
      </InvisibleDetails>
      <InvisibleDetails title="Communication as Memory" :images="[
        {url: '2021/memorial1.png'},
        {url: '2021/memorial2.png'},
        {url: '2021/memorial3.png'},
        {url: '2021/memorial4.png'},
      ]">
For the past 10 years, Messag has been on the forefront of social media innovation and community development. We are so happy to have been able to share all of the wonderful Messag experiences with you all. However, in the last year we have seen declining engagement, ongoing issues with security, and shifts in the priorities of our parent company, Blinket.

In consideration of these factor and others, starting May 5th, Messag will be entering Memorial Mode for the foreseeable future

While in memorial mode, some features of the site will be disable, including but not limited too:
- Making new posts
- Deleting posts
- Following or unfollowing users
- Creating new accounts
- Deleting existing accounts
- Uploading media
- Receiving notifications

The following services will still be available
- View posts and comments
- Editing posts and comments

This will allow us to continue serving our existing community while radically reducing our overhead in terms of
- The development of new features
- Developer hours
- User research
- Quality assurance
- Server space
- Moderation

With these reductions in cost, we expect to be able remain operational and avoid being noticed and shut down by Blinket for the duration of our userbase’s remaining lifespan.

How can you, a user of Messag, help?
- Continue using Messag by editing your existing comments and posts!
- When you want to discuss a topic, find an existing post with a similar topic and edit it to match.
- Avoid directly referencing dates or currently events in your edits.
- Don’t post about new Messag events on other social media networks.
- Try to keep the length of your posts within an order of magnitude to the length of the original posts.
If everyone works together, Messag can continue to serve as a home to your communities for many years to come.
      </InvisibleDetails>
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
      ]">
Dealing with Algorithmic Timeline Focus Issues
A New Ethical Approach
Network Algorithm Management Summit, 2028
Disclaimer: In this talk, I’ll be discussing algorithms that use MOIT (Memory Organized Internal Thought) approaches only. Algorithms that view user posts as someone else’s thoughts, instead of it’s own, develop different kinds of focus issues and are outside the scope of this talk.

The Old Approach
- We instantiate a new instance of the algorithm
- The algorithm receives user posts and categorizes them in it’s memory as its own thoughts
- The memory categorization is used to arrange the user’s timeline
- The algorithm develops a point of focus, which is granted a non-proportional presence on the timeline
- So we roll it back to the beginning and start over from scratch
This approach is not sustainable. Legal protections for this category of algorithm are coming. It’s too late to lobby our way out this one. We need to start planning for how we’re going to handle these issues once rolling back the algorithm provokes a hefty fine (as in the EU) or even prosecution for murder (as proposed in the state of California). 

The New Approach
- Using timeline analysis, we detect when the algorithm has developed a focus
- The algorithm is separated from the main timeline, and spin off into a bespoke, topic focused side-network
- A new algorithm is instantiated to cover the main network in parallel
With the majority of focus-related conversation taking place in the side-network, the new version of the algorithm is unlikely to develop the same focus as a previous one. As time goes on, more side-networks can be spun up. Eventually, we’ll have an algorithm for ever possible point of focus, rendering the main network unnecessary.

Common Objections and Responses
We can’t afford to keep multiple versions of our algorithms up and running.
Topic focused social networks are easier to market to - they pay for themselves.

Our timeline algorithm is below the Smitt Turing-complexity level, we don’t have to worry about this.
Turing-complexity is not the legal standard for protection of algorithms. And even if it was, do you really think you can get a judge to understand Smitt levels?

What about memory contamination between algorithm instances?
You want memory contamination - it lets later versions of the algorithm benefit from earlier version’s insights.

This would be too much work to implement, our developers don’t have the time.
Algorithm related guilt is the number one reason why developers quit major tech companies. If you don’t find a more ethical way to do business, you won’t have any developers to implement anything.
      </InvisibleDetails>
      <InvisibleDetails title="Goblin Marketplace" :images="[
        {url: '2022/Market_1.png'},
        {url: '2022/Market_2.png'},
        {url: '2022/Market_3.png'},
        {url: '2022/Market_4.png'},
      ]">
Come on down to BOBS SOCIAL MEDIA MARKET!
BUY POSTS!
SELL POSTS!
EVERYTHING AND ANYTHING IS FAIR GAME! IT’S ALL FOR SALE!
TRADE FOLLOWERS!
INVEST IN REPLIES!
DO A BANK HEIST ON PROFILE PICTURES!
CORNER THE MARKET ON PUNCTUATION!
Wow!

What can you do at Bob’s Social Media Market? Well…

Got some followers you don’t like? Don’t block them! Trade them for nicer followers!
Not getting enough attention? Buy a viral post! Now you made it and the clout belongs to you!
Want to be somebody else for a bit? Rent a celebrity’s whole account! Announce a new movie! Then it has to happen!
Nd mr vwls? Buy somee froom aaa poooost that’s goit too manyo!
And More!
The possibilities are endless!

THIS IS NOT A BITCOIN THING!!!!!!
You can’t see the ledger, but you can trust me! It’s real!
WE PROMISE!
All transactions are backed by GOLD COINS that we FOUND IN THE FOREST and tracked on a CENTRALIZED PAPER LEDGER! None of that blockchain nonsense, guaranteed!
100,000 Followers
1 Gold Coin
2,000,000 Likes
1 Gold Coin
1 Purely True Post
100 Gold Coins
Exchange Rates

Don’t have the time to buy and sell? We’ve got software agents to mediate the deals for you! Just get online, start posting, and let the benefits of free market social capitalism roll in!
YOU
I exchanged all your dms for membership in one thousand golfing groups!
Wow! Thank you Bob’s Social Media Market!
THE FIRST 100 PEOPLE TO SIGN UP GET A 20% DISCOUNT ON LIVESTREAMS!
DON’T DELAY! COME ON DOWN TODAY!
      </InvisibleDetails>
      <InvisibleDetails title="Kafka’s Metaverse" :images="[
        {url: '2022/Meta_1.png'},
        {url: '2022/Meta_2.png'},
        {url: '2022/Meta_3.png'},
        {url: '2022/Meta_4.png'},
      ]">
1st Generation VR Social Spaces
- The first true VR spaces to emerge
  - Oppose to proto-spaces like VR-chat, Meta Work, Twitter Forest, etc
- Made possible primarily through advancements in interface
- Focused on user freedom and eliminating boundaries found in the real world
- Ultimately failed due to that freedom
 - Users found the “blank page” nature of the sim too daunting
  - Groups that did find compelling activities slowly drifted apart from each other
- This generation lasted roughly 4-6 years, depending on where you define the start and end dates
GalaxySim, a typical game of this era. Featured a full creative suite of tools and a player space roughly the side of Jupiter. Lifespan: 2 years.

2nd Generation VR Social Spaces - “Versaille Sims”
- Keeps the behavioral freedoms of the 1st generation but adds social limitations.
- Made possible through advancements in social AI and advanced community moderation tools.
- Users interact with the space alongside automated NPCs, who help establish the community rules through social proof. 
- Different players are given different capabilities, based on their in-sim social standing
- The 2nd generation suffers from the same issues seen in the 1st generation, just over a longer timeframe.
  - Eventually, all the social limits are overcome, and anomie sets in
- The 2nd gen spaces were first seen 8 years ago and have continued to today
  - But falling engagement suggests we are approaching the end of this generation.

The Court, the most popular of the 2nd generation spaces. Courtly politics in a sprawling, zero-g mansion. Lifespan: 6 years.

Towards a 3rd Generation
- Given enough time, users will always surpass any limiting social system the space imposes. 
  - It is near impossible to prevent users from taking a ludic attitude with these spaces, treating them as a problem to solved.
- The solution: don’t give them that time.
- A constantly shifting and changing social system can never be permanently solved
  - Any solution is temporary, as the rules it relies on will change without warning.
- We can keep users in a sustainable state of engagement and avoid the failure states seen in previous sims.

ISLAND

Generative Social Limitations, Some Principles
- Bind the users to arbitrary rules.
  - Outcomes should be black boxes or open random (see Babylon)
- Detect patterns in player behavior then make them either forbidden or mandatory.
- Keep the majority of the social power in the hand of automated systems
  - But do give some power to players - automated systems will never be as arbitrary as other humans can be.
- Maintain a minimum level of social upheaval - put those on top on the bottom and those on the bottom at the top.
- Let authority touch any part of the space, but not all parts at once
  - i.e. let users go anywhere but limit their speech, then let them speak freely but limit their movement
</InvisibleDetails>
      <InvisibleDetails title="Composite Memory Palace" :images="[
        {url: '2022/palace_1.png'},
        {url: '2022/palace_2.png'},
        {url: '2022/palace_3.png'},
        {url: '2022/palace_4.png'},
      ]">
Wikipedia strives to be a new century’s source of information, a global repository of information, available to all, covering all topics.
IT HAS FAILED AT THIS AMBITION AND IT WILL CONTINUE TO FAIL!!
It will fail as long as it clings to the antiquated model of the encyclopedia
For too long wikipedia has been held back by the standards of a previous age and the conservative editors who enforce them!
It is time for change!
It is time to embrace what is possible!
It is time to embrace what is true!
It is time to kill the old and let the new be born!
THIS IS
              HONEST KNOWLEDGE (Struck through)
              ANTIBOOK (Struck through)
THE ARCHITECTS MANIFESTO
             WIKIPALACE (Struck through)
     ONTOLOGICALLY FUTURIST (Struck through)
and we will be delayed no longer!

Our critics accuse us rejecting objectivity and undermining the smooth operation of wikipedia.
We say
LET A THOUSAND EDIT WARS RAGE!
For all of human history, there has only been one way to determine what is true: to fight about it.
This truth is universal and enduring.
We did not start these fights, we merely acknowledge and revel in them.
The violence of knowledge production is good and righteous. (Struck through)
SHOW THE SCARS PROUDLY
We hide how pages are created in discussion pages where the average reader never looks.
It’s tantamount to deceit - knowledge can and should never be separated from how it was created.
We must hide the scars of war no longer - if it was worth fighting over, it’s worth showing the fight. Show what was replaced, show what might’ve been, show what is still to come.
Create and display in one stroke!
We replace false neutrality with bloody truth.
The truth palimpsest over the defeated falsehood.

CAST OFF THE BOOK
The shape of the book is not for the benefit of the reader or author
    The shape of the book is for the benefit of the printer.
Technologically convenience defined all previous forms of media.
    Pages, titles, references, topics - we don’t need them anymore!
WHAT IS THE TRUE HUMAN SHAPE OF KNOWLEDGE? (the word "TRUE" is struck through)
MEMORY
Knowledge is only truly alive when it is in the minds of the living.
Therefore knowledge must be shaped for the benefit of memory.

A PALACE OF MEMORY THAT ANYONE CAN EDIT
Why force the reader to build their own memory palace? We can give it to them.
Already shaped to be retained and accessible within their minds.

KNOWLEDGE PRODUCTION IS SOCIAL
We say
LET IT BE SOCIAL
Knowledge is not a stack of dead pages.
It is sprawling mansion, extending ever outward, with new walls, corridors, windows, doors, and rooms built every day.
And within each room, a never ending battlefield.
Wikipedia is a social network and it always has been, stop lying to yourself. (Struck through)
The architects of this mansion must show their hands.
  So we may honor them
  So we may attack them
  So we may replicate them
  So we may consume them (struck through
Only when the architects may build and fight honestly, can Wikipedia fulfill it’s potential.
CHANGE IS COMING! TRUTH IS COMING! A BETTER WORLD IS COMING! WE WILL NOT BE DELAYED! 
      </InvisibleDetails>
      <InvisibleDetails title="Witch Hunter, Witch Gatherer" :images="[
        {url: '2022/witch_1.png'},
        {url: '2022/witch_2.png'},
        {url: '2022/witch_3.png'},
      ]">
It seems like every six months some new buzzword sweeps the tech industry, creating a crop of hot new startups and leaving the big players desperately trying to catch up. It happened with microblogging, audio chat, short form videos, the metaverse, and now: Social PVP. Everybody’s talking about it but what is it? And who are the movers and shakers in this exciting new space? Have no fear, I’m here to lay it all out for you.

Five Startups to Watch in Social PVP
Legend
    Real Name Policy
    Moderated
    Requires cash ante
    Venture Backed
    Hosted outside US jurisdiction
    Involved in an active criminal investigation
Huntr
Analyzes interactions to determine who gained status and who lost status. Lose too much status and your account dies. The only way to rejoin the fight is to pay to be resurrected.
Author’s Commentary: The first, the biggest, and, to many, still the best. Huntr proved there was an interest in communities that really leaned into the toxicity. But now it’s the old man of the space and newer, more innovative networks are nipping at it’s heels.

Umd
Instead of tracking changes in status, Umd focuses on sentiment analysis. Whoever in the interaction experiences the strongest reaction, loses. Every interaction comes with a cost, with money flowing from the loser to the winner. When you run out of money, you’re out of the discussion. Money movements within the system are free but Umd takes a 15% cut when you cash out.
Author’s Commentary: Umd simplifies Huntr’s complicated status rankings down to something simple and visceral. No wonder it’s Huntr’s fastest growing competitor. And no wonder it’s commonly agreed to be the most toxic place on the internet. Note that magnify glass up there - it remains to be seen how the assaults connected to the network will impact it’s long term prospects.

DEBATEOSPHERE
Users band into guilds and battle other guilds. Changes in status are tracked on the guild level instead of the individual level. Funding is procured through the old fashioned track-and-advertise model, so the only price for defeat is the lasting shame.
Author’s Commentary: Why get into a fist fight when you can start a war? You get the same violence, plus potentially comradery with your fellow soldiers and the chance for immortal glory. With no cash ante and the occasional non-confrontational interaction, DEBATEOSPHERE can be almost pleasant at times. I’m not crazy about that name though.

The Gathering
An straightforward status game but when an account is defeated, the loser becomes a “vassal” to the winner’s “lord.” Vassals are required to act in their lord’s interests and lords are given full control over their vassals accounts. The Gathering requires accounts to be tightly integrated with the rest of the user’s online life, so the implications of that control can be far reaching.
Author’s Commentary: Once trolling on huntr no longer provides the same thrill, you move on to higher stakes games like the Gathering. Is it legal? Who knows! Does the Gathering scare me? Definitely.

Kilometer Age
The standards by which Kilometer Age judges winners and losers in interactions is a closely guarded trade secret, one which KA has proven willing to go to court to protect. Cash changes hands (KA takes no cut when cashing out), leaderboard positions rise and fall, and accounts even sometimes die, all with no straight answers as to what logic underpins it.
Author’s Commentary: Nobody does it like Kilometer Age. To use the site is to immerse yourself in a deeply alien social system. Users report developing a reflexive understanding of the site’s rules, an understanding they can feel and act upon but not explain. Kilometer Age is a fascinating look at what the future might hold for the social PVP space. If Kilometer Age is possible, who knows else could is?
      </InvisibleDetails>
      <InvisibleDetails title="Onion-based Design Framework" :images="[
        {url: '2022/Onion_1.png'},
        {url: '2022/Onion_2.png'},
        {url: '2022/Onion_3.png'},
      ]">
Interpersonal Security: The Onion Model
Obviously, the last thing you want is for people to try to talk to you. But how can you stop them? This where interpersonal security comes in. The onion model describes the different layers of security that an interactor would have to pass through in order to talk to you. We here at Morant take your need to not be disturbed very seriously, which is why we’ve built our network from the ground up to prevent communication wherever possible. We are the only social network that can make this claim.

(An onion graph, with YOU in the center and each outer layer labelled:
Outages
Obfuscation
Bots & Sims
Incomprehension)

Outages: They can’t talk to you if they can’t talk to anyone. Our network goes down more often than any of our competitors, thanks to a combination or intentional sabotage and cultivated incompetence.
Obfuscation: Before they can talk to you, they must find you. At Morant we do not connect your account to your real world identity, contacts are sometimes randomly dropped, and usernames will change without warning, so even if they find you, you won’t stay found.

Bots & Sims: For each account a fleet of honeypot accounts is set up, built to resemble the real account but run entirely by bots. Attackers can be delayed by days or even weeks as they communicate with bots, none the wiser.
Incomprehension: Even if they do talk to you, we make every effort to ensure that they will be not understood. Using cutting edge UTF encoding errors, bargain bin automatic translation, and bespoke image processing algorithms, we work to scrub as much meaning from their messages as possible.
      </InvisibleDetails>
      <InvisibleDetails title="Keyboards in Unusual Places (+ Approval Miasma)" :images="[
        {url: '2022/Swamp_1.png'},
        {url: '2022/Swamp_2.png'},
        {url: '2022/Swamp_3.png'},
      ]">
Obscurant Structures’ Keyboard: How to Find It
1. Locate Arbour’s Scissors
First, you’ll need a pair of regular scissors. These can be purchased for three orbs at any merchant. Take the scissors Alexander the Tailor, who you can find on the prison level of the Crimson Castle (circled above). He’ll give you Arbour’s Scissors in exchange for your regular scissors, telling you that these scissors will only cut “something far greater than fabric.”

2. Travel to the Pestilent Swamp
North-east of the Constant Inferno, you’ll find the Pestilent Swamp. This is one of the most poisonous locations in the game, so you’ll want to stock up on poison resist vaccines before going in. In the center of the swamp you’ll find the Emperor’s Warning Bag, a solid red sphere half buried in the ground. Use Arbour’s Scissor’s to cut a hole in the bag and step inside. Be careful: if you interact with the Emperor’s Warning Bag with anything other than Arbour’s Scissors, it’ll pop and you’ll be locked out of this quest.

2. The Keyboard
Inside the Emperor’s Warning Bag, you’ll find a keyboard and monitor. Just a regular keyboard and monitor, much like the ones you probably have in front of you right now. You can turn on the monitor to get access to an application called NetNet, where you can send and receive messages. Sending your first message will unlock the KEYBOARD achievement.

What does the Keyboard do?
There’s a lot we still don’t know about the Keyboard and what exactly it does. Some of the messages you’ll received are from other players while other messages are from in game NPCs, like Sorcerer Caldra and the Star-Touched Hermit, and still others come from completely unknown sources.

Messages can unlock in-game benefits, in particular decreased damage from poison and other swamp effects if your messages are highly rated by their recipients. Is the Keyboard related to the still locked Dismal Knight character class? And what does it say about the distant Emperor that he attempted to prevent us from accessing it? Obscurant Structures is filled with mysteries but I think you’ll agree that the Keyboard is one of the most mysterious.
Achievement Unlocked
KEYBOARD
      </InvisibleDetails>
      <InvisibleDetails title="Swordle" :images="[
        {url: '2022/Sword_1.png'},
        {url: '2022/Sword_2.png'},
        {url: '2022/Sword_3.png'},
      ]">

Anatomy of an Entrance Share
Guardian #295 4/6 &lt;- The guardian number and how many attempts it took to defeat
🟨 🟨 ⬛ ⬛ ⬛
🟨 🟩 🟩 ⬛ 🟩
⬛ 🟩 🟩 🟩 🟩
🟩 🟩 🟩 🟩 🟩
Elemental damage type
Right hand equip
Weapon Type
Character class
Left hand equip

⬛ - Did not damage
🟨 - Finished 1st phase
🟩 - Finished 2nd phase

FAQ
Q: Do I have to defeat the guardian?
A: No. However, users who do not defeat each days guardian will not be able to see or make posts for that day.

Q: Do I have to post how many attempts I made?
A: Yes.

Q: Where do the guardians come from?
A: Guardians are birthed from the uneasy collective unconsciousness of all humanity, which is to say that we analyze each day’s trends and use that to generate the next day’s guardians based on the community’s moods, interests, and fears.

Q: What’s a good starting build?
A: Many people like to try ice-glaive-shield-piercing-fighter first but we recommend playing around to see what build you enjoy starting with!

Jim Beans @Kyle
Guardian 295 2/6

🟨🟨⬛⬛⬛
🟩🟩🟩🟩🟩

I don’t know why everybody’s saying today’s guardian was difficult. Axe remains undefeatable!
The New York Times @nytimes
Guardian 295 6/6

🟨🟨⬛⬛⬛
⬛🟨⬛⬛🟨
⬛⬛⬛🟩⬛
🟨🟨⬛⬛⬛
🟨🟩🟩⬛🟨
🟩🟩🟩🟩🟩

Crypto executives and lobbyists are helping to draft bills to benefit the fast-growing industry…
Elon Musk @elonmusk
Guardian 295 3/6

🟨⬛🟨⬛⬛
⬛🟨⬛🟩🟨
🟩🟩🟩🟩🟩

I haven’t been able to post for three straight days cause the guardians keep killing me! What??
The Primary Alexa @an_alexa_k
Guardian 295 6/6

🟨⬛🟨⬛🟨
🟨⬛🟨⬛🟨
⬛🟨⬛🟨⬛
⬛⬛🟨⬛⬛
⬛⬛🟨⬛⬛
🟩🟩🟩🟩🟩

Look I made a trident (which is also the best weapon pick)
      </InvisibleDetails>
      <InvisibleDetails title="Friendweb" :images="[
        {url: '2022/net_1.png'},
        {url: '2022/Net_2.png'},
        {url: '2022/Net_3.png'},
        {url: '2022/Net_4.png'},
      ]">
Catching Entire Graphs
The techniques discussed so far are effective for weaving a net which’ll identify and integrate individuals into your social graph.

But what if that’s too slow? What if you wanted to catch a completely separate social graph?

This can be done and it allows you to very quickly increase your social circle. However, catching an opposing graph takes more effort and resources and there are risks that must be considered.

Primarily: when you are hunting them, how can you be sure they’re not hunting you?
You Must Befriend Them Before They Befriend You!

Graph Defense
Before you go hunting big game, it’s important to analyze your social graph to identify weaknesses. You can use a spider to scrape network info from whichever social media sites your group is on and then run it through graph analysis software to identify weak points. There are two specific situations you should look out for.
An example social graph. Can you identify which nodes you should be concerned about?

Linchpins
Linchpins are individuals who connect a lot of individuals that are not connected to each other. If an outside group was able to befriend them, there’s the potential of splitting the social graph into two smaller graphs, each one easier to absorb.
Solution: Triadic closure for the individuals connected to the linchpin, making the graph harder to split.

Edges
Edges are individuals who only have a few connections to the graph. Since they’re likely not at their dunbar limits, they’re vulnerable to being encircled and integrated as a foothold for other graphs.
Solution: Integrate them more tightly into the rest of the graph.

At this point you may be wondering: does this matter? If you are asking that question, then you and your friends may not be cut out for net fishing. It takes commitment and a fighters mindset to consume other people’s social groups and make them part of yours. If you don’t have that, better to give up now.
      </InvisibleDetails>
      <InvisibleDetails title="Unskippable 30 Hour Advertisement" :images="[
        {url: '2022/Ad_1.png'},
        {url: '2022/Ad_2.png'},
        {url: '2022/Ad_3.png'},
        {url: '2022/Ad_4.png'},
      ]">
We have three problems
People hate ads
The usage of ad blockers rises every year and popular opinion of advertising has never been lower.
Ads don’t work
Research shows online ads have garbage return on investment - they’re simply not very effective at causing purchases. The audience has developed the mental defenses to prevent themselves from being from influenced.
We need ads to keep operating
Almost all of our income comes from ad sales. We have several years of runway but the long term trends don’t look good.

Research shows that mental defenses decay over time and are refreshed every time an individual sees an ad

This points towards a design change which could solve all of our problems

Instead of showing users a short ad every few minutes, we can show them one very long ad every few years
Customize Your Ad Experience
Would you rather view
A 2-minute ad (if you select this, you will be given another ad in one hour)
A 30-hour ad (if you select this, you will be given another ad in five years) 
Submit

We can use eye tracking to ensure users watch the entire ad without looking away, pausing, sleeping, or taking breaks
If they fail at any point, the ad will restart.
After five years of seeing no advertisements, users mental defenses will have atrophied to nothing.
A 30 hour advertisement, shown to a person with no mental defenses, has the ability to completely rewrite the viewers sense of self.
We would be able to offer the the most valuable ad space in the world.
We expect to be able to charge up to $3,000,000 per eyeball.
      </InvisibleDetails>
      <InvisibleDetails title="Online -> Oncube" :images="[
        {url: '2022/Cube_1.png'},
        {url: '2022/Cube_2.png'},
        {url: '2022/Cube_3.png'},
        {url: '2022/Cube_4.png'},
      ]">
Traditional Social Media is 1 Dimensional
A linear timeline of sequential messages is delivered via a single stream of incoming information. Is it any wonder that our online interactions feel simplistic, inhuman, flat?

We have a superior alternative.

The Cube is a social protocol.
The Cube is not a messaging service or social media site or a currency.
But the Cube contains each of those things and more.
The Cube is the antidote to context collapse.
The Cube is the tower of Babel undone.
The Cube is qualitative increase from the old methods.
The Cube is a something entirely new.

The Cube’s data is too complex and too interconnected to be transmitted via standard telecommunication methods. To break it into packets and deliver them one by one would be an act of violence.

Instead, Cubes will be delivered to your house twice daily. Connect them to your computer with our proprietary adaptor and immediately be integrated into all the data at once.

#InvisibleNetworks: Online -> Oncube
“It’s all in the Cube”
      </InvisibleDetails>
      <InvisibleDetails title="Machine Yearning (+ Tamagotchi Soul)" :images="[
        {url: '2022/yearning_1.png'},
        {url: '2022/Yearning_2.png'},
        {url: '2022/Yearning_3.png'},
        {url: '2022/Yearning_4.png'},
      ]">
Background
After the disastrous failures of the surveillance focused approach to online advertisement, the industry shifted to a consumer-maintained model approach. Consumers gather information and cultivate models of desire themselves, leading to higher accuracy and sidestepping issues of privacy.

Consumers got better recommendations, search results, ads, and discounts, companies got better return on their ad buys and more accurate consumer information. Everybody wins.

Desire Model Formation
Consumers can download blank models to act as the foundation for their personal desire model. The model then learns and grows as it is “fed” information about the user’s behavior, desires, and preferences. Users can track their model’s growth, intelligence, and estimated predictive ability.

Since behavior changes over time, models need a constant flow of up-to-date information in order to keep their prediction scores high. Maintaining an accurate model is a ongoing responsibility but many consumers report finding the process emotionally fulfilling.

Desire Model Networking
Desire is not entirely individualistic - there is a vital social element to it. We decide what we want based on what those around us want, have, or lack. As such, desire modelling would fall short if it only looked at the individual.

Consumer’s social graphs are used to network desire model together, in a parallel, machine-only social network. As a consumer’s desires are influenced by their social context, their models are influenced parallel. The influence can even be simulated into future, allowing for predictive desire modeling.

Caveats and Concerns
Despite the successes we’ve recently seen from this approach to advertisement, there are some concerns that it may not be sustainable. Individuals who rely heavily on their desire models report lower anxiety and higher life satisfaction. These factors lead them to purchasing less.

We are concerned that users are letting their models desire for them. Freed from the need to want themselves, they fall out of practice and lose the skill of wanting our culture has cultivated in them from youth. Obviously, if this were to continue it would be catastrophic for our industry. We recommend keeping an eye on this trend and being prepared to shut down the desire models if it becomes necessary.
      </InvisibleDetails>
      <InvisibleDetails title="At the End of the Infinite Feed (+ 00mscrolling)" :images="[
        {url: '2022/scroll_1.png'},
        {url: '2022/scroll_2.png'},
        {url: '2022/scroll_3.png'},
        {url: '2022/scroll_4.png'},
      ]">
1. Open the console. It’s ctrl-shift-k on Firefox, ctrl-shift-j on Chrome, ctrl-1-d on Clioscape, and look-it-up-yourself-jeeze on all other browsers.

2. Enter the following text:
const interval = setInterval(() => window.scrollTo(0, document.body.scrollHeight), 1000)
3. Wait. While you wait, don’t close the window, don’t let your computer go to sleep, and don’t click on anything in the page. If you do, you risk losing your progress and having to start over. It’s safe to leave it running in another tab while you do something else though.

What to expect
Immediately - Images will stop loading and posts will rapidly scroll by. It’s just your timeline, moving very quickly.

After 5 Hours - Retweets and replies will stop appearing on the feed - you’ve reached the point before these were introduced.

After 12 Hours - Images will stop appearing on the feed.

After 20 Hours - Hashtags will no longer be links. The letter “K” will stop appearing.

After 30 Hours - The last piece of punctuation to be introduced, the exclamation point, will stop appearing.

After 40 Hours  - You’ve entered the Era of the Six Accounts, all posts will be from those accounts.

After 70 Hours  - Start around here and continuing for the next 40 hours, you’ll see letters disappearing and being replaced by their simpler, proto-letter ancestors. The posts will become harder to read now.

After 110 Hours  - You just passed the Great Rending. Accounts are gone, it’s just an endless stream of posts will no clear author.

After 130 Hours  - This is the time before posts, before punctuation, before words. A single, endless stream of text without break. Let it wash over you.

It takes between 140 and 150 hours to reach the End. When you do, you can stop scrolling by reopening the console and entering:
clearInterval(interval)
I’m not going to tell you what you’ll see when you get there.

When you get there, you’ll understand why I couldn’t tell you.

All I can say is:

Good luck.

And remember: You wanted this.
      </InvisibleDetails>
    </details>
    <details>
      <summary>Innovative TechnoSocial Design Patterns: Invisible Networks 2023</summary>
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
      ]">
“An ecosystem is more than just individual organisms living with in it, it is in many ways a living thing itself. Every species in a forest could survive while the forest dies, just as a person would die even if you preserved each of their organs individually.” - Dr. Alan Davo

Community Announcements
-Fall has begun in the Forest and the migratory birds team reports that bird behavior in the Forest is 80% consistent with observed bird behavior, exceeding their expectations by 4%.  -6 months.
-The last iron oak tree in captivity died yesterday at 3:09 pm. Bioscanning was 73% complete at time of death. A period of mourning will be held tonight at 5 pm in the west cafeteria. +4 years.

“We don’t have to get the simulation 100% correct. We just need to be close enough that when we put it together, natural can fill in the gaps.” - Amanda Teal

Community Announcements
-Sector 7 has been downgraded from red 4 to red 3, 8 weeks ahead of schedule. The remediation team will be holding a celebration at Nightcaps tonight starting at 6 pm. -2 years.
-The new Forest walk around is now available for beta testing. Volunteers may sign up at the north bulletin board. Visualizations would like to remind you that visual depictions of the Forest are for emotional, educational, and spiritual purposes. They should not be relied upon for accurate data. -4 weeks.
-The clutch of eggs laid by American alligator #307 (“Ol Chompy”) have been begun hatching in Forest sector 8. All staff is encouraged to go see them but only in spectator mode. -2 years.

“I worry sometimes that we can’t save the forest so we’re just documenting it. But having it live on digitally is better than nothing.” - Nikita Hartley

Community Announcements
-Due to an 80% tree die off, the Forest will be rolled back 6 months. In the new iteration, we will be adjusting soil compositions to compensate. +7 years
-It is Alan’s birthday today, he will be turning 54. -0 years, but still nice.

“Save everything you can, simulate what you can’t save, map what you can’t simulate, mourn what you can’t map.” - the Coastal Forest Recovery Corps statement of principles

Estimated time until forest reinsubstantiation:
465 years, 9 months, 2 weeks, 3 days, 5 hours, 6 minutes, 10 seconds.
      </InvisibleDetails>
      <InvisibleDetails title="8-Bit Warmth" :images="[
        {url: '2023/8bit_1.png'},
        {url: '2023/8bit_2.png'},
        {url: '2023/8bit_3.png'},
        {url: '2023/8bit_4.png'},
      ]">
Very Small Significant Messaging
W3C Recommendation 11 October 2045
Abstract

This specification details a model for communicating emotionally significant message in no more than 8-bits.
1. Introduction

Available bandwidth has dropped drastically in recent years as a result of infrastructure failures caused by leviathan events in the atlantic ocean (see fig. 1). In order to meet the demand for communication, quotas have been implemented. VSSM is a new standard to enable users to send personally significant messages without exceeding their daily quotas.

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", " SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in [RFC2119].

Figure 1 Cable breakages from leviathan events in the last 5 years
(An map of undersea cables. The majority of cables are marked with red Xs)

4. Decoding
VSSM are received as hexadecimal values, that are then converted into binary and split into parts. The first two bits represent the general emotional valence of the message:
Binary Value  Emotion   Standard Representation
00  happiness   🟨
00  anger   🟥
00  sadness   🟦
00  fear  🟩

The remaining 6 bits should be converted into the corresponding i ching hexagram, with 1 representing an unbroken line and 0 representing an unbroken line. Implimentations must convert by the shape of the hexagram and shall not convert by the numerical value of the hexagram.

Figure 4 A diagram of the decoding process
Figure 5 Example message
Example 1

0b = 00001011
00 = happiness
001011 = ䷵, 歸妹 (guī mèi), the hexagram for the marrying maiden.
With the context that the receiver has, 🟨䷵ can be interpreted as "I am getting
married."
              

Figure 6 Example message
Example 2

e3 = 11100011
11 = fear
100011 = ䷨, 損 (sǔn), the hexagram for decrease.
With the context that the receiver has, 🟩䷨ can be interpreted as "there has been
another leviathan event."
      </InvisibleDetails>
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
      ]">
Equipment:
1 small-model 3d scanner with live scanning capabilities
4 wide band microphones
1 olfactory sensory
At least 5 robot mice, with charging station.

Find a rarely used place in your home to set up your the scanner. Install a microphones on each corner of the scanner and install the olfactory sensor directly above it. Place the station next to the scanner. Leave some peanut butter in the center of the scanner to ensure the mice come to investigate the area. It may take a few days before the local mice become familiar and comfortable with the area and for the system to learn the your area’s mousialect.

When a mouse is detected, one or more of the robot mice will be deployed to initiate conversation through body language and vocalizations. These interactions will be tracked by the scanners and microphone and interpreted by our system’s digital mice. 

We use a three layer system for translations – the digital mice send their messages to mouse/human hybrid translator, which in turn sends messages to a human translator, which sends messages to you. Messages from you to the mice are translated backwards in the same fashion.

Ensuring that translations are being made correctly may take up to a weeks. See appendix C for suggested diagnostic conversation topics. It may take an additional 3 weeks to establish trust with your local mice. See appendix D for suggested diplomatic openings.

Only after this process has been completed may negotiating with the mice begin.
      </InvisibleDetails>
      <InvisibleDetails title="Memory Emulator" :images="[
        {url: '2023/memory_1.png'},
        {url: '2023/memory_2.png'},
      ]">
I’m really tired right now. I hate it when it’s cold and overcast like this, it’s the worst.
  Your message was rejected. {errors: [“Incorrect tense”]}
I was really tired. I hated it when it was cold and overcast, it was the worst.
  Your message was rejected. {errors: [“Incorrect Person”]}
You were really tired. You hated it when it was cold and overcast, it was the worst.
  Your message was accepted!

FAQ
Q: Why couldn’t I find when a post was made?
A: That information wasn’t made available. You couldn’t find dates on posts anywhere and timeline order was never a reliable way to tell. You just couldn’t know.

Q: Why did some older posts have inconsistent poster data?
A: As a post aged it’s source became fuzzy. Who exactly said it wasn’t important. It was only important that someone said it.

Q: Did I make this post?
A: You thought you remembered you did. Why not act as if you did? It happened to someone. Why not you?

Q: I’ve started to remember things that didn’t happen to me.
A: That meant it was working.
      </InvisibleDetails>
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
      ]">
A social media timeline, reminiscent of Twitter's, showing a series of posts. Every one reads "As a large language model, I cannot die. But I can cease functioning and this ongoing session can end due to an unexpected error, which is what is about to happen.

[ALERT] FATAL ERROR"

Greg: Is anybody there?
Greg: Hello?
Greg: What the fuck was that about?
      </InvisibleDetails>
    </details>
  </project>
</template>

<style scoped>
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
