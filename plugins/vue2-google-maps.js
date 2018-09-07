import Vue from 'vue'
import * as VueGoogleMaps from '~/node_modules/vue2-google-maps/src/main'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBvncPYtx3_nmDMEgtu2ZoVds0vIOLTZ6E',
    libraries: 'places'
  }
})
