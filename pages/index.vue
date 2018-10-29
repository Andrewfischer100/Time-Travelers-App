<template>
  <v-layout row>
    <v-flex xs12 sm10 offset-sm1>
      <v-card class="elevation-0" >
        <v-carousel hide-delimiters class="elevation-7">
        <nuxt-link
            :to="'/institutions/' + item.id"
            v-for="(item,i) in items"
            :key="i">
          <v-carousel-item
            :src="item.src"
          ></v-carousel-item>
          <!--
          <v-responsive v-if="item.Image_Thumb[0]">
            <img :src="item.Image_Thumb[0]" :aspect-ratio="16/9" width="90px">
          </v-responsive>
          -->
        </nuxt-link>
        </v-carousel>
        <v-card-title class="title font-weight-black">WHAT IS TIME TRAVELERS?</v-card-title>
        <v-card-text>
          <p>Time Travelers is a free reciprocal membership network for historical museums, sites, and societies throughout the United States. The Missouri Historical Society created the program in 1998 so that members of historical institutions could receive exclusive benefits and privileges at museums and historical sites nationwide.</p>
          <p>Currently, the Time Travelers program includes over 300 organizations in more than 40 states across the country. Members of these organizations can receive a variety of exclusive benefits and privileges, such as free admission, gift shop discounts, and much, much more. Time Travelers is a museum reciprocal program and if you are interested in receiving these benefits you must join one of the museums listed on this site.</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
        <section class="container">
          <div>
            <social-sharing url="http://timetravelers.mohistory.org/"
                      title="Time Travelers | Membership network for historical museums, sites, and societies throughout the United States"
                      description="The Missouri Historical Society created the program in 1998 so that members of historical institutions could receive exclusive benefits and privileges at museums and historical sites nationwide. Currently, the Time Travelers program includes over 300 organizations in more than 40 states across the country. "
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


    </v-flex>
  </v-layout>
</template>

<script>
  import 'isomorphic-fetch'
  export default {
    data () {
      return {
        items: [
          {
            src: '/museum-exterior-crop.jpg',
            id: 1219
          }
        ],
        name: 'jim',
        data: {}
      }
    },
    head () {
      return {
        title: `Page 1 (${this.name}-side)`,
        meta: [
          { hid: 'description', name: 'description', content: 'Page 1 description' }
        ]
      }
    },
    created: function () {
      this.getPoints()
    },
    methods: {
      filterByFeatured: function (bigList) {
        let smallList = []
        for (let i = 0; i < bigList.length; i++) {
          if (bigList[i].Featured) {
            let entry = {}
            entry.src = bigList[i].Image_Full[0]
            entry.id = bigList[i].id
            smallList.push(entry)
          }
        }
        return smallList
      },
      getPoints: function () {
        let path = 'http://csv.mohistory.org/json/institutions'
        let self = this
        fetch(path)
          .then(function (response) {
            return response.json()
          })
          .then(function (myJson) {
            self.data = self.filterByFeatured(myJson.data)
            console.log(self.data)
            self.items = self.items.concat(self.data)
            console.log(self.items)
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    }
  }
</script>

<style lang="stylus">
.responsive {
    width: 100%;
    height: auto;
}
.pointer {cursor: pointer;}

material-icons:hover {
    background-color: yellow;
}
.v-carousel {
  height: 300px;
}
</style>
