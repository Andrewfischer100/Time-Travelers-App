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
      :items="items"
      :search-input.sync="search"
      v-model="select"
      cache-items
      class="mx-3"
      flat
      hide-no-data
      hide-details
      label="What state are you traveling?"
      solo-inverted
    ></v-autocomplete>
    <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn>
  </v-toolbar>
    <v-card>
      {{data.length}}
      <GmapMap
            :center="{lat:38, lng:-100}"
            :zoom="4"
            map-type-id="terrain"
            style="height: 300px "
          >
            <gmap-info-window :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen=false">
              {{infoContent}}
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
          <template v-for="(item, index) in items">
            <v-subheader
              v-if="item.header"
              :key="item.header"
            >
              {{ item.header }}
            </v-subheader>

            <v-divider
              v-else-if="item.divider"
              :inset="item.inset"
              :key="index"
            ></v-divider>

            <v-list-tile
              v-else
              :key="item.title"
              avatar
              @click=""
            >
              <v-list-tile-avatar size="60" tile class="pr-3" >
                <img :src="item.avatar">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                <v-list-tile-sub-title v-html="item.address"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>
       <div class="text-xs-center mb-4 mt-3">
        <v-pagination
          v-model="page"
          :length="15"
          :total-visible="7"
        >
        </v-pagination>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
  import 'isomorphic-fetch'
  export default {
    data () {
      return {
        data: {},
        items: [
          { header: 'Participating Institutions' },
          {
            avatar: 'http://timetravelers.mohistory.org/sites/default/files/styles/mhm_blocks_rotor/public/Rogers%20historical%20society%20exterior.jpg?itok=Qa535RZX',
            title: 'ROGERS HISTORICAL MUSEUM',
            subtitle: 'Gift Shop Discount Special Event Offer',
            address: '1123 Grape St. Louis, MO 63103'
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
            subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
            title: 'Oui oui',
            subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
            title: 'Birthday gift',
            subtitle: "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?"
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
            title: 'Recipe to try',
            subtitle: "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
          }
        ],
        markers: [
          {
            position: { lat: 38, lng: -90 },
            name: 'stl',
            infoText: 'Marker 1'
          },
          {
            position: { lat: 30, lng: -110 },
            name: 'over there',
            infoText: 'Marker 2'
          },
          {
            position: { lat: 42, lng: -88 },
            name: 'over the other way',
            infoText: 'Marker 3'
          }
        ],
        icon: {url: '/location.png'},
        infoContent: 'fhggfhgfdhgfdh',
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
          'American Samoa',
          'Arizona',
          'Arkansas',
          'California',
          'Colorado',
          'Connecticut',
          'Delaware',
          'District of Columbia',
          'Federated States of Micronesia',
          'Florida',
          'Georgia',
          'Guam',
          'Hawaii',
          'Idaho',
          'Illinois',
          'Indiana',
          'Iowa',
          'Kansas',
          'Kentucky',
          'Louisiana',
          'Maine',
          'Marshall Islands',
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
          'Northern Mariana Islands',
          'Ohio',
          'Oklahoma',
          'Oregon',
          'Palau',
          'Pennsylvania',
          'Puerto Rico',
          'Rhode Island',
          'South Carolina',
          'South Dakota',
          'Tennessee',
          'Texas',
          'Utah',
          'Vermont',
          'Virgin Island',
          'Virginia',
          'Washington',
          'West Virginia',
          'Wisconsin',
          'Wyoming'
        ]
      }
    },
    watch: {
      search (val) {
        val && val !== this.select && this.querySelections(val)
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
        this.infoContent = marker.Title
        // check if its the same marker that was selected if yes toggle
        if (this.currentMidx === idx) {
          this.infoWinOpen = !this.infoWinOpen
        } else {
          this.infoWinOpen = true
          this.currentMidx = idx
        }
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
            console.log(self.data)
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    }
  }
</script>
