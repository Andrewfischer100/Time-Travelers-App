

<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-xs-center">
      </div>
      <v-card class="elevation-0">
        <div class="mb-0 text-xs-center">  
          <img src="/museum-exterior-crop.jpg" alt="Time Travelers" class="responsive elevation-7">
          </div>
        <v-card-title class="title font-weight-black">WHAT IS TIME TRAVELERS?</v-card-title>
        <v-card-text>
          <p>Time Travelers is a free reciprocal membership network for historical museums, sites, and societies throughout the United States. The Missouri Historical Society created the program in 1998 so that members of historical institutions could receive exclusive benefits and privileges at museums and historical sites nationwide.</p>
          <p>Currently, the Time Travelers program includes over 300 organizations in more than 40 states across the country. Members of these organizations can receive a variety of exclusive benefits and privileges, such as free admission, gift shop discounts, and much, much more. Time Travelers is a museum reciprocal program and if you are interested in receiving these benefits you must join one of the museums listed on this site.</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<style lang="stylus">
.responsive {
    width: 100%;
    height: auto;
}
</style>

<!-- webcomponent and custom framwork -->
<!-- 
<template>
<div id="formio"></div>

</templete>

<script type="text/javascript">
  window.onload = function () {
    Formio.createForm(document.getElementById('formio'), 'https://mhs.form.io/conacttt')
  }
</script>

-->

<!-- end webcomponent and custom framwork -->


<!-- Stand Alone Forms -->
<!-- 
<templete>
<iframe id="formio-form-5b885bb19deba7285326e2b8" style="width:100%;border:none;" height="600px" src="https://formview.io/#/mhs/conacttt?iframe=1&header=0"></iframe>

</template>

<script type='text/javascript'>
    (function a (d, w, u) {
      var h = d.getElementsByTagName('head')[0]
      var s = d.createElement('script')
      s.type = 'text/javascript'
      s.src = 'https://portal.form.io/lib/seamless/seamless.parent.min.js'
      s.onload = function b () {
        var f = d.getElementById('formio-form-5b885bb19deba7285326e2b8')
        if (!f || (typeof w.seamless === u)) {
          return setTimeout(b, 100)
        }
        w.seamless(f, {
          fallback: false
        }).receive(function (d, e) {})
      }
      h.appendChild(s)
    })(document, window)
</script>
-->

<!-- End Stand Alone Forms framework -->


<!-- Vue JS portal framework-->
<!-- 

<template>
  <formio :src="formUrl" v-on:submit="onSubmitMethod" />
</template>
<script>
import { Formio } from 'vue-formio'

export default {
  data: function () {
    // Load these from vuex or some other state store system.
    return {
      formUrl: 'https://mhs.form.io/conacttt'
    }
  },
  components: {
    formio: Formio
  },
  methods: {
    onSubmitMethod: function (submission) {
      console.log(submission)
    }
  }
}
</script>

-->
<!-- Vue JS portal framework-->



<!-- Vue JS github framework-->
<!-- 
<template>

  <div id="app">
    <formio src="" url="https://mhs.form.io/donation" form="" submission="" options="" v-on:submit=""></formio>
  </div> 
</template>
-->

<!-- 
<script>
  import { Form } from 'vue-formio'
  export default {
    name: 'app',
    components: { formio: Form }
  }
</script>

-->

<!-- Vue JS github framework-->