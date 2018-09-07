<template>
  <v-layout row>
    <v-flex xs12 sm10 offset-sm1>
      <v-card>
      
          <v-layout
            column
            fill-height
          >
          <v-carousel hide-delimiters>
            <v-carousel-item
              v-for="(item,i) in items"
              :key="i"
              :src="item.src"
              reverse-transition="fade"
              transition="fade"
              height="300"
            >
            </v-carousel-item>
          </v-carousel>
            <v-spacer></v-spacer>
            <v-card-title class="black--text text-xs-center">
              <div class="title font-weight-black">Missouri History Museum</div>
            </v-card-title>

          </v-layout>
          
        <p class="pa-3">
          The Missouri Historical Society was founded in 1866. Founding members created the organization “for the purpose of saving from oblivion the early history of the city and state.” Today, the Missouri Historical Society operates in two buildings: the Missouri History Museum at Lindell and DeBaliviere in Forest Park, and the Library and Research Center at 225 South Skinker, across from Forest Park. Both facilities are free and open to the public.</p>
          <p class="pl-3 pr-3 pb-3">The museum offers a variety of exhibits including 'Seeking St. Louis'. St. Louis is a fascinating city representing more than 250 years of dreams, ideas and efforts. This exhibit tells this engaging story. Visitors will explore the past and its impact upon the present and the future. Two galleries, 'Currents' and 'Reflections', tell the story of the St. Louis region through state-of-the-art displays and interactive exhibitions featuring thousands of artifacts.</p>
          <p class="pl-3 pr-3">The Museum offers exhibitions and events, including theatrical performances; concerts; family festivals; special events; workshops; presentations and more.</p>

        <v-list two-line>
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color="black">phone</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>(314) 746-4599</v-list-tile-title>
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
              <v-icon color="black">mail</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>info@mohistory.org</v-list-tile-title>
              <v-list-tile-sub-title>Personal</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          

          <v-divider inset></v-divider>

          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color="black">local_activity</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>Benefits:</v-list-tile-title>
              <v-list-tile-sub-title>Gift Shop Discount</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          

          <v-divider inset></v-divider>

          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color="black">location_on</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>1400 Main Street</v-list-tile-title>
              <v-list-tile-sub-title>Orlando, FL 79938</v-list-tile-sub-title>
              
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
          <GmapMap
            :center="{lat:10, lng:10}"
            :zoom="7"
            map-type-id="terrain"
            style="height: 300px "
          >
            <GmapMarker
              :key="index"
              v-for="(m, index) in markers"
              :position="m.position"
              :clickable="true"
              :draggable="true"
              @click="center=m.position"
            />
          </GmapMap>
      </v-card>
       
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: '/museum-exterior-crop.jpg'
          },
          {
            src: '/exhibit-society-crop.jpg'
          }
        ],
        markers: [
          {position: { lng: 10.2, lat: 10 }}
        ]
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