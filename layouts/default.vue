<template>
  <v-app>
    <v-navigation-drawer
      :mini-variant.sync="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      stateless
      app
    >
      <v-list>
        <v-list-tile
          router
          :to="item.to"
          :key="i"
          v-for="(item, i) in items"
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app :clipped-left="clipped" height="110" class="black">
      <v-toolbar-side-icon large class="hidden-md-and-up white--text" @click="drawer = !drawer"></v-toolbar-side-icon>
      <img src="/logo.png" alt="Time Travelers" style="width:186px;height:100px;" class="ml-5">
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
      <v-btn icon class="white--text hidden-sm-and-down" href="/search/"><v-icon>search</v-icon></v-btn>
      <v-btn flat class="white--text hidden-sm-and-down" href="/">Home</v-btn>
      <v-btn flat class="white--text hidden-sm-and-down" href="/about/">About the Program</v-btn>
      <v-btn flat class="white--text hidden-sm-and-down" href="/contact/">Contact</v-btn>
      <v-btn flat class="white--text hidden-sm-and-down" href="/institutions/">Institutions</v-btn>
    </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer
    height="auto"
  >
    <v-card
      class="flex white--text"
      color="black"
      flat
      tile
    >
      <v-card-text>
      <p class="title ml-5">Time Travelers</p>
        <p class="subheading ml-5">Your passport to a variety of Membership Benefits at Historic Sites Across the U.S.</p>

        <v-spacer></v-spacer>
      </v-card-text>
      <v-card-actions class="black white--text justify-center">
        &copy;2018 — <strong>Missouri Historical Society</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        clipped: false,
        drawer: false,
        fixed: false,
        items: [
          { icon: 'apps', title: 'Home', to: '/' },
          { icon: 'apps', title: 'About the Program', to: '/about' },
          { icon: 'bubble_chart', title: 'Contact', to: '/contact' },
          { icon: 'apps', title: 'Institutions', to: '/institutions' }
        ],
        icons: [
          'fab fa-facebook',
          'fab fa-twitter',
          'fab fa-google-plus',
          'fab fa-linkedin',
          'fab fa-instagram'
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: ''
      }
    }
  }
</script>

<style lang="stylus">
.responsive {
    width: 100%;
    height: auto;
}
</style>