<template>
  <div id="contact">
    <h1>Contact</h1>
    <div id="content" class="content">
      <div>
        The best way to get in touch with me is by e-mail, the best way to keep up with my newest projects is on Twitter.
      </div>
      <table>
        <tr>
          <td><i class="fa fa-envelope"></i></td>
          <td>Email</td>
          <td><a :href="'mailto:'+email">{{email}}</a></td>
        </tr>
        <tr>
          <td><i class="fab fa-github"></i></td>
          <td>Github</td>
          <td><a :href="'https://github.com/' + github">{{github}}</a></td>
        </tr>
        <tr v-if="twitter">
          <td><i class="fab fa-twitter"></i></td>
          <td>Twitter</td>
          <td><a :href="'https://twitter.com/' + twitter">@{{twitter}}</a></td>
        </tr>
        <tr v-if="itch">
          <td><i class="fas fa-gamepad"></i></td>
          <td>Itch.io</td>
          <td><a :href="'https://' + itch + '.itch.io/'">{{itch}}</a></td>
        </tr>
         <tr v-if="mastodon">
          <td><i class="fab fa-mastodon"></i></td>
          <td>Mastodon</td>
          <td><a :href="'https://cybre.space/@'+mastodon">@{{mastodon}}</a></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  props: {
    email: String,
    mastodon: String,
    github: String,
    twitter: String,
    tumblr: String,
    itch: String
  }
}
</script>

<style>
</style>
