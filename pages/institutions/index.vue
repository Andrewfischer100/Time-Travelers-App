<template>
  <v-layout row>
    <v-flex xs12 sm10 offset-sm1>
    <v-toolbar
    dark
    color="black"
  >
    <v-toolbar-title>State selection</v-toolbar-title>
    <v-autocomplete
      :loading="loading"
      :items="states"
      :search-input.sync="search"
      v-model="select"
      cache-items
      class="mx-3"
      flat
      hide-no-data
      hide-details
      label="Where are you traveling?"
      solo-inverted
      autofocus
    ></v-autocomplete>
    <!--<v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn>-->
    <v-btn icon v-if="select">
      <v-icon @click="clearSearch()">clear</v-icon>
    </v-btn>
  </v-toolbar>
    <v-card>
      <GmapMap
            :center="center"
            :zoom="zoom"
            map-type-id="terrain"
            style="height: 300px "
          >
            <gmap-info-window :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen=false">
              <h4><nuxt-link :to="'/institutions/' + infoContent.id">{{infoContent.Title}}</nuxt-link></h4>
              <p>{{infoContent.Address_Street}}</p>
              <p>{{infoContent.Benefits}}</p>
              <p><a :href="infoContent.URL">{{infoContent.URL}}</a></p>
            </gmap-info-window>
            <GmapMarker
              :key="index"
              v-for="(m, index) in data"
              :position="m.position"
              :clickable="true"
              :draggable="false"
              @click="toggleInfoWindow(m,index)"
              :title="m.Title"
              :icon.sync="icon"
            />
          </GmapMap>

        <v-list three-line>
          <v-subheader>
            Participating Institutions: {{data.length || 0}} found.  {{select}}
          </v-subheader>
          <template v-for="(item, index) in data">


            <!--<v-divider
              v-else-if="item.divider"
              :inset="item.inset"
              :key="index"
            ></v-divider>-->
            <v-divider></v-divider>

            <v-list-tile
              :key="item.id"
              @click=""
              wrap

            >
              <nuxt-link :to="'/institutions/' + item.id">
              <v-responsive v-if="item.Image_Thumb[0]">
                <img :src="item.Image_Thumb[0]" :aspect-ratio="16/9" width="90px">
              </v-responsive>
              </nuxt-link>

              <v-list-tile-content  class="pl-3">
                <nuxt-link :to="'/institutions/' + item.id">
                  <v-list-tile-title v-html="item.Title"></v-list-tile-title>
                </nuxt-link>
                <v-list-tile-sub-title v-html="item.Address_Street"></v-list-tile-sub-title>
                <a :href="item.URL"><v-list-tile-sub-title v-html="item.URL"></v-list-tile-sub-title></a>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>
       <!--<div class="text-xs-center mb-4 mt-3">
        <v-pagination
          v-model="page"
          :length="15"
          :total-visible="7"
        >
        </v-pagination>
      </div>-->
    </v-flex>
  </v-layout>
</template>

<script>
  import 'isomorphic-fetch'
  export default {
    data () {
      return {
        data: {},
        fullData: {},
        zoom: 4,
        icon: {url: '/location.png'},
        infoContent: {
          id: 1354,
          Address_Street: '200 South Second Street Clarksville, TN 37040',
          Benefits: 'placeholder',
          URL: 'http://www.customshousemuseum.org',
          Title: 'Customs House Museum & Cultural Center'
        },
        infoWindowPos: { lat: 30, lng: -110 },
        infoWinOpen: false,
        infoOptions: {
          pixelOffset: {
            width: 0,
            height: -35
          }
        },
        page: 1,
        loading: false,
        search: null,
        select: null,
        states: [
          'Alabama',
          'Alaska',
          'Arizona',
          'Arkansas',
          'California',
          'Colorado',
          'Connecticut',
          'Delaware',
          'District of Columbia',
          'Florida',
          'Georgia',
          'Hawaii',
          'Idaho',
          'Illinois',
          'Indiana',
          'Iowa',
          'Kansas',
          'Kentucky',
          'Louisiana',
          'Maine',
          'Maryland',
          'Massachusetts',
          'Michigan',
          'Minnesota',
          'Mississippi',
          'Missouri',
          'Montana',
          'Nebraska',
          'Nevada',
          'New Hampshire',
          'New Jersey',
          'New Mexico',
          'New York',
          'North Carolina',
          'North Dakota',
          'Ohio',
          'Oklahoma',
          'Oregon',
          'Pennsylvania',
          'Puerto Rico',
          'Rhode Island',
          'South Carolina',
          'South Dakota',
          'Tennessee',
          'Texas',
          'Utah',
          'Vermont',
          'Virginia',
          'Washington',
          'West Virginia',
          'Wisconsin',
          'Wyoming'
        ],
        center: {lat: 38, lng: -100},
        stateCenters: {
          'Alabama': {lat: 32.806671, lng: -86.791130},
          'Alaska': {lat: 61.37071, lng: -152.404419},
          'Arizona': {lat: 33.72975, lng: -111.431221},
          'Arkansas': {lat: 34.96970, lng: -92.373123},
          'California': {lat: 36.11620, lng: -119.681564},
          'Colorado': {lat: 39.05981, lng: -105.311104},
          'Connecticut': {lat: 41.59778, lng: -72.755371},
          'Delaware': {lat: 39.31852, lng: -75.507141},
          'District of Columbia': {lat: 38.89743, lng: -77.026817},
          'Florida': {lat: 27.76627, lng: -81.686783},
          'Georgia': {lat: 33.04061, lng: -83.643074},
          'Hawaii': {lat: 21.09431, lng: -157.498337},
          'Idaho': {lat: 44.24045, lng: -114.478828},
          'Illinois': {lat: 40.34945, lng: -88.986137},
          'Indiana': {lat: 39.84942, lng: -86.258278},
          'Iowa': {lat: 42.01153, lng: -93.210526},
          'Kansas': {lat: 38.52660, lng: -96.726486},
          'Kentucky': {lat: 37.66814, lng: -84.670067},
          'Louisiana': {lat: 31.16954, lng: -91.867805},
          'Maine': {lat: 44.69394, lng: -69.381927},
          'Maryland': {lat: 39.06394, lng: -76.802101},
          'Massachusetts': {lat: 42.23017, lng: -71.530106},
          'Michigan': {lat: 43.32661, lng: -84.536095},
          'Minnesota': {lat: 45.69445, lng: -93.900192},
          'Mississippi': {lat: 32.74164, lng: -89.678696},
          'Missouri': {lat: 38.45608, lng: -92.288368},
          'Montana': {lat: 46.92192, lng: -110.454353},
          'Nebraska': {lat: 41.12537, lng: -98.268082},
          'Nevada': {lat: 38.31351, lng: -117.055374},
          'New Hampshire': {lat: 43.45249, lng: -71.563896},
          'New Jersey': {lat: 40.29890, lng: -74.521011},
          'New Mexico': {lat: 34.84051, lng: -106.248482},
          'New York': {lat: 42.16572, lng: -74.948051},
          'North Carolina': {lat: 35.63006, lng: -79.806419},
          'North Dakota': {lat: 47.52891, lng: -99.784012},
          'Ohio': {lat: 40.38878, lng: -82.764915},
          'Oklahoma': {lat: 35.56534, lng: -96.928917},
          'Oregon': {lat: 44.57202, lng: -122.070938},
          'Pennsylvania': {lat: 40.59075, lng: -77.209755},
          'Rhode Island': {lat: 41.68089, lng: -71.511780},
          'South Carolina': {lat: 33.85689, lng: -80.945007},
          'South Dakota': {lat: 44.29978, lng: -99.438828},
          'Tennessee': {lat: 35.74784, lng: -86.692345},
          'Texas': {lat: 31.05448, lng: -97.563461},
          'Utah': {lat: 40.15003, lng: -111.862434},
          'Vermont': {lat: 44.04587, lng: -72.710686},
          'Virginia': {lat: 37.76933, lng: -78.169968},
          'Washington': {lat: 47.40090, lng: -121.490494},
          'West Virginia': {lat: 38.49122, lng: -80.954453},
          'Wisconsin': {lat: 44.26854, lng: -89.616508},
          'Wyoming': {lat: 42.75596, lng: -107.302490}
        },
        mapStyle: {
          styles:
            [
              {
                'featureType': 'administrative',
                'elementType': 'all',
                'stylers': [
                  {
                    'saturation': '-100'
                  }
                ]
              },
              {
                'featureType': 'administrative.province',
                'elementType': 'all',
                'stylers': [
                  {
                    'visibility': 'on'
                  },
                  {
                    'saturation': 100
                  }
                ]
              },
              {
                'featureType': 'landscape',
                'elementType': 'all',
                'stylers': [
                  {
                    'saturation': -100
                  },
                  {
                    'lightness': 65
                  },
                  {
                    'visibility': 'on'
                  }
                ]
              },
              {
                'featureType': 'poi',
                'elementType': 'all',
                'stylers': [
                  {
                    'saturation': -100
                  },
                  {
                    'lightness': '50'
                  },
                  {
                    'visibility': 'simplified'
                  }
                ]
              },
              {
                'featureType': 'road',
                'elementType': 'all',
                'stylers': [
                  {
                    'saturation': '-100'
                  }
                ]
              },
              {
                'featureType': 'road.highway',
                'elementType': 'all',
                'stylers': [
                  {
                    'visibility': 'simplified'
                  }
                ]
              },
              {
                'featureType': 'road.arterial',
                'elementType': 'all',
                'stylers': [
                  {
                    'lightness': '30'
                  }
                ]
              },
              {
                'featureType': 'road.local',
                'elementType': 'all',
                'stylers': [
                  {
                    'lightness': '40'
                  }
                ]
              },
              {
                'featureType': 'transit',
                'elementType': 'all',
                'stylers': [
                  {
                    'saturation': -100
                  },
                  {
                    'visibility': 'simplified'
                  }
                ]
              },
              {
                'featureType': 'water',
                'elementType': 'geometry',
                'stylers': [
                  {
                    'hue': '#ffff00'
                  },
                  {
                    'lightness': -25
                  },
                  {
                    'saturation': -97
                  }
                ]
              },
              {
                'featureType': 'water',
                'elementType': 'labels',
                'stylers': [
                  {
                    'lightness': -25
                  },
                  {
                    'saturation': -100
                  }
                ]
              }
            ]
        }
      }
    },
    watch: {
      search (val) {
        val && val !== this.select && this.querySelections(val)
      },
      select: function (val) {
        if (this.states.includes(val)) {
          this.filterData()
        }
      }
    },
    created: function () {
      this.getPoints()
    },
    methods: {
      querySelections (v) {
        this.loading = true
        // Simulated ajax query
        setTimeout(() => {
          this.items = this.states.filter(e => {
            return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
          })
          this.loading = false
        }, 500)
      },
      toggleInfoWindow: function (marker, idx) {
        this.infoWindowPos = marker.position
        this.infoContent = marker
        // check if its the same marker that was selected if yes toggle
        if (this.currentMidx === idx) {
          this.infoWinOpen = !this.infoWinOpen
        } else {
          this.infoWinOpen = true
          this.currentMidx = idx
        }
      },
      filterData: function () {
        let self = this
        console.log(this.select)
        self.data = []
        for (let i = 0; i < self.fullData.length; i++) {
          if (self.fullData[i].Address_State === self.select) {
            self.data.push(self.fullData[i])
          }
        }
        this.center = this.stateCenters[this.select]
        this.zoom = 5
      },
      getPoints: function () {
        let path = 'http://csv.mohistory.org/json/institutions'
        let self = this
        fetch(path)
          .then(function (response) {
            return response.json()
          })
          .then(function (myJson) {
            self.data = myJson.data
            self.fullData = myJson.data
            console.log(self.data)
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      clearSearch: function () {
        this.select = null
        this.center = { lat: 38, lng: -100 }
        this.zoom = 4
        this.data = this.fullData
      }
    }
  }
</script>

<style>
  .water {background-color:red;}
</style>
