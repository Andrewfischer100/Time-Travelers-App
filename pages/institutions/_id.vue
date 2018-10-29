<template>
  <v-layout row>
    <v-flex xs12 sm10 offset-sm1>
      <v-card>

          <v-layout
            column
            fill-height
          >
          <v-carousel hide-delimiters v-if="data.Image_Full.length > 1">
            <v-carousel-item
              v-for="(item,i) in data.Image_Full"
              :key="i"
              :src="item"
              reverse-transition="fade"
              transition="fade"
              height="200"
            >
            </v-carousel-item>
          </v-carousel>
          <v-carousel hide-controls hide-delimiters v-if="data.Image_Full.length === 1">
            <v-carousel-item
              :src="data.Image_Full[0]"
              reverse-transition="fade"
              transition="fade"
              height="200"
              next-icon="false"
              prev-icon="false"
            >
            </v-carousel-item>
          </v-carousel>
            <v-spacer></v-spacer>
            <v-card-title class="black--text text-xs-center">
              <div class="title font-weight-black">{{data.Title}}</div>
            </v-card-title>

          </v-layout>

        <p class="pa-3" v-html="data.Body"></p>

        <v-list two-line>
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color="black">phone</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{data.Phone}}</v-list-tile-title>
              <v-list-tile-sub-title>General Questions</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-icon>chat</v-icon>
            </v-list-tile-action>
          </v-list-tile>



          </v-list-tile>

          

          <v-divider inset></v-divider>

          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color="black">web</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>Website</v-list-tile-title>
              <v-list-tile-sub-title><a :href= "data.URL">{{data.URL}}</a></v-list-tile-sub-title>

            </v-list-tile-content>
          </v-list-tile>
        </v-list>

        <!--<v-divider inset></v-divider>

          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color="black">mail</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>info@mohistory.org</v-list-tile-title>
              <v-list-tile-sub-title>Personal</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>-->



          <v-divider inset></v-divider>

          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color="black">local_activity</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>Benefits:</v-list-tile-title>
              <v-list-tile-sub-title>{{data.Benefits}}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>



          <v-divider inset></v-divider>

          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color="black">location_on</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>Address</v-list-tile-title>
              <v-list-tile-sub-title>{{data.Address_Street}}</v-list-tile-sub-title>

            </v-list-tile-content>
          </v-list-tile>
        </v-list>

        <v-divider inset></v-divider>

        
          <GmapMap
            :center="data.position"
            :zoom="7"
            map-type-id="terrain"
            style="height: 300px "
          >
            <GmapMarker
              :position="data.position"
              :clickable="true"
              :draggable="true"
              @click="center=data.position"
            />
          </GmapMap>
          <section class="container">
          <div>
            <social-sharing :url="'http://gephardt-staging.mohistory.org/institutions/'+data.id"
                      :title="data.Title"
                      quote="Your passport to a variety of Membership Benefits at Historic Sites Across the U.S"
                      hashtags="timetravelers,missourihistorymuseum,mohistory"
                      twitter-user="mohistorymuseum"
                      inline-template>
              <div>
                  <network network="email">
                      <i class="fa fa-envelope fa-2x pr-3"></i>
                  </network>
                  <network network="sms">
                    <i class="fa fa-commenting-o fa-2x pr-3"></i>
                  </network>
                  <network network="facebook">
                    <i class="fa fa-facebook fa-2x pr-3"></i>
                  </network>
                  <network network="twitter">
                    <i class="fa fa-twitter fa-2x pr-3"></i>
                  </network>
                  <network network="pinterest">
                    <i class="fa fa-pinterest fa-2x pr-3"></i>
                  </network>
                  <network network="googleplus">
                    <i class="fa fa-google-plus fa-2x pr-3"></i>
                  </network>
                  <network network="linkedin">
                    <i class="fa fa-linkedin fa-2x pr-3"></i>
                  </network>
              </div>
            </social-sharing>
          </div>
        </section>
      </v-card>

    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    validate ({ params }) {
    // Must be a number
    //  return /^\d+$/.test(params.id)
      return true
    },
    data () {
      return {
        id: this.$route.params.id,
        data: {
          Featured: '',
          Phone: '',
          id: 1221,
          Image_Full: [
            ''
          ],
          Address_State: '',
          position: {
            lng: -90.0592706,
            lat: 38.5663871
          },
          Address_Code: '',
          Address_Street: '',
          Body: '',
          URL: '',
          Title: '',
          Benefits: '',
          Image_Thumb: [
            ''
          ],
          Post_Date: '',
          Address_Locality: ''
        },
        items: [
          {
            src: '/museum-exterior-crop.jpg'
          },
          {
            src: '/exhibit-society-crop.jpg'
          }
        ]
      }
    },
    created: function () {
      this.getPoints()
      console.log(this.data)
    },
    methods: {
      getPoints: function () {
        let path = 'http://csv.mohistory.org/json/institutions'
        let self = this
        fetch(path)
          .then(function (response) {
            return response.json()
          })
          .then(function (myJson) {
            // console.log(myJson.data)
            self.data = self.recordFilter(myJson.data)
            console.log(self.data)
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      recordFilter: function (data) {
        for (let i = 0; i < data.length; i++) {
          if (data[i].id > 1324 && data[i].id < 1328) {
            console.log(data[i].id)
            console.log(data[i].id === parseInt(this.id))
          }
          console.log(parseInt(this.id))
          if (data[i].id === parseInt(this.id)) {
            console.log('hello i do not exist')
            return data[i]
          }
        }
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
