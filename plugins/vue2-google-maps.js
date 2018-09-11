import Vue from 'vue'
import * as VueGoogleMaps from '~/node_modules/vue2-google-maps/src/main'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAg3MnS8yVjk-ClkQv7kDSz8owwXoLkpeo',
    libraries: 'places'
  }
})
