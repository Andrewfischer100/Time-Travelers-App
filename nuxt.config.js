
const axios = require('axios')

module.exports = {
  debug: true,
  /*
  ** Headers of the page
  */
  head: {
    title: 'Time Travelers | A membership network for 300 plus historical museums, sites, and societies throughout the United States',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'Time Travelers is a free reciprocal membership network for 300 plus historical museums, sites, and societies throughout the United States. The Missouri Historical Society created the program in 1998 so that members of historical institutions could receive exclusive benefits and privileges at museums and historical sites nationwide.', content: 'Currently, the Time Travelers program includes over 300 organizations in more than 40 states across the country.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
      { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' }
    ]
  },
  plugins: ['~/plugins/vuetify.js',
    '~/plugins/vue2-google-maps.js',
    '~/plugins/vue-social-sharing.js'],
  css: [
    '~/assets/style/app.styl',
    '~/assets/style/main.css'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      '~/plugins/vuetify.js', 'vue2-google-maps', 'vue-social-sharing'
    ],
    extractCSS: true,
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
        // This instructs Webpack to include `vue2-google-maps`'s Vue files
        // for server-side rendering
        config.externals = config.externals || []
        config.externals.splice(0, 0, function (context, request, callback) {
          if (/^vue2-google-maps($|\/)/.test(request)) {
            callback(null, false)
          } else {
            callback()
          }
        })
      }
    }
  },
  /*
  generate: {
    routes: function (callback) {
      axios.get('https://csv.mohistory.org/json/institutions')
        .then((res) => {
          console.log(res)
          var routes = res.data.id((institution) => {
            return '/institutions/' + institution.id
          })
          callback(null, routes)
        })
        .catch(callback)
    }
  },
  */
  generate: {
    routes: function (callback) {
      axios.get('https://csv.mohistory.org/json/institutions')
        .then((res) => {
          var routes = res.data.data.map((place) => {
            return '/institutions/' + place.id
          })
          callback(null, routes)
        })
        .catch(callback)
    }
  }
}
