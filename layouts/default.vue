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
      <nuxt-link :to="'/'">
      <img src="/logo.png" alt="Time Travelers" style="width:186px;height:100px;" class="ml-5">
      </nuxt-link>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
      <!-- 
        <nuxt-link :to="'/search/'">
          <v-btn icon class="white--text hidden-sm-and-down"><v-icon>search</v-icon></v-btn>
        </nuxt-link>
        -->
      <v-btn flat class="white--text hidden-sm-and-down" :to="'/'" >Home</v-btn>
      <v-btn flat class="white--text hidden-sm-and-down" :to="'/about/'">About the Program</v-btn>
      <v-btn flat class="white--text hidden-sm-and-down" :to="'/contact/'">Contact</v-btn>
      <v-btn flat class="white--text hidden-sm-and-down" :to="'/institutions/'">Institutions</v-btn>
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
      <v-card-text class="text-xs-center">
        <nuxt-link :to="'/'">
        <img src="/logo.png" alt="Time Travelers" style="width:186px;height:100px;" class="ml-5">
        </nuxt-link>
        <p class="subheading">Your passport to a variety of Membership Benefits at Historic Sites Across the U.S.<br>
        <v-icon dark class="pr-2 ml-5">picture_as_pdf</v-icon><a class="subheading" href="http://images.mohistory.org/legacy/mohistory/July2017.pdf" target="_blank" type="media_type">View Participation institutions</a></p>
          <address>
            Lindell and Debaliviere in Forest Park St. Louis, MO 63112-0040.<br> 
            <a href="mailto:timetravelers@mohistory.org?Subject=Time%20Travelers" target="_top">timetravelers@mohistory.org</a><br>
            (314) 454-3100<br>
          </address>
        
      </v-card-text>
      <v-card-actions class="black white--text justify-center">&copy;2018 <strong>Missouri Historical Society</strong>
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
